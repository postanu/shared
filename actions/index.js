import {
	defineCreateSyncMap,
	defineDeleteSyncMap,
	defineCreatedSyncMap,
	defineChangeSyncMap
} from '@logux/actions'

export const createUser = defineCreateSyncMap('users')
export const createdUser = defineCreatedSyncMap('users')

export const createPage = defineCreateSyncMap('pages')
export const createdPage = defineCreatedSyncMap('pages')
export const deletePage = defineDeleteSyncMap('pages')

export const createProject = defineCreateSyncMap('projects')
export const createdProject = defineCreatedSyncMap('projects')
export const changeProject = defineChangeSyncMap('projects')
