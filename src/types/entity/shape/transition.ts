import * as Property from "./property";

import { BaseEditDataEntityProperty } from "../base";
import { CommonEntityProperties } from "../common";

type ShapeFillColorProperty = BaseEditDataEntityProperty<"shapeFillColor", Property.FillColor>;
type ShapeLineColorProperty = BaseEditDataEntityProperty<"shapeLineColor", Property.LineColor>;
type ShapeLineWeightProperty = BaseEditDataEntityProperty<"shapeLineWeight", Property.LineWeight>;

export interface ShapeEntityPropaties extends CommonEntityProperties {
    shapeFillColor: ShapeFillColorProperty,
    shapeLineColor: ShapeLineColorProperty,
    shapeLineWeight: ShapeLineWeightProperty
};