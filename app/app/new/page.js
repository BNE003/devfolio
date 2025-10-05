"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabase";
import toast from "react-hot-toast";

export default function NewApp() {
  const router = useRouter();
  const supabase = getSupabaseClient();
  const [appName, setAppName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [createdAppId, setCreatedAppId] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const generateAppId = (name) => {
    // Create a URL-friendly app ID from the name
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 30) + "-" + Math.random().toString(36).substring(2, 8);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!appName.trim()) {
      toast.error("Please enter an app name");
      return;
    }

    setIsLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        toast.error("You must be logged in");
        router.push("/signin");
        return;
      }

      // Check if user has access (paid user)
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("has_access")
        .eq("id", user.id)
        .single();

      if (profileError || !profile?.has_access) {
        toast.error("You need an active subscription to create apps");
        router.push("/#pricing");
        return;
      }

      const appId = generateAppId(appName);

      const { data, error } = await supabase
        .from("apps")
        .insert([
          {
            app_id: appId,
            app_name: appName.trim(),
            user_id: user.id,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      toast.success("App created successfully!");
      setCreatedAppId(appId);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error creating app:", error);
      toast.error(error.message || "Failed to create app");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">App Created Successfully!</h3>
            <div className="py-4 space-y-4">
              <p>Your app has been created with the following ID:</p>
              <div className="alert alert-info">
                <code className="font-mono text-sm break-all">{createdAppId}</code>
              </div>
              <p className="text-sm text-base-content/70">
                Use this App ID in your iOS/macOS app to integrate VoteFlow.
              </p>
            </div>
            <div className="modal-action flex-col sm:flex-row gap-2">
              <Link
                href="/blog/voteflow-tutorial"
                className="btn btn-primary"
              >
                View Integration Guide
              </Link>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  router.push("/dashboard");
                }}
                className="btn"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="min-h-screen p-8 pb-24">
        <section className="max-w-xl mx-auto space-y-8">
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

          <h1 className="text-3xl md:text-4xl font-extrabold">Create New App</h1>
          <p className="text-base-content/60 mt-2">
            Add a new app to start collecting feature requests
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">App Name</span>
            </label>
            <input
              type="text"
              placeholder="My Awesome App"
              className="input input-bordered w-full"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              disabled={isLoading}
              required
            />
            <label className="label">
              <span className="label-text-alt text-base-content/60">
                Choose a name for your app. An App ID will be generated automatically.
              </span>
            </label>
          </div>

          {appName && (
            <div className="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm">
                App ID preview: <code className="font-mono">{generateAppId(appName)}</code>
              </span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoading || !appName.trim()}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Creating...
              </>
            ) : (
              "Create App"
            )}
          </button>
        </form>
      </section>
    </main>
    </>
  );
}
