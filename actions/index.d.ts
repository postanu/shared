import type {
	ActionCreator,
	SyncMapCreatedAction
} from '@logux/actions'

import { User } from '../types/index.js'

export type createdUserAction = SyncMapCreatedAction<User>

export const createdUser: ActionCreator<createdUserAction>
