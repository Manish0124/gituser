import { create } from "zustand";
import api from "../helper/api";

type User = {
  id: string;
  username:string,
  name:string,
  avatar_url: string;
  url: string;
  bio: string;
  following: number;
  followers: number;
  public_repos: number;
};

interface Github{
    users: Pick< User, 'avatar_url' | 'username' | 'url'>[];
    user: User|null;
    getUsers:()=>void;
    getSingleUser:(username:string)=>void;
}

export const useGithub = create<Github>((set)=>({
    users:[],
    user : null,
    getUsers: async ()=>{
        try {
            const {data:users} = await api.get("/users")
            const transforData = users.map((e:any)=>{
               let username = e.login
               let url = e.html_url
               return {
                ...e, username,url,
               }

            });
            set({users:transforData})
            
        } catch (e:any) {
            alert(e.string())
        }
    },
    getSingleUser:()=>{
        
    }
}))