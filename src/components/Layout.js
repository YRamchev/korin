import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "fontsource-open-sans";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
