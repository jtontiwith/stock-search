import BaseInput from '../src/components/BaseInput';
import BaseButton from '../src/components/BaseButton';
import BaseTicker from '../src/components/BaseTicker';
import LatestSearches from '../src/components/LatestSearches';
import dynamic from 'next/dynamic';
const SavedSearches = dynamic(() => import('../src/components/SavedSearches'), {
  ssr: false,
});
import useStockSearch from '../src/hooks/useStockSearch';

export default function Home() {
  const { state, dispatch } = useStockSearch();
  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <div className="flex py-6">
          <BaseInput
            onChange={(e) =>
              dispatch({ type: 'set_search_text', payload: e.target.value })
            }
            value={state.searchText}
            placeHolder={'Search a stock symbol'}
          />
          <BaseButton onClick={() => dispatch({ type: 'set_active_search' })}>
            Search Symbol
          </BaseButton>
        </div>
        <div className="my-6">
          {state.stockData && <BaseTicker data={state.stockData} />}
        </div>

        <LatestSearches searches={state.latestSearches} />
        <SavedSearches />
      </div>
    </div>
  );
}
