import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Comment from "../comment/index";
import AddCommentForm from '../add-comment-form';

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
                <h4>Коментарі:</h4>

                <div className="comments">

                    { commentsElements.length ? commentsElements : 'коментарі відсутні'}

                </div>

                <AddCommentForm id={item.id}/>

            </div>
        );
    }

}

export default Comments;
