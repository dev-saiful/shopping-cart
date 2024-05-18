import { useDispatch, useSelector } from "react-redux";
import { remove } from "../slice/CartSlice";

function Cart() { 
const cartItems = useSelector((state) => state.cart);
const dispatch = useDispatch();
const handleRemove=(id)=>{
    dispatch(remove(id));
}
  return (
    <div className="">
        <h3 className=" text-center">Cart Page</h3>
        <div className="flex flex-wrap gap-10 justify-center items-center">
            {
                cartItems.map((item)=>(
                    <div key={item.id} className="w-60 flex flex-col">
                        <img src={item.image} alt="product_image" />
                        <h5>{item.title}</h5>
                        <h5>{item.price}</h5>
                        <button
                        onClick={()=>handleRemove(item.id)} className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Remove</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cart