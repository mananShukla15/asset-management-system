import fetchUserRoles from '../functions/fetchUserRoles'
import {IAssetHistory} from "../functions/interface";
import {assetHistoryApi} from "../functions/api";
import {executeGetApi} from "./apiExecution";
import {createTable} from "./tables";
import {emptyFunction, isTokenAvailableOrNot, logout} from "../functions/helperFunctions.ts";

const logoutElement:HTMLElement = document.getElementById("logout")!;

isTokenAvailableOrNot()
const roles : string[] = await fetchUserRoles();
if(!roles.includes("Admin")){
    location.href = '/src/html/index.html'
}


async function fetchAssetHistory(): Promise<void> {
    const responseDataArray  = await executeGetApi(assetHistoryApi);
    let assets:IAssetHistory[] = responseDataArray[1];
    console.log(assets)
    displayAssetHistory(assets);
}

function displayAssetHistory(assetHistory: IAssetHistory[]): void {
    let tbody : HTMLElement = <HTMLElement>document.getElementById('asset-history');
    const tableHead:HTMLElement = document.getElementById('table-head')!;
    tbody.innerHTML = '';
    createTable(tableHead,tbody,assetHistory,[emptyFunction],false,[],[],[]);
}

await fetchAssetHistory()
logout(logoutElement);

