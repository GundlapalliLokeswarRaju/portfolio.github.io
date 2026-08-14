/* Identity, headline copy and contact channels.
   Everything a recruiter reads first lives here, so it can be updated without
   touching a component. */

export const profile = {
  name: 'Lokeswar Raju Gundlapalli',
  shortName: 'Lokeswar Raju',
  role: 'AI Engineer & ML Expert',
  pageTitle: 'Lokeswar Raju Gundlapalli - AI Engineer',
  heroDescription:
    'Transforming ideas into intelligent solutions with cutting-edge AI, ML algorithms, and cloud deployment. Ready to revolutionize your business with data-driven innovation that delivers real results!',
  photoAlt: 'Portrait of Lokeswar Raju Gundlapalli',
};

export const contact = {
  email: 'glokesh8374@gmail.com',
  phone: '+91 8374705188',
  phoneHref: 'tel:+918374705188',
  linkedin: 'https://www.linkedin.com/in/lokeswar-raju-gundlapalli-58863022a/',
  github: 'https://github.com/GundlapalliLokeswarRaju',
};

export const navLinks = [
  { href: '#home', label: 'Home', icon: 'fas fa-home' },
  { href: '#about', label: 'About', icon: 'fas fa-user' },
  { href: '#skills', label: 'Skills', icon: 'fas fa-cogs' },
  { href: '#experience', label: 'Experience', icon: 'fas fa-briefcase' },
  { href: '#projects', label: 'Projects', icon: 'fas fa-laptop-code' },
  { href: '#contact', label: 'Contact', icon: 'fas fa-envelope' },
];

export const heroButtons = [
  {
    href: '#projects',
    label: 'Explore My AI Projects',
    icon: 'fas fa-rocket',
    variant: 'btn-primary-spec',
  },
  {
    href: '#contact',
    label: "Let's Collaborate",
    icon: 'fas fa-handshake',
    variant: 'btn-secondary-spec',
  },
  {
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
