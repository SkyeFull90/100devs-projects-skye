export default function printerError(s) {
    let errors = [...s].filter(c => c < 'a' || c > 'm').length;
    return `${errors}/${s.length}`;
}