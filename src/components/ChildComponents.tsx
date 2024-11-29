import React from "react";

const ChildComponents = (props: any) => {
  console.log(props);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600 ">
      {/* Card Container */}

      <div className=" shadow-lg rounded-lg p-8 w-96 border border-gray-300 bg-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Class 11 Assignment Props
        </h2>

        <div className="space-y-4">
          <div className="flex items-center">
            <p className="text-lg font-semibold text-blue-800 mr-2">Full Name:</p>
            <p className="text-gray-700 font-bold ">{props.name}</p>
          </div>

          

          <div className="flex items-center">
            <p className="text-lg font-semibold  text-blue-800 mr-2">
              Favourite Dish:
            </p>
            <p className="text-gray-700 font-bold">{props.fvtDish}</p>
          </div>

          <div className="flex items-center">
            <p className="text-lg font-semibold  text-blue-800 mr-2">
              Favourite Color:
            </p>
            <p className="text-gray-700 font-bold">{props.fvtColor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildComponents;
