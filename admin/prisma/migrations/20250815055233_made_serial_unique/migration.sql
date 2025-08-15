/*
  Warnings:

  - A unique constraint covering the columns `[serialNumber]` on the table `serial_numbers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "serial_numbers_serialNumber_key" ON "public"."serial_numbers"("serialNumber");
