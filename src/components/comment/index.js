import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ava from '../../images/ava.jpg';

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
                <div className="comment__ava">
                    <img src={ ava } alt=""/>
                </div>
                <div className="comment__txt arr_left">
                    { comment.text }
                </div>
            </div>
        );
    }
}

export default Comment;