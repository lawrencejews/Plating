import  { FormEvent, useEffect, useState } from 'react';
import './App.css';
import { IRestuarant } from './IRestuarant';
import RestuarantComponent from './RestuarantComponent';



function App() {
  const [restuarantFound, setResturantFound] = useState<IRestuarant[]>([]);
  const [restuarantSearch, setRestuarantSearch] = useState('');

  const searchForRestuarant = async (query: String): Promise<IRestuarant[]> => {
    const result = await fetch(`http://localhost:3001/dapi.kakao.com/v2/?search=${query}`)
    return (await result.json()).results;
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(restuarantSearch);
      const response = await searchForRestuarant(query);
      setResturantFound(response);
    })();
  }, [restuarantSearch]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('#searchText') as HTMLInputElement;
    setRestuarantSearch(input.value);
    input.value = '';
  };

  return (
    <div className="App">
      <h1>Restuarant Search App</h1>
      <form className="searchForm" onSubmit={event => search(event)} >
        <input id="searchText" type="text" />
        <button>Search</button>
      </form>
      {restuarantSearch && <p>Results for {restuarantSearch}...</p>}
      <div className="recipes-container">
        {restuarantFound.length &&
          restuarantFound.map(restuarant =>
            (<RestuarantComponent key={restuarant.href} restuarant={restuarant}></RestuarantComponent>))
        }
      </div>
    </div>
  );
}
export default App;