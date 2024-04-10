import { Building, ChevronDownIcon, ShieldCheck, Home, ListVideo, Menu, Mic2, Music, Play, RadioIcon, SquareStack, User, ShieldCheckIcon, Folder, Video, LocateIcon, MapPin, Users, BadgeCheckIcon, Network, Briefcase, UserSquare2Icon, BookText, FileText, UserCheck2, UserCog, Cog, Star, FileStack, SquareEqual } from "lucide-react";
// import { Home } from "lucide-react";

type Menu = {
    label: string
    name: string
    icon: React.ReactNode
    submenu?: Submenu[]
    href: string
}

type Submenu = {
    name: string
    icon: React.ReactNode
    href: string
}

// this is the most important thing
// Will be changed heavily till the end

export function  SidebarMenu() {
    const menus: Menu[] = [
        {
            label: "Discover",
            name: "My Summary",
            icon: <Home size={15} className="mr-2" />,
            href: "/og/home",
        },
        // {
        //     label: "Discover",
        //     name: "My team",
        //     icon: <Home size={15} className="mr-2" />,
        //     href: "/home",
        // },
        {
            label: "Discover",
            name: "Organisation",
            icon: <Building size={15} className="mr-2" />,
            href: "/og/organisation",
        },
        {
            label: "Supervisor",
            name: "Access Now",
            icon: <BadgeCheckIcon size={15} className="mr-2" />,
            href: "/og/supervision",
        },
        {
            label: "Listing",
            name: "Directories",
            icon: <Folder size={15} className="mr-2" />,
            href: "/og/directories",
            submenu: [
                {
                    name: "Courses",
                    icon: <Video size={15} className="mr-2" />,
                    href: "/og/directories/courses/",
                },
                {
                    name: "Locations",
                    icon: <MapPin size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "People",
                    icon: <Users size={15} className="mr-2" />,
                    href: "/og/directories/people/",
                },
                // {
                //     name: "Qualification",
                //     icon: <ListVideo size={15} className="mr-2" />,
                //     href: "/home/",
                // },
                {
                    name: "Roles",
                    icon: <Network size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "Skills",
                    icon: <Briefcase size={15} className="mr-2" />,
                    href: "/home/",
                },
                // {
                //     name: "Teams",
                //     icon: <ListVideo size={15} className="mr-2" />,
                //     href: "/home/",
                // },
            ],
        },
        {
            label: "Listing",
            name: "People Finder",
            icon: <UserSquare2Icon size={15} className="mr-2" />,
            href: "/home/playlist",
        },
        {
            label: "Listing",
            name: "Reports",
            icon: <BookText size={15} className="mr-2" />,
            href: "/home/playlist",
        },
        {
            label: "Listing",
            name: "Activity Logs",
            icon: <FileText size={15} className="mr-2" />,
            href: "/home/playlist",
        },
        {
            label: "Admin",
            name: "Administration",
            icon: <ShieldCheck size={15} className="mr-2" />,
            href: "/home/playlist",
            submenu: [
                // {
                //     name: "Authenticaton",
                //     icon: <ListVideo size={15} className="mr-2" />,
                //     href: "/home/",
                // },
                {
                    name: "Security Groups",
                    icon: <UserCog size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "Setting",
                    icon: <Cog size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "File Transfer",
                    icon: <FileStack size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "Rating Scheme",
                    icon: <Star size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "Course Mapping",
                    icon: <SquareEqual size={15} className="mr-2" />,
                    href: "/home/",
                }
            ],
        },
    ];
}