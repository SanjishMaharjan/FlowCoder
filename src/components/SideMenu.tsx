import { FaSquare, FaCircle } from 'react-icons/fa'
import { BsDatabase, BsFillDiamondFill } from 'react-icons/bs'
import Parallelogram from '../assets/icons/parallelogram.svg'
import { MdTextFields } from 'react-icons/md'

interface SideMenuProps {
  addNode: (type: string) => void
  isCollapsed: boolean
}

const SideMenu = ({ addNode, isCollapsed }: SideMenuProps) => {
  return (
    <div
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } p-6 h-full bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl w-48 shadow-lg`}
    >
      <div className={`p-6 ${isCollapsed ? 'hidden' : 'block'} flex-grow`}>
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Flowchart Shapes
        </h2>
        <div className="space-y-6">
          {[
            { type: 'circle', icon: FaCircle, label: 'Begin/End' },
            {
              type: 'parallelogram',
              icon: Parallelogram,
              label: 'I/O',
              isImage: true,
            },
            { type: 'rectangle', icon: FaSquare, label: 'Process' },
            { type: 'diamond', icon: BsFillDiamondFill, label: 'Decision' },
            { type: 'database', icon: BsDatabase, label: 'database' },
            { type: 'text', icon: MdTextFields, label: 'text' },
          ].map((item) => (
            <div
              key={item.type}
              className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
              onClick={() => addNode(item.type)}
            >
              {item.isImage ? (
                <img src={item.icon} alt={item.label} className="w-10 h-10" />
              ) : (
                <item.icon className="text-blue-600" size={40} />
              )}
              <span className="text-gray-800 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideMenu
