interface NavbarProps {
  handleGenerateCode: () => void
  clearAll: () => void
}

const Navbar = ({ handleGenerateCode, clearAll }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center p-1 mt-2 bg-transparent mr-2">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
        FlowCode
      </h2>

      <div className="space-x-4">
        <button
          onClick={handleGenerateCode}
          className="px-4 py-2 bg-blue-600 text-white rounded-2xl shadow-md font-bold hover:bg-blue-700 transition duration-300"
        >
          Generate Code
        </button>

        <button
          onClick={clearAll}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-2xl shadow-sm font-medium hover:bg-gray-300 transition duration-300"
        >
          Clear All
        </button>
      </div>
    </nav>
  )
}

export default Navbar
