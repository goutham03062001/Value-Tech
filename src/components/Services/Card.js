import React, {useEffect} from 'react';
import styles from "./card.module.css";
import "./card.css";
import AOS from "aos";
const Card = ({obj}) => {
    useEffect( ()=>{
        AOS.init({
            duration:2000,
            offset:100
        })
    },[])
    var isBootstrapCard = true;
  return (
   <>
     <div className={isBootstrapCard ? "card my-1 p-2 services_card" : styles.card}
    data-aos = "fade-up" style={{width:"18rem", height:"99%"}}>
       <img src={obj.img} alt={`${obj.img}`} className="card-img-top card_img"/>
        <div className="card-body">
            
            <div className='card-description'>
                <p className='text text-bold'>{obj.title}</p>
                <p className='text text-muted service_desc'>{obj.desc}</p>
            </div>
            
            <div>
            <button className='btn btn-md btn-outline-warning view_more_btn w-100'>
                   View more
                </button>
            </div>
             
        </div>
    </div>   

    
   </>
  )
}

export default Card