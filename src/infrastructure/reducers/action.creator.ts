import { IGifsData } from '../models/data';
import { actionTypes } from './action.types';

export type Action = {
    type: string;
    payload: IGifsData;
    // payload: Array<IGif> | IGif;
};

export const loadGifAction = (gifData: IGifsData): Action => {
    return {
        type: actionTypes.load,
        payload: gifData,
    };
};

// export const addTaskAction = (task: Task): Action => {
//     return {
//         type: actionTypes.add,
//         payload: task,
//     }
// };

// export const updateTaskAction = (task: Task): Action => {
//     return {
//         type: actionTypes.update,
//         payload: task,
//     };
// };

// export const deleteTaskAction = (task: Task): Action => {
//     return {
//         type: actionTypes.delete,
//         payload: task,
//     };
// };
