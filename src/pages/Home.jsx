import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../slice/CartSlice";

function Home() {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      setproducts(data);
    };
    fetchProduct();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="bg-indigo-600 flex flex-wrap justify-center items-center gap-20 p-24">
        {
            products.map((product)=>(
                <div key={product.id} className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={product.image} alt="product_image" />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {product.title}
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {product.price}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                  onClick={()=>handleAddToCart(product)}
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))
        }
    
    </div>
  );
}

export default Home;
