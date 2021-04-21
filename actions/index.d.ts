import type {
	ActionCreator,
	SyncMapCreateAction,
	SyncMapCreatedAction
} from '@logux/actions'

import { User, Page, Project } from '../types/index.js'

export type createdUserAction = SyncMapCreatedAction<User>
export type createdPageAction = SyncMapCreatedAction<Page>
export type createProjectAction = SyncMapCreateAction<Project>
export type createdProjectAction = SyncMapCreatedAction<Project>

export const createdUser: ActionCreator<createdUserAction>
export const createdPage: ActionCreator<createdPageAction>
export const createProject: ActionCreator<createProjectAction>
export const createdProject: ActionCreator<createdProjectAction>
