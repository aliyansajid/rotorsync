/*
  Warnings:

  - You are about to drop the column `trailerId` on the `bms_sensors` table. All the data in the column will be lost.
  - You are about to drop the column `trailerId` on the `mopeka_sensors` table. All the data in the column will be lost.
  - You are about to drop the column `helicopterId` on the `raspi_sensors` table. All the data in the column will be lost.
  - You are about to drop the column `trailerId` on the `raspi_sensors` table. All the data in the column will be lost.
  - You are about to drop the column `helicopterId` on the `tilt_sensors` table. All the data in the column will be lost.
  - You are about to drop the column `trailerId` on the `tilt_sensors` table. All the data in the column will be lost.
  - Added the required column `serialNumberId` to the `bms_sensors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialNumberId` to the `mopeka_sensors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialNumberId` to the `raspi_sensors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialNumberId` to the `tilt_sensors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."bms_sensors" DROP COLUMN "trailerId",
ADD COLUMN     "serialNumberId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."mopeka_sensors" DROP COLUMN "trailerId",
ADD COLUMN     "serialNumberId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."raspi_sensors" DROP COLUMN "helicopterId",
DROP COLUMN "trailerId",
ADD COLUMN     "serialNumberId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."tilt_sensors" DROP COLUMN "helicopterId",
DROP COLUMN "trailerId",
ADD COLUMN     "serialNumberId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "serialNumberId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_serialNumberId_fkey" FOREIGN KEY ("serialNumberId") REFERENCES "public"."serial_numbers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."mopeka_sensors" ADD CONSTRAINT "mopeka_sensors_serialNumberId_fkey" FOREIGN KEY ("serialNumberId") REFERENCES "public"."serial_numbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bms_sensors" ADD CONSTRAINT "bms_sensors_serialNumberId_fkey" FOREIGN KEY ("serialNumberId") REFERENCES "public"."serial_numbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."raspi_sensors" ADD CONSTRAINT "raspi_sensors_serialNumberId_fkey" FOREIGN KEY ("serialNumberId") REFERENCES "public"."serial_numbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tilt_sensors" ADD CONSTRAINT "tilt_sensors_serialNumberId_fkey" FOREIGN KEY ("serialNumberId") REFERENCES "public"."serial_numbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
