import * as Property from "./property";
import type { BaseTransition } from "../base";

type RectangleWidthTransition = BaseTransition<"rectangleWidth", Property.RectangleWidth>;
type RectangleHeightTransition = BaseTransition<"rectangleHeight", Property.RectangleHeight>;

export type {
    RectangleHeightTransition,
    RectangleWidthTransition
};