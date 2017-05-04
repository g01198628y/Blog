import _ from 'lodash';
import {FETCH_POSTS,FETCH_POST ,DELETE_POST} from '../actions';

export default function (state= {} ,action){
  switch (action.type){
  case DELETE_POST:
    return _.omit(state,action.payload);
  case FETCH_POST:
    //const post = action.paylod.data;
    //const newState = { ...state };
    //newState[post.id] = post ;
    //return newState; 這4行=下面那一行
    return {...state,[action.payload.data.id]:action.payload.data};
  case FETCH_POSTS:
    return _.mapKeys(action.payload.data,'id');
    default:
    return state ;
  }
}
