import React, { Component } from 'react';
import './style.css';

class AddItemForm extends Component {
    render() {
        return (
            <form className="form-inline addNew">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Type name here ..." />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-info add">Add new</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddItemForm;