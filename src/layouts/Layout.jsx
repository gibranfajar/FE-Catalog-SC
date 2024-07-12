import React from "react";
import { Navbar } from "../components/Navbar";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="relative min-h-screen">{children}</main>
    </React.Fragment>
  );
};
