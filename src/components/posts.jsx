import React from 'react';
import SinglePost from './post.jsx';

const Posts = (props) => {
  if (props.isCollapsedView) {
    return (
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