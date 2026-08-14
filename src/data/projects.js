/* Each project renders one .project-card-3d. Order here is display order. */

export const projects = [
  {
    title: '🎙️ VoxFlow — Telugu-First AI Voice Agent',
    date: 'Apr 2026 - Present',
    client: 'Brolly Software Solutions Pvt Ltd | Real-Time Conversational AI',
    description:
      'Built a real-time, low-latency AI voice tutor that answers digital-marketing questions in conversational Telugu/Tenglish over both the browser (WebRTC) and phone calls (Plivo telephony bridge), removing the English-only barrier for regional learners.',
    features: [
      {
        icon: 'fas fa-book-open',
        text: 'RAG pipeline over PDF/DOCX/TXT course material with cached, change-detecting index',
      },
      {
        icon: 'fas fa-wave-square',
        text: 'Full-duplex audio: FFT-based VAD, adaptive noise reduction, pipelined TTS, μ-law passthrough',
      },
      {
        icon: 'fas fa-cubes',
        text: 'Modular FastAPI backend (~26 modules) with a pluggable OpenAI/Groq provider layer',
      },
      {
        icon: 'fas fa-lock',
        text: 'Production hardening: fail-closed auth, per-IP rate limiting, CSP/HSTS middleware',
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
    title: '📞 AI Automation — Voice Analytics & Sentiment Analysis',
    date: 'Nov 2025 - Mar 2026',
    client:
      'Freelance via Skillkoder | Hospitality (Green Park, Avasa, Mari Gold Hotels) | AI/ML Engineer',
    description:
      'Built a production-grade AI automation pipeline analyzing 700+ customer service calls per day across multiple luxury hotels, delivered as a subscription-based AI product with recurring revenue.',
    features: [
      {
        icon: 'fas fa-microphone',
        text: '100% of call transcription automated with Whisper (Large) for multilingual audio',
      },
      {
        icon: 'fas fa-comments',
        text: 'LLM sentiment analysis via Ollama: Positive, Negative, Neutral, Rude, Standard',
      },
      {
        icon: 'fas fa-user-check',
        text: 'Greeting-phrase detection to monitor employee professionalism and consistency',
      },
      {
        icon: 'fas fa-chart-line',
        text: 'Actionable insights driving customer experience and service quality improvements',
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
    stats: ['700+ Calls/Day', '20,000+ Recordings/Month', '~90% Less Manual Effort'],
  },
  {
    title: '🤖 AI-Powered Vendor Intelligence Platform',
    date: 'Feb 2025 - June 2025',
    client: 'Client: Acads360 | Full-Stack AI Development',
    description:
      'Developed an intelligent B2B vendor research and comparison platform that automates vendor discovery, analysis, and selection using advanced AI technologies including LLMs, RAG systems, and multi-agent frameworks.',
    features: [
      { icon: 'fas fa-spider', text: 'Intelligent Web Scraping with CrewAI orchestration' },
      {
        icon: 'fas fa-chart-line',
        text: 'Smart Vendor Ranking Algorithm with AI-powered analysis',
      },
      {
        icon: 'fas fa-file-alt',
        text: 'Document Intelligence & RAG System (PDF, Word, Excel, CSV)',
      },
      { icon: 'fas fa-cloud', text: 'Production deployment with AWS EC2 & Docker' },
    ],
    tech: ['Python', 'CrewAI', 'RAG', 'AWS', 'Docker', 'CI/CD'],
    stats: ['10K+ Listings Processed', 'Multi-format Support', 'Real-time Analysis'],
  },
  {
    title: '🌐 Production Website Deployment',
    date: '2025',
    client: 'BigEBrains Pvt. Ltd. | DevOps Engineering',
    description:
      'Led complete deployment of two production websites implementing modern DevOps practices and cloud infrastructure for scalable, secure web applications.',
    features: [
      { icon: 'fas fa-graduation-cap', text: 'bigclasses.ai - AI-focused educational platform' },
      { icon: 'fas fa-building', text: 'bigebrains.com - Corporate website and business portal' },
      { icon: 'fas fa-layer-group', text: 'React.js frontend with Django backend architecture' },
      { icon: 'fas fa-shield-alt', text: 'Scalable, secure production environment' },
    ],
    tech: ['React.js', 'Django', 'AWS', 'DevOps', 'NGINX'],
    stats: ['2 Live Websites', 'Modern Architecture', 'High Performance'],
  },
  {
    title: '🏥 Liver Disease Prediction System',
    date: 'Academic Leadership Project',
    client: 'Healthcare ML Project',
    description:
      'Led team development of healthcare prediction system achieving good accuracy using logistic regression with comprehensive data visualization dashboard.',
    features: [
      { icon: 'fas fa-users', text: 'Team leadership and project management' },
      { icon: 'fas fa-brain', text: 'Machine Learning model implementation' },
      { icon: 'fas fa-chart-bar', text: 'Comprehensive data visualization dashboard' },
      { icon: 'fas fa-heartbeat', text: 'Healthcare domain expertise application' },
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Data Viz', 'Healthcare ML'],
    stats: ['Good Accuracy', 'Team Leadership', 'Healthcare Impact'],
  },
  {
    title: '🏥 End-to-End Machine Learning Deployment with MLflow Registry & Kubernetes',
    date: 'Hands-on implementation project to practice real-world MLOps workflows',
    client: 'Healthcare ML Project',
    description:
      'Developed a machine learning pipeline to predict liver disease using patient health records. The project covers the entire ML lifecycle — from data ingestion and preprocessing to model training, deployment with Kubernetes, and monitoring with Prometheus & Grafana. Integrated MLflow for experiment tracking and model registry to simulate real-world production workflows.',
    features: [
      { icon: 'fas fa-users', text: 'MLOps Engineer (End-to-End Implementation)' },
      { icon: 'fas fa-brain', text: 'Machine Learning model implementation' },
      { icon: 'fas fa-chart-bar', text: 'Comprehensive data visualization dashboard' },
      { icon: 'fas fa-heartbeat', text: 'Healthcare domain expertise application' },
    ],
    tech: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'FastAPI',
      'MLflow',
      'MLOps',
      'Grafana',
      'Prometheus',
      'Docker',
      'Kubernetes',
    ],
    stats: ['Accuracy: 84%', 'Role: End-to-End Ownership', 'Impact: Early Detection in Healthcare'],
  },
];
