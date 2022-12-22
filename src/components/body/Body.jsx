import "./Body.scss";
import * as RiIcon from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getItem } from "../../redux/reducers";

const Body = () => {
  const [name, setName] = useState("tehran");
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.weather);

  return (
    <section className="body">
      <div className="body-content container">
        <div className="body-content__header">
          <input
            type="text"
            placeholder="Search City Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span onClick={() => dispatch(getItem(name))}>
            <RiIcon.RiSearch2Line size={26} />
          </span>
        </div>
        {loading && <div className="text-center text-white">Loading...</div>}
        {items &&
          items?.map((item) => (
            <div className="body-content__items" key={item.id}>
              <div className="body-content__items-titr">
                <span>
                  {" "}
                  {item.name}, {item.sys.country}
                </span>
                <span>{new Date().toLocaleDateString("fa-IR")}</span>
              </div>
              <hr />
              <div className="body-content__items-details">
                <div className="body-content__items-details__img">
                  {item.weather[0].main}
                </div>
                <div className="body-content__items-details__degree">
                  {Math.floor(item.main.temp)} °C
                </div>
              </div>
              <p>
                The weather condition in {item.name}, {item.sys.country} is
                described as {item.weather[0]?.description} with a temperature
                of {Math.floor(Number(item.main.temp))} °C and a humidity of{" "}
                {item.main.humidity} %
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Body;
