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
        <div className="max-w-6xl mx-auto">{children}</div>
      </div>
    </section>
  );
};

export default wrapper;
