import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "src/app/blog/markdown")
console.log(blogDirectory)


export interface BlogPostIdentifier {
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { [key: string]: any }
}

export const getBlogPosts = (): BlogPostIdentifier[] => {
    const fileNames = fs.readdirSync(blogDirectory)
    const blogPosts = fileNames.map((filename) => {
        const id = filename.replace(/\.mdx$/, '')

        const fullPath = path.join(blogDirectory, filename)
        const contents = fs.readFileSync(fullPath, "utf8")

        const matterResults = matter(contents)

        return {
            id: id,
            data: matterResults.data
        }
    })
    return blogPosts;
}

export const getBlogPostSlugs = (): string[] => {
    const blogPosts = getBlogPosts();
    const slugs = blogPosts.map(post => {
        return post.data.slug
    })
    return slugs;
}


export interface BlogPost {
    slug: string;
    title: string;
    datePublished: string;
    content: string;
}

export const getPostBySlug = (slug: string) => {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`)
    const contents = fs.readFileSync(fullPath, "utf8")

    const { data, content } = matter(contents)
    return {
        slug: slug,
        title: data.title,
        datePublished: data.datePublished,
        content: content
    } as BlogPost
}

export const slugToHref = (slug: string) => {
    return `/blog/${slug}`
}