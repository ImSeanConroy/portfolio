import Section from "@/app/components/ui/section";

const data = [
  {
    role: "Junior Software Engineer",
    company: "Cisco",
    date: "August 2023 – Present",
    description:
      "Contributed towards the development and enhancement of Terraform providers, adding support for 143+ distinct resource and data sources utilising GoLang. Also diagnosed and resolved 56+ issues related to provider functionality, performance, and compatibility. Additionaly, Designed and optimised CI/CD pipelines using Jenkins, GitLab, and GitHub Actions. One pipeline's codebase was reduced by 78% resulting in enhanced performance and maintainability.",
  },
  {
    role: "Degree Apprentice",
    company: "Cisco",
    date: "July 2020 – August 2023",
    description:
      "Selectively rotated through six areas of the business, including ThousandEyes, DevNet, and Webex Cloud Engineering. Developed a variety of new frontend features within the ThousandEyes platform, while also resolving customer bugs, helping improve usability and customer experience, utilising Vue.js and Typescript. Assisted with the development of a GitHub-integrated Jenkins pipeline to test updated helm charts before deployment to reduce the likelihood of broken charts impacting production services.",
  },
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
        </div>
      ))}
    </Section>
  );
};

export default Experience;
