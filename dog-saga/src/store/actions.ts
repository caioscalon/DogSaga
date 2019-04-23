export enum ActionNames {
	REQUEST_DOG_IMAGE = 'REQUEST_DOG_IMAGE',
	SUCCESS_DOG_IMAGE = 'SUCCESS_DOG_IMAGE',
	FAILURE_DOG_IMAGE = 'FAILURE_DOG_IMAGE'
}

export interface DogActionRequest {
	type: ActionNames.REQUEST_DOG_IMAGE;
} 

export interface DogActionSuccess {
	type: ActionNames.SUCCESS_DOG_IMAGE;
	payload: string | null; 
} 

export interface DogActionFailure {
	type: ActionNames.FAILURE_DOG_IMAGE;
	payload: string | null;
}

export type Action = DogActionRequest | DogActionSuccess | DogActionFailure;

export interface DogInfoState {
	isFetchingImage: boolean;
	dogImage: string | null;
	error: string | null;
}

export const onRequestDog = (): DogActionRequest => ({
	type: ActionNames.REQUEST_DOG_IMAGE
});
