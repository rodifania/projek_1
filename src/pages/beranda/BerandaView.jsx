import React from "react";
import { Link } from "react-router-dom";

const BerandaView = ({ kelolaCari, carilokasi, hasilCari, hasilFilter }) => {
  return (
    <>
    <div className="beranda beranda dark:bg-black dark:text-white">
     <div className="flex-col py-5 dark:text-white ">
        <div className="pb-5 title-text ">
          <h2 className="text-3xl text-center dark:text-white">Restoran</h2>
        </div>
        </div>
      <div className="flex justify-center ">
        <label className="input input-bordered flex items-center gap-2 my-5 w-[500px]">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(input) => kelolaCari(input.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <p>
        Hasil Dari : {carilokasi}, ditemukan : {hasilCari?.founded}{" "}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
        {hasilFilter?.restaurants?.map((data) => {
          return (
            <div className="" key={data?.name}>
              <div className="card bg-rose-400 dark:bg-slate-500 dark:text-white w-96 shadow-xl">
                <figure>
                  <img
                    src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <p className="line-clamp-2">{data.description}</p>
                  <div className="card-actions justify-end">
                    <div className="flex space-x-8">
                      <div className="rating self-center">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star  bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star  bg-orange-400"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star  bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star  bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star  bg-orange-400"
                        />
                      </div>
                      <Link
                        to={"detail/" + data.id}
                        className="btn btn-primary"
                      >
                        Kunjungi
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BerandaView;
