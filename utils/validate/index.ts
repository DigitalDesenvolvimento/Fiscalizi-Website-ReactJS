/** Method to validate whether the api return was successful or not
  ** @param {number} status Enter the status
 **/
function APIExecutedSuccessfully(status: number): Boolean {
    return Math.floor(status / 100) == 2;
}
/** Method for validate text as CNPJ
  ** @param {string} text Enter the text
 **/
function CNPJ(text: string | undefined): Boolean {
    if (!text) return false;
    text = text.replace(/\D/g, '');
    if (text.length !== 14 || /^(\d)\1*$/.test(text)) return false;
    const digits: number[] = Array.from(text, Number);
    const calcDigit = (j: number) => (sum: number) => digits.slice(0, j).reverse().reduce((acc, digit, i) => acc + digit * (i % 8 + 2), 0) % 11 % 10;
    const isDigitValid = (j: number) => digits[j] === calcDigit(j)(j);
    return isDigitValid(12) && isDigitValid(13);
}
/** Method for validate text as CPF
 ** @param {string} text Enter the text
 **/
function CPF(text: string | undefined): Boolean {
    if (!text) return false;
    text = text.replace(/\D/g, '');
    if (text.length !== 11 || /^(\d)\1*$/.test(text)) return false;
    const digits = Array.from(text, Number);
    const d1 = digits.slice(0, 9).reduce((acc, digit, index) => acc + digit * (10 - index), 0) % 11 % 10;
    const d2 = digits.slice(0, 9).reduce((acc, digit, index) => acc + digit * (11 - index), 0) % 11 % 10;
    return digits[9] == d1 && digits[10] == d2;
}
/** Method for validate text as email
 ** @param {string} text Enter the text
 **/
function email(text: string | undefined): Boolean {
    if (!text) return false;
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(text);
}
/** Method for validate text as fone
 ** @param {string} text Enter the text
 **/
function fone(text: string | undefined): Boolean {
    if (!text) return false;
    return (('' + text).replace(/\D/g, '').length >= 10);
}
/** Method for validate the security of text as password
 ** @param {string} text Enter the text
 **/
function passwordSecurity(text: string | undefined): number {
    if (!text) return 0;
    const lowercaseRegex: RegExp = /[a-z]/;
    const uppercaseRegex: RegExp = /[A-Z]/;
    const specialCharRegex: RegExp = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const numberRegex: RegExp = /[0-9]/;

    return (lowercaseRegex.test(text) ? 0.25 : 0)
        + (uppercaseRegex.test(text) ? 0.25 : 0)
        + (specialCharRegex.test(text) ? 0.25 : 0)
        + (numberRegex.test(text) ? 0.25 : 0);
}

export default { APIExecutedSuccessfully, CPF, CNPJ, email, fone, passwordSecurity }