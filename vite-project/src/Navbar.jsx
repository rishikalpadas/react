import React from "react";
import Pages from "./components/Pages";

const Navbar = () => {
  return (
    <>
      <Pages
        page1={"Home"}
        page2={"About"}
        page3={"Services"}
        page4={"Contact"}
      />
    </>
  );
};

export default Navbar;
