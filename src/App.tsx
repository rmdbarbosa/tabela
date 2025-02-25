import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import useEmployees from "./hooks/getEmployees";

function App() {
  const { employees, loading, error } = useEmployees();

  if (loading) {
    return (
      <p className="min-h-[100svh] flex justify-center items-center">
        Carregando...
      </p>
    );
  }

  if (error) {
    return <p>Error fetching employees: {error.message}</p>;
  }

  return (
    <div className={`bg-gray-00 min-h-[100svh]`}>
      <Header />
      <div className="px-[20px] xl:pl-[30px] pt-[24px]">
        <div className="flex flex-wrap justify-between items-center">
          <h1>Funcionários</h1>
          <SearchBar />
        </div>
        <Table employees={employees} />
      </div>
    </div>
  );
}

export default App;
