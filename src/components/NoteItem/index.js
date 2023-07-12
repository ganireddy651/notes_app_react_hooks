import {GrFormClose} from 'react-icons/gr'
import './index.css'

const NoteItem = props => {
  const {eachItem, removeNotes} = props
  const {id, title, notes} = eachItem

  const onDelete = () => {
    removeNotes(id)
  }

  return (
    <li>
      <div className="card">
        <div style={{textAlign: 'right'}}>
          <button onClick={onDelete} type="button" className="close-button">
            <GrFormClose />
          </button>
        </div>
        <h1 className="card-heading">{title}</h1>
        <p className="card-para">{notes}</p>
      </div>
    </li>
  )
}

export default NoteItem
