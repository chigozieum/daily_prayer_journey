"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function RandomVerse() {
  const [verse, setVerse] = useState({ text: "", reference: "" })
  const [loading, setLoading] = useState(false)

  const getRandomVerse = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://labs.bible.org/api/?passage=random&type=json")
      const data = await response.json()
      setVerse({ text: data[0].text, reference: `${data[0].bookname} ${data[0].chapter}:${data[0].verse}` })
    } catch (error) {
      console.error("Error fetching verse:", error)
      setVerse({ text: "Failed to fetch verse. Please try again.", reference: "" })
    }
    setLoading(false)
  }

  useEffect(() => {
    getRandomVerse()
  }, [])

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Verse of the Day</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="italic mb-2">"{verse.text}"</p>
          <p className="text-sm text-gray-600 mb-2">- {verse.reference}</p>
        </>
      )}
      <Button onClick={getRandomVerse} disabled={loading}>
        {loading ? "Loading..." : "New Verse"}
      </Button>
    </div>
  )
}

