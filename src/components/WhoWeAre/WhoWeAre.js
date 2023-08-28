import React,{useEffect} from 'react'; 
// import  profile from "../../Assets/profile-pic.png";
import Profile from "../../Assets/Profile.jpeg"
import Left from './Left';
import Right from './Right';
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
            <div className='col-lg-7 col-12 col-sm-12 col-md-6'>
                <Left/>
            </div>
            <div className='col-lg-5 col-12 col-sm-12 col-md-6'>
               
                    <Right profile={Profile}/>
                    {/* <Right profile={secondProfile}/> */}
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre