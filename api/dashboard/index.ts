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
    public async metricsandhighlights(): Promise<{
        message?: string,
        status: number,
        data: {
            Highlights: {
                Label: string;
                Tooltip: string;
                Text: string;
            }[];
            UnsuccessfulConsultations: {
                Label: string;
                Tooltip: string;
                Graphic: {
                    XAxis: string;
                    YAxis: string;
                }[];
                Highlights: {
                    Label: string;
                    Tooltip: string;
                    Text: string;
                }[];
            };
            SuccessfulQueriesHistory: {
                Label: string;
                Tooltip: string;
                Graphic: {
                    XAxis: string;
                    YAxis: string;
                }[];
            };
            TaxesExpectedToBePaid: {
                Label: string;
                Tooltip: string;
                Graphic: {
                    XAxis: string;
                    YAxis: string;
                }[];
            };
        }
    }> {
        return await context.get(`/production/dashboard/metricsandhighlights`,
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
}

export default new controller();