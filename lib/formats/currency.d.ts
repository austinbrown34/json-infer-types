export type JSONCurrencyFormat = {
    name: "currency";
    variant: "iso4217" | "english" | "crypto" | "symbol";
};
export declare function inferCurrency(value: string): JSONCurrencyFormat | undefined;
