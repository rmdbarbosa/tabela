import React, { useState } from "react";
import ChevronDownIcon from "../assets/Icons/chevron-down.svg?react";
import ChevronUpIcon from "../assets/Icons/chevron-up.svg?react";
import { formatDate, formatPhone } from "../utils/utils";
import { Employee } from "../types/employee.types";
import { useSearchParams } from "react-router-dom";

interface TableProps {
  employees: Employee[];
}

export default function Table({ employees }: TableProps) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search")?.toLowerCase() || "";

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(query) ||
      emp.job.toLowerCase().includes(query) ||
      emp.phone.includes(query)
  );

  return (
    <div className="rounded-t-xl overflow-hidden">
      <table className="min-w-full table-auto">
        <TableHeader />
        <tbody>
          {filteredEmployees.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableHeader() {
  return (
    <thead className="relative bg-primary text-white shadow uppercase">
      <tr>
        <th className="px-4 py-2 text-left">
          <h2>Foto</h2>
        </th>
        <th className="px-4 py-2 text-left">
          <h2>Nome</h2>
        </th>
        <th className="px-4 py-2 text-left hidden lg:table-cell">
          <h2>Cargo</h2>
        </th>
        <th className="px-4 py-2 text-left hidden lg:table-cell">
          <h2>Data de Admissão</h2>
        </th>
        <th className="px-4 py-2 text-left hidden lg:table-cell">
          <h2>Telefone</h2>
        </th>
        <th className="absolute right-[1.4rem] bg-white rounded-full h-2 w-2 top-[1rem] lg:hidden" />
      </tr>
    </thead>
  );
}

interface TableRowProps {
  user: Employee;
}

function TableRow({ user }: TableRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => setIsOpen(!isOpen);

  return (
    <>
      <tr className={`bg-white ${isOpen ? "" : "border-b border-[#dfdfdf]"}`}>
        <td className="px-4 py-3">
          <img
            className="rounded-full min-h-[34px] min-w-[34px]"
            src={user.image}
            alt={user.name}
            width={34}
            height={34}
          />
        </td>
        <td className="px-4 py-2 lg:hidden">
          <div className="flex justify-between items-center">
            <h3>{user.name}</h3>
            <button
              onClick={toggleDetails}
              className="text-xl text-primary"
              aria-label={isOpen ? "Close details" : "Open details"}
            >
              {isOpen ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </td>
        <td className="hidden lg:table-cell px-4 py-2">{user.name}</td>
        <td className="hidden lg:table-cell px-4 py-2">{user.job}</td>
        <td className="hidden lg:table-cell px-4 py-2">
          {formatDate(user.admission_date)}
        </td>
        <td className="hidden lg:table-cell px-4 py-2">
          {formatPhone(user.phone)}
        </td>
      </tr>

      {isOpen && (
        <tr className="lg:hidden bg-white">
          <td colSpan={5} className="px-4 py-4">
            <div className="space-y-4">
              <TableRowDetails label="Cargo" value={user.job} />
              <TableRowDetails
                label="Data de Admissão"
                value={formatDate(user.admission_date)}
              />
              <TableRowDetails
                label="Telefone"
                value={formatPhone(user.phone)}
              />
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

interface TableRowDetailsProps {
  label: string;
  value: string;
}

function TableRowDetails({ label, value }: TableRowDetailsProps) {
  return (
    <div className="flex justify-between border-b border-dashed border-[#dfdfdf]">
      <h2 className="font-bold">{label}</h2> <h3>{value}</h3>
    </div>
  );
}
