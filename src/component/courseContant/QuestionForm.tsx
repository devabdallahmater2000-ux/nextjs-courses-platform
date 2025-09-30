'use client'
import { useState } from 'react'

export default function QuestionForm() {
  const [formData, setFormData] = useState({
    title: '',
    details: ''
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleCancel = () => {
    setFormData({ title: '', details: '' })
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Ask a Question</h2>
      <form onSubmit={(e) => {handleSubmit}}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="title">
            Title or summary
          </label>
          <input 
            id="title" 
            name="title"
            type="text" 
            placeholder="e.g. Why this error shown in this part of code?" 
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="details">
            Details (optional)
          </label>
          <div className="border border-gray-300 rounded-md">
            <div className="flex border-b border-gray-300 bg-gray-50 p-2">
              <button type="button" className="p-1 text-gray-500 hover:text-gray-700 mx-1">
                <i className="fas fa-bold"></i>
              </button>
              <button type="button" className="p-1 text-gray-500 hover:text-gray-700 mx-1">
                <i className="fas fa-italic"></i>
              </button>
              <button type="button" className="p-1 text-gray-500 hover:text-gray-700 mx-1">
                <i className="fas fa-underline"></i>
              </button>
              <button type="button" className="p-1 text-gray-500 hover:text-gray-700 mx-1">
                <i className="fas fa-list-ul"></i>
              </button>
              <button type="button" className="p-1 text-gray-500 hover:text-gray-700 mx-1">
                <i className="fas fa-list-ol"></i>
              </button>
              <button type="button" className="p-1 text-gray-500 hover:text-gray-700 mx-1">
                <i className="fas fa-link"></i>
              </button>
              <button type="button" className="p-1 text-gray-500 hover:text-gray-700 mx-1">
                <i className="fas fa-image"></i>
              </button>
              <button type="button" className="p-1 text-gray-500 hover:text-gray-700 mx-1">
                <i className="fas fa-code"></i>
              </button>
            </div>
            <textarea 
              id="details" 
              name="details"
              rows={4}
              value={formData.details}
              onChange={(e)=>{handleChange}}
              className="w-full px-3 py-2 focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button 
            type="button" 
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 mr-2"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  )
}