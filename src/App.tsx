import { useEffect, useState } from 'react';
import './App.css';
import CompanyList from './components/CompanyList';
import DropDown from './components/Dropdown';
import Filter from './components/Filter';
import Header from './components/Header';
import {
  ApiRequest,
  ApiResponse,
  MarketCapOrder,
  RequestState,
} from './types/serviceTypes';
import { fetchData } from './services/api';
import Pagination from './components/Pagination';
import StockGraph from './assets/stock_tracker_graph.svg';
import Loader from './components/Loader';
import { PAGE_SIZE } from './common/constant';

function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse>();
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('AU');
  const [selectedMarketCapOrder, setSelectedMarketCapOrder] = useState<string>(
    MarketCapOrder.desc,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setIsLoading(true);
        const requestData: ApiRequest = {
          id: 1,
          no_result_if_limit: false,
          offset: (currentPage - 1) * PAGE_SIZE,
          size: PAGE_SIZE,
          state: RequestState.read,
          rules: JSON.stringify([
            ['order_by', 'market_cap', `${selectedMarketCapOrder}`],
            ['grid_visible_flag', '=', true],
            ['market_cap', 'is_not_null'],
            ['primary_flag', '=', true],
            ['is_fund', '=', false],
            ...(selectedCountryCode !== 'Global'
              ? [
                  [
                    'aor',
                    [
                      [
                        'country_name',
                        'in',
                        [`${selectedCountryCode?.toLowerCase()}`],
                      ],
                    ],
                  ],
                ]
              : []),
          ]),
        };

        const data = await fetchData(requestData);
        setIsLoading(false);
        setApiResponse(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCompanies();
  }, [currentPage, selectedCountryCode, selectedMarketCapOrder]);

  const updateSelectedCountry = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
    resetPagination();
  };

  const updateSelectedOrder = (selectedOrder: MarketCapOrder) => {
    setSelectedMarketCapOrder(selectedOrder);
  };

  const resetPagination = () => setCurrentPage(1);

  return (
    <main>
      <title className="flex items-center justify-center py-4 fixed top-0 left-0 right-0 bg-primary">
        <img className="w-12 h-12" src={StockGraph} alt="Stock Graph" />
        <h1 className="text-2xl">STOCK TRACKER</h1>
      </title>
      <section className="pt-28 px-8 bg-inherit max-w-7xl min-w-max mx-auto">
        <DropDown handleCountrySelection={updateSelectedCountry} />
        <Header selectedCountryCode={selectedCountryCode} />
        <Filter selectedOrder={updateSelectedOrder} />
        {isLoading && (
          <div className="flex justify-center items-center h-lvh ">
            <Loader />
          </div>
        )}
        {apiResponse?.data.length && (
          <CompanyList companyList={apiResponse?.data} />
        )}

        {apiResponse?.meta?.total_records && (
          <Pagination
            currentPage={currentPage}
            total={apiResponse?.meta?.total_records}
            onPageChange={setCurrentPage}
          />
        )}
      </section>
    </main>
  );
}
export default App;
