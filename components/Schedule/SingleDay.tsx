import { Day } from "@/types/day";
import { Slot } from "@/types/slot";

const SingleDay=({day}:{day: Day})=>{
    return(
        <>
        </>
    )
}

export default SingleDay;

const SingleSlot = ({ slot }: { slot: Slot }) => {
    const { time, name } = slot;
    return(
        <div>
            <div >{time}</div>
            <div>{name}</div>
        </div>
    )
}
