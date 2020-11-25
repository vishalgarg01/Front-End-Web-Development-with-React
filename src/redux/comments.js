import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS://load already present comments
      return {...state, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_COMMENT://allow user to add a new comment
        var comment = action.payload;
        // comment.id = state.comments.length; this is given by server in POST
        // comment.date = new Date().toISOString(); //use in postComment
        return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};