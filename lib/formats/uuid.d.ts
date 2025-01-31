export type JSONUUIDFormat = {
    name: "uuid";
    variant: "v1" | "v4" | "v5";
};
export declare function inferUuid(value: string): JSONUUIDFormat | undefined;
