import React from 'react';
import './../assets/post.css';

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsedView: this.props.isCollapsedView,
    };
  }
  render() {

    if (this.state.isCollapsedView) {
      return <li>{this.props.data.title}</li>;
    } else {
      return (
        <div className='single-post'>
          <div className='post-title'>{this.props.data.title}</div>
          <div className='post-body'>{this.props.data.post}</div>
          <div className='post-date'>{this.props.data.date.split('T')[0]}</div>
        </div>
      );
    }
  }
}

export default SinglePost;
