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
    <div className={isBootstrapCard ? "card my-1 p-2" : styles.card}
    data-aos = "fade-up">
        <div className="card-body">
            <div className='card-description'>
                <p className='text text-muted'>{obj.title}</p>
                <p className='text text-muted'>{obj.desc}</p>
            </div>
            <div className="">
                <button className='btn btn-sm btn-warning'>
                   View more
                </button>
            </div>  
        </div>
    </div>  
  )
}

export default Card