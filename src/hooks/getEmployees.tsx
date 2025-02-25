import { useState, useEffect } from "react";
import { apiFetch } from "../services/api";
import { Employee } from "../types/employee.types";

export function useEmployees(): {
  employees: Employee[];
  loading: boolean;
  error: Error | null;
} {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    apiFetch("/employees")
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { employees, loading, error };
}

export default useEmployees;
