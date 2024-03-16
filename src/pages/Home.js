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
                    <button className="buttonhome">
                   
                       shop now
                      
                        <svg className="cartIcon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                    </button>
                </Link>    
            </div>
        </div>
    
        </>

    );
};

export default Home;
