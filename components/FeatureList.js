"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";
import toast from "react-hot-toast";
import FeatureDetailModal from "./FeatureDetailModal";

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
  const [selectedFeature, setSelectedFeature] = useState(null);

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
    <>
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
                  className="bg-base-100 hover:bg-base-200 rounded-lg p-4 cursor-pointer transition-colors border border-base-300"
                  onClick={() => setSelectedFeature(feature)}
                >
                  <div className="flex items-start gap-4">
                    {/* Vote Count */}
                    <div className="flex flex-col items-center gap-1 min-w-[60px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-success"
                      >
                        <polygon points="12,4 20,20 4,20" />
                      </svg>
                      <span className="text-xl font-bold">{feature.votes_count}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-1">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-base-content/70 mt-1 line-clamp-2">
                            {feature.description}
                          </p>
                          <div className="flex items-center gap-1 mt-2 text-sm text-base-content/60">
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
                        </div>
                      </div>
                    </div>

                    {/* Status Dropdown */}
                    <div className="flex-shrink-0">
                      <select
                        className={`select select-sm select-bordered ${statusConfig.color}`}
                        value={feature.status}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleStatusChange(feature.id, e.target.value);
                        }}
                        onClick={(e) => e.stopPropagation()}
                        disabled={updatingId === feature.id}
                      >
                        <option value="open">Open</option>
                        <option value="planned">Planned</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                      {updatingId === feature.id && (
                        <span className="loading loading-spinner loading-xs mt-1"></span>
                      )}
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      )}
    </div>

    {selectedFeature && (
      <FeatureDetailModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    )}
    </>
  );
}
