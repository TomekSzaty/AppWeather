import  { useState } from 'react';
import './App.css';

const API_KEY = '550e01ca8e125a7e9967a481ff281675'

function App() {

  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('Wybierz');
  const [temperature, setTemperature] = useState('🤔');
  const [windy, setWindy] = useState('🤔');
  const [description, setDescription] = useState('🤔');
  const [icon, setIcon] = useState('10d');
  const [notFound, setNotFound] = useState(false);
  const reload = () => window.location.reload();

 const fetchData = () => {
        fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=${API_KEY}&units=metric&lang=pl`
            )
        .then((response) => {
          if(response.status === 404){
            setNotFound(true);
          }
          return response.json()
        })
        .then(jasonresponse => { 
          setLocation(jasonresponse.name);
          setTemperature(jasonresponse.main.temp);
          setWindy(jasonresponse.wind.speed)
          setDescription(jasonresponse.weather[0].description)
          setIcon(jasonresponse.weather[0].icon)
        })
        .catch(err => console.error(err))
      }

    
    if(notFound===true) {
        return (
        <div className="App">
            <h3>Nie ma takiego miasta 😒</h3>
            <p>Poszukaj innego miasta</p> 
            <button onClick={reload}>Ponów</button>
        </div>
        );
    } 

  return (   
    <div className="App">
      <h3> Dla którego miasta chcesz sprawdzić pogodę:</h3>
      <label > Szukaj miasta:</label>
      <input type="text" required
            minlength="3" maxlength="12" size="16"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}/>
      <button onClick={fetchData}>Znajdź</button> 
          <div>
              { 
                <>  
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="Weather icon" />               
                <p>Miasto: {location}</p>
                <p>Temperatura: {temperature} ℃</p>
                <p>Wiatr: {windy}  (m/s)</p>
                <p>Info: {description}</p>        
                </>                    
              }        
            </div>
    </div>
  );
} 
export default App;
