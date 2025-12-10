const { StatusCodes } = require("http-status-codes");
const mlIntegrationService = require("../../services/ml-integration"); // Tambahkan import
const { createStudyDuration } = require("../../services/prisma/developer_journey_completions");

const create = async (req, res, next) => {
    try {
        // 1. Create completion data
        const completion = await createStudyDuration(req);
        
        // 2. Kirim response dulu agar user tidak menunggu ML processing
        res.status(StatusCodes.CREATED).json({
            data: completion,
            status: StatusCodes.CREATED,
            message: "Study duration created successfully. ML prediction will be generated in background."
        });

        // 3. Generate ML prediction di background (async, tidak blocking)
        setTimeout(async () => {
            try {
                console.log(`🔄 Auto-generating ML prediction for completion ${completion.id}`);
                await mlIntegrationService.generatePrediction(
                    completion.user_id, 
                    completion.journey_id,
                    { completionId: completion.id }
                );
                console.log(`✅ ML prediction generated for user ${completion.user_id}, journey ${completion.journey_id}`);
            } catch (mlError) {
                console.error('❌ Auto-ML generation failed:', mlError.message);
                // Tidak perlu throw error karena ini background process
            }
        }, 1000); // Tunggu 1 detik setelah response dikirim

    } catch (error) {
        next(error);
    }
};

module.exports = { create };