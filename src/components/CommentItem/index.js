// Write your code here
import './index.css'

const CommentItem = props => {
  const {item, fun, deleteList} = props
  const {name, comment, id, timeAgo, isLiked, newColor} = item
  const likeChange = () => {
    fun(id)
  }
  const listChange = () => {
    deleteList(id)
  }

  const image = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const changeFontColor = isLiked ? 'change-color' : ''

  return (
    <li className="card-container">
      <div className="content-container">
        <p className={`name-logo ${newColor}`}>{name[0]}</p>
        <p className="name-class">{name}</p>
        <p className="time-class">{timeAgo}</p>
      </div>
      <p className="comment-class">{comment}</p>
      <div className="end-container">
        <button type="button" onClick={likeChange} className="like-button">
          <div className="like-container">
            <img alt="like" className="like-logo" src={image} />
            <p className={changeFontColor}>Like</p>
          </div>
        </button>
        <button
          testid="delete"
          onClick={listChange}
          className="delete-btn"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
