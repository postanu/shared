import { User } from '../user/index.js'

export type Project = {
	id: string
	name: string
	installed: boolean
}

export type ProjectMember = User & {
	role: string
}
