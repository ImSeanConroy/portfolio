import React from "react";

const sections = [
  {
    title: "Production Engineering Experience",
    description:
      "Hands-on experience building, operating, and supporting production systems at scale within enterprise environments. I focus on delivering reliable, maintainable software that integrates cleanly into existing architectures while improving system performance and long-term stability.",
  },
  {
    title: "Technologies, Tools & Certifications",
    description:
      "Strong experience across backend, frontend, cloud, and infrastructure. Proficient in Python, Go, TypeScript, and JavaScript, with hands-on work using Terraform, AWS, Docker, Kubernetes, CI/CD pipelines, and modern frontend frameworks. AWS Certified Cloud Practitioner and HashiCorp Terraform Associate.",
  },
  {
    title: "Continuous Learning & Exploration",
    description:
      "Actively expanding my skills beyond day-to-day work through continuous learning in AI and LLM integration, electronics, PCB design, and robotics. I enjoy experimenting with hardware, IoT systems, and emerging technologies to better understand how software and physical systems interact.",
  },
];

const About = () => {
  return (
    <div className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[45%]  xl:w-[35%] max-w-[550px] m-auto mt-24 pb-36 p-2">
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-16">
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
