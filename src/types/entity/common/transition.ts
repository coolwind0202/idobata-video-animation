import * as Property from "./property";
import { BaseTransition } from "../base";

type PositionTransition = BaseTransition<"position", Property.Position>;

type ScaleTransition = BaseTransition<"scale", Property.Scale>;

type TransparencyTransition = BaseTransition<"transparency", Property.Transparency>;

export type { PositionTransition, ScaleTransition, TransparencyTransition }
