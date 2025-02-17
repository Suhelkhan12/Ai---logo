import React from "react";

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" lg:py-20 md:py-14 py-8">
      <div className="px-4 lg:px-10">
        <div className="container mx-auto">{children}</div>
      </div>
    </section>
  );
};

export default wrapper;
