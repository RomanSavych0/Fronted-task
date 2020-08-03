import { IBlog, blogInitialStateType, blogActionType, BlogThunkType } from "./types";
import { addBlogAPI, getBlogsAPI } from "../../../api/api";
import { blogActions } from "./actions";

export const initialState = {
   blogs: [] as Array<IBlog> ,
   isFetching:false as boolean
}
const blogReducer= (state=initialState , action:blogActionType):blogInitialStateType=>{
  switch(action.type){
    case 'ADD-BLOG':
      return({...state , blogs:[...state.blogs , action.payload]})
    case 'SET-BLOGS':
    return({...state , blogs: action.payload})  
    case 'TOGGLE-IS-FETCHING':
      return({...state ,isFetching:action.payload})
    default:return state

  }

}
export  const addBlog=(blog:IBlog):BlogThunkType=>{
  return async(dispatch)=>{
    addBlogAPI(blog)
    dispatch(blogActions.addBlog(blog));
  }
}
export const setBlogs=():BlogThunkType=>{
  return async(dispatch)=>{
    dispatch(blogActions.toggleIsFetching(true))
    getBlogsAPI().then(function(snapshot){
      const blogs = snapshot.val();
      console.log(blogs);
      if(blogs === undefined || blogs === null){
        dispatch(blogActions.setBlogs([]))
      }
      else{
        dispatch(blogActions.setBlogs(Object.values(blogs) as Array<IBlog>))
      }
      dispatch(blogActions.toggleIsFetching(false))
    }
    )
  }
}
export default blogReducer;