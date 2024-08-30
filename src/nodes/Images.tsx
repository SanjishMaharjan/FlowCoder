import { ReactFlow, Background, Controls } from '@xyflow/react'
import CustomNode from '../components/CustomNode'
import Img from '../assets/image.png'

const nodeTypes = { customNode: CustomNode }

const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Hello', imageUrl: Img },
    type: 'customNode',
  },
]

function ImageRender() {
  return (
    <>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow>
    </>
  )
}

export default ImageRender
