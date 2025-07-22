import React from "react";

type Props = {
  data: {
    event: string;
    date: string;
  }[];
};

const KeyDates = (props: Props) => {
  return (
    <section id="key-dates" className="md:w-full">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 text-center">
        Key Dates
      </h1>
      <div className="mt-6 pl-0">
        <div className="relative flex flex-col md:flex-row justify-between items-start border-l md:border-l-0 md:border-t border-gray-200 dark:border-gray-700">
          <div className="absolute -left-2 top-[0.2vh] md:-top-2 md:left-[63vw] md:-ml-2">
            <div className="h-4 w-4 rounded-full bg-red-500" />
          </div>
          {props.data.map((keyDate) => (
            <div
              key={keyDate.date}
              className="mb-4 md:mb-8 flex flex-col sm:flex-row sm:items-center md:w-48 hover:bg-gray-100 p-4 transition-all duration-200 hover:dark:bg-neutral-700 dark:text-gray-100"
            >
              <div className="flex-1 ">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {keyDate.event}
                </h3>
                <p className="mt-2 text-gray-600 text-sm dark:text-gray-400">
                  {keyDate.date}
                </p>
              </div>
            </div>
          ))}
          {/* <div className="mb-8 flex flex-col sm:flex-row sm:items-center w-48 hover:bg-gray-100 p-4 transition-all duration-200 hover:dark:bg-neutral-700 dark:text-gray-100">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 ">
                Paper submission deadline
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                May 1, 2024, 11:59 pm Anywhere on Earth (UTC-12)
              </p>
            </div>
          </div>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center w-48 hover:bg-gray-100 p-4 transition-all duration-200 hover:dark:bg-neutral-700 dark:text-gray-100">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Paper submission deadline (extended)
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 break-words">
                May 18, 2024, 11:59 pm Anywhere on Earth (UTC 12)
              </p>
            </div>
          </div>

          <div className="mb-8 flex flex-col sm:flex-row sm:items-center w-48 hover:bg-gray-100 p-4 transition-all duration-200 hover:dark:bg-neutral-700 dark:text-gray-100">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Notification of acceptance
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Jul 1, 2024
              </p>
            </div>
          </div>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center w-48 hover:bg-gray-100 p-4 transition-all duration-200 hover:dark:bg-neutral-700 dark:text-gray-100">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Final camera-ready paper due
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Jul 17, 2024
              </p>
            </div>
          </div>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center w-48 hover:bg-gray-100 p-4 transition-all duration-200 hover:dark:bg-neutral-700 dark:text-gray-100">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Early-bird Registration ends
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Aug 2, 2024
              </p>
            </div>
          </div>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center w-48 hover:bg-gray-100 p-4 transition-all duration-200 hover:dark:bg-neutral-700 dark:text-gray-100">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Industry day
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Aug 28, 2024
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default KeyDates;
