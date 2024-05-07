import { Slot } from "@/types/slot";
import { Day } from "@/types/day";
import SectionTitle from "../Common/SectionTitle";
import DayData from "./dayData";

const Schedule = () => {
    return (
        <>
            <section
            id="schedule"
            className="bg-primary/[.03] py-4 md:py-5 lg:py-7"
            >
                <div className="container">        
                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
                        {DayData.map((day) => (
                            <SingleDay key={day.id} day={day} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Schedule;

const SingleDay = ({ day }:{ key:number, day: Day })=>{
    const { id, date, content } = day;
    const dayNum = `Day ${id}`;
    return (
        <>
            <section
            className="bg-primary/[.03] py-4 md:py-5 lg:py-7"
            >
                <div className="container">
                    <SectionTitle
                    title={dayNum}
                    paragraph={date}
                    mb="40px"
                    center
                    />
                    <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-1 lg:grid-cols-1">
                        {content.map((slot) => (
                            <SingleSlot key={slot.id} slot={slot} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

const SingleSlot = ({ slot }: { key:number, slot: Slot }) => {
    const { time, name } = slot;
    return (
        <div>
            <div >{time}</div>
            <div>{name}</div>
            <hr className="w-80"/>
        </div>
    )
}