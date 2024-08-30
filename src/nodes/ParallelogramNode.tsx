import { Handle, Position } from '@xyflow/react'

function ParallelogramNode({ data }: any) {
  return (
    <div
      style={{
        width: 150,
        height: 80,
        background: '#dedede',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'skew(20deg)',
        border: '1px solid #777',
        position: 'relative',
      }}
    >
      <div style={{ transform: 'skew(-20deg)' }}>{data.label}</div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

export default ParallelogramNode
