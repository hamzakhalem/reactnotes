import React, {useState, useEffect} from 'react'
import { Link,  useHistory } from 'react-router-dom';
import {ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
function NotePage({match}) {
    let noteId = match.params.id;
    let [note, setNote] = useState(null);
    const history = useHistory();
    useEffect(()=>{
        getNote();
    }, []);
    let getNote = async () =>{
        if(noteId === 'new') return;
        let response = await fetch('/api/notes/'+noteId);
        let data = await response.json();
        console.log(data.body);
        setNote(data);
       };

    let updateNote = async () =>{
      let response = await fetch('/api/notes/update/'+noteId, {
        method: 'PUT', 
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(note)
      });
      console.log(response)
    }
    let deleteNote = async () =>{
      let response = await fetch('/api/notes/delete/'+noteId, {
        method: 'DELETE', 
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(note)
      });
      console.log(response)
    }
    let addNote = async () =>{
      let response = await fetch('/api/notes/create/', {
        method: 'POST', 
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(note)
      });
      console.log(response)
    }
    let hundleSubmit = ()=>{
      console.log(noteId)
      if(noteId !== 'new' && !note.body)  
        deleteNote();
      else if (noteId !== 'new')
        updateNote();
      else if (noteId==='new' && note !== null)
        addNote();
      history.push('/');
    };
  return (
    <div className='note'>
      <div className='note-header'>
        <h3 className=''>

           <ArrowLeft onClick={hundleSubmit}/>
          
          
        </h3>
        {noteId !== 'new'?(<button onClick={deleteNote}> DELETE</button>):
          (<button onClick={hundleSubmit}> Add</button>)
        }
        
      </div>
      <textarea defaultValue={note?.body} onChange ={(e)=>{setNote({...note, 'body': e.target.value})}}></textarea>
    </div>
  )
}

export default NotePage