import { BaseProperty } from 'adminjs';
export const ADMINJS_COMPOSITE_ID_PROPERTY = 'adminJSCompositeId';
export class CompisiteIdProperty extends BaseProperty {
    columns;
    columnPosition;
    // eslint-disable-next-line default-param-last
    constructor(columns, columnPosition = 0) {
        const path = columns.map((column) => column.name).join('_');
        super({ path });
        this.columns = columns;
        this.columnPosition = columnPosition;
    }
    isEditable() {
        return false;
    }
    isId() {
        return true;
    }
    name() {
        return ADMINJS_COMPOSITE_ID_PROPERTY;
    }
    isRequired() {
        return true;
    }
    isSortable() {
        return false;
    }
    reference() {
        return null;
    }
    referencedColumnName() {
        return null;
    }
    foreignColumnName() {
        return null;
    }
    availableValues() {
        return null;
    }
    position() {
        return this.columnPosition || 0;
    }
    isEnum() {
        return false;
    }
    type() {
        return 'string';
    }
}
//# sourceMappingURL=CompositeIdProperty.js.map