import './output.css';
import Search from './components/Search';
import { useRef, useState } from 'react';
import { data, Result } from './data';

export default function App() {
  const [results, setResults] = useState<Result[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
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
  };

  return (
    <div className="font-sans text-center min-h-screen bg-gray-200 text-gray-700 m-0 py-10 px-20">
      <Search onSearch={handleSearch} results={results} />
    </div>
  );
}
