import { BaseProperty, PropertyType } from 'adminjs';
import { DMMF } from '@prisma/client/runtime/library.js';

export const ADMINJS_COMPOSITE_ID_PROPERTY = 'adminJSCompositeId';

export class CompisiteIdProperty extends BaseProperty {
  public columns: DMMF.Field[];

  protected columnPosition: number;

  // eslint-disable-next-line default-param-last
  constructor(columns: DMMF.Field[], columnPosition = 0) {
    const path = columns.map((column) => column.name).join('_');
    super({ path });
    this.columns = columns;
    this.columnPosition = columnPosition;
  }

  public isEditable(): boolean {
    return false;
  }

  public isId(): boolean {
    return true;
  }

  public name(): string {
    return ADMINJS_COMPOSITE_ID_PROPERTY;
  }

  public isRequired(): boolean {
    return true;
  }

  public isSortable(): boolean {
    return false;
  }

  public reference(): string | null {
    return null;
  }

  public referencedColumnName(): string | null {
    return null;
  }

  public foreignColumnName(): string | null {
    return null;
  }

  public availableValues(): Array<string> | null {
    return null;
  }

  public position(): number {
    return this.columnPosition || 0;
  }

  public isEnum(): boolean {
    return false;
  }

  public type(): PropertyType {
    return 'string';
  }
}
