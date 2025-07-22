import React from "react";

type Props = {
  data: {
    time: string;
    event: string;
  }[]
};

const parseBoldText = (text) => {
  const boldTextPattern = /\*\*(.*?)\*\*/g;
  const parts = text.split(boldTextPattern);

  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
};

const Schedule = (props: Props) => {
  return (
    <section
      id="program"
      className="text-left flex flex-col justify-center items-center whitespace-normal whitespace-break-spaces"
    >
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 text-center">
        Program (Draft)
      </h1>
      <table className="min-w-full table-auto bg-white dark:bg-neutral-900  border-gray-300">
        <thead>
          <tr className="bg-gray-200 dark:bg-neutral-700 text-black dark:text-gray-100  uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left text-wrap">Time</th>
            <th className="py-3 px-6 text-left text-wrap">Event</th>
          </tr>
        </thead>
        <tbody className="text-black dark:text-gray-100 text-md text-wrap whitespace-normal whitespace-break-spaces">
          {
            props.data.map((schedule) => (
              <tr key={schedule.event} className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700 text-wrap">
                <td className="font-mono py-3 px-4 md:px-6 whitespace-break-spaces text-left text-wrap md:text-nowrap md:whitespace-nowrap">
                  {schedule.time}
                </td>
                <td className="py-3 px-3 md:px-6 text-left text-wrap">{parseBoldText(schedule.event)}</td>
              </tr>
            ))
          }
          {/* <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              8:30 - 16:00
            </td>
            <td className="py-3 px-6 text-left text-wrap  ">Registration</td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-wrap whitespace-nowrap ">
              8:30 - 9:00
            </td>
            <td className="py-3 px-6 text-left text-wrap  ">Welcome Coffee</td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              9:00 - 9:15
            </td>
            <td className="py-3 px-6 text-left text-wrap  ">Opening Remarks</td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              9:15 - 9:45
            </td>
            <td className="py-3 px-6 text-left text-wrap  ">
              **Keynote 1:** **Lieutenant General Michelle McGuinness**,
              National Cyber Security Coordinator at Department of Home Affairs
              Australia.
            </td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              9:45 - 10:00
            </td>
            <td className="py-3 px-6 text-left text-wrap">
              **Keynote 2:** **Giovanni Chiarelli**, Group Chief Technology
              Officer at TPG Telecom Australia.
            </td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap ">
              10:00 - 10:30
            </td>
            <td className="py-3 px-6 text-left text-wrap">
              Morning Coffee Break
            </td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              10:30 - 13:00
            </td>
            <td className="py-3 px-6 text-left text-wrap">
              Initiative Presentations (5-10 Mins Per initiative, Hybrid)
            </td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-wrap whitespace-nowrap">
              12:00 - 13:00
            </td>
            <td className="py-3 px-6 text-left text-wrap  ">
              **Panel 1:** Post-Quantum Cryptography (PQC) Adoption for
              Communications (Moderator: Lee Barney, General Manager Technology
              Security at TPG Telecom Australia, Panellists: Dr. Surya Nepal,
              Senior Principal Research Scientist at CSIRO Data61 Australia,
              Kiranmai Akidi, Business Relationship Manager at Tata Consultancy
              Services Australia, Rizwan Mahmood, Chief Technology Officer &
              Founder at GuardWare Australia)
            </td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              13:00 - 14:00
            </td>
            <td className="py-3 px-6 text-left text-wrap">Networking Lunch</td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              14:00 - 15:00
            </td>
            <td className="py-3 px-6 text-left text-wrap">
              **Panel 2:** Weaponization of AI and the Digital Arms Race
              (Moderator: Prof. Sanjay Jha, Director of Research and Innovation
              at School of Computer Science and Engineering UNSW Australia,
              Panellists: Richard Searle, Chief AI Officer at Fortanix United
              Kingdom, Stuart Peck, Head of Attack & Respond at TPG Telecom
              Australia, Prof. Ganna Pogrebna, Executive Director – Artificial
              Intelligence and Cyber Futures Institute at Charles Sturt
              University Australia)
            </td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              15:00 - 15:30
            </td>
            <td className="py-3 px-6 text-left text-wrap">
              Afternoon Coffee Break
            </td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              15:30 - 16:30
            </td>
            <td className="py-3 px-6 text-left text-wrap">
              **Panel 3:** Security of Critical Infrastructure (SOCI)
              (Moderator: TBC, Panellists: Prof. Helge Janicke, Deputy CEO and
              Research Director at Cyber Security Cooperative Research Centre
              (CSCRC) Australia, Dr. Susanne Lloyd-Jones, CSCRC Post Doctoral
              Fellow at UNSW Allens Hub for Technology, Law and Innovation
              Australia, Nick Ellsmore, Partner – Cyber at Mantel Group
              Australia, TBC)
            </td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              15:30 - 16:30
            </td>
            <td className="py-3 px-6 text-left text-wrap">
              **Panel 4:** Lessons from General Data Protection Regulation
              (GDPR) and Avoiding Mistakes in Data Privacy Regulation
              (Moderator: TBC, Panellists: Dr. Jodie Siganto, Director at
              Privacy 108 Consulting Australia, Dr. Tatiana Bokareva, Principal
              Data Scientist at Teradata Australia, TBC)
            </td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              16:30 - 16:45
            </td>
            <td className="py-3 px-6 text-left text-wrap">Closing Remarks</td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-700">
            <td className="font-mono py-3 px-6 text-left text-nowrap whitespace-nowrap">
              16:45 - 18:00
            </td>
            <td className="py-3 px-6 text-left text-wrap">Networking Drinks</td>
          </tr> */}
        </tbody>
      </table>
    </section>
  );
};

export default Schedule;
