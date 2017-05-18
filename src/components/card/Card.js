// Dependencies
import React from 'react';
import styles from './card.css';

class Card extends React.Component{
    constructor(props){
      super(props)
    }
    getCardProps(){
      return (
        <div>
          <p className={styles.cardId}>Id: {this.props.fields.id}</p>
          <p className={styles.cardTitle}>{this.props.fields.title}</p>
          <p className={styles.cardDesc}>{this.props.fields.description}</p>
          <p className={styles.cardStatus}>Status: {this.props.fields.status}</p>
        </div>
      )
    }
    render(){
      return (
        <div className={styles.dshbCard}>
            {this.getCardProps()}
        </div>
      );
    }
}

export default Card;
