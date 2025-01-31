export type JSONHostnameFormat = {
    name: "hostname";
    variant: "rfc1123" | "rfc5890";
};
export declare function inferHostname(value: string): JSONHostnameFormat | undefined;
