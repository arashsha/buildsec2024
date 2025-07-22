import React from "react";

type Props = {
  data: {
    event: string;
    date: string;
  }[];
};

const KeyDates = (props: Props) => {
  return (
    <section id="key-dates" className="md:w-1/2 mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 text-center">
        Key Dates
      </h1>
      <div className="mt-6 pl-0">
        <p className="font-bold text-center">*** NO FURTHER EXTENSION ***</p>
        <div className="relative flex flex-col md:flex-row justify-between items-start border-l md:border-l-0 md:border-t border-gray-200 dark:border-gray-700">
          <div className="absolute -left-2 top-[0.2vh] md:-top-2 md:left-[35vw] md:-ml-2">
            <div className="h-4 w-4 rounded-full bg-red-500" />
          </div>
          {props.data.map((keyDate) => (
            <div
              key={keyDate.date}
              className="mb-4 md:mb-8 flex flex-col sm:flex-row sm:items-center md:w-48 hover:bg-gray-100 p-4 transition-all duration-200 hover:dark:bg-neutral-700 dark:text-gray-100"
            >
              <div className="flex-1 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {keyDate.event}
                </h3>
                <p className="mt-2 text-gray-600 text-sm dark:text-gray-400">
                  {keyDate.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyDates;