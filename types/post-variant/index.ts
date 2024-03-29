export enum PostVariantState {
	created = 100,
	scheduled = 101,
	published = 102,

	errored = 200
}

export type PostVariantFields = {
	postId: string
	pages: string[]
	text: string
	url: string
	index: number
	state: PostVariantState
}

export type PostVariant = { id: string } & PostVariantFields
