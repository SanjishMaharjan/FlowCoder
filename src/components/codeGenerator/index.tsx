import CloseButton from '../CloseButton'
import { FaRegCopy } from 'react-icons/fa'

interface Props {
  handleCloseCode: () => void
  generatedCode: string
  handleCopy: () => void
  copied: boolean
}

const index = ({
  handleCloseCode,
  generatedCode,
  handleCopy,
  copied,
}: Props) => {
  return (
    <div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl z-50 w-2/3 max-w-2xl">
        <div className="flex justify-end">
          <CloseButton onClose={handleCloseCode} />
        </div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Generated Code</h3>
        <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto border border-gray-200 max-h-96 overflow-y-auto">
          <code className="text-gray-800">{generatedCode}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center w-full"
        >
          {copied ? (
            <>
              <span className="mr-2">✓</span> Copied!
            </>
          ) : (
            <>
              <span className="mr-2">
                <FaRegCopy />
              </span>{' '}
              Copy Code
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default index
