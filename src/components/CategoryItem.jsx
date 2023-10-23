//

const CategoryItem = ({ item }) => {
  return (
    <div className="flex-1 m-1 h-[70vh] relative">
      <img src={item.img} alt="" className="w-full h-full object-cover" />
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center">
        <h1 className="text-white mb-5 font-bold text-3xl">{item.title}</h1>
        <button className="p-3 bg-white text-gray-600 font-bold">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
