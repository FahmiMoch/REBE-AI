/*
  Warnings:

  - You are about to drop the `LearningAnalyticsRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LearningInsight` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LearningAnalyticsRecord" DROP CONSTRAINT "LearningAnalyticsRecord_user_id_fkey";

-- DropForeignKey
ALTER TABLE "LearningInsight" DROP CONSTRAINT "LearningInsight_record_id_fkey";

-- AlterTable
ALTER TABLE "DeveloperJourney" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- DropTable
DROP TABLE "LearningAnalyticsRecord";

-- DropTable
DROP TABLE "LearningInsight";

-- CreateTable
CREATE TABLE "MLPrediction" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "journey_id" INTEGER NOT NULL,
    "completion_id" INTEGER,
    "exam_registration_id" INTEGER,
    "exam_result_id" INTEGER,
    "total_active_days" INTEGER NOT NULL,
    "avg_study_duration" DOUBLE PRECISION NOT NULL,
    "avg_exam_duration" DOUBLE PRECISION NOT NULL,
    "avg_submission_rating" DOUBLE PRECISION NOT NULL,
    "avg_exam_score" DOUBLE PRECISION NOT NULL,
    "gaya_belajar" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "saran" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MLPrediction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudySession" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "tutorial_id" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3),
    "duration" INTEGER DEFAULT 0,

    CONSTRAINT "StudySession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StudySession_user_id_idx" ON "StudySession"("user_id");

-- CreateIndex
CREATE INDEX "StudySession_tutorial_id_idx" ON "StudySession"("tutorial_id");

-- AddForeignKey
ALTER TABLE "MLPrediction" ADD CONSTRAINT "MLPrediction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MLPrediction" ADD CONSTRAINT "MLPrediction_journey_id_fkey" FOREIGN KEY ("journey_id") REFERENCES "DeveloperJourney"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MLPrediction" ADD CONSTRAINT "MLPrediction_completion_id_fkey" FOREIGN KEY ("completion_id") REFERENCES "DeveloperJourneyCompletion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MLPrediction" ADD CONSTRAINT "MLPrediction_exam_registration_id_fkey" FOREIGN KEY ("exam_registration_id") REFERENCES "ExamRegistration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MLPrediction" ADD CONSTRAINT "MLPrediction_exam_result_id_fkey" FOREIGN KEY ("exam_result_id") REFERENCES "ExamResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudySession" ADD CONSTRAINT "StudySession_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudySession" ADD CONSTRAINT "StudySession_tutorial_id_fkey" FOREIGN KEY ("tutorial_id") REFERENCES "DeveloperJourneyTutorial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
