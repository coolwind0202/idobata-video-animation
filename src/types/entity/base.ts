import { BaseEasing } from "../easing";

type BaseTransition<T extends string, S extends Record<string, unknown>> = {
    type: T,
    instruction: {
        timing: number,
        easing: BaseEasing,
        property: S
    }
};

// すべての Entity 型は BaseEntity から作られる。
// BaseEntity には、Entity のタイプと、その Entity が持ちうる Property のマップが与えられる。
type BaseEntity<T extends string, S extends { [key in string]: Record<string, unknown>}> = 
    S extends { [key in infer R]: Record<string, unknown>}
        ? R extends string
            ? {
                type: T,
                name: string,
                transitions: BaseTransition<R, S[R]>[];
                // Sのそれぞれで、キーを BaseTransition のタイプ、値を BaseTransition の Property の型として与えたい。それの Union 型をここに書きたい。

                // 多分、ここの keyof S を一つの変数として取り扱うことができたら、transitions のタイプと実際の型が一致するようになる。
            }
            : unknown
        : unknown;

export type { BaseTransition, BaseEntity };