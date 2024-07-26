import React from 'react'
import Front from '../components/Front';
import taskimage2 from "../assets/images/taskimage2.jpg";


const styles = {
  backgroundImage: `url(${taskimage2})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1600px',
  
}

const Frontpage = () => {
  return (
    <>
  <div style={styles}>   
        <Front />
  </div>
  </>
  )
}

export default Frontpage