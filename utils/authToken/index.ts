import { TimeSpan, uuid } from '@/types';

/** Method for storing user authentication information, obtained by returning the request "service.fiscalizi.dev.br/production/user/accesstoken"
 ** @param {string} integrationToken Enter the "IntegrationToken" on the ServerSide
 ** @param {string} clientSecret Enter the "ClientSecret" on the ServerSide
 ** @param {string} accessToken Enter the "AccessToken" on the ServerSide
 ** @param {number} timeOut Enter the expiration time of the "AccessToken"
 **/
function set(integrationToken: string, clientSecret: string, accessToken: string, timeOut: number): void {
    localStorage.setItem('integrationToken', integrationToken);
    localStorage.setItem('clientSecret', clientSecret);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('timeOut', timeOut.toString());
}
/** Returns the user's authentication information
 **/
function get(): { integrationToken?: uuid, clientSecret?: uuid, accessToken?: string, timeOut?: TimeSpan } | undefined {
    return (localStorage.getItem('accessToken') && localStorage.getItem('clientSecret') && localStorage.getItem('accessToken') && localStorage.getItem('timeOut'))
        ? {
            integrationToken: localStorage.getItem('integrationToken') as uuid,
            clientSecret: localStorage.getItem('clientSecret') as uuid,
            accessToken: localStorage.getItem('accessToken') as string,
            timeOut: Number(localStorage.getItem('timeOut')) as TimeSpan
        }
        : undefined;
}

export default { set, get }