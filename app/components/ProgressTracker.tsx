import { Progress } from "@/components/ui/progress"

interface ProgressTrackerProps {
  progress: number
  total: number
}

export default function ProgressTracker({ progress, total }: ProgressTrackerProps) {
  const percentage = (progress / total) * 100
  const daysCompleted = Math.floor(progress / 7)
  const weeksCompleted = Math.floor(daysCompleted / 7)

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Your Prayer Journey</h3>
      <Progress value={percentage} className="w-full mb-2" />
      <p className="text-sm text-gray-600">
        You've completed {daysCompleted} day{daysCompleted !== 1 ? "s" : ""} ({weeksCompleted} week
        {weeksCompleted !== 1 ? "s" : ""}) of your journey.
      </p>
      <p className="text-sm text-gray-600">
        {total - progress} prayer{total - progress !== 1 ? "s" : ""} left to complete the year.
      </p>
    </div>
  )
}

