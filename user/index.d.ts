export type UserFields = {
	username: string
	fullname: string
	avatar: null | string
}

export type User = { id: string } & UserFields
