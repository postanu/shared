export enum PostActivityType {
	message = 0,

	created = 100,
	scheduled = 101,

	changedDate = 200,
	changedTime = 201,
	changedVariantPages = 202,
	changedVariantText = 203,
	changedVariantAttachments = 204,

	reviewRequested = 300,
	reviewAccepted = 301,
	reviewRejected = 302
}

export type PostActivityFields = {
	postId: string
	type: PostActivityType
	message: null | string
	args: null | string
}

export type PostsActivity = { id: string } & PostActivityFields
