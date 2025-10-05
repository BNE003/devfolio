import ButtonAccount from "@/components/ButtonAccount";
import DeleteAppButton from "@/components/DeleteAppButton";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getUserApps, getAppStats } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let apps = [];
  let appsWithStats = [];

  try {
    apps = await getUserApps(user.id, cookies);

    // Fetch stats for each app
    appsWithStats = await Promise.all(
      apps.map(async (app) => {
        const stats = await getAppStats(app.app_id, cookies);
        return { ...app, stats };
      })
    );
  } catch (error) {
    console.error("Error loading apps:", error);
  }

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="btn btn-ghost btn-sm mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold">Your Apps</h1>
            <p className="text-base-content/60 mt-2">
              Manage your feature requests and feedback
            </p>
          </div>
          <ButtonAccount />
        </div>

        <div className="flex gap-3 flex-wrap">
          <Link
            href="/app/new"
            className="btn btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
            New App
          </Link>
          <Link
            href="/blog/voteflow-tutorial"
            className="btn btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
            </svg>
            Integration Guide
          </Link>
        </div>

        {appsWithStats.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-base-content/60">
              No apps yet. Create your first app to get started!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appsWithStats.map((app) => (
              <div key={app.id} className="card bg-base-200 transition-colors">
                <div className="card-body">
                  <div className="flex items-start justify-between">
                    <Link href={`/app/${app.app_id}`} className="flex-1 cursor-pointer hover:opacity-80">
                      <h2 className="card-title">{app.app_name}</h2>
                      <p className="text-sm text-base-content/60 font-mono">
                        {app.app_id}
                      </p>
                    </Link>
                    <DeleteAppButton
                      appId={app.app_id}
                      appName={app.app_name}
                      featuresCount={app.stats?.total_features}
                    />
                  </div>

                  <div className="divider my-2"></div>

                  <Link href={`/app/${app.app_id}`} className="cursor-pointer">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-bold">
                          {app.stats?.total_features || 0}
                        </p>
                        <p className="text-xs text-base-content/60">Features</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">
                          {app.stats?.total_votes || 0}
                        </p>
                        <p className="text-xs text-base-content/60">Votes</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">
                          {app.stats?.total_comments || 0}
                        </p>
                        <p className="text-xs text-base-content/60">Comments</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">
                          {app.stats?.in_progress || 0}
                        </p>
                        <p className="text-xs text-base-content/60">In Progress</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <div className="badge badge-ghost badge-sm">
                        {app.stats?.open || 0} open
                      </div>
                      <div className="badge badge-info badge-sm">
                        {app.stats?.planned || 0} planned
                      </div>
                      <div className="badge badge-success badge-sm">
                        {app.stats?.completed || 0} done
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
