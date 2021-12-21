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
	authorsIds: string[]
	variantsIds: string[]
	state: PostState
}

export type PostVariant = {
	id: string
	pagesIds: string[]
	text: string
	attachmentsIds: string[]
}

export type PostState =
	| typeof POST_STATE_CREATED
	| typeof POST_STATE_REMOVED
	| typeof POST_STATE_SCHEDULED
	| typeof POST_STATE_ERRORED
	| typeof POST_STATE_POSTED
