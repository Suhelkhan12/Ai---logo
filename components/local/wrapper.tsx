import React from "react";

const wrapper = ({
  children,
  sectionPadding,
}: {
  children: React.ReactNode;
  sectionPadding?: string;
}) => {
  return (
    <section className={`${sectionPadding}`}>
      <div className="px-4 lg:px-10">
        <div className="container mx-auto">{children}</div>
      </div>
    </section>
  );
};

export default wrapper;
