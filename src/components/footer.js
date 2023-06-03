import React from "react";
import Theme from "./theme";
import Link from "next/link";

const Footer = () => {
  const YEAR = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer className=" dark:bg-shaikhu w-full py-4">
        <div className="max-w-xs mx-auto">
          <div className="pt-8 flex mx-auto items-center justify-between px-24">
            <Link href="/" className=" link">
              Home
            </Link>

            <Link href="/blog" className="link">
              Blog
            </Link>
            <Theme />
          </div>
          <div className="flex px-24">
            <Link href="/" className="text-xs text-gray-500 pt-4">
              {`© ${YEAR} NextAuthDemo`}
            </Link>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
