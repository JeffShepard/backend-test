import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Home = () => {
    // axios.defaults.baseURL = 'https://us-central1-note-taking-app-852ae.cloudfunctions.net/api'

    const [notes, getNotes] = useState([]);

    useEffect ( () => {
    const allNotes=[];
    const getAllNotes = () => {
        axios.get('https://us-central1-note-taking-app-852ae.cloudfunctions.net/api/notes')
            .then( (res) => { 
                console.log(res)
                res.data.forEach( note => 
                allNotes.push(
                <li key={note.noteID}>
                <h3>User Name: {note.userHandle}</h3>
                <p>Note Body: {note.body}</p>
                <p>Note ID: {note.id}</p>
                <p>Note Title: {note.title}</p>
                </li>))
                getNotes(allNotes)
            })
            .catch(error => console.log(`Error: ${error}`))
    }

        getAllNotes();
    }, []);

        return (
            <div>
            <h2> Current Notes</h2>
            <ul>
                {notes}
            </ul>
            </div>
        )
    
}

export default Home
