import * as Property from "./property";
import { BaseTransition } from "../base";

type TextFontSizeTransition = BaseTransition<"textFontSize", Property.TextFontSize>;

type TextFontFamilyTransition = BaseTransition<"textFontFamily", Property.TextFontSize>;
// TODO: テキストのフォントファミリーは現時点でアニメーションすることはできないものとしたい。そのための型を書きたい。

type TextFontWeightTransition = BaseTransition<"textFontWeight", Property.TextFontWeight>;

type TextAllignmentTransition = BaseTransition<"textAllignment", Property.TextAlignment>;

export type {
    TextFontSizeTransition,
    TextFontFamilyTransition,
    TextFontWeightTransition,
    TextAllignmentTransition
};