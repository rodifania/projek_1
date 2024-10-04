import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const NegaraView = ({ search, cariNegara, hasilCari, hasilFilter }) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const ambilData = async () => {
    const response = await fetch(
      "https://freetestapi.com/api/v1/countries/" + id
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <>
     
      <div className="flex flex-col py-12">
        <div className="flex space-x-12 py-3">
        <div>
          <img src={data?.flag} alt="" className="rounded-xl" />
        </div>
        <div className="stats stats-vertical shadow self-center">
          <div className="stat">
            <div className="stat-title">Negara</div>
            <div className="stat-value">{data?.name}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Currency</div>
            <div className="stat-value">{data?.currency}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Populasi</div>
            <div className="stat-value">{data?.population}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Luas</div>
            <div className="stat-value">{data?.land_area}</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default NegaraView;
