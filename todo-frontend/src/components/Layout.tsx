import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  userLoggedIn: boolean;
}

export default function Layout({ children, userLoggedIn}: LayoutProps ) {
  return (
    <div>
        <Navbar userLoggedIn={userLoggedIn} />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
