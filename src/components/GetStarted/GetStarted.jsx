import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section id='get-started' className='g-wrapper'>
        <div className='paddings innerWidth g-container'>
            <div className='flexColCenter inner-container'>
                <span className='primaryText'>Get Started With BramhaVarta</span>
                <span className='secondaryText'>Subscribe and find super attractive price quotes from us.
                        <br/>
                    Find your residance soon
                </span>

                <button className='button'>
                    Get Started
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted