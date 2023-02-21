import  { useState } from 'react';
import './App.css';

const API_KEY = '550e01ca8e125a7e9967a481ff281675'

function App() {

  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('Wybierz');
  const [temperature, setTemperature] = useState('🤔');
  const [description, setDescription] = useState('🤔');
  const [icon, setIcon] = useState('10d');

 const fetchData = () => {
        fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=${API_KEY}&units=metric&lang=pl`
            )
        .then(response => response.json())
        .then(jasonresponse => { 
          setLocation(jasonresponse.name);
          setTemperature(jasonresponse.main.temp);
          setDescription(jasonresponse.weather[0].description)
          setIcon(jasonresponse.weather[0].icon)
        })
        .catch(err => console.error(err))
      }
   
  return (    
    <div className="App">
      <h3>Pogoda dla miasta:</h3>
      <label for="name"> Szukaj miasta:</label>
      <input type="text" id="name" name="name" value={keyword}
        onChange={e => setKeyword(e.target.value)}/>
      <button onClick={fetchData}>Znajdź</button>      
          <div>
              { 
                <>                
                <p>Miasto: {location}</p>
                <p>Temperatura: {temperature} ℃</p>
                <p>Info: {description}</p>                
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="Weather icon" />            
                </>                    
              }        
            </div>
    </div>
  );
} 
export default App;
