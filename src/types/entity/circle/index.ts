import { CircleRadiusX, CircleRadiusY } from "./property";
import { BaseEntity } from "../base";
import { CommonEntityPropaties } from "../common";

type CircleEntity = BaseEntity<"circle", {
    "circleRadiusX": CircleRadiusX,
    "circleRadiusY": CircleRadiusY
} & CommonEntityPropaties>;

export * from "./property";
export * from "./transition";
export type { CircleEntity };