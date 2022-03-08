export const dict: Record<number, {
    representation: string;
    basis?: number;
}> = {
    1: { representation: "I" },
    5: { representation: "V", basis: 1 },
    10: { representation: "X", basis: 1 },
    50: { representation: "L", basis: 10 },
    100: { representation: "C", basis: 10 },
    500: { representation: "D", basis: 100 },
    1000: { representation: "M", basis: 100 }
}

export function sortedDict() {
    return Object.keys(dict).map(val => Number(val)).sort((a, b) => b - a);
}

export function convert(val: number): string {
    const result: string[] = [];

    for (const n of sortedDict()) {
        const record = dict[n];

        if (val / n >= 1) {
            result.push(record.representation, ...convert(val - n));
            break;
        } else if (record.basis && (val / (n - record.basis)) >= 1) {
            result.push(
                dict[record.basis].representation, 
                record.representation, 
                ...convert(val - (n - record.basis)));
            break;
        }
    }

    return result.join("");
}
