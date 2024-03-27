import { Company } from '../types/serviceTypes';
import CompanyItem from './CompanyItem';

const tableHeaders = [
  '', // placeholder for the snowflake column
  'Company',
  'Last Price',
  '7D return',
  '1Y Return',
  'Market Cap',
  'Analysts Target	',
  'Valuation',
  'Growth',
  'Div Yield',
  'Industry',
];

type CompanyListProps = {
  companyList: Company[];
};

function CompanyList({ companyList }: CompanyListProps) {
  return (
    <table className="table-auto my-10 w-full">
      <thead>
        <tr className="text-gray-400 border-b-0.5 border-white leading-6 text-xs">
          {tableHeaders.map((header) => (
            <th key={header} className="text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {companyList?.map((company: Company) => (
          <CompanyItem company={company} key={company.id} />
        ))}
      </tbody>
    </table>
  );
}

export default CompanyList;
