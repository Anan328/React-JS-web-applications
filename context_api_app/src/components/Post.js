import React,{useContext} from 'react';
import UserInfoContext from "../context/UserInfoContext";
import Comment from './Comment'


function Post() {
    const {isAdmin} = useContext(UserInfoContext);
  return (
    <div>
        {isAdmin && (<button>Delete</button>)}
        <h2>Example Post Title</h2>
        <p>This is an example post content.</p>
        <Comment/>
    </div>
  )
}

export default Post