export type PostsActivityActionMessage =
	| 'post/created'
	| 'post/edited/date'
	| 'post/edited/time'
	| 'post/edited/variant/pages'
	| 'post/edited/variant/text'
	| 'post/review/accepted'
	| 'post/review/rejected'
	| 'post/review/requested'

export type PostsActivityActionFields = {
	postId: string
	type: 'action'
	message: PostsActivityActionMessage
	args: string
}

export type PostsActivityMessageFields = {
	postId: string
	type: 'message'
	message: string
	args: null
}

export type PostsActivityFields =
	| PostsActivityActionFields
	| PostsActivityMessageFields

export type PostsActivity = { id: string } & PostsActivityFields
