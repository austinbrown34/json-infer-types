export type JSONEmailFormat = {
    name: "email";
    variant: "rfc5321" | "rfc5322";
};
export declare function inferEmail(value: string): JSONEmailFormat | undefined;
