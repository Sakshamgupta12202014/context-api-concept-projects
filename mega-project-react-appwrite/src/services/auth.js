import config from "../conf/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    account;
    client = new Client();

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)

        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}) {
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                return this.login({email, password})
            }
        }
        catch(error){
            console.error("Error creating account: ", error);
        }
    }

    async login({email, password}) {
        try{
            const userLogin = await this.account.createEmailPasswordSession(email, password)
            return userLogin
        }catch(error){
            console.log("Error logging in: ", error);
        }
    }

    async getCurrentUser(){
        try{
            const user = this.account.get()
            console.log("Current User: ", user)
            return user
        }catch(error){
            console.log("Error getting current user: ", error);
        }
    }
    async logout() {
        try{
            const logoutResponse = await this.account.deleteSessions()
            return logoutResponse
        }catch(error){
            console.log("Error logging out: ", error); 
        }
    }
}

const authService = new AuthService();

export default authService;
