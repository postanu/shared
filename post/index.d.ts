import {
	POST_STATE_SCHEDULED,
	POST_STATE_REMOVED,
	POST_STATE_CREATED,
	POST_STATE_ERRORED,
	POST_STATE_POSTED
} from '@postanu/core'

export type Post = {
	id: string
	authorId: string
	projectId: string
	time: number
	type: number
	state: PostState
}

export type PostVariant = {
	id: string
	postId: string
	pagesIds: string[]
	text: string
}

export type PostState =
	| typeof POST_STATE_CREATED
	| typeof POST_STATE_REMOVED
	| typeof POST_STATE_SCHEDULED
	| typeof POST_STATE_ERRORED
	| typeof POST_STATE_POSTED
