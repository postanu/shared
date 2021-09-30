import type {
	ActionCreator,
	SyncMapCreateAction,
	SyncMapDeleteAction,
	SyncMapCreatedAction
} from '@logux/actions'

import { User, Page, Project } from '../types/index.js'

export type createUserAction = SyncMapCreateAction<User>
export type createdUserAction = SyncMapCreatedAction<User>

export type createPageAction = SyncMapCreateAction<Page>
export type createdPageAction = SyncMapCreatedAction<Page>

export type createProjectAction = SyncMapCreateAction<Project>
export type createdProjectAction = SyncMapCreatedAction<Project>

export const createUser: ActionCreator<createUserAction>
export const createdUser: ActionCreator<createdUserAction>

export const createPage: ActionCreator<createPageAction>
export const createdPage: ActionCreator<createdPageAction>
export const deletePage: ActionCreator<SyncMapDeleteAction>

export const createProject: ActionCreator<createProjectAction>
export const createdProject: ActionCreator<createdProjectAction>
