import { BaseEditDataEntity } from "../base";
import { RectangleEntityPropaties } from "./transition";

export interface RectangleEntity extends BaseEditDataEntity {
    propaties: RectangleEntityPropaties
}

export * from "./property";
export * from "./transition";