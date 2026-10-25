
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import style from './Modal.module.css'

const modal = document.getElementById('root-modal')

function Modal({ onClose ,onAddUser}) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const handleEscCloseModal = (evt) => {
      if (evt.code === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscCloseModal)

    return () => {
      window.removeEventListener('keydown', handleEscCloseModal)
    }
  }, [onClose])

  const handleBackdropClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }

  const handleSubmit = (evt) => {
  evt.preventDefault()

  const newUser = {
    name,
    age,
    email,
  }

  onAddUser(newUser)

  onClose()
}

  return createPortal(
    <div
      onClick={handleBackdropClose}
      className={style.backdrop}
    >
      <div className={style.modal}>
        <form onSubmit={handleSubmit} className={style.form}>
          <button
            onClick={onClose}
            className={style.close}
            type="button"
          >
            X
          </button>

          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />

          <input
            type="text"
            name="age"
            placeholder="Вік"
            value={age}
            onChange={(evt) => setAge(evt.target.value)}
          />

          <input
            type="email"
            name="email"
            placeholder="Пошта"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />

          <button type="submit">Відправити</button>
        </form>
      </div>
    </div>,
    modal
  )
}

export default Modal