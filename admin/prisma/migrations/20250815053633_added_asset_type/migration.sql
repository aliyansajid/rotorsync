/*
  Warnings:

  - You are about to drop the column `type` on the `serial_numbers` table. All the data in the column will be lost.
  - Added the required column `assetType` to the `serial_numbers` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."AssetType" AS ENUM ('HELICOPTER', 'TRAILER');

-- AlterTable
ALTER TABLE "public"."serial_numbers" DROP COLUMN "type",
ADD COLUMN     "assetType" "public"."AssetType" NOT NULL;
