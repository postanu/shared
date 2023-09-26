import type {
	POST_STATE_CREATED,
	POST_STATE_ERRORED,
	POST_STATE_PUBLISHED
} from '@postanu/core'

export type PostVariantState =
	| typeof POST_STATE_CREATED
	| typeof POST_STATE_ERRORED
	| typeof POST_STATE_PUBLISHED

export type PostVariantFields = {
	postId: string
	pagesIds: string[]
	text: string
	url: string
	attachments: string[]
	index: number
	state: PostVariantState
}

export type PostVariant = { id: string } & PostVariantFields
