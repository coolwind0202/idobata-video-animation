import { BaseEditDataEntity } from "../base";
import { CircleEntityPropaties } from "./transition";

export interface CircleEntity extends BaseEditDataEntity {
    type: "circle",
    propaties: CircleEntityPropaties
}

export const isCircleEntity = (entity: BaseEditDataEntity) => entity.type === "circle";

export * from "./property";
export * from "./transition";
