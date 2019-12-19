import React from 'react';

import './App.css';
import axios from 'axios';

class App extends React.Component{
  state = {
    username: '',
    newComment: '',
    comments: [],
  };
  updateInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  postComment = e => {
    e.preventDefault();
    const { username, newComment } = this.state;
    if (username.trim() === ''  || newComment.trim() == '') return;
    const data = {
      name: username,
      text: newComment,
      votes: 0,
    };
    axios
      .post('http://localhost:3000/comment', data)
      .then(() => {
        this.setState({
          username: '',
          newComment: '',
        });
      })
      .catch(err => console.log(err));
  };
  componentDidMount(){
    const pusher = new pusher('<app key>', {
      cluster: '<app cluster>',
      encrypted:true,
    });
    axios.get('http://localhost:3000').then(({data})=> {
      this.setState({
        comments: [...data],
      });
    }).catch(err => console.log(err))
    const channel = pusher.subscribe('comments');
    channel.bind('new-comment', data => {
      this.setState(prevState => {
        const { comments } = prevState;
        comments.push(data.comment);
        return{
          comments,
        };
      });
    });
  }
  render(){
    const { username, newComment, comments } = this.state;
    const userComments = comments.map(e => {
      return(
      <article className="comment" key={e._id}>
        <h1 className="comment-user">{e.name}</h1>
        <p className="comment-text">{e.text}</p>
        <div className="voting">
          <div className="vote-buttons">
            <button className="upvote">
              UpVote
            </button>
            <button className="downvote">
              DownVote
            </button>
          </div>
          <div className="votes">Votes: {e.votes}</div>
        </div>
      </article>)
    });
    return(
      <div className = "App">
        <article className="post">
          <h1>Local Lake!</h1>
          <img src="fish-friends/Screen Shot 2019-12-19 at 1.16.15 PM.png"/>
          <p>Leave a comment if you visited this lake!</p>
        </article>
        <section className="comments-form">
          <form onSubmit={this.postComment}>
            <label htmlFor="username">Name:</label>
            <input
              className="username"
              name="username"
              id="username"
              type="name"
              value={username}
              onChange={this.updateInput}
              />
              <label htmlFor="new-comment">Comment:</label>
              <textarea 
                className="comment"
                name="newComment"
                id="new-comment"
                value={newComment}
                onChange={this.updateInput}
                />
                <button type="submit">Have Your Say</button>
          </form>
        </section>
        <section className="comments-section">{userComments}</section>
      </div>
    );
  }
}


export default App;
