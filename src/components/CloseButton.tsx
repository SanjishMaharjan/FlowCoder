import { IoIosClose } from 'react-icons/io'

const CloseButton = ({ onClose }: { onClose: () => void }) => (
  <button
    type="button"
    onClick={onClose}
    aria-label="Close"
    className="close-button"
    style={{ cursor: 'pointer', border: 'none', borderRadius: '50%' }}
  >
    <IoIosClose size={30} />
  </button>
)

export default CloseButton
