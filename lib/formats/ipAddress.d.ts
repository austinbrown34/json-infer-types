export type JSONIPAddressFormat = {
    name: "ip";
    variant: "v4" | "v6";
};
export declare function inferIpAddress(value: string): JSONIPAddressFormat | undefined;
