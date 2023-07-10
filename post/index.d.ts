import type {
	POST_STATE_ARCHIVED,
	POST_STATE_CREATED,
	POST_STATE_ERRORED,
	POST_STATE_PUBLISHED,
	POST_STATE_REMOVED,
	POST_STATE_SCHEDULED
} from '@postanu/core'

export type PostState =
	| typeof POST_STATE_ARCHIVED
	| typeof POST_STATE_CREATED
	| typeof POST_STATE_ERRORED
	| typeof POST_STATE_PUBLISHED
	| typeof POST_STATE_REMOVED
	| typeof POST_STATE_SCHEDULED

export type Post = { id: string } & PostFields

export type PostFields = {
	projectId: string
	date: string
	time: string
	state: PostState
}
