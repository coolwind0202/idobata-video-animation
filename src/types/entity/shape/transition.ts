import type * as Property from "./property";
import type { BaseTransition } from "../base";

type FillColorTransition = BaseTransition<"fillColor", Property.FillColor>;

type LineColorTransition = BaseTransition<"lineColor", Property.LineColor>;

type lineWeightTransition = BaseTransition<"lineWeight", Property.LineWeight>;

export type {
    FillColorTransition, 
    LineColorTransition,
    lineWeightTransition,
};