import { useState, useCallback, useEffect } from 'react'
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
import SideMenu from './components/SideMenu'
import InputForm from './components/InputForm'
import Navbar from './components/navBar'
import CodeGenerator from './components/codeGenerator'

const initialNodes: any[] = []
const initialEdges: any[] = []

interface DiamondNodeData {
  label: string
  leftTargetId?: string
  rightTargetId?: string
  trueComponent?: string
  falseComponent?: string
  rightType?: string
  leftType?: string
}

function App() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)
  const [generatedCode, setGeneratedCode] = useState('')
  const [isCodeVisible, setIsCodeVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showInputForm, setShowInputForm] = useState(false)
  const [newNodeType, setNewNodeType] = useState('')
  const [newNodePosition, setNewNodePosition] = useState({ x: 0, y: 0 })

  // Modified the onNodesChange function to also remove associated edges when a node is removed. This ensures that when a node is deleted, any edges connected to it are also removed.

  const onNodesChange = useCallback(
    (changes: any) => {
      setNodes((nds: any) => {
        const updatedNodes = applyNodeChanges(changes, nds)
        // Remove associated edges when a node is removed
        if (changes.some((change: any) => change.type === 'remove')) {
          setEdges((eds) =>
            eds.filter(
              (edge) =>
                updatedNodes.some((node) => node.id === edge.source) &&
                updatedNodes.some((node) => node.id === edge.target),
            ),
          )
        }
        return updatedNodes
      })
    },
    [setEdges],
  )

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    [],
  )

  const onConnect = useCallback((params: Connection) => {
    const newEdge = {
      ...params,
      type: 'smoothstep', // Use 'smoothstep' or 'default' for compatibility
      animated: true, // Enable animation on the edge
      style: { stroke: '#000' },
      arrowHeadType: 'arrowclosed',
    }
    setEdges((eds: any) => addEdge(newEdge, eds))
  }, [])

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

  const handleLabelSubmit = (
    label: string,
    leftType: string,
    rightType: string,
    leftLabel: string,
    rightLabel: string,
  ) => {
    const id = `node-${Math.floor(newNodePosition.y)}`
    const newNode: {
      id: string
      type: string
      position: { x: number; y: number }
      data: DiamondNodeData
    } = {
      id,
      type: newNodeType,
      position: newNodePosition,
      data: {
        label: label,
        trueComponent: rightLabel, // Make the component for true to render in code
        falseComponent: leftLabel, // Make the component for false to render in code
        rightType: rightType,
        leftType: leftType,
      },
    }

    if (newNodeType === 'diamond') {
      const leftTargetId = `${id}-left-target`
      const rightTargetId = `${id}-right-target`

      const leftTarget = {
        id: leftTargetId,
        type: leftType,
        position: { x: newNodePosition.x - 150, y: newNodePosition.y + 100 },
        data: { label: leftLabel || 'False' },
      }

      const rightTarget = {
        id: rightTargetId,
        type: rightType,
        position: { x: newNodePosition.x + 150, y: newNodePosition.y + 100 },
        data: { label: rightLabel || 'True' },
      }

      newNode.data.leftTargetId = leftTargetId
      newNode.data.rightTargetId = rightTargetId

      setNodes((nds: any) => nds.concat([newNode, leftTarget, rightTarget]))
    } else {
      setNodes((nds: any) => nds.concat(newNode))
    }

    setShowInputForm(false)
  }

  const addNode = (type: string) => {
    const position = { x: Math.random() * 250, y: Math.random() * 250 }
    setNewNodeType(type)
    setNewNodePosition(position)
    setShowInputForm(true)
  }

  const clearAll = () => {
    setNodes([])
    setEdges([])
  }

  // To remove selected nodes on pressing delete key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Delete') {
        setNodes((nds) => nds.filter((node) => !node.selected))
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [setNodes])

  return (
    <div className="flex h-full">
      <SideMenu addNode={addNode} />
      <div className="flex-1">
        <Navbar handleGenerateCode={handleGenerateCode} clearAll={clearAll} />
        {showInputForm && (
          <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-50">
            <InputForm
              onSubmit={handleLabelSubmit}
              onCancel={() => setShowInputForm(false)}
              nodeType={newNodeType}
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
        {/* Code Generator Component on Button Click */}
        {isCodeVisible && (
          <CodeGenerator
            handleCloseCode={handleCloseCode}
            generatedCode={generatedCode}
            handleCopy={handleCopy}
            copied={copied}
          />
        )}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
