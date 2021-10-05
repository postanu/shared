export type Post = {
	id: string
	authorId: string
	projectId: string
	time: number
	authorsIds: string[]
	variants: PostVariant[]
	state: PostState
}

export type PostVariant = {
	text: string
	pagesIds: string[]
	attachmentsIds: string[]
}

export type PostState =
	| 0
	| 100
	| 200
