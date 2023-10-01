import { TimeSpan, uuid } from '@/types';
import cookies from 'js-cookie';

/** Method for storing user authentication information, obtained by returning the request "service.fiscalizi.dev.br/production/user/accesstoken"
 ** @param {uuid} integrationToken Enter the "IntegrationToken" on the ServerSide
 ** @param {uuid} clientSecret Enter the "ClientSecret" on the ServerSide
 ** @param {string} accessToken Enter the "AccessToken" on the ServerSide
 ** @param {number} timeOut Enter the expiration time of the "AccessToken"
 **/
function set(integrationToken: uuid, clientSecret: uuid, accessToken: string, timeOut: number): void {
    cookies.set('integrationToken', integrationToken, { httpOnly: true });
    cookies.set('clientSecret', clientSecret, { httpOnly: true });
    cookies.set('accessToken', accessToken, { httpOnly: true });
    cookies.set('timeOut', timeOut.toString(), { httpOnly: true });
}
/** Returns the user's authentication information
 **/
function get(): { integrationToken?: uuid, clientSecret?: uuid, accessToken?: string, timeOut?: TimeSpan } | undefined {
    return !(cookies.get('accessToken') && cookies.get('clientSecret') && cookies.get('accessToken') && cookies.get('timeOut'))
        ? undefined
        : {
            integrationToken: cookies.get('integrationToken') as uuid,
            clientSecret: cookies.get('clientSecret') as uuid,
            accessToken: cookies.get('accessToken') as string,
            timeOut: Number(cookies.get('timeOut')) as TimeSpan
        };
}

export default { set, get }