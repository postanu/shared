import type {
	ActionCreator,
	SyncMapCreatedAction
} from '@logux/actions'

import { User, Page } from '../types/index.js'

export type createdUserAction = SyncMapCreatedAction<User>
export type createdPageAction = SyncMapCreatedAction<Page>

export const createdUser: ActionCreator<createdUserAction>
export const createdPage: ActionCreator<createdPageAction>
