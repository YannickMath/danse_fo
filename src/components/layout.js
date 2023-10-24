import Drawer from "./drawer";
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
    <div >
      <Drawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setisDrawerOpen}
        toggleDrawer={toggleDrawer}
        toggleEcommerce={toggleEcommerce}
        isDrawerOpenEcommerce={isDrawerOpenEcommerce}
        className="h-1/6 w-100% "
      />
      <main
      className="p-2"

      >{children

      }</main>
      <Footer className="h-0.5/6 " />
    </div>
  );
}
