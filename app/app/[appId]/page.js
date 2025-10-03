import Link from "next/link";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getAppById, getFeaturesByAppId, getFeatureVotesOverTime } from "@/lib/supabase";
import FeatureList from "@/components/FeatureList";
import FeatureVotesChart from "@/components/FeatureVotesChart";

export const dynamic = "force-dynamic";

export default async function AppDetails({ params }) {
  const { appId } = params;
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let app = null;
  let features = [];
  let chartData = [];

  try {
    app = await getAppById(appId, cookies);

    // Check if user owns this app
    if (app.user_id !== user?.id) {
      notFound();
    }

    features = await getFeaturesByAppId(appId, cookies);
    chartData = await getFeatureVotesOverTime(appId, cookies);
  } catch (error) {
    console.error("Error loading app:", error);
    notFound();
  }

  const statusCounts = {
    open: features.filter((f) => f.status === "open").length,
    planned: features.filter((f) => f.status === "planned").length,
    in_progress: features.filter((f) => f.status === "in_progress").length,
    completed: features.filter((f) => f.status === "completed").length,
  };

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-7xl mx-auto space-y-8">
        <div>
          <Link href="/dashboard" className="btn btn-ghost btn-sm mb-4">
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
            Back to Dashboard
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold">{app.app_name}</h1>
          <p className="text-base-content/60 mt-2 font-mono">{app.app_id}</p>
        </div>

        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div className="stat">
            <div className="stat-title">Total Features</div>
            <div className="stat-value">{features.length}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Open</div>
            <div className="stat-value text-base-content/60">
              {statusCounts.open}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Planned</div>
            <div className="stat-value text-info">{statusCounts.planned}</div>
          </div>

          <div className="stat">
            <div className="stat-title">In Progress</div>
            <div className="stat-value text-warning">
              {statusCounts.in_progress}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Completed</div>
            <div className="stat-value text-success">
              {statusCounts.completed}
            </div>
          </div>
        </div>

        <FeatureVotesChart data={chartData} />

        <FeatureList features={features} appId={appId} />
      </section>
    </main>
  );
}
