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
    <>
      <p className="bg-red-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
