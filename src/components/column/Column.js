// Dependencies
import React from 'react';
import Card from '../card/Card'
import styles from './column.css';

class Column extends React.Component{
  constructor(props){
    super(props)
  }
  dragStart(e){
    e.dataTransfer.setData("card", e.target.id);
  }
  renderCards(){
     return this.props.cards.map((cardItem)=>{
        return <div draggable="true"
                    onDragStart={this.dragStart}
                    key={cardItem.id}
                    id={cardItem.id}>
                        <Card fields={cardItem} />
               </div>
     })
  }
   render(){
      return (
        <div className={styles.dshbColumn}>
           <div className={styles.dshbColumnContent}>
               <h4 className={styles.columnTitle}>{this.props.title}</h4>
                  {this.renderCards()}
           </div>
        </div>
      );
    }
}

export default Column;
