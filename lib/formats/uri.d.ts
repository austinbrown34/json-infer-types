export type JSONURIFormat = {
    name: "uri";
    contentType?: string;
};
export declare function inferUri(value: string): JSONURIFormat | undefined;
