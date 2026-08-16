/* Each project renders one .project-card-3d. Order here is display order, and
   it is deliberate: the two systems with real production scale come first,
   because a recruiter reads roughly the first card and a half.

   Structure follows what hiring screens reward — open on the problem and the
   outcome, then the engineering that made it work, then the stack. `links` is
   the highest-signal field of the lot: a reachable demo or repo outranks any
   description, so it renders as buttons at the top of the card. Client work
   that can't be linked simply omits it. */

export const projects = [
  {
    title: '🎙️ VoxFlow — Telugu-First AI Voice Agent',
    date: 'Apr 2026 - Present',
    client: 'Brolly Software Solutions Pvt Ltd | Real-Time Conversational AI',
    description:
      'Regional learners were locked out of digital-marketing coursework by an English-only interface. VoxFlow answers their questions out loud in conversational Telugu/Tenglish, in real time, over both the browser and an ordinary phone call — so a student with no laptop and no English can still take the course.',
    features: [
      {
        icon: 'fas fa-book-open',
        text: 'RAG over PDF/DOCX/TXT course material with a cached, change-detecting index — answers stay grounded in real documents instead of improvised',
      },
      {
        icon: 'fas fa-wave-square',
        text: 'Full-duplex audio: FFT-based VAD, adaptive noise reduction, pipelined TTS and μ-law passthrough, tuned so a student can interrupt mid-sentence',
      },
      {
        icon: 'fas fa-cubes',
        text: 'Modular FastAPI backend of ~26 modules behind a pluggable OpenAI/Groq provider layer, so swapping model vendors is config, not a rewrite',
      },
      {
        icon: 'fas fa-lock',
        text: 'Production hardening: fail-closed auth, per-IP rate limiting and CSP/HSTS middleware, shipped on Docker with GitHub Actions CI',
      },
    ],
    tech: [
      'Python',
      'FastAPI',
      'OpenAI Realtime API',
      'WebRTC',
      'RAG',
      'Plivo',
      'Docker',
      'GitHub Actions',
    ],
    stats: ['152 Tests @ 90% Coverage', 'Browser + Phone Calls', 'Grounded, Not Hallucinated'],
  },
  {
    title: '📞 Voice Analytics & Sentiment Engine',
    date: 'Nov 2025 - Mar 2026',
    client:
      'Freelance via Skillkoder | Green Park, Avasa & Mari Gold Hotels | AI/ML Engineer',
    description:
      'Three luxury hotel groups were sampling a handful of guest calls by hand and hoping the rest were fine. This pipeline listens to all of them — 700+ a day, 20,000+ a month — transcribing, scoring sentiment and flagging the calls a manager actually needs to hear. Manual monitoring effort fell by roughly 90%, and it shipped as a subscription product with recurring revenue.',
    features: [
      {
        icon: 'fas fa-microphone',
        text: '100% of call transcription automated with Whisper (Large), handling multilingual guest audio without per-language tuning',
      },
      {
        icon: 'fas fa-comments',
        text: 'Sentiment classified locally with Ollama across five labels — Positive, Negative, Neutral, Rude, Standard — keeping guest audio in-house',
      },
      {
        icon: 'fas fa-user-check',
        text: 'Greeting-phrase detection to measure whether staff actually follow the script, turning a subjective review into a metric',
      },
      {
        icon: 'fas fa-chart-line',
        text: 'Insights surfaced back to management, driving concrete service-quality changes rather than another dashboard nobody opens',
      },
    ],
    tech: [
      'Python',
      'Whisper (Large)',
      'Ollama',
      'NLP',
      'Sentiment Analysis',
      'Audio Processing',
      'Linux',
    ],
    stats: ['20,000+ Recordings/Month', '700+ Calls/Day', '~90% Less Manual Effort'],
  },
  {
    title: '🤖 AI-Powered Vendor Intelligence Platform',
    date: 'Feb 2025 - June 2025',
    client: 'Client: Acads360 | Full-Stack AI Development',
    description:
      'B2B vendor selection meant analysts reading listings and PDFs by hand for days. This platform automates the discovery-to-shortlist path with a multi-agent crew that scrapes, reads and ranks vendors — processing 10,000+ listings and answering questions directly from the documents vendors supply.',
    features: [
      {
        icon: 'fas fa-spider',
        text: 'Multi-agent scraping and research orchestrated with CrewAI, so discovery scales past what a human analyst can read',
      },
      {
        icon: 'fas fa-chart-line',
        text: 'Vendor ranking algorithm combining scraped signals with LLM analysis to produce a defensible shortlist, not just a list',
      },
      {
        icon: 'fas fa-file-alt',
        text: 'Document intelligence with RAG across PDF, Word, Excel and CSV — questions answered from the vendor’s own paperwork',
      },
      {
        icon: 'fas fa-cloud',
        text: 'Deployed to production on AWS EC2 with Docker and CI/CD',
      },
    ],
    tech: ['Python', 'CrewAI', 'RAG', 'LLMs', 'AWS EC2', 'Docker', 'CI/CD'],
    stats: ['10K+ Listings Processed', 'Multi-Format Documents', 'Real-Time Analysis'],
  },
  {
    title: '🏥 Liver Disease MLOps — Registry to Kubernetes',
    date: 'End-to-end MLOps implementation',
    client: 'Healthcare ML | Full Lifecycle Ownership',
    description:
      'A model that only exists in a notebook helps nobody. This project takes liver-disease prediction from raw patient records all the way to a monitored service on Kubernetes — reaching 84% accuracy, with MLflow tracking every experiment and a registry deciding which version is actually serving traffic.',
    features: [
      {
        icon: 'fas fa-flask',
        text: 'MLflow experiment tracking and model registry, so promoting a model is a recorded decision rather than a file copy',
      },
      {
        icon: 'fas fa-dharmachakra',
        text: 'Containerised deployment on Kubernetes behind a FastAPI inference service',
      },
      {
        icon: 'fas fa-gauge-high',
        text: 'Live monitoring with Prometheus and Grafana, so drift and latency are visible instead of discovered by a user',
      },
      {
        icon: 'fas fa-diagram-project',
        text: 'Reproducible pipeline covering ingestion, preprocessing, training and evaluation',
      },
    ],
    tech: [
      'Python',
      'Scikit-learn',
      'MLflow',
      'FastAPI',
      'Docker',
      'Kubernetes',
      'Prometheus',
      'Grafana',
      'MLOps',
    ],
    stats: ['84% Accuracy', 'Registry-Gated Releases', 'Monitored in Production'],
    links: [
      {
        label: 'Source Code',
        href: 'https://github.com/GundlapalliLokeswarRaju/LiverDiseasePrediction_mlops',
        icon: 'fab fa-github',
      },
    ],
  },
  {
    title: '🌐 Production Deployment — Two Live Platforms',
    date: '2025',
    client: 'BigEBrains Pvt. Ltd. | DevOps Engineering',
    description:
      'Owned the deployment of two customer-facing sites from a working codebase to a live, secured production environment on AWS — both still serving traffic today.',
    features: [
      {
        icon: 'fas fa-graduation-cap',
        text: 'bigclasses.ai — AI-focused education platform, live in production',
      },
      {
        icon: 'fas fa-building',
        text: 'bigebrains.com — corporate site and business portal, live in production',
      },
      {
        icon: 'fas fa-layer-group',
        text: 'React.js frontend against a Django backend, served through NGINX on AWS',
      },
      {
        icon: 'fas fa-shield-alt',
        text: 'CI/CD pipelines replacing manual releases, in a secured and scalable environment',
      },
    ],
    tech: ['React.js', 'Django', 'AWS', 'NGINX', 'Docker', 'CI/CD'],
    stats: ['2 Live Platforms', 'Automated Releases', 'Still in Production'],
    links: [
      { label: 'bigclasses.ai', href: 'https://bigclasses.ai', icon: 'fas fa-arrow-up-right-from-square' },
      { label: 'bigebrains.com', href: 'https://bigebrains.com', icon: 'fas fa-arrow-up-right-from-square' },
    ],
  },
  {
    title: '🩺 Liver Disease Prediction — Team Lead',
    date: 'Academic Leadership Project',
    client: 'Healthcare ML | Team of Engineers',
    description:
      'Led a student team building a liver-disease classifier on patient health records, pairing a logistic-regression model with a visualisation dashboard that made the predictions interpretable to non-technical reviewers.',
    features: [
      { icon: 'fas fa-users', text: 'Led the team and owned project planning and delivery' },
      { icon: 'fas fa-brain', text: 'Logistic regression model trained on clinical patient records' },
      {
        icon: 'fas fa-chart-bar',
        text: 'Visualisation dashboard making predictions explainable rather than opaque',
      },
      {
        icon: 'fas fa-heartbeat',
        text: 'Framed around early detection, where a false negative is the expensive error',
      },
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Data Visualisation', 'Healthcare ML'],
    stats: ['Team Leadership', 'Interpretable Output', 'Early-Detection Focus'],
  },
];
