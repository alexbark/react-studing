// Dependencies
import React from 'react';
import Column from '../column/Column';

class Dashboard extends React.Component{
  constructor(props) {
      super(props);
  }
  getCardsWithStatus(statusName){
    return this.props.dshbCards.filter((item)=>
      item.status === statusName.toUpperCase() ? item : false
    )
  }
  dragEnter(e){
    e.preventDefault();
    if(e.target.className.indexOf("column__") >= 0){
        e.target.style.border = "2px dotted cadetblue"
    }
  }
  dragLeave(e){
    e.preventDefault();
    if(e.target.className.indexOf("column__") >= 0){
        e.target.style.border = "1px solid #eee";
    }
  }
  dragDrop(e){
    e.preventDefault();
    let cardId = e.dataTransfer.getData("card");
    if(e.target.className.indexOf("_dshbColumnContent_") >= 0){
       let column = e.target.parentNode.parentNode.className.split('-').pop();
       e.target.appendChild(document.getElementById(cardId));
       this.changeStatus( column, cardId)
    }
  }
  dragEnd(e){
    e.preventDefault();
    [].forEach.call(document.querySelectorAll('[class^="column__"]:not([class^="column__columnTitle"])'), function(elem){
        elem.style.border = "1px solid #eee";
    })
  }
  changeStatus(columnName, cardId){
     this.props.dshbCards.forEach((cardItem)=>{
       if(cardItem['id'] == cardId && cardItem['status'] !== columnName.toUpperCase()){
           cardItem['status'] = columnName.toUpperCase();
           let elem = document.getElementById(cardId).querySelector("[class*='cardStatus']"),
               colName = columnName.toUpperCase();
               this.changeStatusInCard.call(this, elem, colName)
       }
     })
  }
  changeStatusInCard(el, columnName){
    el.innerHTML = "Status: " + columnName.toUpperCase();
    el.className += " status-changed";
    setTimeout(()=>{
      el.className = el.className.split(/\s/g).shift();
    }, 500)
  }
  render(){
      return (
        <div onDragOver={this.dragEnter} onDrop={this.dragDrop.bind(this)}
             onDragLeave={this.dragLeave} onDragEnd={this.dragEnd}>
           <h1 className="mv-4">Dashboard</h1>
           <div className="dshb-column-todo">
               <Column title="To Do" cards={this.getCardsWithStatus("todo")}/>
           </div>
           <div className="dshb-column-inprogress">
              <Column title="In Progress" cards={this.getCardsWithStatus("inprogress")}/>
           </div>
           <div className="dshb-column-intesting">
              <Column title="In Testing" cards={this.getCardsWithStatus("intesting")}/>
           </div>
           <div className="dshb-column-done">
             <Column title="Done" cards={this.getCardsWithStatus("done")}/>
           </div>
        </div>
      );
    }
}
export default Dashboard;
