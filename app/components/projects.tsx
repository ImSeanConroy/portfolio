import Section from "@/app/components/section";

const data = [
  {
    title: "Disturbance Free Calling",
    description:
      "Minimising disturbances to enable productive remote work — Designed and prototyped an ESP32 microcontroller-based device, integrated with AWS IoT cloud, to improve productivity by reducing disturbances during remote work. Leveraged AWS API Gateway, AWS Lambda, KiCad, Arduino, Fusion 360, and 3D printing.",
    link: "https://github.com/ImSeanConroy/disturbance-free-calling",
  },
  {
    title: "Macro Keyboards",
    description:
      "Minimal Layout, Maximum Efficiency — A collection of macro keyboards to boost productivity without crowding your workspace.",
    link: "https://github.com/ImSeanConroy/macro-keyboard",
  },
];

const Projects = () => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Side Projects</h2>
      {data.map((item) => (
        <div className="flex flex-col gap-3 py-2" key={item.title}>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm hover:underline">
              <a href={item.link}>{item.title}</a>
            </h3>
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
