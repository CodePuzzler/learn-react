import { useState } from 'react'

import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
  const [showModal, setShowModal] = useState()

  function showModalHandler() {
    setShowModal(true)
  }

  function closeModalHandler() {
    setShowModal(false)
  }

  return (
    <div className="flex items-start space-x-6 p-6">
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20">
          {props.text}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dd>
              <button
                type="button"
                onClick={showModalHandler}
                className="bg-red-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
              >
                Delete
              </button>
            </dd>
          </div>
        </dl>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal text="Are you sure?" onClose={closeModalHandler} />}
    </div>
  )
}

export default Todo
