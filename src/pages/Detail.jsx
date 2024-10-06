import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [Resto, setResto] = useState();
  const ambilResto = async () => {
    const response = await fetch(
      "https://restaurant-api.dicoding.dev/detail/" + id
    );
    const data = await response.json();
    setResto(data);
  };

  useEffect(() => {
    // ambilData()
    ambilResto();
  }, []);

  return (
    <div className="flex justify-around   dark:bg-black dark:text-white">
      <div className="flex flex-col py-10 w-[3280px]">
        <img
          src={`https://restaurant-api.dicoding.dev/images/medium/${Resto?.restaurant?.pictureId}`}
          alt="" 
        />
      </div>
      <div className="self-center">
        <h1 className="font-bold">{Resto?.restaurant?.name}</h1>
        <h1>{Resto?.restaurant?.description}</h1>
      </div>
    </div>
  );
};

export default Detail;
