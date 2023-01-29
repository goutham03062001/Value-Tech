import React,{useEffect} from 'react';
import Aos from 'aos';
import Card from './Card';
import WebDev from "../../Assets/webDev.jpg";
import AppDev from "../../Assets/AppDev.jpg";
import IOT from "../../Assets/IOT.jpg";
import GraphicDesign from "../../Assets/Graphic_Design.jpg";
import TechnicalSupport from "../../Assets/Technical.jpg";
const Services = () => {
    useEffect(()=>{
        Aos.init({
            duration:200
        });
    });
    const data = [
        {
            title : "Web Development",
            desc : "At Value Tech, we provide the complete web development for the educational academics such as colleges and schools . It includes ...",
            img : WebDev
        },
        {
            title:"App Development",
            img : AppDev,
            desc : "We develop the mobile apps for the schools and colleges to bring their entire system into online. Using our apps they can turn their institute ..."
        },
        {
            title : "Graphic Design",
            img : GraphicDesign,
            desc : "At Value Tech, we take care of your organization development and support. We help you to create modern posters , banners and logos. "
        },
        {
            title:"IOT",
            img : IOT,
            desc : "Bringing every possible electronic gadget on to IOT is our vision. At Value Tech , we helps organization to monitor their parameters in cloud."
        },
        {
            title : "Technical Support",
            img : TechnicalSupport,
            desc  : "Value Tech takes care about your organization technical issues and provides constant support. A lot of support roles are there …"
        }
    ]
  return (
    <div className="container services_ctn my-5">
        <div className='row  py-5'>
            <h3 className='text text-center text-muted my-5' data-aos = "fade-up">OUR SERVICES</h3>

                {
                    data.map(ele =>(
                        <>
                            <div className="col-lg-4 mt-5">
                            <Card obj = {ele} />
                            </div>
                        </>
                    ))
                }
        </div>
    </div>
  )
}

export default Services