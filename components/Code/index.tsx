import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Code = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section id="code" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container w-full px-4">
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          Software Freedom Day is dedicated to providing a harassment-free experience for everyone, regardless of gender, sexual orientation, gender identity, disability, physical appearance, body size, race, or religion. We invite attendees to come to SFD in a spirit of curiosity, friendliness, open-mindedness, and respect. Any kind of harassment will not be tolerated.<br />
        </p>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          <br />At the conference venue, you agree to:<br /><br />
        </p>
        <List text="Be kind and sensitive to the people around you and respect the boundaries of other attendees." />
        <List text="Attempt to resolve differences of opinions peacefully and appropriately for a professional environment." />
        <List text="Listen with empathy when someone has a different perspective and give suggestions for improvement." />
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          <br />This Code of Conduct applies to the venue of SFD 2022 Conference, pre-event and post-event informal gathering, and all events organized by the organizing committee of Software Freedom Day.<br />
        </p>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          <br />If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact someone from the organizing committee. Thank you for helping make this a welcoming, friendly event for all.
        </p>
      </div>
    </section>
  );
};

export default Code;
