import Section from "@/app/components/ui/section";

const data = [
  {
    title: "Disturbance Free Calling",
    subtitle: "Minimising Disturbance to enable Productive Remote Work:",
    description:
      "Developed and prototyped an ESP32-based IoT device, implementing secure MQTT communication with AWS IoT Core for reliable data transition. Integrated Webex webhooks for real-time, event-driven notifications. Designed and deployed a serverless backend using AWS Lambda, exposed via AWS API Gateway, with all infrastructure provisioned and managed using Terraform for repeatable and scalable deployments.",
    link: "https://github.com/ImSeanConroy/disturbance-free-calling",
  },
];

const Projects = () => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Side Projects</h2>
      {data.map((item) => (
        <div className="flex flex-col gap-3 py-2" key={item.title}>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-base">
          <h3 className="inline-flex font-semibold leading-none">
          <a href={item.link} className="font-semibold hover:underline" target="_blank">{item.title}</a>
          </h3>
          <p className="text-sm leading-none text-gray-500">
          {item.subtitle}
          </p>
        </div>

          <div className="leading-relaxed antialiased text-pretty font-mono text-sm">
            {item.description}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Projects;
