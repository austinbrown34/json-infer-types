export type JSONSemverFormat = {
    name: "semver";
};
export declare function inferSemver(value: string): JSONSemverFormat | undefined;
