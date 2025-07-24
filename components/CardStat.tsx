import { LucideIcon } from "lucide-react"

type CardStatProps = {
  title: string
  value: string
  icon: LucideIcon
  color?: string
}

export default function CardStat({ title, value, icon: Icon, color = "text-blue-600" }: CardStatProps) {
  return (
    <div className="p-4 border rounded-xl shadow-sm bg-card">
      <div className="flex items-center ">
        <div>
          <p className="text-muted-foreground text-sm">{title}</p>
          <h3 className="text-2xl font-semibold">{value}</h3>
        </div>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
    </div>
  )
}
