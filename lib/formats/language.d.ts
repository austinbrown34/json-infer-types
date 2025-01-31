export type JSONLanguageFormat = {
    name: "language";
    variant: "iso693-1" | "iso693-2" | "english" | "native";
};
export declare function inferLanguage(value: string): JSONLanguageFormat | undefined;
