import { useCallback, useEffect, useReducer, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BerandaView from "./BerandaView";
import { data } from "autoprefixer";

const inisialState = {
  data: [],
  filterData: [],
  loading: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        data: action.playload,
        filterData: action.playload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.playload,
      };
    default:
      throw new Error("error di case");
  }
};

const Beranda = () => {
  const [state, dispatch] = useReducer(reducer, inisialState);

  // const [Resto, setResto] = useState();
  // const [hasilCari, setHasilCari] = useState();

  const [Cari, setCari] = useSearchParams();

  const carilokasi = Cari.get("carilokasi");
  const ambilResto = async () => {
    const response = await fetch("https://restaurant-api.dicoding.dev/list");
    const data = await response.json();
    // setResto(data);
    dispatch({ type: "FETCH_BERHASIL", playload: data });
  };

  const kelolaCari = useCallback(
    async (input) => {
      setCari({ carilokasi: input });

      const response = await fetch(
        "https://restaurant-api.dicoding.dev/search?q=" + carilokasi
      );
      const data = await response.json();
      // setHasilCari(data);

      dispatch({type: "SET_FILTER", playload: data});
    },
    [carilokasi]
  );

  useEffect(() => {
    // ambilData()
    if (!carilokasi) {
      ambilResto();
    } else {
      kelolaCari(carilokasi);
    }
  }, [carilokasi]);

  const hasilFilter = carilokasi ? state.filterData : state.data;

useEffect(() => {
  console.log(state)
},[state])
  return (
    <BerandaView
      carilokasi={carilokasi}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      kelolaCari={kelolaCari}
    />
  );
};

export default Beranda;
