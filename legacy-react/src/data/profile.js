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
  /* Positioning line, read before the name. Three words because it has to land
     in the glance before the six seconds start — and it indicts the notebook
     portfolios this one is competing against without naming them. */
  tagline: 'Production, not prototypes',
  role: 'AI Engineer — Real-Time Voice, LLMs & RAG',
  pageTitle: 'Lokeswar Raju Gundlapalli - AI Engineer',
  /* Cut from five rendered lines to three. Every number and named system
     survives — those are the evidence the tagline promises. What went was the
     connective padding ("I build", "pipelines", "platform processing") and
     "Docker", which the projects pages spell out in full anyway. */
  heroDescription:
    'Real-time Telugu voice agent on the OpenAI Realtime API, RAG grounded in real documents, call analytics over 20,000+ recordings a month — shipped with CI, auth and 90% test coverage.',
  photoAlt: 'Portrait of Lokeswar Raju Gundlapalli',
  /* Closing line. It replaced "Ready to transform your business with AI?" —
     which promised nothing, could have been written by anyone, and sat on
     every page of a site whose whole argument is that claims come with
     evidence. This one is checkable: the stack is in package.json and the
     components are hand-written. */
  footerNote: 'Built from scratch — React 19, Vite, no template. The site is the first work sample.',
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
    /* Not "Hire Me Now": on a page whose whole argument is evidence, an eager
       ask undercuts it. Understatement reads as the more confident position. */
    label: 'Start a Conversation',
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
