import { DateTime } from 'luxon'
import type { MDXModule, MDXContent } from 'mdx/types'

export interface RawPostMeta {
  title?: string
  summary?: string
  publishedAt?: string
  slug: string
}

interface MDXModuleFrontmatter extends MDXModule {
  frontmatter: RawPostMeta
}

const blogPostFiles = import.meta.glob<MDXModuleFrontmatter>('@/posts/**/*.mdx', { eager: true })

export interface PostMeta {
  title: string
  summary: string
  publishedAt?: DateTime
  slug: string
}
export interface Post extends PostMeta {
  component: MDXContent
}

// Process each blog post to extract metadata and content
const blogPosts: Post[] = Object.entries(blogPostFiles)
  .map(([path, module]) => {
    // Extract the slug from the filename or use the one defined in frontmatter
    // Assuming your files are named like [slug].mdx or have a slug in frontmatter
    const slug =
      module.frontmatter?.slug ||
      path
        .split('/')
        .pop()
        ?.replace(/\.mdx$/, '') ||
      'null'

    return {
      title: module.frontmatter?.title || 'Untitled Post',
      summary: module.frontmatter?.summary || '',
      publishedAt: module.frontmatter?.publishedAt
        ? DateTime.fromISO(module.frontmatter?.publishedAt)
        : undefined,
      slug,
      // Store the actual component for rendering
      component: module.default,
    }
  })
  .filter((post) => post.slug != 'null')
  .sort((a, b) => {
    // Handle cases where publishedAt might be undefined
    if (!a.publishedAt && !b.publishedAt) return 0
    if (!a.publishedAt) return 1 // Posts without dates come last
    if (!b.publishedAt) return -1

    // Sort by date (newest first)
    return b.publishedAt.toMillis() - a.publishedAt.toMillis()
  })

export function getPostMetas(): PostMeta[] {
  return Object.entries(blogPosts).map((post) => {
    return {
      title: post[1].title,
      summary: post[1].summary,
      publishedAt: post[1].publishedAt,
      slug: post[1].slug,
    }
  })
}

/**
 * Find a specific blog post by its slug
 */
export function getPostBySlug(slug: string): Post | null {
  return blogPosts.find((post) => post.slug === slug) || null
}

export function getHumanDate(date: DateTime | undefined) {
  if (date == undefined) {
    return 'Unknown'
  }

  const daysSince = DateTime.now().diff(date, 'days').days

  if (daysSince == 0) {
    return 'Today'
  } else if (daysSince == 1) {
    return 'Yesterday'
  } else if (daysSince < 7) {
    return 'This Week'
  } else if (daysSince < 14) {
    return 'Last Week'
  }

  return date.toLocaleString(DateTime.DATE_FULL)
}
