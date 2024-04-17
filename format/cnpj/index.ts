export function format (text: string): string {
    return text.replace(/\D/g, '').replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
}
export function unformat (text: string): string {
    return text.replace(/\D/g, '');
}