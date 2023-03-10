type BaseEasing = {
    type: string,
    getValue: (progression: number) => number;
}

export type { BaseEasing };