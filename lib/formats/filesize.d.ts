export type JSONFilesizeFormat = {
    name: "filesize";
    variant: "human";
};
export declare function inferFilesize(value: string): JSONFilesizeFormat | undefined;
