import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { addItem } from '../../AC/index';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class AddItemForm extends Component {


    handleAdd = (e) => {
        e.preventDefault();
        let errors = [];
        let title = this.refs.title.value;

        if (title == '') errors.push('Необхідно заповнити назву задачі');
        if (title.length <= 5) errors.push('Мінімальна назва - 5 символів');

        if (errors.length == 0) {
            const { addItem } = this.props;

            let item = {
                "id": new Date().getTime(),
                "title": title,
                "comments": []
            };

            addItem(item);
            console.log('ADD', item);
        } else {

            return MySwal.fire({
                type: 'error',
                title: 'Помилка!',
                text: errors[0]
            })
        }

    };

    render() {
        return (
            <form className="form-inline addNew">
                <h2>Додати нову задачу</h2>
                <div className="row">
                    <div className="col-sm-9">
                        <div className="form-group">
                            <input type="text" ref="title" placeholder="Введіть назву задачі ..."/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-info add" onClick={ this.handleAdd }>Додати</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default connect(null, { addItem })(AddItemForm);