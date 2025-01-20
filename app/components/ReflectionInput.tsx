"use client"

import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ReflectionInput() {
  const [reflection, setReflection] = useState("")
  const [savedReflections, setSavedReflections] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("reflections")
    if (saved) {
      setSavedReflections(JSON.parse(saved))
    }
  }, [])

  const handleSubmit = () => {
    if (reflection.trim()) {
      const newReflections = [...savedReflections, reflection]
      setSavedReflections(newReflections)
      localStorage.setItem("reflections", JSON.stringify(newReflections))
      setReflection("")
    }
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Your Reflection</h3>
      <Textarea
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        placeholder="Write your thoughts and reflections here..."
        className="mb-2"
      />
      <Button onClick={handleSubmit}>Save Reflection</Button>
      {savedReflections.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Previous Reflections</h4>
          <ul className="list-disc pl-5">
            {savedReflections.slice(-3).map((ref, index) => (
              <li key={index} className="text-sm text-gray-600 mb-1">
                {ref}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

