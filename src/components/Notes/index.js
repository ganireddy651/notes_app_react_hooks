import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  BackgroundContainer,
  NotesHeading,
  NotesContainer,
  InputElement,
  TextAreaElement,
  AddButton,
} from './styledComponents'
import './index.css'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const stored = JSON.parse(localStorage.getItem('notesList'))
  const [notesList, setNotesList] = useState(stored == null ? [] : stored)

  useEffect(() => {
    document.title = 'Notes'
  })

  useEffect(() => {
    localStorage.setItem('notesList', JSON.stringify(notesList))
  })

  const onAddNotes = () => {
    if (title === '' || notes === '') {
      alert('Enter Title And Notes')
    } else {
      const newNotes = {
        id: uuidv4(),
        title,
        notes,
      }
      setNotesList(prevNotesList => [...prevNotesList, newNotes])
      setTitle('')
      setNotes('')
    }
  }
  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeNotes = e => {
    setNotes(e.target.value)
  }

  const removeNotes = id => {
    const filteredNotesList = notesList.filter(each => each.id !== id)
    setNotesList(filteredNotesList)
  }

  return (
    <BackgroundContainer>
      <NotesHeading>Notes</NotesHeading>
      <NotesContainer>
        <InputElement
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <TextAreaElement
          rows="10"
          cols="30"
          placeholder="Take a Note..."
          onChange={onChangeNotes}
          value={notes}
        />
        <AddButton onClick={onAddNotes} type="button">
          Add
        </AddButton>
      </NotesContainer>
      {notesList.length === 0 ? (
        <div style={{marginTop: '30px'}}>
          <img
            className="no-notes-image"
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <h1 className="no-notes-heading">No Notes Yet</h1>
          <p>Notes you add will appear here</p>
        </div>
      ) : (
        <ul className="list-container">
          {notesList.map(eachItem => (
            <NoteItem
              removeNotes={removeNotes}
              eachItem={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      )}
    </BackgroundContainer>
  )
}

export default Notes
