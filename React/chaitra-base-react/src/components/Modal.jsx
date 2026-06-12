import React from 'react' // FIX: Removed unused local 'useState' to lean on parent state management
import Button from './Button'

function Modal({ value, id, setEditText, handleSave, onClose }) {
    return (
        <div className='fixed inset-0 z-50 bg-black/50 flex justify-center items-center'>
            <div className='h-50 rounded-xl w-3/4 bg-amber-300 p-4 relative'>
                
                {/* FIX: Wired the click handler directly to close the modal up in the parent tree */}
                <div className='absolute top-2 right-2'>
                    <Button 
                        onClick={onClose} 
                        size="small" 
                        rounded="xl" 
                        label="Close" 
                    />
                </div>

                <div className='flex gap-2 mt-12 justify-center'>
                    <input
                        required
                        className='border h-12 bg-white w-80 px-2'
                        value={value} // FIX: Bound to the correct matching 'value' prop name
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button
                        onClick={() => handleSave(id)}
                        className='h-12 cursor-pointer w-18 border bg-amber-500 font-medium'
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
