import SectionTitle from "../Common/SectionTitle";
import SingleSpeakers from "./SingleSpeakers";
import speakersData from "./speakersData";

const Speakers = () => {
  return (
    <section id="speakers" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Speakers"
          paragraph=" "
          center
        />

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
          {speakersData.map((speakers) => (
            <div key={speakers.id} className="w-full">
              <SingleSpeakers speakers={speakers} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
