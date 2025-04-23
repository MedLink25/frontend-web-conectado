import React, { useEffect, useState } from "react";
import { getRegistros } from "../api";

export default function Dashboard() {
  const [registros, setRegistros] = useState([]);
  const auth = localStorage.getItem("auth");

  useEffect(() => {
    getRegistros(auth)
      .then((res) => setRegistros(res.data))
      .catch((err) => {
        console.error("Error cargando registros:", err);
        alert("Error al cargar historial.");
      });
  }, [auth]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Historial de Pacientes</h2>
      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Nombre</th>
            <th className="border px-2 py-1">Edad</th>
            <th className="border px-2 py-1">Volumen</th>
            <th className="border px-2 py-1">Procedimiento</th>
            <th className="border px-2 py-1">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((r) => (
            <tr key={r.id} className="border-b">
              <td className="border px-2 py-1">{r.nombre}</td>
              <td className="border px-2 py-1">{r.edad}</td>
              <td className="border px-2 py-1">{r.volumen}</td>
              <td className="border px-2 py-1">{r.procedimiento}</td>
              <td className="border px-2 py-1">{new Date(r.fecha).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
