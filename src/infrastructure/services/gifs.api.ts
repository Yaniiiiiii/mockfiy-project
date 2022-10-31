// import { IGif } from '../models/data';

// export class TaskApi {
//     url: string;
//     constructor() {
//         this.url = 'https://api.giphy.com/v1';
//     }

//     read / get
//     getTasks(): Promise<Array<IGif>> {
//         return fetch(this.url).then((response) => response.json());
//     }

//     // create / post
//     createTask(task: ITask): Promise<Task> {
//         return fetch(this.url, {
//             method: 'POST',
//             body: JSON.stringify(task),
//             headers: {
//                 'content-type': 'application/json',
//             },
//         }).then((response) => response.json());
//     }

//     // delete
//     deleteTask(id: number): Promise<Response> {
//         return fetch(`${this.url}/${id}`, {
//             method: 'DELETE',
//         });
//     }

//     // uptate / patch
//     updateTask(id: number, partialTask: Partial<ITask>): Promise<Task> {
//         return fetch(`${this.url}/${id}`, {
//             method: 'PATCH',
//             body: JSON.stringify(partialTask),
//             headers: {
//                 'content-type': 'application/json',
//             },
//         }).then((response) => response.json());
//     }
// }

export const getData = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search';
    const search = '?q=rocket';
    const key = '&api_key=rIBXAUARqWUeHGOtglMKUSh4AZlxU5iZ';
    const limit = '&limit=25';
    const completeUrl = url + search + key + limit;

    const result = await fetch(completeUrl).then((response) => {
        return response;
    });
    console.log(result);
};
