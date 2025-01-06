
import React,{useEffect,useState} from 'react';

const Clock = () => {

    const[day,setDays] = useState();
    const[hours,setHours] = useState();
    const[minutes,setMinutes] = useState();
    const[seconds,setSeconds] = useState();

    let interval;

    const countDown =() =>{
        const destination = new Date('JAN 20, 2025').getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime()
            const different = destination - now;
            const days = Math.floor(different/ (1000 * 60 *60 *24))
            const hours = Math.floor(different % (1000 *60*60*24)/(1000*60*60));
            const minutes = Math.floor(different % (1000 *60*60)/
            (1000*60));
            const seconds = Math.floor(different % (1000*60)/1000)

            if(destination<0)clearInterval(interval.current)
              else{
                 
                setDays(days);
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)

                }
  
        })
    }

    useEffect(()=>{
        countDown();
    })

  return<div className='clock_wrapper d-flex align-item-center gap-3'>
           <div className='clock_data d-flex align-item-center gap-3'>
                <div className='text-center'>
                   <h1 className='text-white fs-3 mb-2'>{day}</h1>
                   <h2 className='text-white fs-5'>Days</h2>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>   

            <div className='clock_data d-flex align-item-center gap-3'>
                <div className='text-center'>
                   <h1 className='text-white fs-3 mb-2'>{hours}</h1>
                   <h2 className='text-white fs-5'>Hours</h2>
                </div>
                <span className='text-white fs-3'>:</span>
            </div> 

            <div className='clock_data d-flex align-item-center gap-3'>
                <div className='text-center'>
                   <h1 className='text-white fs-3 mb-2'>{minutes}</h1>
                   <h2 className='text-white fs-5'>Minutes</h2>
                </div>
                <span className='text-white fs-3'>:</span>
            </div> 
             

            <div className='clock_data d-flex align-item-center gap-3'>
                <div className='text-center'>
                   <h1 className='text-white fs-3 mb-2' >{seconds}</h1>
                   <h2 className='text-white fs-5'>Seconds</h2>
                </div>

            </div> 
              
            
                    
        </div>
}

export default Clock
