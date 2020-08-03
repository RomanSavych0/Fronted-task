import { IBlog } from "./types"

export const blogActions={
 addBlog :(blog :IBlog) => {
    return({type : 'ADD-BLOG' , payload: blog} as const)
},
setBlogs :(blogs :Array<IBlog>) => {
    return({type : 'SET-BLOGS' , payload: blogs} as const)
},
toggleIsFetching :(isFetching :boolean) => {
    return({type : 'TOGGLE-IS-FETCHING' , payload: isFetching} as const)
},

}