// import React from 'react'
import { Link } from 'react-router-dom';

const NegaraView = ({kelolaCari, carilokasi, hasilCari, hasilFilter}) => {
    return (
        <div className='  dark:bg-black '>
        <div className="flex-col py-5">
        <div className="pb-5 title-text ">
          <h2 className="text-3xl text-center">Negara</h2>
        </div>
        </div>
          <div className="flex justify-center ">
            <label className="input input-bordered flex items-center gap-2 my-3 w-[500px]">
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
            Hasil Dari : {carilokasi}, ditemukan : {hasilCari?.contries?.founded}{" "}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
            {hasilFilter?.map((data) => {
              return (
                <div className="" key={data?.name}>
                  <div className="card bg-base-100 w-96 shadow-xl  bg-rose-400 dark:bg-slate-50 ">
                    <figure>
                      <img
                        src={data.flag}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title self-center">{data.name}</h2>
                      <p className="line-clamp-2">{data.currency}</p>
                      {/* <div className="card-actions justify-end">
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
                          </div> */}
                          <Link
                            to={"/detailnegara/" + data.id}
                            className="btn btn-primary font-bold"
                          >
                            Kunjungi
                          </Link>
                        {/* </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </div>
          </div> */}
          
        </div>
      );
};

export default NegaraView