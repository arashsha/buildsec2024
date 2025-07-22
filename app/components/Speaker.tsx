import React from "react";

type Props = {
  data: {
    "name": string;
    "title": string;
    "organization": string;
    "bio": string;
    "image": string;
  }[];
};

const Speaker = (props: Props) => {
  return (
    <section id="speakers">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 text-center">
        Speakers
      </h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          props.data.map((speaker) => (
            <div key={speaker.name} className="bg-white dark:bg-gray-800 hover:bg-gray-100 transition-all duration-200 outline outline-1 outline-gray-200 dark:outline-gray-700 p-6 flex flex-col items-center dark:bg-neutral-900 hover:dark:bg-neutral-700 dark:text-gray-100">
              <img
                alt={speaker.name}
                className="rounded-full"
                height={120}
                src={speaker.image}
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <h3 className="mt-4 text-lg text-center font-semibold text-gray-900 dark:text-gray-100">
                {speaker.name}
              </h3>
              <p className="mt-2 mb-4 text-gray-400 italic dark:text-gray-400">
                {speaker.title} | {speaker.organization}
              </p>
              <p>
                {speaker.bio}
              </p>
            </div>
          ))
        }
        {/* <div className="bg-white dark:bg-gray-800 hover:bg-gray-100 transition-all duration-200 outline outline-1 outline-gray-200 dark:outline-gray-700 p-6 flex flex-col items-center dark:bg-neutral-900 hover:dark:bg-neutral-700 dark:text-gray-100">
          <img
            alt="Speaker 1"
            className="rounded-full"
            height={120}
            src="/logo.jpeg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Dr. Emily Johnson
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Professor of Computer Science
          </p>
          <p>
            I am a AI Research Scientist at Google Brain. I am interested in the intersection of machine learning and computer systems.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 hover:bg-gray-100 transition-all duration-200 outline outline-1 outline-gray-200 dark:outline-gray-700 p-6 flex flex-col items-center dark:bg-neutral-900 hover:dark:bg-neutral-700 dark:text-gray-100">
          <img
            alt="Speaker 2"
            className="rounded-full"
            height={120}
            src="/logo.jpeg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Dr. Michael Lee
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            AI Research Scientist
          </p>
          <p>
            I am a AI Research Scientist at Google Brain. I am interested in the intersection of machine learning and computer systems.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 hover:bg-gray-100 transition-all duration-200 outline outline-1 outline-gray-200 dark:outline-gray-700 p-6 flex flex-col items-center dark:bg-neutral-900 hover:dark:bg-neutral-700 dark:text-gray-100">
          <img
            alt="Speaker 3"
            className="rounded-full"
            height={120}
            src="/logo.jpeg"
            style={{
              aspectRatio: "120/120",
              objectFit: "cover",
            }}
            width={120}
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Dr. Sophia Patel
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Machine Learning Engineer
          </p>
          <p>
            I am a AI Research Scientist at Google Brain. I am interested in the intersection of machine learning and computer systems.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Speaker;
