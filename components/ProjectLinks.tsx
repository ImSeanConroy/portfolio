import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ProjectLinks = ({
  textOne,
  textTwo,
  LinkOne,
  LinkTwo,
}: {
  textOne: string;
  textTwo: string;
  LinkOne: string;
  LinkTwo: string;
}) => {
  return (
    <div>
      <div className="w-full px-5 md:px-10 my-16 md:my-24 text-3xl md:text-3xl xl:text-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-14">
          <Link href={LinkOne} className="flex items-center">
            <BsChevronLeft />
            <p className=" font-semibold tracking-wide px-4">{textOne}</p>
          </Link>

          <Link href={LinkTwo} className="flex items-center">
            <p className="md:text-right font-semibold tracking-wide px-4">
              {textTwo}
            </p>
            <BsChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectLinks;
