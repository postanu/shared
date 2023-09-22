export type PostsActivity = { id: string } & PostsActivityFields

export type PostsActivityType = 'action' | 'message'

export type PostsActivityFields = {
	postId: string
	type: PostsActivityType
	message: string
	args: string
}
