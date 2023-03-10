import { BaseEntity } from "./entity/base";

type EditData = {
    entities: BaseEntity<string, { string: Record<string, unknown>}>[],

    // Entity のタイプで分岐すると、プロパティの型が補完されるようにしたい。
    // ただ、拡張可能な方法が思いつかない。
}

export default EditData;