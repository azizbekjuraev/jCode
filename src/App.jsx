import headphonesImg from "./assets/img/image 2.png";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="lg:w-[25%] p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
          <img
            className=" object-cover mx-auto rounded-t-md"
            src={headphonesImg}
            alt=""
          />
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-700 mt-2 mb-2">$100</h1>
            <h1 className="text-2xl font-bold text-gray-700">
              Zebronics head phone
            </h1>
            <p className="text-sm mt-2 text-gray-700">
              A portable headphone with a battery life of 20 hours and IP67
              rating. Comes with a 3 years warranty.
            </p>
            <p className="mt-4 text-[#666666]">Choose your color</p>
            <div className="mt-3 space-x-4 flex p-1">
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-[#EE4444] hover:scale-105 transition transform duration-200">
                <span className=" block h-6 w-6 bg-[#EE4444] rounded-full">
                  {" "}
                </span>
              </div>
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-[#3C81F6] hover:scale-105 transition transform duration-200">
                <span className="block h-6 w-6 bg-[#3C81F6] rounded-full"></span>
              </div>
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-[black] hover:scale-105 transition transform duration-200">
                <span className="block h-6 w-6 bg-[black] rounded-full"> </span>
              </div>
            </div>

            <button className="mt-4 mb-4 w-full  py-2 px-6 text-[black] hover:text-white bg-[#FBBF23] rounded-lg shadow hover:shadow-md transition duration-300">
              Add to cart
            </button>
            <button className="bg-white w-full  text-[black] py-2 px-4 border border-[#61A5FA] rounded-lg shadow  hover:text-[#FBBF23]">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
