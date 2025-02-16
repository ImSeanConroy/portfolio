import Section from "@/app/components/ui/section";

const data = [
  {
    role: "Software Engineer",
    company: "Cisco",
    date: "August 2023 – Present",
    keyAchivements: true,
    description:
      "Designed, developed, tested, and debugged software applications while collaborating with experienced engineers to deliver high-quality solutions. Authored and maintained comprehensive technical documentation for software projects, and performed unit testing and debugging to ensure optimal software performance and reliability. Key achievements include:",
    points: [
      [
        "Contributed towards the development and enhancement of Terraform providers, adding support for ",
        <strong key="terraform">143+ distinct resource and data sources</strong>,
        " utilising GoLang."
      ],
      [
        "Designed and optimised CI/CD pipelines using Jenkins, GitLab, and GitHub Actions with ",
        <strong key="ci">pipeline&apos;s codebase being reduced by 78%</strong>,
        "."
      ],
      [
        "Diagnosed and resolved ",
        <strong key="issues">59+ issues</strong>,
        " related to provider functionality, performance, and compatibility."
      ]
    ]
  },
  {
    role: "Degree Apprentice",
    company: "Cisco",
    date: "July 2020 – August 2023",
    description:
      "Worked on a variety of rotations within different areas of the company, key role include:",
    points: [
      [
        <strong key="frontend">Frontend Engineer:</strong>,
        " Developed new features within the ThousandEyes frontend platform, while resolving customer bugs helping to improve usability and customer experience, utilising Vue.js and Typescript."
      ],
      [
        <strong key="backend">Backend Engineer:</strong>,
        " Developed APIs using Flask and Node.js, implemented unit testing with Pytest and Jest, and containerised services with Docker."
      ],
      [
        <strong key="cloud">Cloud Engineer:</strong>,
        " Assisted with the development of a GitHub-integrated Jenkins pipeline to test updated helm charts before deployment."
      ],
      [
        <strong key="mobile">Mobile Engineer:</strong>,
        " Developed a proof of concept to understand the technical requirements related to sending real-time notifications with Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNS)."
      ]
    ]
  }
];

const Experience = () => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Work Experience</h2>
      {data.map((item) => (
        <div className="flex flex-col gap-3 pt-2" key={item.role}>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-base">
            <h3 className="inline-flex font-semibold leading-none">
              {item.role} — {item.company}
            </h3>
            <p className="text-sm leading-none text-gray-500">{item.date}</p>
          </div>
          <div className="leading-relaxed antialiased text-pretty font-mono text-sm">
            {item.description}
          </div>
          {item.points.map((point, index) => (
            <div key={index} className="leading-relaxed antialiased text-pretty font-mono text-sm">
              {point.map((part, partIndex) => (
                <span key={partIndex}>{part}</span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </Section>
  );
};

export default Experience;
