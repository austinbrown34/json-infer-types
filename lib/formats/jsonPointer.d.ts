export type JSONJSONPointerFormat = {
    name: "jsonPointer";
    variant: "rfc6901";
};
export declare function inferJsonPointer(value: string): JSONJSONPointerFormat | undefined;
