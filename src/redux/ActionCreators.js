import * as ActionTypes from './ActionTypes';
//create a function to create action object which recieves 4 parameters
export const addComment =(dishId,rating,author,comment)=>({
    type:ActionTypes.ADD_COMMENT, //type of action
    payload:{           //data store in action
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment,
    }
});
//as this function add comments in previous one so we need to change comments.js file only