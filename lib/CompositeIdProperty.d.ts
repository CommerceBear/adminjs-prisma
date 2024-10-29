import { BaseProperty, PropertyType } from 'adminjs';
import { DMMF } from '@prisma/client/runtime/library.js';
export declare const ADMINJS_COMPOSITE_ID_PROPERTY = "adminJSCompositeId";
export declare class CompisiteIdProperty extends BaseProperty {
    columns: DMMF.Field[];
    protected columnPosition: number;
    constructor(columns: DMMF.Field[], columnPosition?: number);
    isEditable(): boolean;
    isId(): boolean;
    name(): string;
    isRequired(): boolean;
    isSortable(): boolean;
    reference(): string | null;
    referencedColumnName(): string | null;
    foreignColumnName(): string | null;
    availableValues(): Array<string> | null;
    position(): number;
    isEnum(): boolean;
    type(): PropertyType;
}
