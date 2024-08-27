import "./styles.css";
import Search from './components/Search';
import { useRef, useState } from "react";
import  { data, Result } from "./data";

export default function App() {
  const [results, setResults] = useState<Result[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const input = event.target.value;

    setSearchTerm(input);

    if (!input) {
      setResults([]);
      return;
    }

    const filteredData = data.filter((item: Result) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );

    setResults(filteredData);
  }

  const bgColor = searchTerm ? (results.length ? 'green' : 'red' ) : 'darkslategray';
  
  return (
    <div className="App" style={{ '--bg-color': bgColor }}>
      <Search onSearch={handleSearch} results={results} />
    </div>
  );
}
