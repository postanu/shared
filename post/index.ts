export enum PostState {
	created = 100,
	scheduled = 101,
	published = 102,

	errored = 200,

	archived = 300
}

export type PostFields = {
	projectId: string
	date: string
	time: string
	state: PostState
}

export type Post = { id: string } & PostFields
