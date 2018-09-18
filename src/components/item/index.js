import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { connect } from 'react-redux';
import { deleteItem } from '../../AC/index';

class Item extends Component {

    static  propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            comments: PropTypes.array
        })
    };

    handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { deleteItem, item } = this.props;
        deleteItem( item.id );
        console.log('delete');
    };

    render() {

        const { item } = this.props;

        return (
            <div className="item">
                <div className="row" >
                    <div className="col-sm-9">
                        <div className="item__title">
                            <p>{ item.title } <span className="badge">{ item.comments.length }</span></p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-default" onClick={ this.handleDelete }>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { deleteItem })(Item);