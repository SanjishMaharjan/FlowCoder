import { Handle, Position } from '@xyflow/react'

function DiamondNode({ data }: any) {
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
      <div style={{ transform: 'rotate(-45deg)' }}>{data.label}</div>
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
