export type JSONCreditCardFormat = {
    name: "creditcard";
    variant: "visa" | "amex" | "discover" | "mastercard" | "dinersclub";
};
export declare function inferCreditCard(value: string): JSONCreditCardFormat | undefined;
