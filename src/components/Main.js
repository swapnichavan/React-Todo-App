import React from "react";
import Items from "./Items";
import AddItems from "./AddItems";
import {v4} from 'uuid';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.handleDeleteAll=this.handleDeleteAll.bind(this);

    
    this.state = {
    items: [
    {
      id:v4(),
      text:"Apple Pie"
    },
    {
      id:v4(),
      text:"Peach Cobbler"
    },
    {
      id:v4(),
      text:"Coconut Cream Pie"
    }
    ]
  }
  }
  

  handleSubmit(e){
    e.preventDefault();
    
    const item=e.target.elements.option.value.trim();
    if(!item){
      alert("Enter Valid Item");
    }
    else
    {
      const items={
      id:v4(),
      text:item
    }
    this.setState((prevState)=>{
      return{
        items:prevState.items.concat(items)
      }
    });
    }
    
    e.target.elements.option.value="";
  }

  handleDelete(ItemId){
    this.setState((prevState)=>{
      return{
        items:prevState.items.filter((item)=>item.id!==ItemId)
      }      
    })
  }

  handleDeleteAll(){
    this.setState({
      items:[]
    })
  }

  render() {
    const title="Dessert List";
    return (
      <div className="text-center wrapper">
        <h3>
          {title}
          <span className="badge badge-dark ml-3">
            {this.state.items.length}
          </span>
        </h3>
        <AddItems
        handleSubmit={this.handleSubmit}
        />
        <Items
        items={this.state.items}
        handleDelete={this.handleDelete}
        handleDeleteAll={this.handleDeleteAll}
        />
      </div>
    );
  }
}

export default Main;
