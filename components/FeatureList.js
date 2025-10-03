"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";
import toast from "react-hot-toast";

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

export default function FeatureList({ features: initialFeatures, appId }) {
  const router = useRouter();
  const supabase = getSupabaseClient();
  const [filter, setFilter] = useState("all");
  const [updatingId, setUpdatingId] = useState(null);

  const filteredFeatures =
    filter === "all"
      ? initialFeatures
      : initialFeatures.filter((f) => f.status === filter);

  const handleStatusChange = async (featureId, newStatus) => {
    setUpdatingId(featureId);

    try {
      const { error } = await supabase
        .from("features")
        .update({ status: newStatus })
        .eq("id", featureId);

      if (error) throw error;

      toast.success("Status updated!");
      router.refresh();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button
          className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-ghost"}`}
          onClick={() => setFilter("all")}
        >
          All ({initialFeatures.length})
        </button>
        <button
          className={`btn btn-sm ${filter === "open" ? "btn-primary" : "btn-ghost"}`}
          onClick={() => setFilter("open")}
        >
          Open ({initialFeatures.filter((f) => f.status === "open").length})
        </button>
        <button
          className={`btn btn-sm ${filter === "planned" ? "btn-primary" : "btn-ghost"}`}
          onClick={() => setFilter("planned")}
        >
          Planned ({initialFeatures.filter((f) => f.status === "planned").length})
        </button>
        <button
          className={`btn btn-sm ${filter === "in_progress" ? "btn-primary" : "btn-ghost"}`}
          onClick={() => setFilter("in_progress")}
        >
          In Progress (
          {initialFeatures.filter((f) => f.status === "in_progress").length})
        </button>
        <button
          className={`btn btn-sm ${filter === "completed" ? "btn-primary" : "btn-ghost"}`}
          onClick={() => setFilter("completed")}
        >
          Completed (
          {initialFeatures.filter((f) => f.status === "completed").length})
        </button>
      </div>

      {filteredFeatures.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-base-content/60">
            No features found. Features will appear here when users submit them via
            the iOS SDK.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFeatures.map((feature) => {
            const statusConfig = STATUS_CONFIG[feature.status];

            return (
              <div
                key={feature.id}
                className={`card ${statusConfig.bgColor} shadow-sm`}
              >
                <div className="card-body">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="card-title text-lg">{feature.title}</h3>
                      <p className="text-base-content/70 mt-2">
                        {feature.description}
                      </p>

                      <div className="flex gap-4 mt-4 text-sm text-base-content/60">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
                          </svg>
                          {feature.votes_count}
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
                          {feature.comments?.[0]?.count || 0}
                        </div>
                        <div>
                          {new Date(feature.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <select
                        className={`select select-sm select-bordered ${statusConfig.color}`}
                        value={feature.status}
                        onChange={(e) =>
                          handleStatusChange(feature.id, e.target.value)
                        }
                        disabled={updatingId === feature.id}
                      >
                        <option value="open">Open</option>
                        <option value="planned">Planned</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>

                      {updatingId === feature.id && (
                        <span className="loading loading-spinner loading-xs"></span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
