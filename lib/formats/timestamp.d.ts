export type JSONTimestampFormat = {
    name: "timestamp";
    variant: "millisecondsSinceEpoch" | "nanosecondsSinceEpoch" | "secondsSinceEpoch";
};
export declare function inferTimestamp(value: string | number): JSONTimestampFormat | undefined;
