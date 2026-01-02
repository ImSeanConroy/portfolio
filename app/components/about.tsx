import React from "react";

const sections = [
  {
    title: "Production-Focused Engineering",
    description:
      "Hands-on experience building and supporting production systems at scale. I focus on writing reliable, maintainable software that fits cleanly into existing architectures while leaving systems better than I found them.",
  },
  {
    title: "Broad, Real-World Experience",
    description:
      "Experience across backend, frontend, cloud, and infrastructure through real-world projects at Cisco. From Go and Python services to Terraform, CI/CD pipelines, and frontend features, I’ve worked across the stack in cross-functional teams.",
  },
  {
    title: "Thoughtful, Impactful Delivery",
    description:
      "I care about solving the right problems, not just shipping code. I enjoy breaking down complex systems, improving reliability and developer experience, and delivering meaningful improvements quickly and clearly.",
  },
];

const About = () => {
  return (
    <div className="w-[35%] m-auto mt-24 pb-36">
      <h2 className="text-4xl font-bold tracking-tight leading-tight mb-16">
        Hi, I&apos;m Sean Conroy,
        <br />A software engineer from Manchester, United Kingdom.
      </h2>

      <div className="flex flex-col gap-12">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold tracking-tight leading-tight mb-4">
              {section.title}
            </h3>
            <p className="text-md dark:text-gray-400">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
