import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Activity, Thermometer, Zap, Caravan } from "lucide-react";
import Link from "next/link";
import { RaspiTemperatureChart } from "@/components/charts/RaspiTemperatureChart";

const mockRaspiData = {
  id: "raspi-001",
  name: "Trailer 1 Sensor",
  deviceName: "trailer1-raspi",
  mqttTopic: "trailer1/raspi",
  helicopter: {
    name: "N789KB",
    serialNumber: "N789KB",
  },
  trailer: {
    name: "TRAILER4",
    serialNumber: "TRAILER 4/AUSTIN",
  },
  createdAt: new Date("2024-01-15"),

  lastSeen: new Date(),
  batteryLevel: 87,
};

interface RaspiDetailProps {
  params: {
    id: string;
  };
}

const RaspiDetail = ({ params }: RaspiDetailProps) => {
  const { id } = params;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/raspi">
          <Button variant="ghost" size="sm">
            <ArrowLeft size={16} />
            Back to Devices
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">{mockRaspiData.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Device Name</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{mockRaspiData.deviceName}</div>
            <p className="text-xs text-muted-foreground">
              MQTT: {mockRaspiData.mqttTopic}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Helicopter</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">
              {mockRaspiData.helicopter.name}
            </div>
            <p className="text-xs text-muted-foreground">
              {mockRaspiData.helicopter.serialNumber}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trailer</CardTitle>
            <Caravan className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">
              {mockRaspiData.trailer.name}
            </div>
            <p className="text-xs text-muted-foreground">
              {mockRaspiData.trailer.serialNumber}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Battery Level</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">
              {mockRaspiData.batteryLevel}%
            </div>
            <p className="text-xs text-muted-foreground">
              Last seen: {mockRaspiData.lastSeen.toLocaleTimeString()}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Historical Temperature Data</h2>
        <RaspiTemperatureChart />
      </div>
    </div>
  );
};

export default RaspiDetail;
