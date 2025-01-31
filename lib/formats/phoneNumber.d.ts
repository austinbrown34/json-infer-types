export type JSONPhoneNumberFormat = {
    name: "phoneNumber";
    variant: "e.164";
};
export declare function inferPhoneNumber(value: string): JSONPhoneNumberFormat | undefined;
