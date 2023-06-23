 import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({query: e.currentTarget.elements.searchInput.value})
  }
  useEffect(() => {
     (query.get('query')) ? console.log('szukamy filmu'): console.log('pusty input');;
    
  
  },[query,setQuery])

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input name="searchInput" type="text" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};
export default MoviesPage;