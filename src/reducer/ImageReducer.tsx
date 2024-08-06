import { Photo } from "@/app/interfaces/SearchList";

export const ImageReducer = (state: { isLoading: boolean, data: Photo[] }, action: {
  type: string,
  payload: Photo[]
}) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return { isLoading: false, data: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: true };
    case 'STOP_LOADING':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
