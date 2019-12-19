import React from 'react';
import Pusher from 'pusher-js'
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
   vote = (id, num) => {
    axios.post('http://localhost:3000/vote', {
      id,
      vote: num,
    });
  };
  componentDidMount(){
    const pusher = new Pusher('21c02952-3222-46cf-aa37-cbbd1afd2c61:HjahPtC9aKXXpBWOc8lxVFy1EQomPlD5ppNphon13kw=', {
      cluster: 'v1:us1:c1b464ee-4217-4cc2-85f6-34719c38e46e',
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
    channel.bind('new-vote', data => {
      let { comments } = this.state;
      comments = comments.map(e => {
        if (e._id === data.comment._id) {
          return data.comment;
        }
        return e;
      });
      this.setState({
        comments,
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
            <button className="upvote" onClick={() => this.vote(e._id, 1)}>
              UpVote
            </button>
            <button className="downvote" onClick={() => this.vote(e._id, -1)}>
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
          <img src="fish-friends/lakematthew.png"/>
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
