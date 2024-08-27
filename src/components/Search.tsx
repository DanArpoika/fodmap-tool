import "../styles.css";
import  { data, Result } from "./data";

interface ISearchProps {
    onSearch: (handleSearch: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    results: Result[];
}

export default function Search({
    onSearch,
    results = [],
}: ISearchProps) {
  return (
    <div className="Search">
        <h2>Can I Have?</h2>
      <input type="text" onChange={(event) => onSearch(event)} />
      <div className="results" style={{
        '--results-visibility': results.length ? 'visible' : 'hidden',
      }}>
        {results.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
