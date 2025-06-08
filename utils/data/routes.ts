export interface Link {
  target: string
  text: string
}

export const links: Link[] = [
  {
    target: '/',
    text: 'home',
  },
  {
    target: '/history',
    text: 'history',
  },
  {
    target: '/projects',
    text: 'projects',
  },
  {
    target: '/blog',
    text: 'blog',
  },
]
