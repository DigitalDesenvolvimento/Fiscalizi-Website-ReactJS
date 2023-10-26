import { TimeSpan, uuid } from "@/types";
import { context } from "..";
import { authToken } from "@/utils";

const FormData = require('form-data');

class controller {
    /* Sobre esta função *//**
     * By making this request, you will obtain the access token for the other functionalities
    @param {string} Login
    @param {string} Password
    @param {string | undefined} ServerDescription
     **/
    public async accesstoken(Login: string, Password: string, ServerDescription?: string): Promise<{
        message?: string,
        status: number,
        data: {
            IntegrationToken: uuid,
            ClientSecret: uuid,
            AccessToken: string,
            TimeOut: TimeSpan
        }
    }> {
        return await context.get(`/production/user/accesstoken`,
            {
                headers: {
                    accept: '*',
                    Login: Login,
                    Password: Password,
                    ServerDescription: ServerDescription
                }
            })
            .then((response) => {
                return {
                    status: response.status,
                    data: response.data
                }
            })
            .catch((exception) => {
                return {
                    message: "",
                    status: exception.response.status,
                    data: exception.response.data
                }
            });
    }
    /* Sobre esta função *//**
     * By making this request you will get all the data of the logged in user
     **/
    public async user(): Promise<{
        message?: string,
        status: number,
        data: {
            Id: uuid,
            Login: string,
            Name: string,
            SSN: string,
            MainEmail: string,
            MainPhone: {
                DDI: string,
                DDD: string,
                Number: string
            }
        }
    }> {
        return await context.get(`/production/user/user`,
            {
                headers: {
                    accept: '*',
                    Authorization: `Bearer ${authToken.get()?.accessToken}`,
                    IntegrationToken: authToken.get()?.integrationToken,
                    ClientSecret: authToken.get()?.clientSecret
                }
            })
            .then((response) => {
                return {
                    status: response.status,
                    data: response.data
                }
            })
            .catch((exception) => {
                return {
                    message: "",
                    status: exception.response.status,
                    data: exception.response.data
                }
            });
    }
    /* Sobre esta função *//**
     * Through this request it will be possible to register a new user. The term consumer is intended to designate the users who will access the ClientSide and will have access to the functionalities through this server
     **/
    public async newuser(Login: string, Password: string, Name: string, SSN: string, MainEmail: string, MainPhoneDDI: string, MainPhoneDDD: string, MainPhoneNumber: string, Status: number): Promise<{
        message?: string,
        status: number,
        data: uuid
    }> {
        return await context.post(`/production/user/newuser`, {
            Login: Login,
            Password: Password,
            Name: Name,
            SSN: SSN,
            MainEmail: MainEmail,
            MainPhoneDDI: MainPhoneDDI,
            MainPhoneDDD: MainPhoneDDD,
            MainPhoneNumber: MainPhoneNumber,
            Status: Status
        },
            {
                headers: {
                    accept: '*',
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${authToken.get()?.accessToken}`,
                    IntegrationToken: authToken.get()?.integrationToken,
                    ClientSecret: authToken.get()?.clientSecret,
                }
            })
            .then((response) => {
                return {
                    status: response.status,
                    data: response.data
                }
            })
            .catch((exception) => {
                return {
                    message: "",
                    status: exception.response.status,
                    data: exception.response.data
                }
            });
    }
    /* Sobre esta função *//**
     * Through this request it will be possible to register a new consumer. The term consumer is intended to designate the users who will access the ClientSide and will have access to the functionalities through this server
     **/
    public async newpassword(Login: string): Promise<{
        message?: string,
        status: number,
        data?: object
    }> {
        const formData = new FormData();
        formData.append('Login', Login);
        return await context.post(`/production/user/newpassword`, {
            Login: Login
        },
            {
                headers: {
                    accept: '*',
                    "Content-Type": "multipart/form-data"
                },
            })
            .then((response) => {
                return {
                    status: response.status,
                    data: response.data
                }
            })
            .catch((exception) => {
                return {
                    message: "",
                    status: exception.response.status,
                    data: exception.response.data
                }
            });
    }
}

export default new controller();