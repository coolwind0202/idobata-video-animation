import { BaseEditDataEntity } from "../base";
import { CircleEntityPropaties } from "./transition";

export interface CircleEntity extends BaseEditDataEntity {
    propaties: CircleEntityPropaties
}

export * from "./property";
export * from "./transition";
