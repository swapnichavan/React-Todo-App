import React from "react";


const Items = (props) => {
  return (
    <div className="">
      {
        props.items.map((item,index) => (
        <div key={item.id} className="d-flex justify-content-around mb-2">
        <li className="d-flex list-group-item align-items-center justify-content-between w-50 py-3">
        {item.text}
      <button
      className="btn btn-sm btn-danger"
      onClick={()=>props.handleDelete(item.id)}
      >
        Remove
      </button>
        </li>
        </div>
      ))
      }
      <div className="d-flex justify-content-around">
      <button
        className="btn btn-primary w-50"
        onClick={props.handleDeleteAll}
        >Remove All</button>
      </div>
      </div>
)}

export default Items;
