import Link from "next/link";
import { BlogPostIdentifier, getBlogPosts, slugToHref } from "../lib/blog";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { workPostsSortedFave } from "./workWriting";

interface BlogPageProps {

}

const BlogPage = (props: BlogPageProps) => {

    const blogPosts = getBlogPosts();
    const descChronOrderBlogPosts = blogPosts.sort((a, b) => {
        const aDate = new Date(a.data.datePublished)
        const bDate = new Date(b.data.datePublished)
        return bDate.getTime() - aDate.getTime()
    })

    const workPosts = workPostsSortedFave;

    return (
        <Box mt={5} ml={2}>
            <Box mb={5}>
                <Typography variant="h2">
                    Writing
                </Typography>
            </Box>
            <Box ml={10}>                
                <Box mb={4}>
                    <Typography variant="h4" gutterBottom>
                        Personal <Typography component="span" variant="body2">(Sorted chronologically)</Typography>
                    </Typography>

                    {descChronOrderBlogPosts.map(blogPost => {
                        return (
                            <Box my={1}>
                                <Link href={slugToHref(blogPost.data.slug)}>
                                    <BlogLinkDisplay
                                        slug={blogPost.data.slug}
                                        title={blogPost.data.title}
                                        datePublished={blogPost.data.datePublished}
                                    />
                                </Link>
                            </Box>
                        )   
                    })}
                </Box>
                <Box>
                    <Typography variant="h4">
                        Work <Typography component="span" variant="body2">(Sorted by my favorites)</Typography>
                    </Typography>
                    <Typography variant={"h6"} sx={{ fontStyle: "italic" }} gutterBottom>
                        Note: written while at <span><a href="https://www.copytree.io/">Copytree</a></span>
                    </Typography>
                    {workPostsSortedFave.map(workPost => {
                        return (
                            <Box my={1}>
                                <a href={workPost.slug}>
                                    <BlogLinkDisplay
                                        slug={workPost.slug}
                                        title={workPost.title}
                                        datePublished={workPost.datePublished}
                                    />
                                </a>
                            </Box>
                        )
                    })}


                </Box>
            </Box>
        </Box>
        
        
    )

}

interface BlogLinkDisplayProps {
    slug: string;
    title: string;
    datePublished: string;
}

const BlogLinkDisplay = (props: BlogLinkDisplayProps) => {

    return (
        <Box
            sx={{
                display: "inline-block"
            }}
        >
            <Typography
                variant="h6"
            >
                {props.title} 
                <Typography 
                    component="span" 
                    variant="subtitle2"
                    ml={1}
                    sx={{
                        color: "black",
                        display: "inline-block",
                        textDecoration: "none"
                    }}
                >
                    [{props.datePublished}]
                </Typography>
            </Typography>
        </Box>

        
    )
}


export default BlogPage;