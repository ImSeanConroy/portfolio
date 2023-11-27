import type { Metadata } from "next";

import { PageMetadata } from "@/components";

export const metadata: Metadata = PageMetadata({
  title: "About — Sean Conroy",
  description:
    "Junior Software Engineer at Cisco, experience developing and maintaining large-scale projects. Explore portfolio to learm more.",
  keywords: [
    "ImSeanConroy",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "Cisco",
  ],
  link: "https://www.imseanconroy.co.uk/about",
  image: "https://www.imseanconroy.co.uk/other/socials.png",
});

const AboutPages = () => {
  return (
    <>
      <img className="large-image" src="/about/main.png" alt="" />
      <div className="body-section">
        <h1 className="subtitle">
          Developing and maintaining large-scale systems while building my own
          projects.
        </h1>
        <p className="paragraph">
          Currently, I am a Junior Software Engineer at Cisco, a global
          technology leader and powerhouse. At Cisco, I have had the opportunity
          to rotated through various areas of the business, gaining a wide
          variety of software development experience while contributing to multiple
          projects that implemented multiple programming languages and frameworks.
          However, what truly excites me is the opportunity to continually grow,
          and Cisco has been the perfect environment to nurture this passion.
        </p>
        <img className="body-image" src="/about/main.png" alt="" />
        <p className="paragraph">
          Outside my professional life, I am deeply fascinated with electronics.
          I have been immersing myself in hands-on projects involving Arduino,
          diving into the world of 3D printing, and building my own electronic
          devices from scratch. This endeavor is not just about technology; it
          is about the thrill of creating and understanding the nuances of how
          things work. I believe life, much like software development, is all
          about the experiences and the challenges you are brave enough to
          undertake. In this portfolio, you will discover a blend of my
          professional accomplishments and personal projects. I invite you to
          explore, and should you wish to discuss any collaborative
          opportunities or simply share a travel story or a recipe, please do
          not hesitate to reach out!
        </p>
      </div>
    </>
  );
};

export default AboutPages;
