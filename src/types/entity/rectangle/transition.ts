import * as Property from "./property";

import { BaseEditDataEntityProperty } from "../base";
import { CommonEntityProperties } from "../common";
import { ShapeEntityPropaties } from "../shape";

type RectangleHeightProperty = BaseEditDataEntityProperty<"rectangleHeight", Property.RectangleHeight>;
type RectangleWidthProperty = BaseEditDataEntityProperty<"rectangleWidth", Property.RectangleHeight>;

export interface RectangleEntityPropaties extends CommonEntityProperties, ShapeEntityPropaties {
    rectangleHeight: RectangleHeightProperty,
    rectangleWidth: RectangleWidthProperty
};