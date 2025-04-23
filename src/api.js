import axios from "axios";

const BASE_URL = "https://atlas-proyecto-final.onrender.com";

export const getRegistros = (auth) =>
  axios.get(`${BASE_URL}/registros`, {
    headers: { Authorization: `Basic ${auth}` },
  });

export const guardarPaciente = (data, auth) =>
  axios.post(`${BASE_URL}/guardar`, data, {
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
  });

export const getAuditoria = (auth) =>
  axios.get(`${BASE_URL}/auditoria`, {
    headers: { Authorization: `Basic ${auth}` },
  });
