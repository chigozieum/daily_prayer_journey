import { Flame } from "lucide-react"

interface StreakTrackerProps {
  streak: number
}

export default function StreakTracker({ streak }: StreakTrackerProps) {
  return (
    <div className="flex items-center mb-4 bg-orange-100 p-2 rounded-md">
      <Flame className="text-orange-500 mr-2" />
      <span className="font-semibold text-orange-700">
        {streak} day{streak !== 1 ? "s" : ""} streak!
      </span>
    </div>
  )
}

