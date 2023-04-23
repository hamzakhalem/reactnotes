import React from 'react'
import {Link} from 'react-router-dom';

let unifytime = (note)=>{
  return new Date(note.updated).toLocaleDateString();
}

let trimbody = (note)=>{
  let title = note.body.split('\n')[0];

  if(title.length > 45 ){
    return title.slice(0,45);
  }
  return title ;
}

let getcontent = (note)=>{
  let title = trimbody(note);
  let content = note.body.replaceAll('\n', ' ');
  content = content.replaceAll(title, '');

  if(content.length > 45 ){
    return content.slice(0,45)  +'...';
  }
  return content;
}
function ListItem({note}) {
  return (
    <div>
        <Link to={`/note/${note.id}`}>
          <div className='notes-list-item'>
            <h3 >{trimbody(note)}</h3>
            <p><span>{unifytime(note)}</span>{getcontent(note)}</p>
         </div>
        </Link>
    </div>
  )
}

export default ListItem