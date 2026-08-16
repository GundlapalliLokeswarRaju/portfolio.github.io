/* Three cards, each answering a question a hiring manager is actually asking:
   what do you build, has it survived contact with production, and can you work
   with people. Claims stay tied to the projects listed elsewhere on the site so
   nothing here is unbacked. */

export const aboutCards = [
  {
    title: '🎙️ Real-Time Voice & LLM Systems',
    body: "I'm an AI Engineer at Brolly Software Solutions, building VoxFlow — a Telugu-first voice tutor that holds a live conversation over both the browser (WebRTC) and ordinary phone calls (Plivo). The hard parts are the ones users never see: full-duplex audio with FFT-based voice activity detection, adaptive noise reduction, and RAG that keeps answers tied to real course material instead of letting the model improvise.",
  },
  {
    title: '📈 Production, Not Prototypes',
    body: 'Before this I ran my own AI automation practice, shipping a call-analytics pipeline for luxury hotel groups that transcribes 700+ calls a day with Whisper and scores sentiment with local LLMs — cutting manual call monitoring by roughly 90% and selling as a subscription product with recurring revenue. My work goes out with Docker, CI/CD, fail-closed auth, rate limiting and test coverage, because that is the difference between a demo and a system someone depends on.',
  },
  {
    title: '🤝 Ownership End to End',
    body: 'I take projects from problem framing through deployment and support — data pipelines, model selection, API design, infrastructure and monitoring. At BigEBrains I led AI project delivery and deployed two production sites on AWS. I work comfortably across a cross-functional team in Agile delivery, and I am equally comfortable being the person accountable for whether it works at 2am.',
  },
];

export const education = [
  {
    degree: 'B.Tech CSE',
    institution: 'GVR&S College of Engineering',
    grade: '7.8 CGPA',
  },
  {
    degree: 'Intermediate',
    institution: 'Sri Chaitanya Jr College',
    grade: '85%',
  },
  {
    degree: 'SSC',
    institution: 'Sri P Gopi Reddy High School',
    grade: '9.8 GPA',
  },
];
