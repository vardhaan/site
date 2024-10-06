

export interface Link {
    name: string;
    route: string;
}


const MAIN_LINKS_LIST: Link[] = [
    {name: "Home", route: "/"},
    {name: "Blog", route:"/blog"},
    {name: "About", route:"/about"}
]

export const NAV_LINKS_LIST = MAIN_LINKS_LIST.filter(link => ['Home', 'Blog', 'About'].includes(link.name));
