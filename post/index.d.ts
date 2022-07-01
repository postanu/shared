import {
	POST_STATE_SCHEDULED,
	POST_STATE_REMOVED,
	POST_STATE_CREATED,
	POST_STATE_ERRORED,
	POST_STATE_POSTED
} from '@postanu/core'

export type PostState =
	| typeof POST_STATE_CREATED
	| typeof POST_STATE_REMOVED
	| typeof POST_STATE_SCHEDULED
	| typeof POST_STATE_ERRORED
	| typeof POST_STATE_POSTED

export type Post = { id: string } & PostFields

export type PostFields = {
	projectId: string
	state: PostState
	date: number
	title?: string
}

export type PostVariant = { id: string } & PostVariantFields

export type PostVariantFields = {
	postId: string
	pagesIds: string[]
	state: PostState
}
