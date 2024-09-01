import React, { useState } from 'react'

interface InputFormProps {
  onSubmit: (
    label: string,
    leftType: string,
    rightType: string,
    falseComponent: string,
    trueComponent: string,
  ) => void
  onCancel: () => void
  nodeType: string
}

const nodeTypes = ['circle', 'rectangle', 'parallelogram']

const InputForm: React.FC<InputFormProps> = ({
  onSubmit,
  onCancel,
  nodeType,
}) => {
  const [label, setLabel] = useState('')
  const [leftType, setLeftType] = useState(nodeTypes[0])
  const [rightType, setRightType] = useState(nodeTypes[0])
  const [falseComponent, setFalseComponent] = useState('')
  const [trueComponent, setTrueComponent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(label, leftType, rightType, falseComponent, trueComponent)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md w-full mx-auto p-6 rounded-lg backdrop-blur-sm bg-white/30"
    >
      <div>
        <label
          htmlFor="label"
          className="block text-sm font-medium text-gray-700"
        >
          Label
        </label>
        <input
          type="text"
          id="label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="mt-1 block w-full rounded-md border-1 shadow-sm p-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-slate-500 bg-gray-200"
        />
      </div>
      {nodeType === 'diamond' && (
        <>
          <div>
            <label
              htmlFor="falseComponent"
              className="block text-sm font-medium text-gray-700"
            >
              False Component
            </label>
            <input
              type="text"
              id="falseComponent"
              value={falseComponent}
              onChange={(e) => setFalseComponent(e.target.value)}
              className="mt-1 block w-full rounded-md border-1 shadow-sm p-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-slate-500 bg-gray-200"
            />
          </div>
          <div>
            <label
              htmlFor="leftType"
              className="block text-sm font-medium text-gray-700"
            >
              False Branch Type
            </label>
            <select
              id="leftType"
              value={leftType}
              onChange={(e) => setLeftType(e.target.value)}
              className="mt-1 block w-full rounded-md border-slate-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {nodeTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="trueComponent"
              className="block text-sm font-medium text-gray-700"
            >
              True Component
            </label>
            <input
              type="text"
              id="trueComponent"
              value={trueComponent}
              onChange={(e) => setTrueComponent(e.target.value)}
              className="mt-1 block w-full rounded-md border-1 shadow-sm p-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-slate-500 bg-gray-200"
            />
          </div>
          <div>
            <label
              htmlFor="rightType"
              className="block text-sm font-medium text-gray-700"
            >
              True Branch Type
            </label>
            <select
              id="rightType"
              value={rightType}
              onChange={(e) => setRightType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {nodeTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Add Node
        </button>
      </div>
    </form>
  )
}

export default InputForm
