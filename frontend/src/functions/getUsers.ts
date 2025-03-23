import {IUser} from "./interface";
import {executeGetApi} from "../ts/apiExecution";
import {getAllUsersApi} from "./api";

export const users: IUser[] = (await executeGetApi(getAllUsersApi))[1];