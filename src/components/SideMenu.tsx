import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { FaSquare, FaCircle } from 'react-icons/fa'
import { BsDatabase, BsFillDiamondFill } from 'react-icons/bs'
import { MdTextFields } from 'react-icons/md'
import Parallelogram from '../assets/icons/parallelogram.svg'
import { FaCircleChevronLeft } from 'react-icons/fa6'
import { FcFlowChart } from 'react-icons/fc'

interface SideMenuProps {
  addNode: (type: string) => void
}

const SideMenu = ({ addNode }: SideMenuProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => setIsCollapsed(!isCollapsed)

  return (
    <div className="flex mt-1 rounded-2xl bg-gray-100">
      <div
        className={`${
          isCollapsed ? 'w-16' : 'w-64'
        } p-2 h-[94vh] shadow-lg transition-all duration-300 ease-in-out flex flex-col`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-2xl font-bold text-blue-700 ${
              isCollapsed ? 'hidden' : 'block'
            }`}
          >
            Flowchart Shapes
          </h2>
          <button
            onClick={toggleCollapse}
            className="text-blue-600 hover:text-blue-800"
          >
            {isCollapsed ? (
              <FcFlowChart size={42} />
            ) : (
              <FaCircleChevronLeft size={24} />
            )}
          </button>
        </div>

        <div className="space-y-5 flex-grow">
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
              className={`flex items-center ${
                isCollapsed ? 'justify-center' : 'space-x-10'
              } px-3 py-2 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-200 cursor-pointer`}
              onClick={() => addNode(item.type)}
            >
              {item.isImage ? (
                <img src={item.icon} alt={item.label} className="w-10 h-10" />
              ) : (
                <item.icon className="text-blue-600" size={40} />
              )}
              <span
                className={`text-gray-800 font-medium ${
                  isCollapsed ? 'hidden' : 'block'
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default SideMenu
