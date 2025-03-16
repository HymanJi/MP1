// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Provincial Excellent Graduate',
    description: '',
    date: '2025',
    location: 'UESTC, Chengdu',
  },
  {
    name: '虚位以待',
    description: '',
    date: '',
    location: '',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: '虚位以待',
    description: '',
    link: { href: 'scls-cs.com', label: 'GitHub Cards' },
    tags: ['标签1', '标签1', '标签1', '标签1', '标签1']
  },
  {
    name: '虚位以待',
    description: '',
    link: { href: '网址', label: '标签1' },
    tags: ['标签1', '标签1']
  },
  {
    name: '虚位以待',
    description: '',
    link: { href: '网站', label: '标签1' },
    tags: ['标签1']
  },
  {
    name: '虚位以待',
    description: '',
    link: { href: '网站', label: 'View Course' },
    tags: ['Education', 'AI']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: '虚位以待',
    description:
      '',
    date: '',
    location: '',
    link: '网站',
  },
  {
    name: '虚位以待',
    description:
      '',
    date: '',
    location: '',
    link: '网站',
  },
  {
    name: '虚位以待',
    description:
      '',
    date: '',
    location: '',
  },
]
