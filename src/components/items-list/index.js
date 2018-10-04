import React, { Component } from 'react';
import './style.css'
import Item from '../item/index';
import AddItemForm from '../add-item-form/index';


class ItemList extends Component {

    state = {
        activeId : 1,
        showAddForm : false
    };

    handleClick = (item) => (event) =>  {
        event.preventDefault();
        this.setState({
            activeId: item.id
        });

        this.props.setActive(item);
    };

    handleShowAddForm = () => {
      const { showAddForm } = this.state;
      this.setState({
          showAddForm: !showAddForm
      });
    };

    render(){
        const { items } = this.props;
        const { showAddForm } = this.state;
        const classBtn = showAddForm ? 'minus' : 'plus';

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
                { showAddForm ? (<AddItemForm />) : '' }

                <header className="items-header">
                    <h2>Список поточних задач</h2>

                    <button className="btn btn-default addNew" onClick={this.handleShowAddForm}>
                        <span className={`glyphicon glyphicon-${classBtn}`} aria-hidden="true"></span>
                    </button>
                </header>

                <div className="items">

                    { renderItemsElements }

                </div>

            </div>
        );
    }

}

export default ItemList;