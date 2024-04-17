export function format (text: string): string {
    return text.replace(/\D/g, '').replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
};
export function unformat (text: string): string {
    return text.replace(/\D/g, '');
}