import "../styles.css";
import { Result } from "../data";

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
    <li className="ResultCard">
      <div className="name">
        {data.name} <span>${data.side} FODMAP</span>
      </div>
      <div className="category">{data.cat}</div>
    </li>
  );
}

export default function Search({ onSearch, results = [] }: ISearchProps) {
  return (
    <div className="Search">
      <h2>What can I have?</h2>
      <input type="text" onChange={(event) => onSearch(event)} />
      <ul className="results">
        {results.map((item) => (
          <ResultCard key={item.name} data={item} />
        ))}
      </ul>
    </div>
  );
}
