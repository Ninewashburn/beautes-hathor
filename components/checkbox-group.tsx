"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface CheckboxGroupProps {
  children: React.ReactNode
  name: string
}

export default function CheckboxGroup({ children, name }: CheckboxGroupProps) {
  const [checkboxes, setCheckboxes] = useState<HTMLInputElement[]>([])

  useEffect(() => {
    // Find all checkboxes with the class 'my-checkbox'
    const checkboxElements = document.querySelectorAll<HTMLInputElement>(".my-checkbox")
    setCheckboxes(Array.from(checkboxElements))
  }, [])

  useEffect(() => {
    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement

      if (target.checked) {
        // Uncheck all other checkboxes
        checkboxes.forEach((cb) => {
          if (cb !== target) {
            cb.checked = false
          }
        })
      }
    }

    // Add event listeners to all checkboxes
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", handleChange)
    })

    // Cleanup event listeners
    return () => {
      checkboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", handleChange)
      })
    }
  }, [checkboxes])

  return (
    <div className="checkbox-group" data-name={name}>
      {children}
    </div>
  )
}

