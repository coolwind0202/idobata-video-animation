import * as Property from "./property";
import type { BaseTransition } from "../base";

type CircleRadiusXTransition = BaseTransition<"circleRadiusX", Property.CircleRadiusX>;
type CircleRadiusYTransition = BaseTransition<"circleRadiusY", Property.CircleRadiusY>;

export type { 
    CircleRadiusXTransition,
    CircleRadiusYTransition
};
