import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { addItem } from '../../AC/index';

class AddItemForm extends Component {

    state = {
        title : ''
    };

    handleChange = (e) => {
        console.log('input');
        this.setState({
            title: e.target.value
        });
    };

    handleAdd = (e) => {
        e.preventDefault();
        const { addItem } = this.props;

        let item = {
          "id": new Date().getTime(),
          "title": this.state.title,
          "comments": []
        };

        addItem(item);
        this.setState({ title: ''});
        console.log('ADD', item);
    };

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : '';


    render() {
        return (
            <form className="form-inline addNew">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="form-group">
                            <input type="text" value={this.state.title} placeholder="Type title here ..." onChange={ this.handleChange } className= {this.getClassName('title')}/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-info add" onClick={ this.handleAdd }>Add new</button>
                    </div>
                </div>
            </form>
        );
    }
}

const limits = {
    title: {
        min: 5,
        max: 50
    }
};

export default connect(null, { addItem })(AddItemForm);