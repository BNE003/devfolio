"use client";

import { useEffect, useState } from "react";
import { getSupabaseClient } from "@/lib/supabase";

const STATUS_CONFIG = {
  open: { label: "Open", color: "badge-ghost", bgColor: "bg-base-300" },
  planned: { label: "Planned", color: "badge-info", bgColor: "bg-info/10" },
  in_progress: {
    label: "In Progress",
    color: "badge-warning",
    bgColor: "bg-warning/10",
  },
  completed: {
    label: "Completed",
    color: "badge-success",
    bgColor: "bg-success/10",
  },
};

export default function FeatureDetailModal({ feature, onClose }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = getSupabaseClient();

  useEffect(() => {
    loadComments();
  }, [feature.id]);

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("feature_id", feature.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error("Error loading comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const statusConfig = STATUS_CONFIG[feature.status];

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-3xl">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>

        <div className="space-y-4">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`badge ${statusConfig.color}`}>
                {statusConfig.label}
              </span>
            </div>
            <h3 className="font-bold text-2xl">{feature.title}</h3>
          </div>

          {/* Description */}
          <div className="bg-base-200 p-4 rounded-lg">
            <p className="text-base-content/80">{feature.description}</p>
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-sm text-base-content/60">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M10 3.5L3 10.5h4v6h6v-6h4L10 3.5z" />
              </svg>
              {feature.votes_count} votes
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              {comments.length} comments
            </div>
            <div>{new Date(feature.created_at).toLocaleDateString()}</div>
          </div>

          <div className="divider"></div>

          {/* Comments Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Comments</h4>

            {loading ? (
              <div className="flex justify-center py-8">
                <span className="loading loading-spinner loading-md"></span>
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center py-8 text-base-content/60">
                No comments yet
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-base-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-8">
                          <span className="text-xs">
                            {comment.author_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          {comment.author_name}
                        </p>
                        <p className="text-xs text-base-content/60">
                          {new Date(comment.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-base-content/80">{comment.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}
