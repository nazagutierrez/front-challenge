import { ProductCard } from "./Product";

const Cards = () => {
  return (
    <section className="h-full w-full flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
        <div className="text-xl w-full flex items-center justify-center font-semibold sm:text-3xl">
          <div className="w-1/3 h-0.5 bg-main-text mx-5 rounded-full"></div>
          <h2 className="w-1/2 text-center text-main-text">ITEMS IN THE STORE</h2>
          <div className="w-1/3 h-0.5 bg-main-text mx-5 rounded-full"></div>
        </div>
          <ul className="w-full h-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-20">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
      </div>
    </section>
  );
};

export default Cards;
