/* Newest role first — the timeline renders in array order.

   Bullets follow the XYZ shape recruiters scan for: what changed, the number
   that proves it, then the method. Numbers are only those already evidenced by
   the projects on this site. */

export const experience = [
  {
    date: 'Mar 2026 - Present',
    title: 'AI Engineer',
    company: 'Brolly Software Solutions Pvt Ltd',
    summary:
      'Building real-time conversational AI for regional-language learners — low-latency voice pipelines, retrieval-grounded answers, and the production hardening that lets them run unattended.',
    highlights: [
      '🎙️ Architected VoxFlow, a Telugu-first voice agent on FastAPI and the OpenAI Realtime API, reachable from both the browser (WebRTC) and ordinary phone lines (Plivo)',
      '📚 Built RAG pipelines over PDF/DOCX/TXT course material with a cached, change-detecting index, so answers cite real documents instead of being improvised',
      '🔊 Engineered full-duplex audio — FFT-based voice activity detection, adaptive noise reduction, pipelined TTS and μ-law passthrough — to keep conversation latency low enough to interrupt',
      '🛡️ Hardened for production with fail-closed auth, per-IP rate limiting and CSP/HSTS middleware, backed by 152 tests at 90% coverage and Docker + GitHub Actions CI',
    ],
  },
  {
    date: 'Sep 2025 - Mar 2026',
    title: 'Freelance AI/ML Engineer',
    company: 'Independent Consultant',
    summary:
      'Ran an independent AI automation practice, owning delivery end to end — problem framing, build, deployment and ongoing support — for hospitality clients.',
    highlights: [
      '📉 Cut manual call monitoring effort by ~90% for luxury hotel groups by replacing human spot-checks with an automated transcription and sentiment pipeline',
      '🗣️ Automated 100% of call transcription at 700+ calls per day using Whisper (Large), handling multilingual audio without per-language tuning',
      '💼 Packaged the pipeline as a subscription AI product generating recurring revenue, rather than a one-off engagement',
      '🏨 Delivered it into production across three hotel groups — Green Park, Avasa and Mari Gold — via Skillkoder',
    ],
  },
  {
    date: 'Feb 2025 - Sep 2025',
    title: 'Software Engineer',
    company: 'BigEBrains Pvt Ltd',
    summary:
      'Led AI project delivery and deployment in an early-stage startup, pairing data science work with the software engineering needed to get it live.',
    highlights: [
      '🌐 Deployed two production websites — bigclasses.ai and bigebrains.com — on a React + Django stack behind NGINX on AWS',
      '☁️ Implemented cloud deployment with AWS and Docker, replacing manual releases with reproducible builds',
      '🔄 Set up CI/CD pipelines so deployments ran automatically instead of by hand',
      '👥 Led AI-based project development across a cross-functional team using Agile delivery',
    ],
  },
];
