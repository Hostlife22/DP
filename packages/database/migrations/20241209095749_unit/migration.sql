/*
  Warnings:

  - The values [Metric,Imperial] on the enum `UnitTypeEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UnitTypeEnum_new" AS ENUM ('Driver', 'Dispatcher');
ALTER TABLE "UnitType" ALTER COLUMN "name" TYPE "UnitTypeEnum_new" USING ("name"::text::"UnitTypeEnum_new");
ALTER TYPE "UnitTypeEnum" RENAME TO "UnitTypeEnum_old";
ALTER TYPE "UnitTypeEnum_new" RENAME TO "UnitTypeEnum";
DROP TYPE "UnitTypeEnum_old";
COMMIT;
