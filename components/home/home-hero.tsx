import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import Wrapper from "@/components/wrapper";

const HomeHero = () => {
  return (
    <Wrapper sectionPadding="py-20 lg:py-24 text-center font-mono">
      <div className="flex flex-col justify-center items-center gap-3 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-sans">
          Effortless <span className="text-primary">AI Powered</span> Logos
        </h1>
        <p className="text-sm lg:text-base font-normal">
          🚀 Turn your ideas into{" "}
          <span className="text-primary font-medium">stunning logos</span> in
          seconds.{" "}
          <span className="font-medium text-primary">DesignBot&apos;s AI</span>{" "}
          crafts unique, professional logos tailored to your brand—fast, easy,
          and fully customizable.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <Button asChild>
            <Link href={"/create-logo"}>Get Started</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link
              href={"https://github.com/Suhelkhan12/Ai---logo"}
              target="_blank"
            >
              {" "}
              <Star className="text-yellow-400" /> on Github
            </Link>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeHero;
