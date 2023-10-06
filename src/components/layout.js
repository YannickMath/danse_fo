import Navbar from "./navbar";
import Footer from "./footer";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [isDrawerOpen, setisDrawerOpen] = useState(true);
  const [isDrawerOpenEcommerce, setisDrawerOpenEcommerce] = useState(false);

  const toggleDrawer = () => {
    setisDrawerOpen(!isDrawerOpen);
  };
  console.log("LayoutisDrawerOpen: ", isDrawerOpen);

  const toggleEcommerce = () => {
    setisDrawerOpenEcommerce(!isDrawerOpenEcommerce);
    console.log("isDrawerOpenEcommerce: ", isDrawerOpenEcommerce);
  };

  return (
    <>
      <Navbar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setisDrawerOpen}
        toggleDrawer={toggleDrawer}
        toggleEcommerce={toggleEcommerce}
        isDrawerOpenEcommerce={isDrawerOpenEcommerce}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
