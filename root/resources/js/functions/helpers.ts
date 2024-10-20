export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}