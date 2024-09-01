import { useEffect } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'

function DiamondNode({ data, id }: any) {
  const { setEdges, getNode } = useReactFlow()

  useEffect(() => {
    const sourceNodeId = id
    const leftTargetId = data.leftTargetId || 'default-left-target'
    const rightTargetId = data.rightTargetId || 'default-right-target'

    setEdges((eds) => [
      ...eds,
      {
        id: `${sourceNodeId}-left-edge`,
        source: sourceNodeId,
        sourceHandle: 'false',
        target: leftTargetId,
        type: 'smoothstep',
        animated: true,
        style: { stroke: '#ff0000' },
      },
      {
        id: `${sourceNodeId}-right-edge`,
        source: sourceNodeId,
        sourceHandle: 'true',
        type: 'smoothstep',
        target: rightTargetId,
        animated: true,
        style: { stroke: '#00ff00' },
      },
    ])
  }, [id, setEdges, getNode, data.leftTargetId, data.rightTargetId])

  return (
    <div
      style={{
        width: 100,
        height: 100,
        background: '#dedede',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'rotate(45deg)',
        border: '1px solid #777',
        position: 'relative',
      }}
    >
      <div style={{ transform: 'rotate(-45deg)', textAlign: 'center' }}>
        <div>{data.label}</div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%) rotate(-45deg)',
        }}
      />
      {/* Left Vertex Handle */}
      <Handle
        type="source"
        id="false"
        position={Position.Left}
        style={{
          left: 0,
          top: '100%',
          transform: 'translate(-50%, -50%) rotate(-45deg)',
        }}
      />

      {/* Right Vertex Handle */}
      <Handle
        type="source"
        id="true"
        position={Position.Right}
        style={{
          left: '100%',
          top: 0,
          transform: 'translate(-50%, -50%) rotate(-45deg)',
        }}
      />
    </div>
  )
}

export default DiamondNode
