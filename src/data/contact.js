import { contact } from './profile.js';

/* The four contact tiles. `text` is what the link reads as; `href` is where
   it goes — they differ for LinkedIn/GitHub where the URL is too long to show. */
export const contactChannels = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    text: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    text: contact.phone,
    href: contact.phoneHref,
  },
  {
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    text: 'Connect Professional',
    href: contact.linkedin,
    external: true,
  },
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    text: 'View My Code',
    href: contact.github,
    external: true,
  },
];

export const benefits = [
  { icon: 'fas fa-rocket', label: 'Immediate Impact' },
  { icon: 'fas fa-lightbulb', label: 'Innovative Solutions' },
  { icon: 'fas fa-handshake', label: 'Team Player' },
  { icon: 'fas fa-clock', label: 'Fast Learner' },
];

export const socialLinks = [
  { icon: 'fab fa-linkedin', href: contact.linkedin, label: 'LinkedIn', external: true },
  { icon: 'fab fa-github', href: contact.github, label: 'GitHub', external: true },
  { icon: 'fas fa-envelope', href: `mailto:${contact.email}`, label: 'Email' },
];
