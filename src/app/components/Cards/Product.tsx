import { Product } from "@/app/lib/types";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

import "./product.css"
import { addCartItem } from "@/app/store/cartSlice";
import { useDispatch } from "react-redux";

export const ProductCard = ({ name, price, image1, image2, rating, description }: Product ) => {
  const dispatch = useDispatch();

  const handleAddToCart = (price: Product["price"]) => {
    dispatch(addCartItem(price));
  };
  
  const Rating = (rating: Product["rating"]) => {
    if (rating <= 1) {
      return <i className="text-red-500 text-lg"><AiFillDislike /></i>
    } else if (rating <=3) {
      return <i className="text-amber-600 text-lg"><AiFillLike /></i>
    } else if (rating <= 5) {
      return <i className="text-green-500 text-lg"><AiFillLike /></i>
    }
  }

  return (
    <div className="group parent-underlinle-animation block overflow-hidden">
      <div className="relative h-[350px] sm:h-[450px]">
        <Image
          unoptimized={true}
          width={100}
          height={100}
          src={image1}
          alt=""
          className="absolute inset-0 h-full w-full rounded-tl-lg rounded-br-lg object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500"
        />
        <Image
          unoptimized={true}
          width={100}
          height={100}
          src={image2}
          alt=""
          className="absolute inset-0 h-full w-full rounded-tl-lg rounded-br-lg object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      <div className="mt-1.5">
        <div className="flex justify-between">
          <p className="text-md underline-animation">{name}</p>
          <button
            onClick={() => handleAddToCart(price)}
            className="bg-primary cursor-pointer text-black -mt-3 py-2 rounded-br-md w-fit px-3 translate-y-[-34px] md:translate-y-[0px] md:opacity-0 z-10 group-hover:translate-y-[-34px] group-hover:opacity-100 transition duration-300 hover:bg-primary-darker"
           >
            Add to cart
          </button>
        </div>
        <div className="mt-1.5 gap-3 flex items-center">
          <div className="flex text-sm flex-wrap gap-1">
            {description}
          </div>
        </div>

        <div className="mt-3 flex justify-between text-sm">
          <div className="flex items-center justify-center gap-1">
            {Rating(rating)}
            <h4 className="text-xs">{rating}</h4>
          </div>
          <h4>$ {price}</h4>
        </div>
      </div>
    </div>
  );
};
