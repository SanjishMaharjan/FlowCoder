import { Handle, Position } from '@xyflow/react'

function CircleNode({ data }: any) {
  return (
    <div
      style={{
        borderRadius: '50%',
        width: 100,
        height: 100,
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

export default CircleNode
