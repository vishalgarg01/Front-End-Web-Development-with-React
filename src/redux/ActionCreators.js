import * as ActionTypes from './ActionTypes';
import { DISHES } from "../shared/dishes";
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

//create a thunk
export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));

    setTimeout(()=>{
        dispatch(addDishes(DISHES));
    }, 2000);
}
export const dishesLoading=()=>({
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed =(errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload: dishes 
});