export default function ProductCard({
  designer,
  name,
  price,
  images,
}: {
  designer: string;
  name: string;
  price: string;
  images: {
    default: string;
    hover: string;
  };
}) {
  return (
    <div>
      <div className="flex justify-center items-center px-8 lg:px-16">
        <div className="w-full h-full justify-center items-center group relative">
          {/* <div className="dark:bg-white bg-black rounded-full w-full aspect-square" /> */}
          <img
            src={images.default}
            alt={name}
            className="w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
          />
          <img
            src={images.hover}
            alt={name}
            className="w-full h-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 lg:gap-0 p-4 lg:p-8">
        <p className="text-gray-400 uppercase text-xs lg:text-sm">{designer}</p>
        <h2 className="uppercase text-sm lg:text-base ">{name}</h2>
        <p className="text-xs lg:text-sm">{price}</p>
      </div>
    </div>
  );
}
