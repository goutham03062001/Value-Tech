import React,{useEffect} from 'react';
import Aos from 'aos'
import Card from './Card'
const Services = () => {
    useEffect(()=>{
        Aos.init({
            duration:200
        });
    });
    const data = [
        {
            title : "Web Development",
            desc : "description"
        },
        {
            title:"App Development",
            desc : "description"
        },
        {
            title : "Graphic Design",
            desc : "description"
        },
        {
            title:"IOT",
            desc : "description"
        },
        {
            title : "Technical Support",
            desc  : "description"
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