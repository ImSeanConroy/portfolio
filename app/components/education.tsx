import Section from "@/app/components/ui/section";

const Education = () => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Education & Certification</h2>
      <div className="flex flex-col gap-3 pt-2">
        <h3 className="inline-flex font-semibold leading-5 sm:leading-none">
          Bachelor of Science with First Class Honors in Digital & Technology
          Solutions
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3 text-base">
          <div className="leading-relaxed antialiased text-pretty font-mono text-sm hidden sm:block">
            University of Roehampton
          </div>
          <p className="text-sm leading-none text-gray-500">
            October 2020 – December 2023
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-2">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-base">
          <h3 className="inline-flex font-semibold leading-none">
            AWS Certified Cloud Practitioner Certification
          </h3>
          <p className="text-sm leading-none text-gray-500">September 2024</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-2">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-base">
          <h3 className="inline-flex font-semibold leading-none">
            Cisco Certified DevNet Associate Certification
          </h3>
          <p className="text-sm leading-none text-gray-500">
            In Progress: Expected January 2025
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Education;
