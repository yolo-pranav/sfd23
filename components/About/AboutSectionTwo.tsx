import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="What is FOSS?"
                paragraph="Free and open-source software (FOSS) allows users and programmers to edit, modify or reuse the software's source code. This gives developers the opportunity to improve program functionality by modifying it. Software Freedom Day is an event held all across the world to celebrate the usage of Free and Open Source Software (FOSS). The event aims to sensitize students about the virtues of Open Source Software and encourages it usage."
                mb="44px"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
