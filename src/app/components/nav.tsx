"use client";

import styled from "@emotion/styled";
import { DASHED_BORDER_COLOR, DEPRESSED_BUTTON_STYLE } from "../styles/globalStyles";
import { Box, ButtonBase, Grid2, IconButton, Typography } from "@mui/material";
import { NAV_LINKS_LIST } from "../nav/links";
import FoundationIcon from '@mui/icons-material/Foundation';

import { usePathname } from "next/navigation";
import Link from "next/link";



interface HoverButtonProps {
    selected: boolean,
}


const HoverButton = styled(ButtonBase)<HoverButtonProps>(({selected}) => ({
    padding: 8,
    borderRadius: 20,
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        boxShadow: 'inset 0 3px 5px 1px rgba(0, 0, 0, 0.1)',
    },
    ...(selected && {
        borderColor: DASHED_BORDER_COLOR,
        borderWidth: 1,
        borderStyle: 'dashed',
    })
}))




export const NavBar = () => {
    const links = NAV_LINKS_LIST;
    const pathname = usePathname()


    return (
        <Box
            mb={2}
        >
            <Grid2 container
                spacing={2}
                sx={{
                    alignItems: 'center'
                }}
            >
                <Grid2>
                    <Link 
                        key={"Home"}
                        href={links.find(link=>link.name==="Home")?.route || "/"}
                    >
                        <IconButton
                            sx={{
                                "&:hover": DEPRESSED_BUTTON_STYLE
                            }}
                        >
                            <FoundationIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Link>
                </Grid2>
                <Grid2>
                    <Grid2 container>
                        {links.filter(link => link.name !== "Home").map(link => {
                            return (
                                <Grid2 px={2} key={link.route}>
                                    <Link 
                                        key={link.name}
                                        href={link.route}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'black'
                                        }}
                                    >
                                        <HoverButton selected={pathname === link.route}>
                                            <Typography variant="h6">
                                                {link.name}
                                            </Typography>
                                            
                                        </HoverButton>
                                    </Link>
                                </Grid2>
                            )
                        })}
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )

}