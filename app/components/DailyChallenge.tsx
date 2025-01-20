"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const challenges = [
  "Pray for a friend or family member",
  "Memorize a Bible verse",
  "Perform an act of kindness",
  "Spend 10 minutes in silent meditation",
  "Write a gratitude list",
  "Read a chapter from the Bible",
  "Fast from social media for a day",
  "Reach out to someone you haven't talked to in a while",
]

export default function DailyChallenge() {
  const [challenge, setChallenge] = useState("")
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    const savedChallenge = localStorage.getItem("dailyChallenge")
    const savedCompleted = localStorage.getItem("challengeCompleted")
    const lastChallengeDate = localStorage.getItem("lastChallengeDate")

    if (savedChallenge && lastChallengeDate === new Date().toDateString()) {
      setChallenge(savedChallenge)
      setCompleted(savedCompleted === "true")
    } else {
      newChallenge()
    }
  }, [])

  const newChallenge = () => {
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)]
    setChallenge(randomChallenge)
    setCompleted(false)
    localStorage.setItem("dailyChallenge", randomChallenge)
    localStorage.setItem("challengeCompleted", "false")
    localStorage.setItem("lastChallengeDate", new Date().toDateString())
  }

  const completeChallenge = () => {
    setCompleted(true)
    localStorage.setItem("challengeCompleted", "true")
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Daily Challenge</h3>
      <p className="mb-2">{challenge}</p>
      <Button onClick={completed ? newChallenge : completeChallenge} className="mr-2">
        {completed ? "New Challenge" : "Complete"}
      </Button>
      {completed && <span className="text-green-600">✓ Completed</span>}
    </div>
  )
}

