'use client'
import { useState } from 'react'

const courseSections = [
  {
    id: 1,
    title: "Section 1: Harum tenetur labore corrupti.",
    lectures: 5,
    items: [
      { id: 1, title: "1. Mogni labore sequi vel sit aut.", duration: "5:30", completed: false },
      { id: 2, title: "2. Rerum enim odio.", duration: "5:30", completed: false },
      { id: 3, title: "3. Aut minus cumque id quo.", duration: "5:30", completed: false },
      { id: 4, title: "4. Similique porro molestios quia eos quasi.", duration: "5:30", completed: false },
      { id: 5, title: "5. Dignissimos sequi qui totam est.", duration: "5:30", completed: false }
    ]
  },
  {
    id: 2,
    title: "Section 2: Corrupti neque quidem minima.",
    lectures: 4,
    items: [
      { id: 6, title: "1. Mogni labore sequi vel sit aut.", duration: "5:30", completed: false },
      { id: 7, title: "2. Rerum enim odio.", duration: "5:30", completed: false },
      { id: 8, title: "3. Aut minus cumque id quo.", duration: "5:30", completed: false },
      { id: 9, title: "4. Similique porro molestios quia eos quasi.", duration: "5:30", completed: false },
      { id: 10, title: "5. Dignissimos sequi qui totam est.", duration: "5:30", completed: false }
    ]
  },
  {
    id: 3,
    title: "Section 3: Incidunt beatae qui nihil.",
    lectures: 3,
    items: [
      { id: 11, title: "1. Mogni labore sequi vel sit aut.", duration: "5:30", completed: false },
      { id: 12, title: "2. Rerum enim odio.", duration: "5:30", completed: false },
      { id: 13, title: "3. Aut minus cumque id quo.", duration: "5:30", completed: false },
      { id: 14, title: "4. Similique porro molestios quia eos quasi.", duration: "5:30", completed: false },
      { id: 15, title: "5. Dignissimos sequi qui totam est.", duration: "5:30", completed: false }
    ]
  },
  {
    id: 4,
    title: "Section 4: Saepe provident quia est.",
    lectures: 6,
    items: [
      { id: 16, title: "1. Mogni labore sequi vel sit aut.", duration: "5:30", completed: false },
      { id: 17, title: "2. Rerum enim odio.", duration: "5:30", completed: false },
      { id: 18, title: "3. Aut minus cumque id quo.", duration: "5:30", completed: false },
      { id: 19, title: "4. Similique porro molestios quia eos quasi.", duration: "5:30", completed: false },
      { id: 20, title: "5. Dignissimos sequi qui totam est.", duration: "5:30", completed: false }
    ]
  }
]

export default function CourseContentSidebar() {
  const [sections, setSections] = useState(courseSections)

  const toggleCompletion = (sectionId: number, itemId: number) => {
    setSections(prevSections => 
      prevSections.map(section => 
        section.id === sectionId 
          ? {
              ...section,
              items: section.items.map(item => 
                item.id === itemId 
                  ? { ...item, completed: !item.completed }
                  : item
              )
            }
          : section
      )
    )
  }

  return (
    <div className="bg-white rounded-lg shadow sticky top-6">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Course content</h2>
      </div>
      <div className="p-4">
        {sections.map((section) => (
          <div key={section.id} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{section.title}</h3>
              <span className="text-xs text-gray-500">{section.lectures} lectures</span>
            </div>
            {section.items.length > 0 && (
              <div className="space-y-2 ml-4">
                {section.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-1">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={item.completed}
                        onChange={() => toggleCompletion(section.id, item.id)}
                        className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                      />
                      <span className={`ml-2 text-sm ${item.completed ? 'text-green-600' : 'text-gray-700'}`}>
                        {item.title}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{item.duration}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}