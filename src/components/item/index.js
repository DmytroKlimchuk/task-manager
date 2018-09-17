import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Item extends Component {

    static  propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            comments: PropTypes.array
        })
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
                        <button className="btn btn-default" type="submit">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;