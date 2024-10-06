import { getBlogPostSlugs, getPostBySlug } from "@/app/lib/blog"
import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";

interface BlogPostTemplateProps {
    params: {
        slug: string;
    }
}


const BlogPostTemplate = (props: BlogPostTemplateProps) => {
    console.log("props", props.params)
    const post = getPostBySlug(props.params.slug)
    
    return (
        <Box width={"70%"}>
            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
        </Box>
    )
}

export const generateStaticParams = async () => {
    const slugs = getBlogPostSlugs()
    console.log(slugs)
    return slugs.map((slug) => ({ slug }))
}

export default BlogPostTemplate;