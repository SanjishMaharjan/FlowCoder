interface NodeSelectorProps {
  onSelectShape: (shape: string) => void
}

const NodeSelector = ({ onSelectShape }: NodeSelectorProps) => {
  return (
    <div className="node-selector">
      <button onClick={() => onSelectShape('circle')}>Circle</button>
      <button onClick={() => onSelectShape('diamond')}>Diamond</button>
      <button onClick={() => onSelectShape('parallelogram')}>
        Parallelogram
      </button>
      <button onClick={() => onSelectShape('textUpdater')}>Text Node</button>
    </div>
  )
}

export default NodeSelector
