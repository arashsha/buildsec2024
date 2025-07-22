import React from "react";
import Tracks from "../components/Tracks";
import tracks from "../data/posters_tracks.json";
import Accordion from "app/components/Accordion";
import KeyDates from "app/components/PostersKeyDates";

const keyDatesData = [
  { event: "Paper submission", date: "August 30, 2024" },
  { event: "Notifications", date: "September 16, 2024" },
  { event: "Camera-ready", date: "October 4, 2024" }
];

const poster_track = [
  {
    name: "Poster Track",
    info: [
      "Suggested Topics of Interest but not limited to:",
      ["Large-scale security measurements,"],
      ["Security in web-based applications and services"],
      ["Cybercrime defenses and forensics"],
      ["Security and Privacy in Social Networks"],
      ["Software Security"],
      ["Systems Security"],
      ["Malware and Unwanted Software"],
      ["Phishing and Spam Prevention"]
    ]
  },
];

const doctoral_track = [
  {
    name: "Doctoral Track",
    info: [
      "Suggested Topics of Interest but not limited to:",
      ["Zero Trust Security Models: Implementation and Challenges"],
      ["Machine Learning Techniques for Intrusion Detection Systems"],
      ["Blockchain Technology for Enhancing Data Integrity and Security"],
      ["Quantum Cryptography: The Future of Secure Communications"],
      ["Privacy-Preserving Data Mining in Big Data Analytics"],
      ["AI in Cybersecurity: Benefits, Risks, and Ethical Considerations"],
      ["Advanced Persistent Threats: Detection, Prevention, and Mitigation Strategies"],
      ["Security and Privacy Issues in the Internet of Things (IoT)"],
      ["Enhancing Cloud Security through Homomorphic Encryption"],
      ["Biometric Authentication Systems: Security and Privacy Implications"],
      ["Threat Intelligence: Leveraging Big Data for Proactive Cyber Defense"],
      ["Cyber-Physical System Security: Challenges and Solutions"],
      ["Secure Multi-Party Computation: Techniques and Applications"],
      ["Secure Software Development Lifecycle: Best Practices and Case Studies"],
      ["Social Engineering Attacks: Prevention and Response Strategies"],
      ["Securing Critical Infrastructure: Strategies and Technologies"],
      ["Blockchain-Based Identity Management Systems"],
      ["Post-Quantum Cryptography: Preparing for the Quantum Threat"],
      ["Privacy and Security in Smart Grid Technologies"],
      ["Ransomware Detection and Mitigation Techniques"],
      ["Security and Privacy Issues in Blockchain and Distributed Ledger"],
      ["Security Vulnerabilities in Smart Contracts"],
      ["Formal Methods for Security Analysis and Verification"]
    ]    
  },
];

type Props = {};

const Posters = (props: Props) => {
  return (
    <div className="px-6 md:px-20 mb-10">
      <div className="w-full flex justify-center">
        <img 
          src= "/my-image.jpg" 
          alt="Banner Details" 
          className="w-200xl md:w-200xl lg:w-200xl h-auto" 
        />
      </div>
      <h1 className="text-center">Posters and Doctoral Colloquium</h1>
      <Accordion track={tracks.poster_track} />
      <p>
        Poster papers (maximum 2 pages plus references) should present work in
        progress, including recent viewpoints, discoveries, and early-stage
        design and development in an informal setting.
      </p>
      <Accordion track={tracks.doctoral_track} />
      <p>
        Doctoral track papers (maximum 2 pages plus references) provide a
        supportive setting for PhD students (who must be the first author) to
        discuss their problem statement, methods, and results, obtain feedback
        from established researchers and establish contacts for entering the job
        market.
      </p>

    <KeyDates data={keyDatesData} />
        Posters and Doctoral track papers Submission:{" "}
        <a href="https://easychair.org/conferences/?conf=buildsec2024" className="text-blue-600 hover:text-blue-800">
  Easychair Link
        </a>
    </div>

  );
};

export default Posters;