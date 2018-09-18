import React, { Component } from 'react';
import './style.css'
import Item from '../item/index';
import AddItemForm from '../add-item-form/index';

class ItemList extends Component {

    state = {
        activeId : 1
    };

    handleClick = (item) => (event) =>  {
        event.preventDefault();
        this.setState({
            activeId: item.id
        });

        this.props.setActive(item);

    };

    render(){
        const { items } = this.props;

        console.log(items);

        const renderItemsElements = items.map( item => {
            return (
                    <div className={`itemWrapper ${this.state.activeId == item.id ? 'active' : ''}`}  onClick={this.handleClick(item)} key={ item.id }>
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

export default ItemList;