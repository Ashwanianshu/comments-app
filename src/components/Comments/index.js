import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const list = []

// Write your code here
class Comments extends Component {
  state = {
    commentsList: list,
    commentsCount: 0,
    name: '',
    comment: '',
  }

  deleteList = uniqueNo => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(i => i.id !== uniqueNo)
    this.setState({commentsList: filteredList})
    this.setState(i => ({
      commentsCount: i.commentsCount - 1,
    }))
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const time = formatDistanceToNow(new Date())
    const x = Math.floor(Math.random() * 7)
    const something = initialContainerBackgroundClassNames[x]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      timeAgo: time,
      isLiked: false,
      newColor: something,
    }

    this.setState(i => ({
      commentsList: [...i.commentsList, newComment],
      name: '',
      comment: '',
      commentsCount: i.commentsCount + 1,
    }))
  }

  getButton = uniqueNo => {
    this.setState(i => ({
      commentsList: i.commentsList.map(j => {
        if (uniqueNo === j.id) {
          return {...j, isLiked: !j.isLiked}
        }
        return j
      }),
    }))
  }

  getName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  getComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  render() {
    const {name, comment, commentsList, commentsCount} = this.state
    return (
      <div className="bg-container">
        <div className="full-container">
          <div className="top-container">
            <form className="form-container" onSubmit={this.addComment}>
              <h1>Comments</h1>
              <p>Say something about 4.0n Tech</p>
              <input
                onChange={this.getName}
                placeholder="Your Name"
                type="text"
                className="input-class"
                value={name}
              />
              <textarea
                onChange={this.getComment}
                placeholder="Your Comment"
                cols="30"
                rows="7"
                className="textarea-class"
                value={comment}
              />
              <button className="btn" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comment-image"
              alt="comments"
            />
          </div>
          <hr />
          <div className="comments-count-container">
            <p className="count-class">{commentsCount}</p>
            <p className="comments">Comments</p>
          </div>
          <ul className="final-container" />
          {commentsList.map(i => (
            <CommentItem
              fun={this.getButton}
              deleteList={this.deleteList}
              item={i}
              key={i.id}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default Comments
