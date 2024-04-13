import React, { useEffect, useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions';
import './styles/search.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/cart.css'
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(); 
  const [itemsPerPage] = useState(12);
  const dispatch = useDispatch();

    useEffect(() => {
        let componentMounted = true;

        const getProducts = async () => {
            setLoading(true);
            const res = await fetch('http://localhost:3000/api/products');
            const productsData = await res.json();
            
            
            if (componentMounted) {
                setData(productsData);
                setFilter(productsData);
                setLoading(false);
            }
        };

        getProducts();

        return () => {
            componentMounted = false;
        };
    }, []);
    useEffect(() => {
        AOS.init();
      }, []);
      const handleSearch = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
    
        const filteredProducts = data.filter(product =>
            product.title.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(newSearchTerm.toLowerCase())
        );
        setFilter(filteredProducts);
    };
    
    
    const Loading = () => {
        return (
            <div style={{ display: 'flex', gap: '15px',marginLeft:"20%" }}>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} height={250} width={300} count={6}/>
            ))}
          </div>
        );
    };

const SearchBar = ()=>{
  return(
    <>
     <input placeholder="Search..." class="input" name="text" type="text"  value={searchTerm}
                    onChange={handleSearch}/>
                   
              
    </>
  )
}

    const ShowProducts = () => {
        return (
          <div className="category-container flex flex-wrap justify-center gap-2">
           
            <button className="category-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setFilter(data)}>All</button>
            <button className="category-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setFilter(data.filter(product => product.category === "Men"))}>Men's Clothing</button>
            <button className="category-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setFilter(data.filter(product => product.category === "Women"))}>Women's Clothing</button>
            <button className="category-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setFilter(data.filter(product => product.category === "Unisex"))}>Unisex</button>
            
          </div>
        );
      };

      const handleAddToCart = (product) => {
        dispatch(addCart(product));
        toast.success('Item added to cart successfully!', {
          position: 'top-right',
          autoClose: 2000, // Duration of the toast message
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
    };



    const ProductCard = ({ product }) => {
        return (
            <div data-aos="fade-up">
   <div className="product-card w-80 h-90 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
            <img src={product.image} className="h-48 bg-gray-700 rounded-xl" alt={product.title} />
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <span className="text-xl font-bold">{product.title}</span>
                 
                  <p className="text-xs text-gray-700">Category: {product.category}</p>
                  <p className="text-xs text-gray-700">Rating: {product.rating.rate}</p>
                </div>
                <p className="font-bold text-red-600">Price: ₹{product.price}</p>
                
              </div>
              <button className="CartBtn" onClick={() => handleAddToCart(product)}>
                  <span className="IconContainer"> 
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart">
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                     </svg>
                  </span>
              <p className="text">Add to Cart</p>
              </button>

              <Link to={`/products/${product.id}`}><div class="buttonbuy">



            <div class="button-wrapper">
              <div class="text">Buy Now</div>
                <span class="icon">
                  <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                </span>
            </div>
            </div>

             </Link>
            </div>
          </div>
          </div>
        );
      };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const renderPageNumbers = () => {
      const pageNumbers = [];
      const totalPages = Math.ceil(filter.length / itemsPerPage);
  
      for (let i = 1; i <= Math.min(3, totalPages); i++) {
          pageNumbers.push(
              <li
                  key={i}
                  className={`page-item ${currentPage === i ? 'active' : ''}`}
                  onClick={() => handlePageChange(i)}
              >
                  {i}
              </li>
          );
      }
  
      if (totalPages > 3) {
          pageNumbers.push(
              <li key="ellipsis-start" className="page-item disabled">
                  ...
              </li>
          );
      }
  
      if (totalPages > 1) {
          pageNumbers.push(
              <li
                  key={totalPages}
                  className={`page-item ${currentPage === totalPages ? 'active' : ''}`}
                  onClick={() => handlePageChange(totalPages)}
              >
                  {totalPages}
              </li>
          );
      }
  
      if (currentPage > 1) {
          pageNumbers.unshift(
              <li
                  key="prev"
                  className="page-item"
                  onClick={() => handlePageChange(currentPage - 1)}
              >
                  Prev
              </li>
          );
      }
  
      if (currentPage < totalPages) {
          pageNumbers.push(
              <li
                  key="next"
                  className="page-item"
                  onClick={() => handlePageChange(currentPage + 1)}
              >
                  Next
              </li>
          );
      }
  
      return (
        <div className="pagination-container">
            <nav>
                <ul className="pagination justify-content-center">{pageNumbers}</ul>
            </nav>
        </div>
    );
};

return (
  <>
      {loading ? <Loading /> :( 
        <>
        <SearchBar />
      <ShowProducts />
      </>
      )}
      <ToastContainer />
      <div className="container">
          <hr />
          <div className="flex flex-wrap justify-center gap-4">
              {currentItems.map((product, index) => (
                  <ProductCard key={index} product={product} />
              ))}
          </div>
          {renderPageNumbers()}
      </div>
  </>
);
};

export default Products;