import './App.css'
import { useState, useEffect } from 'react'
import { LoadingIcon } from './LoadingIcon';
import { getAllGraphs1, getAllGraphs2 } from './api';

const countryCityData = {
  'India': ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'],
  'Brazil': ['Sao Paulo', 'Rio de Janeiro', 'Salvador', 'Brasilia', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre'],
  'Nigeria': ['Lagos', 'Kano', 'Ibadan', 'Kaduna', 'Port Harcourt', 'Benin City', 'Maiduguri', 'Zaria', 'Aba', 'Jos'],
  'Philippines': ['Quezon City', 'Manila', 'Davao City', 'Caloocan', 'Cebu City', 'Zamboanga City', 'Taguig', 'Antipolo', 'Pasig', 'Cagayan de Oro'],
  'China': ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Wuhan', 'Chengdu', 'Tianjin', 'Chongqing', 'Nanjing', 'Hangzhou'],
  'Mexico': ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'Leon', 'Juarez', 'Zapopan', 'Nezahualcoyotl', 'Chihuahua'],
  'Indonesia': ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar', 'Palembang', 'Depok', 'Tangerang', 'South Tangerang'],
  'Pakistan': ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Hyderabad', 'Peshawar', 'Quetta', 'Islamabad'],
  'Bangladesh': ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barisal', 'Rangpur', 'Narayanganj', 'Gazipur', 'Mymensingh'],
  'Egypt': ['Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Luxor', 'Al-Mansura', 'El-Mahalla El-Kubra', 'Tanta']
};

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectionMode, setSelectionMode] = useState(true)
  const [loadingMode, setLoadingMode] = useState(false)
  const [graphMode, setGraphMode] = useState(false)
  const [graphs, setGraphs] = useState({})

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSelectionSubmit = async () => {
    if (!selectedCountry || !selectedCity) {
      alert("Must fill out all fields")
      return
    }
    setSelectionMode(false)
    setLoadingMode(true)
    let data = await getAllGraphs1()
    console.log(data.case)
    setTimeout(() => {
      setLoadingMode(false)
      setGraphMode(true)
      setGraphs(data)
      console.log(data)
    }, 3000)
  };

  const handleGraphSubmit = async () => {
    if (!selectedCountry || !selectedCity) {
      alert("Must fill out all fields")
      return
    }
    setGraphMode(false)
    setLoadingMode(true)
    let data = await getAllGraphs2()
    console.log("CASE DATA" + data.case)
    setTimeout(() => {
      setLoadingMode(false)
      setGraphMode(true)
      setGraphs(data)
    }, 3000)
    //some api call
  }

  const MatPlotLibFig = () => {
    const fig_name = "fig_el427345810798888193429725"
    return <div>
      <script>
        mpld3_load_lib("https://d3js.org/d3.v5.js", function () {
          mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.8.js", function () {
            mpld3.remove_figure(fig_name)
            mpld3.draw_figure(fig_name, _json);
          })
        });
      </script>
      <div id={fig_name}></div>
    </div>
  }

  const mpld3_load_lib = (url, callback) => {
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = callback;
    s.onerror = function () { console.warn("failed to load library " + url); };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  function CaseGraph() {
    /*let wrappedString = `<div id="scriptId">${graphs.case}</div>`
    let doc = new DOMParser().parseFromString(wrappedString, "text/html")
    console.log(doc)
    let htmlContent = doc.documentElement.querySelector('body').innerHTML;
    //let htmlContent = doc.documentElement.querySelector('body').innerHTML
    //console.log(htmlContent)
    //let htmlContent = doc.innerHTML;
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
    )*/

    return (
      <img src={graphs.case}/>
    )
  }

  function OutbreakGraph() {

  }

  function CapacityGraph() {

  }

  function RiskGraph() {

  }

  function TableGraph() {

  }

  return (
    <>
    {selectionMode &&
    <div className="menu">
      <h1>Dengue Tracker</h1>
      <div>
        <label htmlFor="country">Select a country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">-- Select Country --</option>
          {Object.keys(countryCityData).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      
      <div>
      {selectedCountry && (
        <div>
          <label htmlFor="city">Select a city:</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">-- Select City --</option>
            {countryCityData[selectedCountry].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}
      </div>
      <button  className="submitButton" onClick={() => handleSelectionSubmit()}>Calculate Dengue Data</button>
    </div>}
    <div>
      {loadingMode && <LoadingIcon/>}
    </div>
    <div>
        {graphMode && 
        <>
        <div className="graphMenu">
        <div>
          <label htmlFor="country">Select a country:</label>
          <select id="country" value={selectedCountry} onChange={handleCountryChange}>
            <option value="">-- Select Country --</option>
            {Object.keys(countryCityData).map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div>
        {selectedCountry && (
        <div>
          <label htmlFor="city">Select a city:</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">-- Select City --</option>
            {countryCityData[selectedCountry].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}
      </div>
      <button className="submitButton" onClick={handleGraphSubmit}>Calculate</button>
        </div>
        <CaseGraph/>
        </>}
    </div>
    </>
  )
}

export default App
