import React from "react";

import deleteIcon from "../../assets/delete.png";

import "./Note.css";

let timer = 500,timeout;
function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let hrs = date.getHours();
    let ampm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : 12;
    hrs = hrs > 12 ? (hrs = hrs%12) : hrs;

    let min = date.getMinutes();
    min = min<10?"0"+min:min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${ampm} ${day} ${month}`;
  };

  // debounce concept ==whenever we are writing something in note then after some time only it will save that data we don't want it to save on every letter we write
    const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text" defaultValue={props.note.text} 
      onChange ={(event)=>updateText(event.target.value,props.note.id)} 
      placeholder="Enter your note here..."/>
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="Delete"
          onClick={() => props.deleteNote(props.note.id)}
        ></img>
      </div>
    </div>
  );
}

export default Note;
