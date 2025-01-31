export type JSONColorFormat = {
    name: "color";
    variant: "hex" | "rgb" | "hsl";
};
export declare function inferColor(value: string): JSONColorFormat | undefined;
