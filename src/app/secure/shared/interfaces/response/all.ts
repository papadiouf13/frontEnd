import { AbstractResponse } from "../abstract/abstract-response";

export interface CategorieResponse extends AbstractResponse{
    unite_default: UniteResponse

}


export interface UniteResponse extends AbstractResponse{
    etat:0|1
}