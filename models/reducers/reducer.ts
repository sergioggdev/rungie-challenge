import { GeneralActionType as ActionType } from "@Models/actions";
import { GeneralTypes as StateTypes } from "./types";

export const generalReducer = (
  state: StateTypes,
  action: ActionType
): StateTypes => {
  switch (action.type) {
    default:
      return state;
  }
};
