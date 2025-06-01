import type { Project } from '../types'

export const projects: Project[] = [
  {
    name: 'Pnyx',
    tags: [
      {
        content: 'Governance',
      },
      {
        content: 'WIP',
        icon: 'ri-hammer-line',
      },
    ],
    links: [
      {
        icon: 'ri-github-line',
        target: 'https://github.com/SBMous/votechain-report-source/',
      },
      {
        icon: 'ri-file-text-line',
        target:
          'https://raw.githubusercontent.com/SBMous/votechain-report-source/main/FinalReport-Pnyx.pdf',
      },
    ],
    content:
      'An exploration into an alternative approach to democratic ' +
      'governance and intention alignment. Pnyx is a fully decentralised, ' +
      'trustless and self-ratifying system for reaching consensus amongst a community.',
  },
  {
    name: 'Objective Function',
    tags: [
      {
        content: 'Systems Thinking',
      },
      {
        content: 'WIP',
        icon: 'ri-hammer-line',
      },
    ],
    links: [
      {
        icon: 'ri-global-line',
        target:
          'https://polydactyl-stem-d2c.notion.site/Objective-Function-394bf5f0be41421dbebddc1b69c8e469',
      },
    ],
    content:
      'A social impact project incubator focused on exploring the building blocks for an ' +
      'alternative future by examining the systems which drive the decisions and actions ' +
      'of organisations and people alike.',
  },
  {
    name: 'Personal Site',
    tags: [
      {
        content: 'UX Design',
      },
      {
        content: 'This!',
      },
    ],
    links: [
      {
        icon: 'ri-github-line',
        target: '',
      },
    ],
    content:
      'A personal space serving as my digital statement of intent, a home for record-of-thought ' +
      'and the frontend to any selfhosting activities.',
  },
]
