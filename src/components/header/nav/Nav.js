// Dependencies
import React from 'react';
import styles from './nav.css';
import PropTypes from 'prop-types';

const Nav = ({NavItems}) => {
  const navItems = NavItems.map(function(item){
      return (
        <li className={styles.navItem} key={ item.itemID }>
           <a className={styles.navItemContent} >{ item.itemName }</a>
        </li>
      )
  })
 return (
      <ul className={styles.mainNav}>
         { navItems }
      </ul>
  );
}

Nav.propTypes = { NavItems: PropTypes.array };
Nav.defaultProps = { NavItems: [{itemName: "Item 1", itemID: 1},
                                {itemName: "Item 2", itemID: 2},
                                {itemName: "Item 3", itemID: 3},
                                {itemName: "Item 4", itemID: 4},
                                {itemName: "Item 5", itemID: 5}] };

export default Nav;
