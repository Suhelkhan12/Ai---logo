import React from "react";
import Wrapper from "./wrapper";
import { Button } from "../ui/button";
import Link from "next/link";

const navbar = () => {
  return (
    <nav className="bg-primary/5 border-b">
      <Wrapper sectionPadding="py-5">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="font-bold font-mono text-xl">
            🤖 DesignBot
          </Link>
          <Button asChild>
            <Link href={"/"} className="font-sans">
              Get Started
            </Link>
          </Button>
        </div>
      </Wrapper>
    </nav>
  );
};

export default navbar;
