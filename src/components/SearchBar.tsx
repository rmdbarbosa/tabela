import { useSearchParams } from "react-router-dom";
import Search from "../assets/Icons/Search.svg?react";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (query) {
      setSearchParams({ search: query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="flex pt-[24px] pb-[20px] relative w-full max-w-[335px]">
      <input
        type="text"
        placeholder="Pesquisar"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        value={searchParams.get("search") || ""}
        onChange={handleSearch}
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <Search />
      </button>
    </div>
  );
}
