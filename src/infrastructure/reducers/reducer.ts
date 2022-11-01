import { IGifsData } from '../models/data';
import { Action } from './action.creator';
import { actionTypes } from './action.types';

export function tasksReducer(state: Array<IGifsData>, action: Action) {
    // const initialTasks: Array<Task> = [];
    // let payload: IGif;
    switch (action.type) {
        case actionTypes.load:
            return action.payload as Array<IGifsData>;

        // case actionTypes.add:
        //     payload = action.payload as Task;
        //     return [...state, payload];
        // case actionTypes.update:
        //     payload = action.payload as Task;
        //     return state.map((item) =>
        //         item.id === payload.id ? payload : item
        //     );
        // case actionTypes.delete:
        //     payload = action.payload as Task;
        //     return state.filter((item) => item.id !== payload.id);

        default:
            return [...state];
    }
}
