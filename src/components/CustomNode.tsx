import { memo } from 'react'

interface CustomNodeProps {
  data?: any
}

const CustomNode = ({ data }: CustomNodeProps) => {
  return (
    <div style={{ padding: 10, border: '1px solid #ddd', borderRadius: 5 }}>
      <img src={data.imageUrl} alt="Node" style={{ width: 20, height: 20 }} />
      {/* <div>Hellow</div>   */}
      {/* <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} /> */}
    </div>
  )
}

export default memo(CustomNode)
