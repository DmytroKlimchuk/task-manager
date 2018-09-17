import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Comment from "../comment/index";

class Comments extends Component {

    static  propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            comments: PropTypes.array
        })
    };

    render() {

        const { item } = this.props;
        const commentsElements = item.comments.map( comment => <Comment key={ comment.id } comment={ comment }/>);

        return (
            <div className="comments-wrapper block">
                <h2 className="subtitle">{ item.title }</h2>
                <h3>Comments</h3>

                <div className="comments">

                    { commentsElements }

                </div>

                <form action="#" method="POST" className="addPost">
                    <div className="comment">
                        <div className="comment__ava"></div>
                        <div className="comment__txt">
                            <textarea id="message" name="message"></textarea>
                        </div>
                    </div>
                </form>

            </div>
        );
    }

}

export default Comments;
