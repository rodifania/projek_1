import React, { useCallback, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import NegaraView from "./NegaraView";

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

const Negara = () => {
  const [state, dispatch] = useReducer(reducer, inisialState);

  const [Cari, setCari] = useSearchParams();

  const carilokasi = Cari.get("carilokasi");
  const LihatNegara = async () => {
    const response = await fetch("https://freetestapi.com/api/v1/countries");
    const data = await response.json();
    dispatch({ type: "FETCH_BERHASIL", playload: data });
  };
  const kelolaCari = useCallback(
    async (input) => {
      setCari({ carilokasi: input });
      const response = await fetch(
        "https://freetestapi.com/api/v1/countries?search=" + carilokasi
      );
      const data = await response.json();
      dispatch({ type: "SET_FILTER", playload: data });
    },
    [carilokasi]
  );

  useEffect(() => {
    // ambilData()
    if (!carilokasi) {
      LihatNegara();
    } else {
      kelolaCari(carilokasi);
    }
  }, [carilokasi]);

  const hasilFilter = carilokasi ? state.filterData : state.data;

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <NegaraView
      carilokasi={carilokasi}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      kelolaCari={kelolaCari}
    />
  );
};

export default Negara;
