
export interface IToolMapState {
  pointerX: number,
  pointerY: number,
  isDraggingOver: boolean;
}

const initialState: IToolMapState = {
  pointerX: 0,
  pointerY: 0,
  isDraggingOver: false
}

export const toolMapReducer = (state = initialState, action: any): IToolMapState => {
  switch (action.type) {
    case "setDraggingOver":
      return {
        ...state,
        isDraggingOver: action.payload,
      }
    default:
      return state;
  }
} 