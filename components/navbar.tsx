import React from "react";
import Wrapper from "./wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navbar = () => {
  return (
    <nav className="bg-primary/5 border-b sticky top-0 z-50">
      <Wrapper sectionPadding="py-3 md:py-4 lg:py-5">
        <div className="flex items-center justify-between">
          <Link
            href={"/"}
            className="font-bold font-mono text-base md:text-lg  lg:text-xl text-primary"
          >
            🤖 DesignBot
          </Link>
          <Button asChild>
            <Link href={"/create-logo"} className="font-sans">
              Get Started
            </Link>
          </Button>
        </div>
      </Wrapper>
    </nav>
  );
};

export default navbar;
