/* Identity, headline copy and contact channels.
   Everything a recruiter reads first lives here, so it can be updated without
   touching a component. */

/* The hero is read in about six seconds. It has to answer "what does this
   person actually build, and has it shipped" in that window — so it names
   concrete systems and real numbers instead of promising to transform your
   business with cutting-edge innovation, which says nothing and is what every
   other portfolio already says. */
export const profile = {
  name: 'Lokeswar Raju Gundlapalli',
  shortName: 'Lokeswar Raju',
  role: 'AI Engineer — Real-Time Voice, LLMs & RAG',
  pageTitle: 'Lokeswar Raju Gundlapalli - AI Engineer',
  heroDescription:
    'I build LLM and speech systems that run in production: a real-time Telugu voice agent on the OpenAI Realtime API, RAG pipelines grounded in real documents, and a call-analytics platform processing 20,000+ recordings a month. Shipped with Docker, CI, auth and 90% test coverage — not just notebooks.',
  photoAlt: 'Portrait of Lokeswar Raju Gundlapalli',
};

export const contact = {
  email: 'glokesh8374@gmail.com',
  phone: '+91 8374705188',
  phoneHref: 'tel:+918374705188',
  linkedin: 'https://www.linkedin.com/in/lokeswar-raju-gundlapalli-58863022a/',
  github: 'https://github.com/GundlapalliLokeswarRaju',
};

/* Route table. `to` feeds React Router directly, so this is the single place
   that decides both the nav order and which URLs exist. */
export const navLinks = [
  { to: '/', label: 'Home', icon: 'fas fa-home' },
  { to: '/about', label: 'About', icon: 'fas fa-user' },
  { to: '/skills', label: 'Skills', icon: 'fas fa-cogs' },
  { to: '/experience', label: 'Experience', icon: 'fas fa-briefcase' },
  { to: '/projects', label: 'Projects', icon: 'fas fa-laptop-code' },
  { to: '/contact', label: 'Contact', icon: 'fas fa-envelope' },
];

export const heroButtons = [
  {
    to: '/projects',
    label: 'Explore My AI Projects',
    icon: 'fas fa-rocket',
    variant: 'btn-primary-spec',
  },
  {
    to: '/contact',
    label: "Let's Collaborate",
    icon: 'fas fa-handshake',
    variant: 'btn-secondary-spec',
  },
  {
    // Off-site, so a plain anchor rather than a router link.
    href: `mailto:${contact.email}`,
    label: 'Hire Me Now',
    icon: 'fas fa-paper-plane',
    variant: 'btn-tertiary-spec',
  },
];

/* Decorative snippet that drifts behind the hero. */
export const floatingCode = [
  'import tensorflow as tf',
  'model = Sequential()',
  'accuracy = 0.95',
];
