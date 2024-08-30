import { Handle, Position } from '@xyflow/react'

function RectangleNode({ data }: any) {
  return (
    <div
      style={{
        width: 100,
        height: 60,
        background: '#dedede',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #777',
      }}
    >
      {data.label}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

export default RectangleNode
