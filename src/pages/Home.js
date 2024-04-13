import React from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import "./styles/Home.css";

const Home = () => {
    return (
        <>       
      
        <div className="bg-cover bg-center h-screen" style={{backgroundImage: "url('https://res.cloudinary.com/dtonbpwvj/image/upload/v1709986780/Modern_Woman_Shopping_Black_Friday_Sale_Facebook_Cover_iaeg0u.png')"}}>
            <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
            <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
                <h1 className="text-6xl font-bold text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-4">Discover Exclusive Deals!</h1>
                </motion.div>
                <p className="text-lg text-white mb-8">
               
                    Browse through our vast collection of discounted products and uncover amazing savings.</p>
                    
                <Link to='/products'>
                <button className='btn'>
  <div class="default-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span>Quick View</span>
  </div>
  <div class="hover-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    <span>Shop Now</span>
  </div>
</button>
                </Link>    
            </div>
        </div>
    
        </>

    );
};

export default Home;
