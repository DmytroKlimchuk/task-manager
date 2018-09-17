import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import Item from '../item/index';
import AddItemForm from '../add-item-form/index';

class ItemList extends Component {

    static propTypes = {
        items : PropTypes.array.isRequired
    };

    handleClick = (item) => (event) =>  {
        console.log(item);
        this.props.setActive(item);
    };

    renderItemsElements = () => {
        return this.props.items.map( item => {
            return (
                <div className="itemWrapper" onClick={this.handleClick(item)} key={ item.id }>
                    <Item item={ item } key={ item.id } />
                </div>
            );
        });
    };

    render(){

        return (
            <div className="items-wrapper block">
                <h2>Items</h2>

                <AddItemForm />

                <div className="items">

                    { this.renderItemsElements() }

                </div>

            </div>
        );
    }

}

export default ItemList;