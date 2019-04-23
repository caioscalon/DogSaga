import { DogInfoState, ActionNames, Action } from "./actions";

export const initialState: DogInfoState = {
	isFetchingImage: false,
	dogImage: null,
	error: null
}

export const dogInfoReducer = (state: DogInfoState = initialState, action: Action): DogInfoState => {
	if (!(action.type in ActionNames)) {
		return state;
	}

	switch (action.type) {
		case ActionNames.REQUEST_DOG_IMAGE:
			return { ...state, isFetchingImage: true, error: null };

		case ActionNames.SUCCESS_DOG_IMAGE:
			return { ...state, isFetchingImage: false, dogImage: action.payload };

		case ActionNames.FAILURE_DOG_IMAGE:
			return { ...state, isFetchingImage: false, dogImage: null, error: null };

		default:
			return assertNever(action);
	}
}

const assertNever = (action: never): never => {
  throw new Error(`This action should never reach the routeInfoTabReducer. Action: ${action}.`);
};
