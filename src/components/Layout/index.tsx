import { ReactNode } from "react";
import Footer from "../Footer";
import Nav from "../Navbar";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Nav/>
            {children}
            <Footer/>
        </>
    );
}