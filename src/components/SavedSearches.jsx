import useLocalStorage from "../hooks/useLocalStorage";

const SavedSearches = () => {
  const [favorites] = useLocalStorage("favorites");  
  return favorites && (
    <>  
      <h2 className="font-bold py-4">Saved Searches:</h2>
      <ul>
        {favorites.map((f, i) => <li key={`${f}-${i}`}>{f}</li>)}
      </ul>
    </>
  );
};

export default SavedSearches;