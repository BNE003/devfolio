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

export async function getFeatureComments(featureId, cookies) {
  const supabase = getSupabaseServer(cookies);

  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('feature_id', featureId)
    .order('created_at', { ascending: false });

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

export async function getFeatureVotesOverTime(appId, cookies) {
  const supabase = getSupabaseServer(cookies);

  // Get all features for this app with their creation dates and votes
  const { data: features, error } = await supabase
    .from('features')
    .select('created_at, votes_count')
    .eq('app_id', appId)
    .order('created_at', { ascending: true });

  if (error) throw error;

  // Group by month and sum votes
  const monthlyData = {};

  features.forEach(feature => {
    const date = new Date(feature.created_at);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const monthName = date.toLocaleDateString('en-US', { month: 'short' });

    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = {
        month: monthName,
        votes: 0,
        date: date
      };
    }

    monthlyData[monthKey].votes += feature.votes_count || 0;
  });

  // Convert to array and sort by date
  const chartData = Object.values(monthlyData)
    .sort((a, b) => a.date - b.date)
    .map(({ month, votes }) => ({ month, votes }));

  // If no data, return sample data for last 6 months
  if (chartData.length === 0) {
    const now = new Date();
    const sampleData = [];
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      sampleData.push({
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        votes: 0
      });
    }
    return sampleData;
  }

  return chartData;
}
