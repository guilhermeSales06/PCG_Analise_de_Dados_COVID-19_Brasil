"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { 
    name: "2017",
    Bertioga: 87.1,
    Cubatão: 89.3,
    Guarujá: 93.1,
    Itanhaém: 92.1,
    Mongaguá: 92.7,
    Peruíbe: 94.8,
    "Praia Grande": 93.3,
    Santos: 91.8,
    "São Vicente": 78.1,
  },
  { 
    name: "2019",
    Bertioga: 95.9,
    Cubatão: 93.3,
    Guarujá: 97.2,
    Itanhaém: 98,
    Mongaguá: 94.4,
    Peruíbe: 94.8,
    "Praia Grande": 95,
    Santos: 95.7,
    "São Vicente": 81,
  },
  { 
    name: "2021",
    Bertioga: 95.2,
    Cubatão: 96.8,
    Guarujá: 97.3,
    Itanhaém: 99.7,
    Mongaguá: 98.3,
    Peruíbe: 99.0,
    "Praia Grande": 97.9,
    Santos: 97.5,
    "São Vicente": 77.7,
  },
];

export default function MunicipalityChart() {
  const [visible, setVisible] = useState<Record<string, boolean>>({
    Bertioga: true,
    Cubatão: true,
    Guarujá: true,
    Itanhaém: true,
    Mongaguá: true,
    Peruíbe: true,
    "Praia Grande": true,
    Santos: true,
    "São Vicente": true,
  });

  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const toggle = (key: string) => {
    setVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleYearClick = (name: string) => {
    setSelectedYear((prev) => (prev === name ? null : name));
  };

  const handleBarClick = (data: any) => {
    if (data && data.name) {
      handleYearClick(data.name);
    }
  };

  const renderLegend = (props: any) => {
    const { payload } = props;
    if (!payload) return null;
    return (
      <div className="flex justify-center gap-6 mt-4 flex-wrap">
        {payload.map((entry: any) => {
          const key = entry.dataKey ?? entry.value;
          const active = !!visible[key];
          return (
            <button
              key={key}
              onClick={() => toggle(key)}
              className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer ${
                active ? "opacity-100" : "opacity-40"
              }`}
              type="button"
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  background: entry.color,
                  display: "inline-block",
                  borderRadius: 2,
                }}
              />
              <span className="text-sm">{entry.value}</span>
            </button>
          );
        })}
      </div>
    );
  };

  const filteredData = selectedYear 
    ? data.filter((d) => d.name === selectedYear) 
    : data;

  const renderTick = (props: any) => {
    const { x, y, payload } = props;
    const name = payload.value as string;
    const active = selectedYear === name;
    return (
      <text
        x={x}
        y={y + 16}
        textAnchor="middle"
        fill={active ? "#1F2937" : "#333"}
        onClick={() => handleYearClick(name)}
        style={{ cursor: "pointer", fontSize: 11, userSelect: "none" }}
      >
        {name}
      </text>
    );
  };

  const municipalityColors: Record<string, string> = {
    "Bertioga": "#3B5998",
    "Cubatão": "#5B7FCF",
    "Guarujá": "#7B9FE7",
    "Itanhaém": "#2B3E50",
    "Mongaguá": "#5DD5D5",
    "Peruíbe": "#00C9E0",
    "Praia Grande": "#4A6B6B",
    "Santos": "#6AC259",
    "São Vicente": "#A2D99F",
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="heading text-3xl md:text-5xl font-bold text-center mb-15 leading-15">
        Taxa de Aprovação por Município (2017-2021)
      </h2>

      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={filteredData} margin={{ top: 50, right: 0, left: -30, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E6E9EE" />
          <XAxis
            dataKey="name"
            tick={renderTick}
            interval={0}
            angle={0}
          />
          <YAxis tick={{ fill: "#333" }} domain={[60, 100]} />
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend content={renderLegend} />
          
          <Bar dataKey="Bertioga" name="Bertioga" fill="#3B5998" radius={[6,6,0,0]} barSize={20} hide={!visible["Bertioga"]} onClick={handleBarClick} style={{ cursor: "pointer" }} />
          <Bar dataKey="Cubatão" name="Cubatão" fill="#5B7FCF" radius={[6,6,0,0]} barSize={20} hide={!visible["Cubatão"]} onClick={handleBarClick} style={{ cursor: "pointer" }} />
          <Bar dataKey="Guarujá" name="Guarujá" fill="#7B9FE7" radius={[6,6,0,0]} barSize={20} hide={!visible["Guarujá"]} onClick={handleBarClick} style={{ cursor: "pointer" }} />
          <Bar dataKey="Itanhaém" name="Itanhaém" fill="#2B3E50" radius={[6,6,0,0]} barSize={20} hide={!visible["Itanhaém"]} onClick={handleBarClick} style={{ cursor: "pointer" }} />
          <Bar dataKey="Mongaguá" name="Mongaguá" fill="#5DD5D5" radius={[6,6,0,0]} barSize={20} hide={!visible["Mongaguá"]} onClick={handleBarClick} style={{ cursor: "pointer" }} />
          <Bar dataKey="Peruíbe" name="Peruíbe" fill="#00C9E0" radius={[6,6,0,0]} barSize={20} hide={!visible["Peruíbe"]} onClick={handleBarClick} style={{ cursor: "pointer" }} />
          <Bar dataKey="Praia Grande" name="Praia Grande" fill="#4A6B6B" radius={[6,6,0,0]} barSize={20} hide={!visible["Praia Grande"]} onClick={handleBarClick} style={{ cursor: "pointer" }} />
          <Bar dataKey="Santos" name="Santos" fill="#6AC259" radius={[6,6,0,0]} barSize={20} hide={!visible["Santos"]} onClick={handleBarClick} style={{ cursor: "pointer" }} />
          <Bar dataKey="São Vicente" name="São Vicente" fill="#A2D99F" radius={[6,6,0,0]} barSize={20} hide={!visible["São Vicente"]} onClick={handleBarClick} style={{ cursor: "pointer" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
