export class Utils {
    public static capitalize(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}