import Header from "./components/Header";
import useEmployees from "./hooks/getEmployees";

function App() {
  const { employees, loading, error } = useEmployees();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching employees: {error.message}</p>;
  }

  return (
    <div className="bg-gray-00">
      <Header />
      teste
    </div>
  );
}

export default App;
