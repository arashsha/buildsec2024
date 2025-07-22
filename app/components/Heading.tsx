import React from "react";

const Headinig = ({ data }) => {
  return (
    <section id="heading" className="md:w-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mt-6 mb-2 text-gray-900 dark:text-gray-100">
          {data.title}
        </h1>
        <h2 className="text-2xl font-medium tracking-tight mt-6 mb-2 text-gray-900 dark:text-gray-100">
          {data.subtitle}
        </h2>
        <p className="my-4 text-neutral-800 dark:text-neutral-200">
          {data.date}
        </p>
        <h2 className="text-xl font-medium tracking-tight mt-6 mb-2 text-gray-900 dark:text-gray-100">
          {data.sponsor}
        </h2>
      </div>
    </section>
  );
};

export default Headinig;
