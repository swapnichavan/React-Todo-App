import React from "react";

const AddItems = (props) => {
  return (
    <form
    className="d-flex justify-content-around mb-2"
    onSubmit={props.handleSubmit}
    >
      <div className="input-group w-50">
        <input
          className="form-control"
          type="text"
          name="option"
          placeholder="Enter Item"
        />
        <div className="input-group-append">
          <button className="btn btn-primary mr-1">Add Item</button>
        </div>
      </div>
    </form>
  );
};

export default AddItems;
