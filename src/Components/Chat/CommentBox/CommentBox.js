import React, { Component, PropTypes } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './CommentBox.css';

class CommentBox extends Component {
	componentDidUpdate(prevProps, prevState) {
		this._commentList.scrollDown();
	}
	render() {
		return (
			<div className='CommentBox'>
				<CommentList ref={(c) => this._commentList = c}
					comments={this.props.comments} />
				<CommentForm onCommentSubmit={this.props.onCommentSubmit} />
			</div>
			);
	}
}

CommentBox.propTypes = {
	comments: CommentList.propTypes.comments,
	onCommentSubmit: PropTypes.func.isRequired
};

export default CommentBox;