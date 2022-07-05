import combineReducers from "react-combine-reducers";
import { ActionType } from "@Models/actions";

import { generalInitialState } from "./initial";
import { generalReducer } from "./reducer";
import { GeneralTypes } from "./types";

export const [reducer, initialState] = combineReducers<CombinedReducerType>({
  general: [generalReducer, generalInitialState],
});

export type CombinedStateType = {
  general: GeneralTypes;
};

type CombinedReducerType = (
  state: CombinedStateType,
  action: ActionType
) => CombinedStateType;
