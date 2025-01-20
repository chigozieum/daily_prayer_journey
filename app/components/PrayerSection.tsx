import { Button } from "@/components/ui/button"

interface PrayerSectionProps {
  section: {
    title: string
    content: string
  }
  onNext: () => void
  onPrevious: () => void
  isLast: boolean
  isFirst: boolean
}

export default function PrayerSection({ section, onNext, onPrevious, isLast, isFirst }: PrayerSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
      <p className="mb-4">{section.content}</p>
      <div className="flex justify-between">
        <Button onClick={onPrevious} disabled={isFirst}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={isLast}>
          Next
        </Button>
      </div>
    </div>
  )
}

