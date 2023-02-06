import type { IconType } from 'react-icons';
import { FaBlog, FaCode, FaHome, FaSuitcase, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
export type NavItems = {
    label: string;
    href: string;
    icon?: IconType;
    children?: NavItems[];
};

export const navigation: NavItems[] = [
    {
        label: 'Home',
        href: '/',
        icon: FaHome,
    },
    {
        label: 'Professional Journey',
        href: '/professional-journey',
        icon: FaSuitcase,
    },
    {
        label: 'Projects',
        href: '/projects',
        icon: FaCode,
    },
    {
        label: 'Blog',
        href: '/blog',
        icon: FaBlog,
    },
    {
        label: 'Courses',
        href: '/courses',
        icon: FaGraduationCap,
    },
    {
        label: 'Contact',
        href: '/contact',
        icon: FaEnvelope,
    },
];