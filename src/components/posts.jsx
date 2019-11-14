import React from 'react';
import SinglePost from './post.jsx';

const Posts = (props) => {
  if (props.isCollapsedView) {
    return (
      <div className="home-header-container">
        <div className="home-page-container">
          <div className='home-welcome-text'>List of Posts</div>
          <ol>
            {props.data.map((element, index) => {
              return (
                <SinglePost
                  data={element}
                  key={index}
                  isCollapsedView={props.isCollapsedView}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {props.data.map((element, index) => {
          return (
            <SinglePost
              data={element}
              key={index}
              isCollapsedView={props.isCollapsedView}
            />
          );
        })}
      </div>
    );
  }
};

export default Posts;
