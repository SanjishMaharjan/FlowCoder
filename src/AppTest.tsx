import SideMenu from './components/SideMenu'
import { FlowchartElement } from './types/flowChartElementTypes'
import { generateCodeTest } from './utils/flowtocode'
import { useState } from 'react'
import './index.css'

type Props = {}

// Example usage
const flowchartElements: FlowchartElement[] = [
  { type: 'circle', content: 'Start' },
  { type: 'rectangle', content: 'a=10, b=9' },
  { type: 'parallelogram', content: 'sum = a+b}' },
  { type: 'diamond', content: 'condition' },
  { type: 'circle', content: 'End' },
]

const generatedCode = generateCodeTest(flowchartElements)

const AppTest = (props: Props) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 className="">AppTest</h1>
      {/* <SideMenu /> */}
      <div
        style={{
          position: 'relative',
          backgroundColor: '#f5f5f5',
          padding: '15px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          overflow: 'auto',
        }}
      >
        <pre
          style={{
            margin: 0,
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#333',
          }}
        >
          <code>{generatedCode}</code>
        </pre>

        <button
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '5px 10px',
            fontSize: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
    </div>
  )
}

export default AppTest
