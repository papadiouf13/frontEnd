export interface RestReponse<T>{
    data:T,
    succes:boolean,
    message:string,
    statut:number,
    links?:Link[]
}

export interface Link{

    url:string,
    label:string,
    active:boolean
}