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
    Estadual: 90.2,
    Municipal: 90.6,
    Pública: 90.4,
  },
  { 
    name: "2019",
    Estadual: 94.6,
    Municipal: 92.4,
    Pública: 93.5,
  },
  { 
    name: "2021",
    Estadual: 95.3,
    Municipal: 95.5,
    Pública: 95.4,
  },
];

export default function ApprovalChart() {
  const [visible, setVisible] = useState<Record<string, boolean>>({
    Estadual: true,
    Municipal: true,
    Pública: true,
  });

  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const toggle = (key: string) => {
    setVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleYearClick = (name: string) => {
    setSelectedYear((prev) => (prev === name ? null : name));
  };

  const renderLegend = (props: any) => {
    const { payload } = props;
    if (!payload) return null;
    return (
      <div className="flex justify-center gap-6 mt-4">
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

  const filteredData = selectedYear ? data.filter((d) => d.name === selectedYear) : data;

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
        style={{ cursor: "pointer", fontSize: 12, userSelect: "none" }}
      >
        {name}
      </text>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
    <h2 className="heading text-3xl md:text-5xl font-bold text-center mb-15 leading-15">
        Evolução da Taxa de Aprovação por Rede de Ensino (2017-2021)
    </h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={filteredData} margin={{ top: 50, right: 0, left: -30, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E6E9EE" />
            <XAxis
              dataKey="name"
              tick={renderTick}
              interval={0}
            />
            <YAxis tick={{ fill: "#333" }} domain={[80, 100]} />
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Legend content={renderLegend} />
            <Bar dataKey="Estadual" name="Estadual" fill="#2B4A8C" radius={[6,6,0,0]} barSize={80} hide={!visible["Estadual"]} />
            <Bar dataKey="Municipal" name="Municipal" fill="#2563EB" radius={[6,6,0,0]} barSize={80} hide={!visible["Municipal"]} />
            <Bar dataKey="Pública" name="Pública" fill="#1F2937" radius={[6,6,0,0]} barSize={80} hide={!visible["Pública"]} />
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
}