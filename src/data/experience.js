/* Newest role first — the timeline renders in array order. */

export const experience = [
  {
    date: 'Mar 2026 - Present',
    title: 'AI Engineer',
    company: 'Brolly Software Solutions Pvt Ltd',
    summary:
      'Building real-time conversational AI systems for regional-language learners, with an emphasis on low-latency voice pipelines, retrieval-grounded answers, and production hardening.',
    highlights: [
      '🎙️ Architecting VoxFlow, a Telugu-first AI voice agent on FastAPI and the OpenAI Realtime API',
      '📚 Engineering RAG pipelines over course material so answers are grounded in real documents',
      '🔊 Designing full-duplex audio with VAD, noise reduction, and WebRTC/telephony bridges',
      '🛡️ Hardening for production: auth, rate limiting, security headers, 90% test coverage, Docker + CI',
    ],
  },
  {
    date: 'Sep 2025 - Mar 2026',
    title: 'Freelance AI/ML Engineer',
    company: 'Independent Consultant',
    summary:
      'Delivered production AI automation for clients as an independent engineer, owning projects end to end from problem framing through deployment and ongoing support.',
    highlights: [
      '🏨 Built a voice analytics and sentiment pipeline for luxury hotel groups via Skillkoder',
      '🗣️ Automated transcription of 700+ customer service calls per day with Whisper (Large)',
      '📉 Reduced manual call monitoring effort by ~90% through LLM-based conversation analysis',
      '💼 Shipped it as a subscription-based AI product with recurring revenue',
    ],
  },
  {
    date: 'Feb 2025 - Sep 2025',
    title: 'Software Engineer',
    company: 'BigEBrains Pvt Ltd',
    summary:
      'Led AI-based project development and deployment in a dynamic startup environment. Combined technical proficiency in data science libraries with practical software engineering skills to deliver robust, scalable solutions.',
    highlights: [
      '🚀 Developed cutting-edge AI solutions using modern ML frameworks',
      '☁️ Implemented cloud deployment strategies with AWS and Docker',
      '🔄 Managed CI/CD pipelines for automated deployments',
      '👥 Collaborated with cross-functional teams in Agile environment',
    ],
  },
];
