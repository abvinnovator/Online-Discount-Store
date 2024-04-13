import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        let componentMounted = true;

        const getProduct = async () => {
            setLoading(true);
            const res = await fetch('http://localhost:3000/api/products');
            
            const data = await res.json();
        
            console.log(data);
            if (componentMounted) {
                console.log(typeof parseInt(id))
                console.log(typeof data[0]['id'])


                /*

                for(let i=0;i<data.length;i++)
                {  
                    if (data[i]['id'] === parseInt(id))
                    {  console.log("success");
                       var pro=data[i]

                    }

                }

                */
               var pro=data.find((obj) => {if(obj['id']===parseInt(id))
                                                return obj})


                console.log(pro);
                
                

                setProduct(pro);
                setLoading(false);
            }
        };

        getProduct();

        return () => {
            componentMounted = false;
        };
    }, [id]);

    const Loading = () => {
        return (
            <div className='product-card'>
                <Skeleton height={350} />
            </div>
        );
    };

    const handleAddToCart = () => {
        dispatch(addCart(product));
    };

    const handleBuyNow = () => {
        console.log("Buy Now clicked");
    };

    const ShowProduct = () => {
        return (
            <div className='product-card flex'>
                {product && (
                    <>
                        <div className="w-1/3">
                            <img src={product.image} alt={product.title} className="product-image rounded-lg shadow-lg" />
                        </div>
                        <div className="w-2/3 px-6 py-4">
                            <h2 className="text-3xl font-semibold mb-2">{product.title}</h2>
                            <p className="text-lg mb-4">{product.description}</p>
                            <p className="text-xl font-bold mb-4">Price: ₹{product.price}</p>
                            <p className="text-lg mb-4">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                            <div>
                                <button className="bg-blue-500 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded mr-4" onClick={handleAddToCart}>Add to Cart</button>
                                <button className="bg-gray-500 text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded" onClick={handleBuyNow}>Buy Now</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <div className="container mx-auto">
            <div className='flex justify-center'>
               
                {loading ?<Loading />:<ShowProduct />}  
            </div>
        </div>
    );
};

export default Product;
