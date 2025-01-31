type Rfc3339Extensions = Array<"timezone" | "calendar"> | undefined;
export type JSONDateTimeFormat = {
    name: "datetime";
    parts: "datetime" | "date" | "time";
    variant: "rfc2822" | "rfc3339";
    extensions?: Rfc3339Extensions;
};
export declare function inferDatetime(value: string): JSONDateTimeFormat | undefined;
export {};
