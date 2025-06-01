import { create } from "zustand";


type MenuType={
    id:string;
    asignarId:(id:string)=>void;
}



export const useMenu = create<MenuType>((set) => ({
    id:"home",
    asignarId:(id:string)=>{
        set({id})
    }
}))
