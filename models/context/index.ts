import { Dispatch } from 'react';
import { ActionType } from '@Models/actions';
import { CombinedStateType } from '@Models/reducers';

import { generalContext } from './context';

export const createReduxContext = (state: CombinedStateType, dispatch: Dispatch<ActionType>) => ({
  general: generalContext(state, dispatch),
});
