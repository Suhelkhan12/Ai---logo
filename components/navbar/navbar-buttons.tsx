"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

const NavabarButtons = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" ? (
        <Button asChild>
          <Link href={"/create-logo"} className="font-sans">
            Get Started
          </Link>
        </Button>
      ) : (
        <Button variant={"outline"} asChild className="font-mono">
          <Link
            href={"https://github.com/Suhelkhan12/Ai---logo"}
            target="_blank"
          >
            {" "}
            <Star className="text-yellow-400" /> on Github
          </Link>
        </Button>
      )}
    </>
  );
};

export default NavabarButtons;
