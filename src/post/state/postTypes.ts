export const POST_LOADING = 'POST_LOADING'
export const POST_FAIL = 'POST_FAIL'
export const POST_SUCCESS = 'POST_SUCCESS'
// export const POST_DELETE = 'POST_DELETE'

export type PostType = Post[]

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostLoading {
  type: typeof POST_LOADING
}

export interface PostFail {
  type: typeof POST_FAIL
}

export interface PostSuccess {
  type: typeof POST_SUCCESS
  payload: PostType
}

export type PostDispatchTypes = PostLoading | PostFail | PostSuccess
