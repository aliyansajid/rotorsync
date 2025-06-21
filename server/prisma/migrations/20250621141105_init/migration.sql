-- CreateEnum
CREATE TYPE "Medium" AS ENUM ('AIR', 'PROPANE', 'FRESH_WATER', 'WASTE_WATER', 'LIVE_WELL', 'BLACK_WATER', 'RAW_WATER', 'GASOLINE', 'DIESEL', 'OIL', 'LNG', 'HYDRAULIC_OIL');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CREW', 'PILOT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CREW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trailer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trailer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MopekaSensor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sensorId" TEXT NOT NULL,
    "mqttTopic" TEXT NOT NULL,
    "trailerId" TEXT NOT NULL,
    "threshold" INTEGER NOT NULL,
    "tankSize" DOUBLE PRECISION NOT NULL,
    "tankSizeGal" DOUBLE PRECISION NOT NULL,
    "heightOffset" DOUBLE PRECISION NOT NULL,
    "medium" "Medium" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MopekaSensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "mqttTopic" TEXT NOT NULL,
    "trailerId" TEXT NOT NULL,
    "threshold" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MopekaReading" (
    "id" TEXT NOT NULL,
    "mopekaSensorId" TEXT NOT NULL,
    "battery_raw" INTEGER NOT NULL,
    "battery_voltage" DOUBLE PRECISION NOT NULL,
    "battery_percentage" DOUBLE PRECISION NOT NULL,
    "temp_raw" INTEGER NOT NULL,
    "temp_celsius" DOUBLE PRECISION NOT NULL,
    "temp_fahrenheit" DOUBLE PRECISION NOT NULL,
    "tank_level_raw" INTEGER NOT NULL,
    "tank_level_mm_non_compensated" DOUBLE PRECISION NOT NULL,
    "tank_level_in_non_compensated" DOUBLE PRECISION NOT NULL,
    "tank_level_mm_compensated" DOUBLE PRECISION NOT NULL,
    "tank_level_in_compensated" DOUBLE PRECISION NOT NULL,
    "accelerometer_x" DOUBLE PRECISION NOT NULL,
    "accelerometer_y" DOUBLE PRECISION NOT NULL,
    "angle" DOUBLE PRECISION NOT NULL,
    "reading_quality" INTEGER NOT NULL,
    "gallons" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MopekaReading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BmsReading" (
    "id" TEXT NOT NULL,
    "bmsId" TEXT NOT NULL,
    "total_voltage" DOUBLE PRECISION NOT NULL,
    "current" DOUBLE PRECISION NOT NULL,
    "power" DOUBLE PRECISION NOT NULL,
    "charging_power" DOUBLE PRECISION NOT NULL,
    "discharging_power" DOUBLE PRECISION NOT NULL,
    "capacity_remaining" DOUBLE PRECISION NOT NULL,
    "nominal_capacity" DOUBLE PRECISION NOT NULL,
    "charging_cycles" INTEGER NOT NULL,
    "state_of_charge" INTEGER NOT NULL,
    "battery_strings" INTEGER NOT NULL,
    "software_version" DOUBLE PRECISION NOT NULL,
    "balancing" BOOLEAN NOT NULL,
    "balancer_status_bitmask" INTEGER NOT NULL,
    "errors_bitmask" INTEGER NOT NULL,
    "operation_status_bitmask" INTEGER NOT NULL,
    "charging" BOOLEAN NOT NULL,
    "discharging" BOOLEAN NOT NULL,
    "errors" TEXT,
    "operation_status" TEXT,
    "temperature_sensors" INTEGER NOT NULL,
    "temperature_1" DOUBLE PRECISION,
    "temperature_2" DOUBLE PRECISION,
    "min_cell_voltage" DOUBLE PRECISION NOT NULL,
    "max_cell_voltage" DOUBLE PRECISION NOT NULL,
    "min_voltage_cell" INTEGER NOT NULL,
    "max_voltage_cell" INTEGER NOT NULL,
    "delta_cell_voltage" DOUBLE PRECISION NOT NULL,
    "average_cell_voltage" DOUBLE PRECISION NOT NULL,
    "cell_voltage_1" DOUBLE PRECISION,
    "cell_voltage_2" DOUBLE PRECISION,
    "cell_voltage_3" DOUBLE PRECISION,
    "cell_voltage_4" DOUBLE PRECISION,
    "device_model" TEXT,
    "short_circuit_error_count" INTEGER NOT NULL,
    "charge_overcurrent_error_count" INTEGER NOT NULL,
    "discharge_overcurrent_error_count" INTEGER NOT NULL,
    "cell_overvoltage_error_count" INTEGER NOT NULL,
    "cell_undervoltage_error_count" INTEGER NOT NULL,
    "charge_overtemperature_error_count" INTEGER NOT NULL,
    "charge_undertemperature_error_count" INTEGER NOT NULL,
    "discharge_overtemperature_error_count" INTEGER NOT NULL,
    "discharge_undertemperature_error_count" INTEGER NOT NULL,
    "battery_overvoltage_error_count" INTEGER NOT NULL,
    "battery_undervoltage_error_count" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BmsReading_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Trailer_serialNumber_key" ON "Trailer"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "MopekaSensor_sensorId_key" ON "MopekaSensor"("sensorId");

-- CreateIndex
CREATE UNIQUE INDEX "Bms_deviceName_key" ON "Bms"("deviceName");

-- AddForeignKey
ALTER TABLE "MopekaSensor" ADD CONSTRAINT "MopekaSensor_trailerId_fkey" FOREIGN KEY ("trailerId") REFERENCES "Trailer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bms" ADD CONSTRAINT "Bms_trailerId_fkey" FOREIGN KEY ("trailerId") REFERENCES "Trailer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MopekaReading" ADD CONSTRAINT "MopekaReading_mopekaSensorId_fkey" FOREIGN KEY ("mopekaSensorId") REFERENCES "MopekaSensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BmsReading" ADD CONSTRAINT "BmsReading_bmsId_fkey" FOREIGN KEY ("bmsId") REFERENCES "Bms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
