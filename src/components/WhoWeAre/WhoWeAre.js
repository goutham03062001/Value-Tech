import React,{useEffect} from 'react'; 
// import  profile from "../../Assets/profile-pic.png";
import Left from './Left';
import AOS from "aos";
const WhoWeAre = () => {
    useEffect( ()=>{
        AOS.init({
            duration:3000,
            offset:200
        })
    },[]);
  return (
    <div className='container my-5 who_we_are_ctn '>
        <div className='row py-5'>
        <h3 className='text text-center text-muted my-5 our-clients' data-aos="fade-up">WHO WE ARE </h3>
            <div className='col-lg-11 col-12 col-sm-12 col-md-6 p-5'>
                <Left/>
            </div>
            
        </div>
    </div>
  )
}

export default WhoWeAre