import { Dispatch } from 'react';
import { useMutation } from 'react-query';

import { ActionType } from '@Models/actions';
import { CombinedStateType } from '@Models/reducers';
import { debounceGenerator } from '@Helpers';
import { TouchableGridType } from '@Types';

export const generalContext = (state: CombinedStateType, dispatch: Dispatch<ActionType>) => ({
  ...state.general,
  actions: {
    useSendAnalyticGenerator: () => {
      const url = process.env.NEXT_PUBLIC_ANALYTICS_SERVER_URL || '';
      const { mutate, data } = useMutation(() =>
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(state),
        }),
      );

      return {
        data,
        sendAnalytics: debounceGenerator((state: TouchableGridType[]) => {
          mutate();
        }, 2000),
      };
    },
  },
});
