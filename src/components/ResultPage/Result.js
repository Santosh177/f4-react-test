import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Result.css";
import { CELCIUS, FAHRENHEIT } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
function Result() {
  const [data, setData] = useState(null);
  const params = useParams();
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  // we are fetching the data using useEffect
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=dfb19251dc1444a49e571228230403&q=${params.weathercity}`
    )
      .then((resp) => resp.json())
      .then((info) => {
        setData(info);
        
      });
  }, []);

  const handleCheckBox = (event) => {
    
    dispatch({type : event.target.value})
  };
  return (
    <div>
      {console.log(data)}
      {data ? (
        <div className="result_container">
          <div className="result_heading">Weather Data</div>
          <div className="result_checkbox">
            <div className="celcius">
              <input
                type="checkbox"
                value="CELCIUS"
                checked={store.celcius}
                onChange={handleCheckBox}
              />
              <label htmlFor="celcius">Celcius</label>
            </div>
            <div className="celcius">
              <input
                type="checkbox"
                value="FAHRENHEIT"
                checked={store.fahrenheit}
                onChange={handleCheckBox}
              />
              <label htmlFor="celcius">FAHRENHEIT</label>
            </div>
          </div>
          <div className="result_data">
            <div className="content">
              <div className="lable">City Name :</div>
              <div className="value">{data.location.name}</div>
            </div>
            <div className="content">
              <div className="lable">Country :</div>
              <div className="value">{data.location.country}</div>
            </div>
            <div className="content">
              <div className="lable">State :</div>
              <div className="value">{data.location.region}</div>
            </div>
            <div className="content">
              <div className="lable">Temp :</div>
              {
                  store.celcius ? <div className="value">{data.current.temp_c}º C</div>
                  : <div className="value">{data.current.temp_f}º F</div>// for convert in fahrenheit
              }
           </div>
            
            <div className="content">
              <div className="lable">Condition :</div>
              <div className="value">{(data.current.condition.text)} </div>
              </div>
              
              <div className="content">
              <div className="lable">Humidity :</div>
              <div className="value">{(data.current.humidity + '%')} </div>
              </div>
            
            <div className="content">
              <div className="lable">Wind Speed :</div>
              <div className="value">{data.current.wind_kph} Km/Hr</div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Showing Data...</h2>
      )}
    </div>
  );
}

export default Result;
