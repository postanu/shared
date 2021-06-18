import {
	defineCreateSyncMap,
	defineDeleteSyncMap,
	defineCreatedSyncMap
} from '@logux/actions'

export const createdUser = defineCreatedSyncMap('users')

export const createdPage = defineCreatedSyncMap('pages')
export const deletePage = defineDeleteSyncMap('pages')

export const createProject = defineCreateSyncMap('projects')
export const createdProject = defineCreatedSyncMap('projects')
