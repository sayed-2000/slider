import { useRef, useEffect, useState } from 'react';
import './App.css';
import {motion} from 'framer-motion';
import images from './images';


function App() {
  const carouselRef = useRef();
   const [width,setWidth] = useState(0)
   useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
   },[])
  return (
    <div className="App">
     <motion.div ref={carouselRef} className='carousel' whileTap={{cursor: "grabbing"}}>
       <motion.div drag="x" dragConstraints={{right:0, left: - width}} className='inner-carousel'>
         {
          images.map((img, index) => (
            <motion.div className='itme' key={index}>
              <img src={img} alt='carousel-img'/>
            </motion.div>
          ))
         }
       </motion.div>
     </motion.div>
    </div>
  );
}

export default App;
