export interface PostMeta {
  title?: string
  summary?: string
  publishedAt?: string
  slug: string
}

const blogPostFiles = import.meta.glob('@/posts/**/*.mdx', { eager: true })

// Process each blog post to extract metadata and content
const blogPosts = Object.entries(blogPostFiles).map(([path, module]) => {
  // Extract the slug from the filename or use the one defined in frontmatter
  // Assuming your files are named like [slug].mdx or have a slug in frontmatter
  const slug =
    module.frontmatter?.slug ||
    path
      .split('/')
      .pop()
      .replace(/\.mdx$/, '')

  return {
    slug,
    title: module.frontmatter?.title || 'Untitled Post',
    date: module.frontmatter?.date || null,
    excerpt: module.frontmatter?.excerpt || '',
    tags: module.frontmatter?.tags || [],
    // Store the actual component for rendering
    component: module.default,
    // Add other metadata as needed
    ...module.frontmatter,
  }
})

export function getPostMeta(limit?: number): Promise<PostMeta[]> {
  const files = fs.readdirSync(rootDirectory)
}

/**
 * Find a specific blog post by its slug
 */
export function getPostBySlug(slug: string) {
  return sortedBlogPosts.find((post) => post.slug === slug) || null
}
