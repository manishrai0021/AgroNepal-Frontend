import React from 'react'
import { Link } from 'react-router-dom'

import AboutUs from './AboutUs'
import Footer from '../Footer/Footer'

import Img from '../../Assets/Pictures/Agri.jpg'
import './home.css'

const Home = () => {
  return (
    <div className='h-[100vh]'>
        <div className='flex flex-col gap-4 p-8'>
            <div className='relative'>
                <img src={Img} alt="" className='opacity-95 hover:opacity-100 lg:w-[80%] rounded-md '/>
                {/* <h2 className='absolute inset-0 text-[2rem] text-white font-bold flex justify-center items-center backdrop-blur-[0.7px] hover:animate-pulse cursor-default '>Farming Revolution</h2> */}
                <h2 className='Title absolute top-[40%] left-[12%] text-[2rem] text-white font-bold w-[78%] hover:scale-[1.05] hover:border-b-[4px] border-[#0cb01d] hover:duration-500'>"Farming Revolution"</h2>
            </div>
            <div className='text-white text-[20px] flex justify-center p-4 gap-2'>
              <h2 className=''>Let's</h2>
              <Link to='/farmers' className='bg-[#0cb01d] px-2 rounded '>Farm</Link>
            </div>
        </div>
        <div>
          <AboutUs/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Home