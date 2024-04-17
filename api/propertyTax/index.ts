import { TimeSpan, uuid } from "@/types";
import { context } from "..";
import { authToken } from "@/utils";

const FormData = require('form-data');

class controller {
    /* Sobre esta função *//**
         * Through this request it will be possible to register a new user. The term consumer is intended to designate the users who will access the ClientSide and will have access to the functionalities through this server
         **/
    public async taxpayer(): Promise<{
        message?: string,
        status: number,
        data: uuid
    }> {
        return await context.get(`/production/propertytax/taxpayer`,
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
     * Through this request it will be possible to register a new user. The term consumer is intended to designate the users who will access the ClientSide and will have access to the functionalities through this server
     **/
    public async changetaxpayer(Id: uuid, NameOrCompany?: string, SSNorEIN?: string, Email?: string, DDI?: string, DDD?: string, Phone?: string): Promise<{
        message?: string,
        status: number,
        data: {
            Id: uuid,
            NameOrCompany?: string,
            SSNorEIN?: string,
            Email?: string,
            DDI?: string,
            DDD?: string,
            Phone?: string
        }
    }> {
        return await context.put(`/production/propertytax/changetaxpayer/${Id}`, {
            NameOrCompany: NameOrCompany,
            SSNorEIN: SSNorEIN,
            Email: Email,
            DDI: DDI,
            DDD: DDD,
            Phone: Phone
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
     * Through this request it will be possible to register a new user. The term consumer is intended to designate the users who will access the ClientSide and will have access to the functionalities through this server
     **/
    public async deletetaxpayer(Id: uuid): Promise<{
        message?: string,
        status: number,
        data: {
            Id: uuid,
            NameOrCompany?: string,
            SSNorEIN?: string,
            Email?: string,
            DDI?: string,
            DDD?: string,
            Phone?: string
        }
    }> {
        return await context.delete(`/production/propertytax/deletetaxpayer/${Id}`,
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
     * Through this request it will be possible to register a new user. The term consumer is intended to designate the users who will access the ClientSide and will have access to the functionalities through this server
     **/
    public async newtaxpayer(NameOrCompany?: string, SSNorEIN?: string, Email?: string, DDI?: string, DDD?: string, Phone?: string): Promise<{
        message?: string,
        status: number,
        data: {
            Id: uuid,
            NameOrCompany?: string,
            SSNorEIN?: string,
            Email?: string,
            DDI?: string,
            DDD?: string,
            Phone?: string
        }
    }> {
        return await context.post(`/production/propertytax/newtaxpayer`, {
            NameOrCompany: NameOrCompany,
            SSNorEIN: SSNorEIN,
            Email: Email,
            DDI: DDI,
            DDD: DDD,
            Phone: Phone
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
}

export default new controller();