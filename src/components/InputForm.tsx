import React, { useState } from 'react'

interface InputFormProps {
  onSubmit: (label: string) => void
  onCancel: () => void
}

const InputForm = ({ onSubmit, onCancel }: InputFormProps) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(input)
    setInput('')
  }

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="mb-4">
          <label
            htmlFor="input"
            className="block text-lg font-medium text-gray-700"
          >
            Provide a Name for the Node
          </label>
        </div>
        <input
          type="text"
          id="input"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Type here..."
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default InputForm
