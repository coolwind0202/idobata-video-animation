import * as Property from "./property";

import { BaseEditDataEntityProperty } from "../base";

type PositionProperty = BaseEditDataEntityProperty<"position", Property.Position>;
type ScaleProperty = BaseEditDataEntityProperty<"scale", Property.Scale>;
type TransparencyProperty = BaseEditDataEntityProperty<"transparency", Property.Transparency>;
type RotationProperty = BaseEditDataEntityProperty<"rotation", Property.Rotation>;

export interface CommonEntityProperties {
    position: PositionProperty,
    scale: ScaleProperty,
    transparency: TransparencyProperty,
    rotation: RotationProperty
};