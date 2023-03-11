type Easing = {
    type: string
};

/**
 * Transition は、編集データにおけるトランジションを表します。
 * 
 * @argument S このトランジションで変化するプロパティの値。
 */
export type EditDataTransition<S extends Record<string, unknown> = {}> = {
    type: string,
    start: {
        frame: number,
        data: S
    },
    end: {
        frame: number,
        data: S
    },
    easing: Easing
};

/**
 * BaseProperty は、編集データにおける Entity が持っているプロパティのインターフェースです。
 */
export interface BaseEditDataEntityProperty<T extends string, S extends Record<string, unknown>> {
    type: T,        // いる？
    transitions: EditDataTransition<S>[]
};

/**
 * BaseEntity は、編集データにおける Entity を表すすべてのオブジェクトが満たすインターフェースです。
 */
export interface BaseEditDataEntity {
    type: string,
    name: string,
    properties: {}
};