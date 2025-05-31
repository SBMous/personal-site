export interface ProjectTag {
  content: string
  icon?: string
}

export interface ProjectLink {
  icon: string
  target: string
}

export interface Project {
  name: string
  tags: ProjectTag[]
  links: ProjectLink[]
  content: string
}

export interface TimelineEvent {
  title: string
  date?: string
  content: string
}
