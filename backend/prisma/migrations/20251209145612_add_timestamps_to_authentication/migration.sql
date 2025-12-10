/*
  Warnings:

  - You are about to drop the column `dead_line` on the `DeveloperJourney` table. All the data in the column will be lost.
  - You are about to drop the column `required_point` on the `DeveloperJourney` table. All the data in the column will be lost.
  - You are about to drop the column `required_xp` on the `DeveloperJourney` table. All the data in the column will be lost.
  - You are about to drop the column `avg_submission_rating` on the `DeveloperJourneyCompletion` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `DeveloperJourneyCompletion` table. All the data in the column will be lost.
  - You are about to drop the column `enrolling_times` on the `DeveloperJourneyCompletion` table. All the data in the column will be lost.
  - You are about to drop the column `enrollments_at` on the `DeveloperJourneyCompletion` table. All the data in the column will be lost.
  - You are about to drop the column `journey_id` on the `DeveloperJourneyCompletion` table. All the data in the column will be lost.
  - You are about to drop the column `last_enrolled_at` on the `DeveloperJourneyCompletion` table. All the data in the column will be lost.
  - You are about to drop the column `study_duration` on the `DeveloperJourneyCompletion` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `DeveloperJourneyCompletion` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `DeveloperJourneyCompletion` table. All the data in the column will be lost.
  - You are about to drop the column `author_id` on the `DeveloperJourneyTutorial` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `DeveloperJourneyTutorial` table. All the data in the column will be lost.
  - You are about to drop the column `developer_journey_id` on the `DeveloperJourneyTutorial` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `DeveloperJourneyTutorial` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `DeveloperJourneyTutorialQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `question_text` on the `DeveloperJourneyTutorialQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `tutorial_id` on the `DeveloperJourneyTutorialQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `DeveloperJourneyTutorialQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `ExamAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `exam_registration_id` on the `ExamAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `is_correct` on the `ExamAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `option_id` on the `ExamAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `question_id` on the `ExamAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `ExamAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `ExamRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `deadline_at` on the `ExamRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `ExamRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `exam_finished_at` on the `ExamRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `examinees_id` on the `ExamRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `tutorial_id` on the `ExamRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `ExamRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `ExamResult` table. All the data in the column will be lost.
  - You are about to drop the column `exam_registration_id` on the `ExamResult` table. All the data in the column will be lost.
  - You are about to drop the column `is_passed` on the `ExamResult` table. All the data in the column will be lost.
  - You are about to drop the column `look_report_at` on the `ExamResult` table. All the data in the column will be lost.
  - You are about to drop the column `total_questions` on the `ExamResult` table. All the data in the column will be lost.
  - You are about to drop the column `avg_exam_duration` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `avg_exam_score` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `avg_study_duration` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `avg_submission_rating` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `completion_id` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `exam_registration_id` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `exam_result_id` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `gaya_belajar` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `journey_id` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `total_active_days` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `MLPrediction` table. All the data in the column will be lost.
  - You are about to drop the column `end_time` on the `StudySession` table. All the data in the column will be lost.
  - You are about to drop the column `start_time` on the `StudySession` table. All the data in the column will be lost.
  - You are about to drop the column `tutorial_id` on the `StudySession` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `StudySession` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `TutorialOption` table. All the data in the column will be lost.
  - You are about to drop the column `is_correct` on the `TutorialOption` table. All the data in the column will be lost.
  - You are about to drop the column `option_label` on the `TutorialOption` table. All the data in the column will be lost.
  - You are about to drop the column `option_text` on the `TutorialOption` table. All the data in the column will be lost.
  - You are about to drop the column `question_id` on the `TutorialOption` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `TutorialOption` table. All the data in the column will be lost.
  - You are about to drop the column `display_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_role` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[examRegistrationId]` on the table `ExamResult` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[displayName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Authentication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Authentication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deadLine` to the `DeveloperJourney` table without a default value. This is not possible if the table is not empty.
  - Added the required column `journeyId` to the `DeveloperJourneyCompletion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `DeveloperJourneyCompletion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `DeveloperJourneyCompletion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `DeveloperJourneyTutorial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `developerJourneyId` to the `DeveloperJourneyTutorial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `DeveloperJourneyTutorial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionText` to the `DeveloperJourneyTutorialQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tutorialId` to the `DeveloperJourneyTutorialQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `DeveloperJourneyTutorialQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examRegistrationId` to the `ExamAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCorrect` to the `ExamAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `optionId` to the `ExamAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionId` to the `ExamAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ExamAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examineeId` to the `ExamRegistration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tutorialId` to the `ExamRegistration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ExamRegistration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examRegistrationId` to the `ExamResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPassed` to the `ExamResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalQuestions` to the `ExamResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avgExamDuration` to the `MLPrediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avgExamScore` to the `MLPrediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avgStudyDuration` to the `MLPrediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avgSubmissionRating` to the `MLPrediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gayaBelajar` to the `MLPrediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `journeyId` to the `MLPrediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalActiveDays` to the `MLPrediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MLPrediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `MLPrediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `StudySession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tutorialId` to the `StudySession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `StudySession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCorrect` to the `TutorialOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `optionLabel` to the `TutorialOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `optionText` to the `TutorialOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionId` to the `TutorialOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TutorialOption` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DeveloperJourneyCompletion" DROP CONSTRAINT "DeveloperJourneyCompletion_journey_id_fkey";

-- DropForeignKey
ALTER TABLE "DeveloperJourneyCompletion" DROP CONSTRAINT "DeveloperJourneyCompletion_user_id_fkey";

-- DropForeignKey
ALTER TABLE "DeveloperJourneyTutorial" DROP CONSTRAINT "DeveloperJourneyTutorial_author_id_fkey";

-- DropForeignKey
ALTER TABLE "DeveloperJourneyTutorial" DROP CONSTRAINT "DeveloperJourneyTutorial_developer_journey_id_fkey";

-- DropForeignKey
ALTER TABLE "DeveloperJourneyTutorialQuestion" DROP CONSTRAINT "DeveloperJourneyTutorialQuestion_tutorial_id_fkey";

-- DropForeignKey
ALTER TABLE "ExamAnswer" DROP CONSTRAINT "ExamAnswer_exam_registration_id_fkey";

-- DropForeignKey
ALTER TABLE "ExamAnswer" DROP CONSTRAINT "ExamAnswer_option_id_fkey";

-- DropForeignKey
ALTER TABLE "ExamAnswer" DROP CONSTRAINT "ExamAnswer_question_id_fkey";

-- DropForeignKey
ALTER TABLE "ExamRegistration" DROP CONSTRAINT "ExamRegistration_examinees_id_fkey";

-- DropForeignKey
ALTER TABLE "ExamRegistration" DROP CONSTRAINT "ExamRegistration_tutorial_id_fkey";

-- DropForeignKey
ALTER TABLE "ExamResult" DROP CONSTRAINT "ExamResult_exam_registration_id_fkey";

-- DropForeignKey
ALTER TABLE "MLPrediction" DROP CONSTRAINT "MLPrediction_completion_id_fkey";

-- DropForeignKey
ALTER TABLE "MLPrediction" DROP CONSTRAINT "MLPrediction_exam_registration_id_fkey";

-- DropForeignKey
ALTER TABLE "MLPrediction" DROP CONSTRAINT "MLPrediction_exam_result_id_fkey";

-- DropForeignKey
ALTER TABLE "MLPrediction" DROP CONSTRAINT "MLPrediction_journey_id_fkey";

-- DropForeignKey
ALTER TABLE "MLPrediction" DROP CONSTRAINT "MLPrediction_user_id_fkey";

-- DropForeignKey
ALTER TABLE "StudySession" DROP CONSTRAINT "StudySession_tutorial_id_fkey";

-- DropForeignKey
ALTER TABLE "StudySession" DROP CONSTRAINT "StudySession_user_id_fkey";

-- DropForeignKey
ALTER TABLE "TutorialOption" DROP CONSTRAINT "TutorialOption_question_id_fkey";

-- DropIndex
DROP INDEX "ExamResult_exam_registration_id_key";

-- DropIndex
DROP INDEX "StudySession_tutorial_id_idx";

-- DropIndex
DROP INDEX "StudySession_user_id_idx";

-- DropIndex
DROP INDEX "User_display_name_key";

-- AlterTable
ALTER TABLE "Authentication" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "DeveloperJourney" DROP COLUMN "dead_line",
DROP COLUMN "required_point",
DROP COLUMN "required_xp",
ADD COLUMN     "deadLine" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "requiredPoint" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "requiredXp" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "DeveloperJourneyCompletion" DROP COLUMN "avg_submission_rating",
DROP COLUMN "created_at",
DROP COLUMN "enrolling_times",
DROP COLUMN "enrollments_at",
DROP COLUMN "journey_id",
DROP COLUMN "last_enrolled_at",
DROP COLUMN "study_duration",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "avgSubmissionRating" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "enrollingTimes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "enrollmentsAt" TIMESTAMP(3),
ADD COLUMN     "journeyId" INTEGER NOT NULL,
ADD COLUMN     "lastEnrolledAt" TIMESTAMP(3),
ADD COLUMN     "studyDuration" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "DeveloperJourneyTutorial" DROP COLUMN "author_id",
DROP COLUMN "created_at",
DROP COLUMN "developer_journey_id",
DROP COLUMN "updated_at",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "developerJourneyId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "DeveloperJourneyTutorialQuestion" DROP COLUMN "created_at",
DROP COLUMN "question_text",
DROP COLUMN "tutorial_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "questionText" TEXT NOT NULL,
ADD COLUMN     "tutorialId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ExamAnswer" DROP COLUMN "created_at",
DROP COLUMN "exam_registration_id",
DROP COLUMN "is_correct",
DROP COLUMN "option_id",
DROP COLUMN "question_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "examRegistrationId" INTEGER NOT NULL,
ADD COLUMN     "isCorrect" BOOLEAN NOT NULL,
ADD COLUMN     "optionId" INTEGER NOT NULL,
ADD COLUMN     "questionId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ExamRegistration" DROP COLUMN "created_at",
DROP COLUMN "deadline_at",
DROP COLUMN "deleted_at",
DROP COLUMN "exam_finished_at",
DROP COLUMN "examinees_id",
DROP COLUMN "tutorial_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deadlineAt" TIMESTAMP(3),
ADD COLUMN     "examFinishedAt" TIMESTAMP(3),
ADD COLUMN     "examineeId" INTEGER NOT NULL,
ADD COLUMN     "tutorialId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ExamResult" DROP COLUMN "created_at",
DROP COLUMN "exam_registration_id",
DROP COLUMN "is_passed",
DROP COLUMN "look_report_at",
DROP COLUMN "total_questions",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "examRegistrationId" INTEGER NOT NULL,
ADD COLUMN     "isPassed" BOOLEAN NOT NULL,
ADD COLUMN     "lookReportAt" TIMESTAMP(3),
ADD COLUMN     "totalQuestions" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "MLPrediction" DROP COLUMN "avg_exam_duration",
DROP COLUMN "avg_exam_score",
DROP COLUMN "avg_study_duration",
DROP COLUMN "avg_submission_rating",
DROP COLUMN "completion_id",
DROP COLUMN "created_at",
DROP COLUMN "exam_registration_id",
DROP COLUMN "exam_result_id",
DROP COLUMN "gaya_belajar",
DROP COLUMN "journey_id",
DROP COLUMN "total_active_days",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "avgExamDuration" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "avgExamScore" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "avgStudyDuration" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "avgSubmissionRating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "completionId" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "examRegistrationId" INTEGER,
ADD COLUMN     "examResultId" INTEGER,
ADD COLUMN     "gayaBelajar" TEXT NOT NULL,
ADD COLUMN     "journeyId" INTEGER NOT NULL,
ADD COLUMN     "totalActiveDays" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "StudySession" DROP COLUMN "end_time",
DROP COLUMN "start_time",
DROP COLUMN "tutorial_id",
DROP COLUMN "user_id",
ADD COLUMN     "endTime" TIMESTAMP(3),
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tutorialId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TutorialOption" DROP COLUMN "created_at",
DROP COLUMN "is_correct",
DROP COLUMN "option_label",
DROP COLUMN "option_text",
DROP COLUMN "question_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isCorrect" BOOLEAN NOT NULL,
ADD COLUMN     "optionLabel" TEXT NOT NULL,
ADD COLUMN     "optionText" TEXT NOT NULL,
ADD COLUMN     "questionId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "display_name",
DROP COLUMN "user_role",
ADD COLUMN     "displayName" TEXT NOT NULL DEFAULT 'unknown',
ADD COLUMN     "userRole" INTEGER NOT NULL DEFAULT 2;

-- CreateIndex
CREATE UNIQUE INDEX "ExamResult_examRegistrationId_key" ON "ExamResult"("examRegistrationId");

-- CreateIndex
CREATE INDEX "StudySession_tutorialId_idx" ON "StudySession"("tutorialId");

-- CreateIndex
CREATE INDEX "StudySession_userId_idx" ON "StudySession"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_displayName_key" ON "User"("displayName");

-- AddForeignKey
ALTER TABLE "Authentication" ADD CONSTRAINT "Authentication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeveloperJourneyTutorial" ADD CONSTRAINT "DeveloperJourneyTutorial_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeveloperJourneyTutorial" ADD CONSTRAINT "DeveloperJourneyTutorial_developerJourneyId_fkey" FOREIGN KEY ("developerJourneyId") REFERENCES "DeveloperJourney"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeveloperJourneyTutorialQuestion" ADD CONSTRAINT "DeveloperJourneyTutorialQuestion_tutorialId_fkey" FOREIGN KEY ("tutorialId") REFERENCES "DeveloperJourneyTutorial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TutorialOption" ADD CONSTRAINT "TutorialOption_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "DeveloperJourneyTutorialQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamRegistration" ADD CONSTRAINT "ExamRegistration_examineeId_fkey" FOREIGN KEY ("examineeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamRegistration" ADD CONSTRAINT "ExamRegistration_tutorialId_fkey" FOREIGN KEY ("tutorialId") REFERENCES "DeveloperJourneyTutorial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswer" ADD CONSTRAINT "ExamAnswer_examRegistrationId_fkey" FOREIGN KEY ("examRegistrationId") REFERENCES "ExamRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswer" ADD CONSTRAINT "ExamAnswer_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "TutorialOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswer" ADD CONSTRAINT "ExamAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "DeveloperJourneyTutorialQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamResult" ADD CONSTRAINT "ExamResult_examRegistrationId_fkey" FOREIGN KEY ("examRegistrationId") REFERENCES "ExamRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeveloperJourneyCompletion" ADD CONSTRAINT "DeveloperJourneyCompletion_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "DeveloperJourney"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeveloperJourneyCompletion" ADD CONSTRAINT "DeveloperJourneyCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MLPrediction" ADD CONSTRAINT "MLPrediction_completionId_fkey" FOREIGN KEY ("completionId") REFERENCES "DeveloperJourneyCompletion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MLPrediction" ADD CONSTRAINT "MLPrediction_examRegistrationId_fkey" FOREIGN KEY ("examRegistrationId") REFERENCES "ExamRegistration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MLPrediction" ADD CONSTRAINT "MLPrediction_examResultId_fkey" FOREIGN KEY ("examResultId") REFERENCES "ExamResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MLPrediction" ADD CONSTRAINT "MLPrediction_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "DeveloperJourney"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MLPrediction" ADD CONSTRAINT "MLPrediction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudySession" ADD CONSTRAINT "StudySession_tutorialId_fkey" FOREIGN KEY ("tutorialId") REFERENCES "DeveloperJourneyTutorial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudySession" ADD CONSTRAINT "StudySession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
