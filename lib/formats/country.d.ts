export type JSONCountryFormat = {
    name: "country";
    variant: "iso3166-2" | "iso3166-3";
};
export declare function inferCountry(value: string): JSONCountryFormat | undefined;
