export type JSONJSONFormat = {
    name: "json";
    variant: "ecma262" | "json5";
};
export declare function inferJson(value: string): JSONJSONFormat | undefined;
