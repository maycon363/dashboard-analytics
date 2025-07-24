'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Jan', vendas: 1200 },
  { name: 'Fev', vendas: 2100 },
  { name: 'Mar', vendas: 800 },
  { name: 'Abr', vendas: 600 },
  { name: 'Mai', vendas: 2500 },
  { name: 'Jun', vendas: 1900 },
  { name: 'Julh', vendas: 5900 },
  { name: 'Jan', vendas: 1200 },
  { name: 'Fev', vendas: 2100 },
  { name: 'Mar', vendas: 800 },
  { name: 'Abr', vendas: 600 },
  { name: 'Mai', vendas: 2500 },
  { name: 'Jun', vendas: 1900 },
  { name: 'Julh', vendas: 5900 },
]

export default function Chart() {
  return (
    <div className="w-full h-[300px] bg-card p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Gráfico de Vendas</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="vendas" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
