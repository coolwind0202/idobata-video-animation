import { BaseEntity } from "../base";
import { Position, Scale, Transparency } from "./property";

type CommonEntityPropaties = {
    "position": Position,
    "scale": Scale,
    "transparency": Transparency
};

export type { CommonEntityPropaties };

export * from "./property";
export * from "./transition";