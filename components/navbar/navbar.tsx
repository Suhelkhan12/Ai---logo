import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
import NavabarButtons from "./navbar-buttons";

const navbar = () => {
  return (
    <nav className="bg-white border-b fixed w-full top-0 z-50">
      <Wrapper sectionPadding="py-3 md:py-4 lg:py-5">
        <div className="flex items-center justify-between">
          <Link
            href={"/"}
            className="font-bold font-mono text-base md:text-lg  lg:text-xl text-primary"
          >
            🤖 DesignBot
          </Link>
          <NavabarButtons />
        </div>
      </Wrapper>
    </nav>
  );
};

export default navbar;
