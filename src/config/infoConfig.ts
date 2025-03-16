export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Hyman Ji'
export const headline = 'Undergraduate at University of Electronic Science and Technology of China.'
export const introduction =
  "Hi, everyone! My name is Hyman Ji. My major is Information and Communication Engineering. My research interest interests focus on wireless communication. I focus on improving myself constantly."
export const email = 'hymanji@qq.com'
export const githubUsername = 'HymanJi'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Hi, everyone! My name is Hyman Ji. My major is Information and Communication Engineering. My research interests focus on wireless communication . I focus on improving myself constantly.",
  'Currently I am working on a project on MIMO-OFDM.',
  "I started this blog to share the insights I learn every day. Most blogs focus on wireless communication, algorithm implementation and some life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about study, work and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHub',
    icon: 'GitHub',
    href: 'https://github.com/HymanJi',
  },
  {
    name: 'CSDN',
    icon: 'CSDN',
    href: 'https://blog.csdn.net/qq_62091408',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
