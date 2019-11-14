import React from 'react';
import apiServices from './apiServices.js';
import Posts from './posts.jsx';
import Modal from 'react-modal';

const customStyles = {
  h2: {
    color: 'lightskyblue',
  },
  content: {
    height: '800px',
    width: '1000px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overlay: {
      backgroundColor: 'papayawhip',
    },
  },
};

Modal.setAppElement('#root');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.location.username || 'allen',
      data: [],
      isCollapsedView: false,
      buttonText: 'Collapse Posts',
      modalIsOpen: false,
      postBody: '',
      postTitle: '',
    };
    this.layoutViewChange = this.layoutViewChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/storePost', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        postTitle: this.state.postTitle,
        postBody: this.state.postBody,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      apiServices
        .postRequest('posts', { username: this.state.username })
        .then((data) => {
          this.setState({
            data,
          });
        });
      this.closeModal();
    });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#000';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  layoutViewChange() {
    this.setState({
      isCollapsedView: !this.state.isCollapsedView,
      buttonText:
        this.state.buttonText === 'Collapse Posts'
          ? 'Expand Posts'
          : 'Collapse Posts',
    });
  }

  componentDidMount() {
    apiServices
      .postRequest('posts', { username: this.state.username })
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-post-title">Your Blog Posts</div>
        <div className="button-container">
          <button className="home-page-buttons" onClick={this.openModal}>
            New Blog Post
          </button>
          <button className="home-page-buttons" onClick={this.layoutViewChange}>
            {this.state.buttonText}
          </button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h2 ref={(subtitle) => (this.subtitle = subtitle)}>New Post</h2>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="postTitle">Post Title</label>
            <br />
            <input type="text" name="postTitle" onChange={this.onChange} />
            <br />
            <br />
            <label htmlFor="postBody">Post Body</label>
            <textarea
              rows="25"
              cols="175"
              name="postBody"
              onChange={this.onChange}
            />
            <br />
            <br />
            <button onClick={this.closeModal}>Close</button>
            <input type="submit" />
          </form>
        </Modal>
        <Posts
          data={this.state.data}
          isCollapsedView={this.state.isCollapsedView}
        />
      </div>
    );
  }
}

export default Home;
