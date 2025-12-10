const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Hapus data lama
  await prisma.examAnswer.deleteMany();
  await prisma.examResult.deleteMany();
  await prisma.examRegistration.deleteMany();
  await prisma.tutorialOption.deleteMany();
  await prisma.developerJourneyTutorialQuestion.deleteMany();
  await prisma.developerJourneyTutorial.deleteMany();
  await prisma.developerJourneyCompletion.deleteMany();
  await prisma.developerJourney.deleteMany();
  await prisma.user.deleteMany();
  await prisma.authentication.deleteMany();

  // Hash password
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create Users
  const users = [];
  for (let i = 1; i <= 10; i++) {
    const user = await prisma.user.create({
      data: {
        display_name: `user${i}`,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        password: hashedPassword,
        phone: `0812345678${i}`,
        user_role: i === 1 ? 1 : 2,
      },
    });
    users.push(user);
    console.log(`Created user: ${user.name}`);
  }

  // Create Developer Journeys
  const journeys = [];
  const journeyTitles = [
    'Full-Stack Web Development',
    'Mobile App Development',
    'Data Science Fundamentals',
    'Cloud Computing Basics',
    'DevOps Practices',
    'UI/UX Design Principles',
    'Machine Learning Introduction',
    'Cybersecurity Essentials',
    'Blockchain Basics',
    'Game Development'
  ];

  for (let i = 0; i < 10; i++) {
    const journey = await prisma.developerJourney.create({
      data: {
        name: journeyTitles[i],
        summary: `Learn ${journeyTitles[i].toLowerCase()} with hands-on projects and real-world examples.`,
        point: Math.floor(Math.random() * 100) + 50,
        required_point: 100,
        xp: Math.floor(Math.random() * 1000) + 500,
        required_xp: 1000,
        status: 1,
        listed: 1,
        dead_line: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });
    journeys.push(journey);
    console.log(`Created journey: ${journey.name}`);
  }

  // Create Tutorials untuk setiap journey
  const tutorials = [];
  for (const journey of journeys) {
    for (let i = 1; i <= 3; i++) {
      const tutorial = await prisma.developerJourneyTutorial.create({
        data: {
          developer_journey_id: journey.id,
          title: `${journey.name} - Module ${i}`,
          position: i,
          status: 'published',
          author_id: users[0].id,
        },
      });
      tutorials.push(tutorial);
      console.log(`Created tutorial: ${tutorial.title}`);

      // Create Questions untuk setiap tutorial
      for (let q = 1; q <= 5; q++) {
        const question = await prisma.developerJourneyTutorialQuestion.create({
          data: {
            tutorial_id: tutorial.id,
            question_text: `Question ${q} for ${tutorial.title}?`,
            position: q,
          },
        });

        // Create Options untuk setiap question
        const options = ['A', 'B', 'C', 'D'];
        for (let o = 0; o < 4; o++) {
          await prisma.tutorialOption.create({
            data: {
              question_id: question.id,
              option_label: options[o],
              option_text: `Option ${options[o]} for question ${q}`,
              is_correct: o === 0,
            },
          });
        }
      }
    }
  }

  // Create Completions - FIX: Simpan ke array untuk digunakan nanti
  const completions = [];
  for (const user of users.slice(0, 5)) {
    for (const journey of journeys.slice(0, 3)) {
      const completion = await prisma.developerJourneyCompletion.create({
        data: {
          user_id: user.id,
          journey_id: journey.id,
          enrolling_times: 1,
          enrollments_at: new Date(),
          last_enrolled_at: new Date(),
          study_duration: Math.floor(Math.random() * 300) + 60,
          avg_submission_rating: Math.random() * 5,
        },
      });
      completions.push(completion); // SEKARANG VARIABLE DIGUNAKAN!
      console.log(`Created completion for user ${user.id} on journey ${journey.id}`);
    }
  }

  // Create Exam Registrations dan Results
  const examRegistrations = [];
  const examResults = [];
  
  for (let i = 0; i < 20; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    const tutorial = tutorials[Math.floor(Math.random() * tutorials.length)];

    const examRegistration = await prisma.examRegistration.create({
      data: {
        tutorial_id: tutorial.id,
        examinees_id: user.id,
        status: 'completed',
        deadline_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        exam_finished_at: new Date(),
      },
    });
    examRegistrations.push(examRegistration);

    // Create Exam Result
    const examResult = await prisma.examResult.create({
      data: {
        exam_registration_id: examRegistration.id,
        total_questions: 5,
        score: Math.random() * 100,
        is_passed: Math.random() > 0.3,
        created_at: new Date(),
      },
    });
    examResults.push(examResult);

    console.log(`Created exam registration for user ${user.id} on tutorial ${tutorial.id}`);
  }

  console.log('\n✅ Seeding completed!');
  console.log('\n Data Summary:');
  console.log(`- Users: ${users.length}`);
  console.log(`- Journeys: ${journeys.length}`);
  console.log(`- Tutorials: ${tutorials.length}`);
  console.log(`- Completions: ${completions.length}`);
  console.log(`- Exam Registrations: ${examRegistrations.length}`);
  console.log(`- Exam Results: ${examResults.length}`);
  
  console.log('\n Next: Generate ML Predictions via API');
  console.log('Run: node scripts/generate-predictions.js');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });