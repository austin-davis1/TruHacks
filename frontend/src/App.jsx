import './App.css'
import { useState, useEffect } from 'react'
import { LoadingIcon } from './LoadingIcon';

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

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSelectionSubmit = () => {
    if (!selectedCountry || !selectedCity) {
      alert("Must fill out all fields")
      return
    }
    setSelectionMode(false)
    setLoadingMode(true)
    //some api call
    setTimeout(() => {
      setLoadingMode(false)
      setGraphMode(true)
    }, 3000)
  };

  const handleGraphSubmit = () => {
    if (!selectedCountry || !selectedCity) {
      alert("Must fill out all fields")
      return
    }
    setGraphMode(false)
    setLoadingMode(true)
    setTimeout(() => {
      setLoadingMode(false)
      setGraphMode(true)
    }, 3000)
    //some api call
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
        <div className="graphSection">

        </div>
        
        </>}
    </div>
    </>
  )
}

export default App
