import { useEffect, useState } from "react";
import "axios";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

function HomePage() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((result) => setCountryList(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="bg-stone-300 text-center rounded-md font-semibold py-[20px] m-[15px]">
        --- COUNTRY LIST ---
      </h1>
      <div className="flex items-center flex-wrap justify-center">
        {countryList.map((item) => {
          return (
            <div>
              <Link to={`country/${item.cca3}`}>
                <div className="w-[300px] h-[200px] relative flex items-center justify-center flag mx-[10px] my-[15px]">
                  <img
                    src={item.flags.png}
                    className=" rounded-md  w-full h-full absolute left-0 top-0 hover:blur"
                  />
                  <p className="name text-center relative z-10 hidden rounded-md font-semibold font-mono text-[20px] bg-[#fff] p-[5px]">
                    {item.name.common}
                    {console.log(countryList)}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
