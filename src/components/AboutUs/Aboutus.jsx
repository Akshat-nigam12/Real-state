import React from 'react'
import "./Aboutus.css"

const Aboutus = () => {
  return (
    
    <section id='aboutus' className='a-wrapper'>
        <div className='paddings innerWidth flexColCenter a-about'>
            <div className='paddings innerWidth flexColCenter newdiv'>
                <h3 className=' primaryText a-head'>About Us</h3>
                <p className='secondaryText a-para '>The journey began two decades ago, and since then there has been no <br/> looking back. Milestones have been important but the curiosity to explore, expand, and evolve has motivated us to look at the journey differently.<br/> Hence, believing that the road to success is always under construction!</p>
                <div className='a-col flexColStart'>
                    <div className='a-row1 flexColCenter'>

                        <div className='d a-row1-data1'>
                            <h3>Industry</h3>
                            <p className='secondaryText para '>Real State</p>
                        </div>

                        <div className=' d a-row1-data2 '>
                            <h3>Company Size</h3>
                            <p className='secondaryText para '>11-50 employees</p>
                            {/* <p className='secondaryText'> 27 associated member</p> */}
                        </div>

                        <div className='d a-row1-data3 flexColCenter '>
                            <h3>Headquarters</h3>
                            <p className='secondaryText para '>Kanpur, Uttar Pradesh</p>
                            {/* <p className='secondaryText'> 27 associated member</p> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutus