import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'mailto:ruyu.yan@princeton.edu',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://github.com/yanruyu126',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/ruyu-yan-2600401a7',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://scholar.google.com/citations?user=sJs6B-QAAAAJ',
    label: 'Google Scholar',
    icon: faGraduationCap,
  },
];

export default data;
