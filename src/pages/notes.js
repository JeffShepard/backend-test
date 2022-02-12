import axios from 'axios';
import React, {useState} from 'react'
const generateUniqueId = require('generate-unique-id');

const ChangeNotes = () => {

      // axios.defaults.baseURL = 'https://us-central1-note-taking-app-852ae.cloudfunctions.net/api'

      const [newNote, setNewNote] = useState([])
      const [newUser, setNewUser] = useState([])
      const [tempNote, setTempNote] = useState([])
      const [tempUser, setTempUser] = useState([])

      let idNum = generateUniqueId({
        length: 3,
        useLetters: false,
        useNumbers: true
      })

      console.log(idNum)
   
      const addNote = (e) => {
        e.preventDefault()
        const noteObj = {
          userHandle: newUser,
          body: newNote,
          id: idNum
        }
        console.log(noteObj)
        axios.post('https://us-central1-note-taking-app-852ae.cloudfunctions.net/api/note', noteObj)
          .then(response => {
            console.log(response)
          })
          setTempNote(newNote)
          setTempUser(newUser)
          setNewNote('')
          setNewUser('')
      }

      // const handleDelChange = (e) => {
      //   setDelID(e.target.value)
      // }
      // const delNote = (e) => {
      // e.preventDefault()
      //   console.log(delID)
      //   axios.delete('/notes', delID)
      // }
      
      const handleNoteChange = (e) => {
        setNewNote(e.target.value)
      }

      const handleUserChange = (e) => {
        setNewUser(e.target.value)
      }



    
      return (
        <div>
          <h2>Add a New Note</h2>
            <form onSubmit = {addNote}>
            <div>
            <input
                placeholder="User Name"
                value = {newUser}
                onChange={handleUserChange}
              />
            </div>
            <div>
              <input
                placeholder = "Note Contents"
                value = {newNote}
                onChange={handleNoteChange}
              />
            </div>
          <button type="submit">
            Add Note
          </button>
          </form>
          <div>
          You have added the following note:
          <p></p>
          <p>User Name: {tempUser}</p>
          <p>Note Contents: {tempNote}</p>
          </div>
        </div>

      );
    };

export default ChangeNotes;