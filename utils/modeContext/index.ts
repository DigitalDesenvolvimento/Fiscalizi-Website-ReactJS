import cookies from 'js-cookie';

enum Modes {
    darkMode = 'dark mode',
    lightMode = 'light mode'
  };

/** Method for storing user authentication information, obtained by returning the request "service.fiscalizi.dev.br/production/user/accesstoken"
 ** @param {uuid} integrationToken Enter the "IntegrationToken" on the ServerSide
 ** @param {uuid} clientSecret Enter the "ClientSecret" on the ServerSide
 ** @param {string} accessToken Enter the "AccessToken" on the ServerSide
 ** @param {number} timeOut Enter the expiration time of the "AccessToken"
 **/
function set(Mode: Modes): void {
    cookies.set('modeContext', Mode, { httpOnly: true });
}
/** Returns the user's authentication information
 **/
function get(): Modes | undefined {
    return !(cookies.get('modeContext'))
        ? undefined
        : cookies.get('modeContext') as Modes;
}

export default { set, get, Modes }