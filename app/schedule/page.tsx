import Breadcrumb from "@/components/Common/Breadcrumb";
import Schedule from "@/components/Schedule";

const SchedulePage = () => {
    return (
        <>
            <Breadcrumb pageName="Schedule" description="The Schedule to be followed for the event is given below." />
            <Schedule />
        </>
    );
};

export default SchedulePage;
