import React,{useState} from "react";

import plusIcon from "../../assets/plus.png";

import "./Sidebar.css";

function Sidebar(props) {
  // const colors = ["#6ACDF2", "#A86AF2", " #EF70E7", "#7177F6", "#62E386", "#ff8080"];
  const colors = ["#fab1b1", "#bd8ef5", " #f08be9", "#a1a5f7", "#86e3a0", "#d6b2f7"];

  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar">
      {/* <p>Sidebar</p> */}
      <img src={plusIcon} alt="Add" onClick={()=>setListOpen(!listOpen)}></img>
      <ul className={`sidebar_list ${listOpen?"sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={()=>props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
