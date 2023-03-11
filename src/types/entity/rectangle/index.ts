import { BaseEditDataEntity } from "../base";
import { RectangleEntityPropaties } from "./transition";

export interface RectangleEntity extends BaseEditDataEntity {
    type: "rectangle",
    propaties: RectangleEntityPropaties
}

export const isRectangleEntity = (entity: BaseEditDataEntity) => entity.type === "rectangle";

export * from "./property";
export * from "./transition";