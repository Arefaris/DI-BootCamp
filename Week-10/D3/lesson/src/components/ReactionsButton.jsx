import React from 'react'
import { addReaction } from './postsSlice';
import { useDispatch } from 'react-redux';
import { useAddReaction } from './hooks';

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
};


export default function ReactionsButton({ id, reactions }) {
    console.log(id, reactions)
    const callAddReactionHook = useAddReaction()
    const rederReaction = Object.entries(reactionEmoji).map(
        ([name, emoji]) => {
            return (
                <button onClick={()=> {callAddReactionHook({id, name})}} key={name} className="reactionButton">{emoji}{reactions[name]}</button>
            )
        }
    )
    return (
        <div>{rederReaction}</div>
    )
}
