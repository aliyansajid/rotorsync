"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Generate 10 days of daily data with large variations
const generateDailyData = () => {
  const data = [];
  const startDate = new Date("2024-08-15");

  for (let day = 0; day < 10; day++) {
    const date = new Date(startDate.getTime() + day * 24 * 60 * 60 * 1000);

    data.push({
      date: date.toISOString().split("T")[0], // Just the date part (2024-08-15)
      // CHT values with large variations (150-250°F range)
      cht1: Math.floor(Math.random() * 80) + 150,
      cht2: Math.floor(Math.random() * 80) + 160,
      cht3: Math.floor(Math.random() * 80) + 170,
      cht4: Math.floor(Math.random() * 80) + 180,
      cht5: Math.floor(Math.random() * 80) + 190,
      cht6: Math.floor(Math.random() * 80) + 200,
      // EGT values with large variations (1000-1600°F range)
      egt1: Math.floor(Math.random() * 150) + 1000,
      egt2: Math.floor(Math.random() * 150) + 1100,
      egt3: Math.floor(Math.random() * 150) + 1200,
      egt4: Math.floor(Math.random() * 150) + 1300,
      egt5: Math.floor(Math.random() * 150) + 1400,
      egt6: Math.floor(Math.random() * 150) + 1500,
    });
  }
  return data;
};

const chartData = generateDailyData();

const chartConfig = {
  views: {
    label: "Temperature Views",
  },
  chtAvg: {
    label: "CHT Average",
    color: "var(--chart-1)",
  },
  egtAvg: {
    label: "EGT Average",
    color: "var(--chart-2)",
  },
  // CHT probes
  cht1: { label: "CHT 1", color: "#1e40af" },
  cht2: { label: "CHT 2", color: "#2563eb" },
  cht3: { label: "CHT 3", color: "#3b82f6" },
  cht4: { label: "CHT 4", color: "#60a5fa" },
  cht5: { label: "CHT 5", color: "#93c5fd" },
  cht6: { label: "CHT 6", color: "#bfdbfe" },
  // EGT probes
  egt1: { label: "EGT 1", color: "#dc2626" },
  egt2: { label: "EGT 2", color: "#ef4444" },
  egt3: { label: "EGT 3", color: "#f87171" },
  egt4: { label: "EGT 4", color: "#fca5a5" },
  egt5: { label: "EGT 5", color: "#fecaca" },
  egt6: { label: "EGT 6", color: "#fee2e2" },
} satisfies ChartConfig;

export function RaspiTemperatureChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("chtAvg");

  // Calculate averages
  const total = React.useMemo(
    () => ({
      chtAvg: Math.round(
        chartData.reduce((acc, curr) => {
          const chtAvg =
            (curr.cht1 +
              curr.cht2 +
              curr.cht3 +
              curr.cht4 +
              curr.cht5 +
              curr.cht6) /
            6;
          return acc + chtAvg;
        }, 0) / chartData.length
      ),
      egtAvg: Math.round(
        chartData.reduce((acc, curr) => {
          const egtAvg =
            (curr.egt1 +
              curr.egt2 +
              curr.egt3 +
              curr.egt4 +
              curr.egt5 +
              curr.egt6) /
            6;
          return acc + egtAvg;
        }, 0) / chartData.length
      ),
    }),
    []
  );

  return (
    <Card className="py-4 sm:py-0">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
          <CardTitle>Raspi Temperature Monitoring</CardTitle>
          <CardDescription>
            Real-time temperature readings from all 12 probes
          </CardDescription>
        </div>
        <div className="flex">
          {["chtAvg", "egtAvg"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}°F
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey="cht1"
              type="monotone"
              stroke={chartConfig.cht1.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="cht2"
              type="monotone"
              stroke={chartConfig.cht2.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="cht3"
              type="monotone"
              stroke={chartConfig.cht3.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="cht4"
              type="monotone"
              stroke={chartConfig.cht4.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="cht5"
              type="monotone"
              stroke={chartConfig.cht5.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="cht6"
              type="monotone"
              stroke={chartConfig.cht6.color}
              strokeWidth={2}
              dot={false}
            />

            <Line
              dataKey="egt1"
              type="monotone"
              stroke={chartConfig.egt1.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="egt2"
              type="monotone"
              stroke={chartConfig.egt2.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="egt3"
              type="monotone"
              stroke={chartConfig.egt3.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="egt4"
              type="monotone"
              stroke={chartConfig.egt4.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="egt5"
              type="monotone"
              stroke={chartConfig.egt5.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="egt6"
              type="monotone"
              stroke={chartConfig.egt6.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
