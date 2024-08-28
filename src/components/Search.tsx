import '../styles.css';
import { Result } from '../data';
import { Badge } from './Badge';

interface ISearchProps {
  onSearch: (
    handleSearch: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  results: Result[];
}

interface IResultCardProps {
  data: Result;
}

function ResultCard({ data }: IResultCardProps) {
  return (
    <li className="flex flex-col gap-1 list-none p-4 rounded-md bg-gray-200 shadow-md text-left">
      <div className="text-lg font-bold flex justify-start items-center gap-5">
        {data.name}
      </div>
      <div className="flex">
        <Badge text={`${data.side} fodmap`} /> <Badge text={data.type} />
      </div>
      <div className="text-xs italic">{data.cat}</div>
    </li>
  );
}

export default function Search({ onSearch, results = [] }: ISearchProps) {
  return (
    <div className="flex flex-col items-center justify-start gap-4 mt-20">
      <h2 className="text-2xl">What can I have?</h2>
      <input
        type="text"
        className="bg-white rounded-md text-dark text-center p-2 w-full max-w-[300px]"
        onChange={(event) => onSearch(event)}
      />
      <ul className="results grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pl-0 pt-10">
        {results.map((item) => (
          <ResultCard key={item.name} data={item} />
        ))}
      </ul>
    </div>
  );
}
