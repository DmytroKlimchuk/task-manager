import React, { Component } from 'react';
import './style.css';
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
                <div className="comment">
                    <div className="comment__ava"></div>
                    <div className="comment__txt">
                        <textarea id="message" name="message" onKeyUp={this.handleKeyUp} />
                    </div>
                </div>
            </form>
        );
    }
}

export default connect(null, { addComment })(AddCommentForm);