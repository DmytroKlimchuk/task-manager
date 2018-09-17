import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import Item from '../item/index';
import AddItemForm from '../add-item-form/index';
import { connect } from 'react-redux';

class ItemList extends Component {

    static propTypes = {
        items : PropTypes.array.isRequired
    };

    handleClick = (item) => (event) =>  {
        //console.log(item);
        event.preventDefault();
        this.props.setActive(item);
    };

    render(){
        const { items } = this.props;

        const renderItemsElements = items.map( item => {
            return (
                    <div className="itemWrapper" onClick={this.handleClick(item)} key={ item.id }>
                        <Item item={ item } key={ item.id } />
                    </div>
                )
            }
        );

        return (
            <div className="items-wrapper block">
                <h2>Items</h2>

                <AddItemForm />

                <div className="items">

                    { renderItemsElements }

                </div>

            </div>
        );
    }

}

export default connect(state => ({
    items: state.items
}))(ItemList);