import * as Property from "./property";

import { BaseEditDataEntityProperty } from "../base";
import { CommonEntityProperties } from "../common";
import { ShapeEntityPropaties } from "../shape";

type CircleRadiusXProperty = BaseEditDataEntityProperty<"circleRadiusX", Property.CircleRadiusX>;
type CircleRadiusYProperty = BaseEditDataEntityProperty<"circleRadiusY", Property.CircleRadiusY>;

export interface CircleEntityPropaties extends CommonEntityProperties, ShapeEntityPropaties {
    circleRadiusX: CircleRadiusXProperty,
    circleRadiusY: CircleRadiusYProperty
};