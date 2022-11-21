import useLocalStorage from "../hooks/useLocalStorage";

const LatestSearches = ({ searches }) => {
  const [storedValue, setValue] = useLocalStorage("favorites", []);
  
  const saveToFavoriteHandler = (s) => {
    setValue([...storedValue, s])
  }
  
  return searches && (
    <>
      <h2 className="font-bold pb-4">Latest Searches:</h2>
      <p>{!searches.length && 'no recent searchs, do a search!'}</p>
      <ul>
        {searches.map((s, i) => <li className="cursor-pointer" onClick={() => saveToFavoriteHandler(s)} key={`${s}-${i}`}>{s}</li>)}
      </ul>
      <p className="font-bold pt-4">{searches.length > 0 && 'Click latest searches above to save to favorites'}</p>
    </>
  );
};

export default LatestSearches;