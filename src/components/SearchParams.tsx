import { FormEvent, useEffect, useState } from 'react'
import { IRestuarant } from '../IRestuarant';
import RestuarantComponent from './RestuarantComponent';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const SearchParams = () => {
  const [restuarantFound, setResturantFound] = useState<IRestuarant[]>([]);
  const [restuarantSearch, setRestuarantSearch] = useState('');

  const searchForRestuarant = async (query: string): Promise<IRestuarant[]> => {
    const result = await fetch(`http://localhost:3001/dapi.kakao.com/v2/?search=${query}`)
    return (await result.json()).result;
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
    <div className="searchParams">
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
  )
}
