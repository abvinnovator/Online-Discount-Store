import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { delCart } from '../redux/actions'; 
import { FaStar } from 'react-icons/fa'; 

const RatingStars = ({ rating }) => {
  const stars = [];
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

 
  for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
  }

  
  if (hasHalfStar) {
      stars.push(<FaStar key={filledStars} className="text-yellow-500" />);
  }

  
  for (let i = stars.length; i < totalStars; i++) {
      stars.push(<FaStar key={i} className="text-gray-300" />);
  }

  return (
      <div className="flex items-center">
          {stars}
      </div>
  );
};


const Cart = ({ cart, delCartItem }) => { 
    return (
      <div>
      <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
      <Link to='/products'>
          <button className="ml-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-violet-600">Add Products</button>
      </Link>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cart.map(item => (
              <div key={item.id} className="border p-4 flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                      <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
                      <div>
                          <h2 className="text-lg font-semibold">{item.title}</h2>
                          <p className="text-gray-600">Quantity: {item.qty}</p>
                          <div className="flex items-center">
                              <RatingStars rating={item.rating.rate} />
                          </div>
                      </div>
                  </div>
                  <button className="ml-auto bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={() => delCartItem(item)}>Remove</button>
              </div>
          ))}
      </div>
  </div>
  
    );
};

const mapStateToProps = state => ({
    cart: state.handleCart 
});

const mapDispatchToProps = dispatch => ({
    delCartItem: product => dispatch(delCart(product)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
