
import './App.css';

import Country from './components/Country/Country';

function App() {
  return (
    <div className="App">
      <Country></Country>
      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}
// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>Countries:{countries.length}</h1>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//       <h2>Name:{props.name}</h2>
//       <h4>Population:{props.population}</h4>
//     </div>
//   )
// }

export default App;
