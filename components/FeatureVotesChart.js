"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  votes: {
    label: "Feature Votes",
    color: "#10b981",
  },
}

export default function FeatureVotesChart({ data }) {
  // Transform data to chart format
  const chartData = data || [
    { month: "Jan", votes: 186 },
    { month: "Feb", votes: 305 },
    { month: "Mar", votes: 237 },
    { month: "Apr", votes: 273 },
    { month: "May", votes: 209 },
    { month: "Jun", votes: 314 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Votes</CardTitle>
        <CardDescription>
          Total votes over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[150px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
              top: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke="#9ca3af"
              padding={{ left: 0, right: 0 }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillVotes" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#10b981"
                  stopOpacity={0.6}
                />
                <stop
                  offset="50%"
                  stopColor="#06b6d4"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="#3b82f6"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="votes"
              type="monotone"
              fill="url(#fillVotes)"
              fillOpacity={1}
              stroke="#10b981"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
