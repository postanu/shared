import { User } from '../user/index.js'

export interface ProjectFields {
	name: string
	installed: boolean
}

export type Project = { id: string } & ProjectFields

export type ProjectMember = User & {
	role: string
}
