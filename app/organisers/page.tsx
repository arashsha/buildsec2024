import { CustomMDX } from "app/components/mdx";
import { getBlogPosts } from "app/utils/mdxParser";
import { notFound } from "next/navigation";
import path from "path";
import organisers from "../data/organisers.json";

type Organiser = {
  name: string;
  organisation: string;
};

export const metadata = {
  title: "Organisers",
  description: "Organisers page.",
};

const datapath = path.join(process.cwd(), "app", "organisers", "organisers");

const keyTitles: Record<string, string> = {
  GeneralChairs: "General Chairs",
  TechnicalProgramCommitteeChairs: "Technical Program Committee Chairs",
  AIandCybersecurityChairs: "AI and Cybersecurity Chairs",
  SecurityUsabilityandMeasurementChairs:
    "Security Usability and Measurement Chairs",
  SecurityofCriticalInfrastructureChairs:
    "Security of Critical Infrastructure Chairs",
  GovernanceRiskandComplianceChairs: "Governance, Risk and Compliance Chairs",
  PrivacyandTrustChairs: "Privacy and Trust Chairs",
  BlockchainChairs: "Blockchain Chairs",
  DoctoralColloquiumChairs: "Doctoral Colloquium Chairs",
  PosterChairs: "Poster Chairs",
  IndustryDayChairs: "Industry Day Chairs",
  PanelChair: "Panel Chair",
  PublicityChairs: "Publicity Chairs",
  InternationalAdvisory: "International Advisory",
  LocalChair: "Local Chair",
  SponsorshipChairs: "Sponsorship Chairs",
  PublicationChair: "Publication Chair",
  RegistrationChair: "Registration Chair",
  FinanceChair: "Finance Chair",
  WebChair: "Web Chair",
  DemoChair: "Demo Chair",
  StudentAwardChair: "Student Award Chair",
  ProgramCommitteeMembers: "Program Committee Members",
};

export default function Page() {
  let post = getBlogPosts(datapath).find((post) => post.slug === "organisers");

  if (!post) {
    notFound();
  }

  return (
    <section className="px-6 md:px-20 mb-10 w-full">
                  <div className="w-full flex justify-center">
        <img 
          src= "/my-image.jpg" 
          alt="Banner Details" 
          className="w-200xl md:w-200xl lg:w-200xl h-auto" 
        />
      </div>
      <h1 className="text-center">Organisers</h1>
          <h2 className="text-2xl font-medium tracking-tight mt-6 mb-4 text-gray-900 dark:text-gray-100">
            Organising Committee Members:
          </h2>
          <div className="md:flex md:flex-row md:space-x-8 md:justify-between">
            <div>
          {Object.keys(organisers.Group1).map((sectionKey) => (
            <div key={sectionKey} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {formatSectionTitle(sectionKey)}
              </h2>
              <ul className="list-disc list-inside">
                {organisers.Group1[sectionKey].map((member, index) => (
                  <li key={index}>
                    <span className="font-semibold">{member.name}</span>
                    {member.organisation && `, ${member.organisation}`}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
          <div>
          {Object.keys(organisers.Group2).map((sectionKey) => (
            <div key={sectionKey} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {formatSectionTitle(sectionKey)}
              </h2>
              <ul className="list-disc list-inside">
                {organisers.Group2[sectionKey].map((member, index) => (
                  <li key={index}>
                    <span className="font-semibold">{member.name}</span>
                    {member.organisation && `, ${member.organisation}`}
                  </li>
                ))}
              </ul>
            </div>
          ))}
                    </div>
          </div>
    </section>
  );
}

// Format the section titles for better readability
const formatSectionTitle = (sectionKey) => {
  return sectionKey
    .replace(/([A-Z])/g, " $1") // Adding spaces before capital letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalizing the first letter
    .trim();
};
