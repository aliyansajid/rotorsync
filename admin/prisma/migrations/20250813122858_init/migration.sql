-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('ADMIN', 'PILOT', 'CREW');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "role" "public"."UserRole" NOT NULL DEFAULT 'CREW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."mopeka_sensors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sensorId" TEXT NOT NULL,
    "mqttTopic" TEXT NOT NULL,
    "mediumType" TEXT NOT NULL,
    "tankSizeGallon" DOUBLE PRECISION NOT NULL,
    "tankSizeInch" DOUBLE PRECISION NOT NULL,
    "threshold" DOUBLE PRECISION NOT NULL,
    "heightOffset" DOUBLE PRECISION NOT NULL,
    "trailerId" TEXT NOT NULL,
    "calibrationPoints" DOUBLE PRECISION[],
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mopeka_sensors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."bms_sensors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "mqttTopic" TEXT NOT NULL,
    "threshold" DOUBLE PRECISION NOT NULL,
    "trailerId" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bms_sensors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."raspi_sensors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "mqttTopic" TEXT NOT NULL,
    "helicopterId" TEXT,
    "trailerId" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "raspi_sensors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tilt_sensors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "mqttTopic" TEXT NOT NULL,
    "helicopterId" TEXT,
    "trailerId" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tilt_sensors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."serial_numbers" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "serial_numbers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."mqtt_config" (
    "id" TEXT NOT NULL,
    "basePath" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "protocol" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mqtt_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."verification_tokens" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."raspi_data" (
    "id" TEXT NOT NULL,
    "raspiId" TEXT NOT NULL,
    "cht1" DOUBLE PRECISION,
    "cht2" DOUBLE PRECISION,
    "cht3" DOUBLE PRECISION,
    "cht4" DOUBLE PRECISION,
    "cht5" DOUBLE PRECISION,
    "cht6" DOUBLE PRECISION,
    "egt1" DOUBLE PRECISION,
    "egt2" DOUBLE PRECISION,
    "egt3" DOUBLE PRECISION,
    "egt4" DOUBLE PRECISION,
    "egt5" DOUBLE PRECISION,
    "egt6" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "raspi_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tilt_data" (
    "id" TEXT NOT NULL,
    "tiltSensorId" TEXT NOT NULL,
    "accX" DOUBLE PRECISION,
    "accY" DOUBLE PRECISION,
    "accZ" DOUBLE PRECISION,
    "gyroX" DOUBLE PRECISION,
    "gyroY" DOUBLE PRECISION,
    "gyroZ" DOUBLE PRECISION,
    "magX" DOUBLE PRECISION,
    "magY" DOUBLE PRECISION,
    "magZ" DOUBLE PRECISION,
    "angleX" DOUBLE PRECISION,
    "angleY" DOUBLE PRECISION,
    "angleZ" DOUBLE PRECISION,
    "quat0" DOUBLE PRECISION,
    "quat1" DOUBLE PRECISION,
    "quat2" DOUBLE PRECISION,
    "quat3" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tilt_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."bms_data" (
    "id" TEXT NOT NULL,
    "bmsId" TEXT NOT NULL,
    "stateOfCharge" DOUBLE PRECISION,
    "totalVoltage" DOUBLE PRECISION,
    "current" DOUBLE PRECISION,
    "power" DOUBLE PRECISION,
    "remainingCapacity" DOUBLE PRECISION,
    "nominalCapacity" DOUBLE PRECISION,
    "chargingCycles" INTEGER,
    "deltaCellVoltage" DOUBLE PRECISION,
    "softwareVersion" TEXT,
    "errors" TEXT,
    "balancingActive" BOOLEAN,
    "cell1Voltage" DOUBLE PRECISION,
    "cell2Voltage" DOUBLE PRECISION,
    "cell3Voltage" DOUBLE PRECISION,
    "cell4Voltage" DOUBLE PRECISION,
    "temp1" DOUBLE PRECISION,
    "temp2" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bms_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."mopeka_data" (
    "id" TEXT NOT NULL,
    "mopekaSensorId" TEXT NOT NULL,
    "rawBattery" DOUBLE PRECISION,
    "batteryVolt" DOUBLE PRECISION,
    "batteryPercent" DOUBLE PRECISION,
    "rawTemp" DOUBLE PRECISION,
    "tempCelsius" DOUBLE PRECISION,
    "tempFahrenheit" DOUBLE PRECISION,
    "readingQuality" DOUBLE PRECISION,
    "tankLevelRaw" DOUBLE PRECISION,
    "tankLevelNonCompensatedMm" DOUBLE PRECISION,
    "tankLevelNonCompensatedIn" DOUBLE PRECISION,
    "tankLevelCompensatedMm" DOUBLE PRECISION,
    "tankLevelCompensatedInch" DOUBLE PRECISION,
    "accelX" DOUBLE PRECISION,
    "accelY" DOUBLE PRECISION,
    "angle" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mopeka_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_token_key" ON "public"."verification_tokens"("token");

-- CreateIndex
CREATE INDEX "verification_tokens_email_idx" ON "public"."verification_tokens"("email");

-- CreateIndex
CREATE INDEX "verification_tokens_token_idx" ON "public"."verification_tokens"("token");

-- AddForeignKey
ALTER TABLE "public"."mopeka_sensors" ADD CONSTRAINT "mopeka_sensors_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bms_sensors" ADD CONSTRAINT "bms_sensors_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."raspi_sensors" ADD CONSTRAINT "raspi_sensors_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tilt_sensors" ADD CONSTRAINT "tilt_sensors_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."raspi_data" ADD CONSTRAINT "raspi_data_raspiId_fkey" FOREIGN KEY ("raspiId") REFERENCES "public"."raspi_sensors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tilt_data" ADD CONSTRAINT "tilt_data_tiltSensorId_fkey" FOREIGN KEY ("tiltSensorId") REFERENCES "public"."tilt_sensors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bms_data" ADD CONSTRAINT "bms_data_bmsId_fkey" FOREIGN KEY ("bmsId") REFERENCES "public"."bms_sensors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."mopeka_data" ADD CONSTRAINT "mopeka_data_mopekaSensorId_fkey" FOREIGN KEY ("mopekaSensorId") REFERENCES "public"."mopeka_sensors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
