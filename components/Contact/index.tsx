import Mapbox from "./mapbox";
import SectionTitle from "../Common/SectionTitle";
const Contactbox = ({ heading,content}:{ heading: string,content: string})=>{
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 ">
        <div className="mb-8">
          <div className="mb-3 block text-xl font-medium text-dark dark:text-yellow">
            {heading}<hr/>
            </div>
            <div
            className="mb-3 block text-l font-medium text-yellow dark:text-white"
            >
            {content}<br/>
            </div> 
            </div>
            </div>
      </div> 
  )
} 
const Contact = () => {
  return(
    <section id="contact" className="overflow-hidden py-15 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp mb-12 rounded-md bg-primary/[8%] py-11 px-8 dark:bg-primary  dark:bg-opacity-20 sm:p-[55px] lg:mb-3 lg:px-8 xl:p-[55px]"data-wow-delay=".15s " >
            <SectionTitle title= "Contact Us" paragraph="For queries or further information feel free to contact us by following means." mb="50px"/>          
              
            <Contactbox heading="ADDRESS" content="Golden Jubilee Hall Panjab University,Sector-14 Chandigarh"/>
            <Contactbox heading="PHONE" content="Muhammad Suhaib: +91 70143 37368"/>
            <Contactbox heading="EMAIL" content="sfdpulug@gmail.com"/>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <center><Mapbox /></center>
          </div>
    </div>
  </div>  
 </section>
  )}



export default Contact;
