import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// Client-side Supabase helper
export const getSupabaseClient = () => {
  return createClientComponentClient();
};

// Server-side Supabase helper (must be called with cookies from next/headers)
export const getSupabaseServer = (cookies) => {
  return createServerComponentClient({ cookies });
};

// ============================================================================
// APPS
// ============================================================================

export async function getUserApps(userId, cookies) {
  const supabase = getSupabaseServer(cookies);

  const { data, error } = await supabase
    .from('apps')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function createApp(appData, cookies) {
  const supabase = getSupabaseServer(cookies);

  const { data, error } = await supabase
    .from('apps')
    .insert([appData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getAppById(appId, cookies) {
  const supabase = getSupabaseServer(cookies);

  const { data, error } = await supabase
    .from('apps')
    .select('id, app_id, app_name, user_id, description, created_at, updated_at')
    .eq('app_id', appId)
    .single();

  if (error) throw error;
  return data;
}

// ============================================================================
// FEATURES
// ============================================================================

export async function getFeaturesByAppId(appId, cookies) {
  const supabase = getSupabaseServer(cookies);

  const { data, error } = await supabase
    .from('features')
    .select(`
      *,
      comments:comments(count)
    `)
    .eq('app_id', appId)
    .order('votes_count', { ascending: false });

  if (error) throw error;
  return data;
}

export async function updateFeatureStatus(featureId, status, cookies) {
  const supabase = getSupabaseServer(cookies);

  const { data, error } = await supabase
    .from('features')
    .update({ status })
    .eq('id', featureId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// ============================================================================
// STATS
// ============================================================================

export async function getAppStats(appId, cookies) {
  const supabase = getSupabaseServer(cookies);

  // Get features with status counts
  const { data: features, error: featuresError } = await supabase
    .from('features')
    .select('id, status, votes_count')
    .eq('app_id', appId);

  if (featuresError) throw featuresError;

  // Get total comments count
  const { count: commentsCount, error: commentsError } = await supabase
    .from('comments')
    .select('*', { count: 'exact', head: true })
    .in('feature_id', features.map(f => f.id));

  if (commentsError) throw commentsError;

  // Calculate stats
  const stats = {
    total_features: features.length,
    open: features.filter(f => f.status === 'open').length,
    planned: features.filter(f => f.status === 'planned').length,
    in_progress: features.filter(f => f.status === 'in_progress').length,
    completed: features.filter(f => f.status === 'completed').length,
    total_votes: features.reduce((sum, f) => sum + (f.votes_count || 0), 0),
    total_comments: commentsCount || 0,
  };

  return stats;
}
