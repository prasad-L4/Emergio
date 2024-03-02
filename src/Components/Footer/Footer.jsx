import React from 'react'
import logofooter from '../Images/logofooter.png' 
const Footer = () => {
  return (
    <>
    <footer className='w-[100%] bg-indigo-950'>
        <div className='flex justify-between  text-white py-5'>
            <div>
                <img src={ logofooter} alt="" />
            </div>
            <div className='text-white'>
                <h4 className='text-white'>NAVIGATION</h4>
                <p>Learning</p>
                <p>Placements</p>
                <p>Hire from Emergio</p>
                <p>Login</p>
            </div>
            <div className=''>
                <h4 className='text-white'>CONTACT US</h4>
                <div>
                    <span></span>
                    <p>Address: Emergio Games <br />
 Ernakulam, Kerala</p>
                </div>
                <div>
                    <span></span>
                    <div>
                        <p>+(91) 1234567890 </p>
                        <p>+(91) 1234567890 </p>
                    </div>
                </div>
                <div>
                    <span></span>
                    <p></p>
                </div>
            </div>
            <div >
                <h4 className='text-white'>About Emergio Games</h4>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br /> sed do  Lorem ipsum dolor <br /> sit amet,  consectetur <br /> adipiscing elit,  sed do</p>
            </div>

        </div>
    </footer>
      
    </>
  )
}

export default Footer
