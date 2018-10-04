import React, { Component } from 'react';
import './style.css';
import ava from '../../images/ava.jpg';
import { connect } from 'react-redux';
import { addComment } from '../../AC/index';

class AddCommentForm extends Component {

    handleKeyUp = (event) => {
        const value = event.target.value;

        if( event.keyCode == 13 && event.ctrlKey && value.length > 0) {
            const { id, addComment } = this.props;

            let comment = {
                "id": new Date().getTime(),
                "text": value
            };

            addComment(id, comment);
            console.log('send comment');
            event.target.value = '';
        }
    };


    render() {
        return (
            <form action="#" method="POST" className="addPost">
                <h4>Залишити коментар:</h4>
                <div className="comment">
                    <div className="comment__ava">
                        <img src={ ava } alt=""/>
                    </div>
                    <div className="comment__txt arr_left">
                        <textarea id="message" name="message" onKeyUp={this.handleKeyUp} />
                    </div>
                </div>
            </form>
        );
    }
}

export default connect(null, { addComment })(AddCommentForm);