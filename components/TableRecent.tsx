'use client'

type RecentItem = {
  id: number
  user: string
  action: string
  date: string
}

const data: RecentItem[] = [
  { id: 1, user: "João Silva", action: "Login realizado", date: "2025-07-20 09:15" },
  { id: 2, user: "Maria Souza", action: "Fez pedido #1234", date: "2025-07-20 10:03" },
  { id: 3, user: "Pedro Alves", action: "Logout", date: "2025-07-20 11:22" },
  { id: 4, user: "Ana Lima", action: "Cadastro atualizado", date: "2025-07-20 12:05" },
  { id: 5, user: "Lucas Pereira", action: "Nova compra realizada", date: "2025-07-20 13:30" },
]

export default function TableRecent() {
  return (
    <div className="bg-card rounded-xl shadow-sm p-4 overflow-x-auto">
      <h3 className="text-lg font-semibold mb-4">Atividades Recentes</h3>
      <table className="w-full table-auto border-collapse text-left">
        <thead>
          <tr className="border-b border-muted-foreground/50">
            <th className="py-2 px-3">Usuário</th>
            <th className="py-2 px-3">Ação</th>
            <th className="py-2 px-3">Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, user, action, date }) => (
            <tr key={id} className="border-b border-muted-foreground/20 hover:bg-muted/30 transition-colors">
              <td className="py-2 px-3">{user}</td>
              <td className="py-2 px-3">{action}</td>
              <td className="py-2 px-3">{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
