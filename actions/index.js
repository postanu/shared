import {
	defineCreateSyncMap,
	defineCreatedSyncMap
} from '@logux/actions'

export const createdUser = defineCreatedSyncMap('users')
export const createdPage = defineCreatedSyncMap('pages')

export const createProject = defineCreateSyncMap('projects')
export const createdProject = defineCreatedSyncMap('projects')
