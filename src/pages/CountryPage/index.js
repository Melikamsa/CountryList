import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryPage() {
  const params = useParams();
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((result) => {
        let data = result.data;
        let country = data.find((item) => item.cca3 === params.cca3);
        setCountryData(country);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-[30px] px-[15px]">
      <p className="bg-stone-300 py-[20px] px-[15px] rounded-md font-semibold font-mono">
        Country Name : {countryData?.name?.common}
      </p>

      <p className="bg-stone-300 py-[20px] px-[15px] rounded-md font-semibold font-mono my-[20px]">
        population : {countryData?.population}
      </p>

      <p className="bg-stone-300 py-[20px] px-[15px] rounded-md font-semibold font-mono my-[20px]">
        languages :
        {countryData.languages
          ? Object.values(countryData?.languages).map((lang) => {
              return <p>{lang}</p>;
            })
          : "-"}
      </p>

      <div className="bg-stone-300 px-[15px] py-[30px] my-[20px] rounded-md">
        <span className="font-mono font-semibold">
          {countryData?.name?.common} flag
        </span>
        <img className="rounded-md mt-[20px]" src={countryData?.flags?.png} />
      </div>

      <Link to={countryData?.maps?.googleMaps}>
        <p className="bg-stone-300 px-[15px] py-[30px] my-[20px] rounded-md font-mono font-semibold">
          Map of {countryData?.name?.common}
        </p>
      </Link>
    </div>
  );
}

export default CountryPage;
