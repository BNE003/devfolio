import ButtonAccount from "@/components/ButtonAccount";
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
            <h1 className="text-3xl md:text-4xl font-extrabold">Your Apps</h1>
            <p className="text-base-content/60 mt-2">
              Manage your feature requests and feedback
            </p>
          </div>
          <ButtonAccount />
        </div>

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

        {appsWithStats.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-base-content/60">
              No apps yet. Create your first app to get started!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appsWithStats.map((app) => (
              <Link
                key={app.id}
                href={`/app/${app.app_id}`}
                className="card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer"
              >
                <div className="card-body">
                  <h2 className="card-title">{app.app_name}</h2>
                  <p className="text-sm text-base-content/60 font-mono">
                    {app.app_id}
                  </p>

                  <div className="divider my-2"></div>

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
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
