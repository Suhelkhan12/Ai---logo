import { LogoDataDesign, ChangeLogoData } from "./logo-data-design";
import GenerateLogo from "./generate-logo";

const LogoData = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-extrabold font-sans text-primary">
        Data entered for generating logo
      </h1>
      <p className="text-base md:text-lg mt-2">
        Below is the information you provided to generate your logo.
      </p>

      <LogoDataDesign />

      <div className="mt-10 flex items-center justify-center gap-10">
        <ChangeLogoData />
        <GenerateLogo />
      </div>
    </>
  );
};

export default LogoData;
