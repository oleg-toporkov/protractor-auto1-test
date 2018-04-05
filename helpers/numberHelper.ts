export function cleanNumber(text: string): number {
    return Number(text.replace(/\D/g, ''));
}