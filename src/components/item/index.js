import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { connect } from 'react-redux';
import { deleteItem } from '../../AC/index';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class Item extends Component {

    static  propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            comments: PropTypes.array
        })
    };

    onDelete = (id) => {
        let { deleteItem } = this.props;
        deleteItem( id );
        console.log('delete', id);
    };

    handleDelete = (id) => {
        return MySwal.fire({
            title: 'Ви впевнені?',
            text: "Скасувати дану дію буде неможливо!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Так, видалити!'

        }).then((result) => {
            if (result.value) {
                this.onDelete(id);
                MySwal.fire({
                    title: 'Видалено!',
                    type: 'success'
                })
            }
        })
    };


    render() {

        let { item } = this.props;

        return (
            <div className="item">
                <div className="row" >
                    <div className="col-sm-9">
                        <div className="item__title">
                            <p>{ item.title } <span className="badge">{ item.comments.length }</span></p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-default" onClick={()=>this.handleDelete(item.id)}>
                            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    items: state.items
}), { deleteItem })(Item);
