import style from './Button.module.css'

function Button({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className={style.button}
      type="button"
    >
      Open modal
    </button>
  )
}

export default Button