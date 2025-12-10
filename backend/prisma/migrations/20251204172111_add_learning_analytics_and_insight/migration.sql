-- CreateTable
CREATE TABLE "LearningAnalyticsRecord" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "journey_id" INTEGER,
    "tutorial_id" INTEGER,
    "question_id" INTEGER,
    "exam_registration_id" INTEGER,
    "completion_id" INTEGER,
    "total_active_days" INTEGER NOT NULL,
    "avg_study_duration" DOUBLE PRECISION NOT NULL,
    "avg_exam_duration" DOUBLE PRECISION NOT NULL,
    "avg_submission_rating" DOUBLE PRECISION NOT NULL,
    "avg_exam_score" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LearningAnalyticsRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LearningInsight" (
    "id" SERIAL NOT NULL,
    "record_id" INTEGER NOT NULL,
    "gaya_belajar" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "saran" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LearningInsight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LearningInsight_record_id_key" ON "LearningInsight"("record_id");

-- AddForeignKey
ALTER TABLE "LearningAnalyticsRecord" ADD CONSTRAINT "LearningAnalyticsRecord_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LearningInsight" ADD CONSTRAINT "LearningInsight_record_id_fkey" FOREIGN KEY ("record_id") REFERENCES "LearningAnalyticsRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
