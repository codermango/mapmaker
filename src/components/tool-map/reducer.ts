
export interface IToolMapState {
  pointerX: number,
  pointerY: number
}

const initialState: IToolMapState = {
  pointerX: 0,
  pointerY: 0
}

export const toolMapReducer = (state = initialState) => {
  return state;
} 