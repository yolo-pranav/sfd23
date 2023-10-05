import SectionTitle from "../Common/SectionTitle";
// import  from "./Day";
import DayData from "./dayData";

const Schedule = () => {
    return (
        <>
            <section
            id="days"
            className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
            >
                <div className="container">
                    <SectionTitle
                    title=" Schedule "
                    paragraph=" "
                    center
                    />
        
                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {/* {DayData.map((slot) => (
                            // <SingleSlot key={slot.id} Slot={slot} />
                        ))} */}
                    </div>
                </div>
            </section>
        </>
    );
  };
  
  export default Schedule;
  