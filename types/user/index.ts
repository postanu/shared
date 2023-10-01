export type UserFields = {
	username: string
	fullname: null | string
	avatar: null | string
}

export type User = { id: string } & UserFields
