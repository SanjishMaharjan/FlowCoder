import { useState, useCallback } from 'react'
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Connection,
  Background,
  BackgroundVariant,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import TextUpdaterNode from './components/TextUpdater'
import CircleNode from './nodes/CircleNode'
import DiamondNode from './nodes/DiamondNode'
import RectangleNode from './nodes/RectangleNode'
import ParallelogramNode from './nodes/ParallelogramNode'
import { generateCode } from './utils/flowtocode'
import CloseButton from './components/CloseButton'
import SideMenu from './components/SideMenu'
import InputForm from './components/InputForm'
import Footer from './components/Footer'
import { IoAddCircle, IoCloseCircleSharp } from 'react-icons/io5'

const initialNodes: any[] = []
const initialEdges: any[] = []

function App() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)
  const [generatedCode, setGeneratedCode] = useState('')
  const [isCodeVisible, setIsCodeVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showInputForm, setShowInputForm] = useState(false)
  const [newNodeType, setNewNodeType] = useState('')
  const [newNodePosition, setNewNodePosition] = useState({ x: 0, y: 0 })
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)

  const toggleMenu = () => {
    setIsMenuCollapsed((prev) => !prev)
  }

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    [],
  )

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    [],
  )

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds: any) => addEdge(params, eds)),
    [],
  )

  const handleGenerateCode = () => {
    const code = generateCode(nodes, edges)
    setGeneratedCode(code)
    setIsCodeVisible(true)
  }

  const handleCloseCode = () => {
    setIsCodeVisible(false)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handleLabelSubmit = (label: string) => {
    const id = `node-${Math.floor(newNodePosition.y)}`
    const newNode = {
      id,
      type: newNodeType,
      position: newNodePosition,
      data: { label: label || `Node ${nodes.length + 1}` },
    }

    setNodes((nds: any) => nds.concat(newNode))
    setShowInputForm(false)
  }

  const addNode = (type: string) => {
    const position = { x: Math.random() * 250, y: Math.random() * 250 }
    setNewNodeType(type)
    setNewNodePosition(position)
    setShowInputForm(true)
  }

  // Step 1: Add a function to clear all nodes and edges
  const clearAll = () => {
    setNodes([])
    setEdges([])
  }

  return (
    <div className="flex h-screen bg-gray-100 mt-3">
      <button
        onClick={toggleMenu}
        className={`absolute top-4 left-4 z-50 p-2 rounded-full shadow-md font-bold transition duration-300 ${
          isMenuCollapsed
            ? 'bg-green-500 hover:bg-green-700 text-white'
            : 'bg-red-600 hover:bg-red-800 text-white ml-[200px]'
        }`}
      >
        {isMenuCollapsed ? (
          <>
            <IoAddCircle className="inline-block mr-1" size={20} /> Add Shape
          </>
        ) : (
          <>
            <IoCloseCircleSharp className="inline-block mr-1" size={20} /> Close
          </>
        )}
      </button>
      <SideMenu isCollapsed={isMenuCollapsed} addNode={addNode} />
      <div className="flex-1 relative ml-16">
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          <span className="block text-3xl"> FlowCode</span>
        </h2>

        <button
          onClick={handleGenerateCode}
          className="absolute top-1 right-36 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md font-bold hover:bg-blue-800 transition duration-300"
        >
          Generate Code
        </button>

        {/* Step 3: Add the Clear All button */}
        <button
          onClick={clearAll}
          className="absolute top-1 right-5 px-4 py-2 bg-red-600 text-white rounded-full shadow-md font-bold hover:bg-red-800 transition duration-300"
        >
          Clear All
        </button>

        {showInputForm && (
          <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-50">
            <InputForm
              onSubmit={handleLabelSubmit}
              onCancel={() => setShowInputForm(false)}
            />
          </div>
        )}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          onConnect={onConnect}
          nodeTypes={{
            textUpdater: TextUpdaterNode,
            circle: CircleNode,
            parallelogram: ParallelogramNode,
            diamond: DiamondNode,
            rectangle: RectangleNode,
          }}
          fitView
        >
          {/* <Controls /> */}
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
        {isCodeVisible && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl z-50 w-2/3 max-w-2xl">
            <div className="flex justify-end">
              <CloseButton onClose={handleCloseCode} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Generated Code
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto border border-gray-200 max-h-96 overflow-y-auto">
              <code className="text-gray-800">{generatedCode}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center w-full"
            >
              {copied ? (
                <>
                  <span className="mr-2">✓</span> Copied!
                </>
              ) : (
                <>
                  <span className="mr-2">📋</span> Copy Code
                </>
              )}
            </button>
          </div>
        )}
        <Footer />
      </div>
    </div>
  )
}

export default App
