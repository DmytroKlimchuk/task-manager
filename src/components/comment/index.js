import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Comment extends Component {

    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string
        })
    };

    render() {

        const { comment } = this.props;
        return (
            <div className="comment">
                <div className="comment__ava"></div>
                <div className="comment__txt">
                    { comment.text }
                </div>
            </div>
        );
    }
}

export default Comment;