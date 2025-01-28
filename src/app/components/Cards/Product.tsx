import Image from "next/image";

export const ProductCard = () => {
  return (
    <a
      href="#"
      className="group parent-underlinle-animation block overflow-hidden"
    >
      <div className="relative h-[350px] sm:h-[450px]">
        <Image
          unoptimized={true}
          width={100}
          height={100}
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt=""
          className="absolute inset-0 h-full w-full rounded-tl-lg rounded-br-lg object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500"
        />

        <Image
          unoptimized={true}
          width={100}
          height={100}
          src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt=""
          className="absolute inset-0 h-full w-full rounded-tl-lg rounded-br-lg object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      <div className="mt-1.5">
        <p className="text-sm">Zapatilla naranja</p>
        <div className="mt-1.5 gap-3 flex items-center">
          <div className="flex flex-wrap gap-1 ml-0.5 [&:hover_div]:opacity-60 [&:hover_div]:saturate-150">
            rating
          </div>
        </div>

        <div className="mt-3 flex justify-between text-sm">
          <h3 className="underline-animation">Camiseta</h3>
          <p>$299</p>
        </div>
      </div>
    </a>
  );
};
