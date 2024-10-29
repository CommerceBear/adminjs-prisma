import { BaseResource, Filter, BaseRecord } from 'adminjs';
import { PrismaClient } from '@prisma/client';
import { DMMF } from '@prisma/client/runtime/library.js';
import { Property } from './Property.js';
import { ModelManager, Enums } from './types.js';
export declare class Resource extends BaseResource {
    protected client: PrismaClient;
    protected model: DMMF.Model;
    protected enums: Enums;
    protected manager: ModelManager;
    protected propertiesObject: Record<string, Property>;
    protected idProperty: Property;
    constructor(args: {
        model: DMMF.Model;
        client: PrismaClient;
        clientModule?: any;
    });
    databaseName(): string;
    databaseType(): string;
    id(): string;
    properties(): Array<Property>;
    property(path: string): Property | null;
    build(params: Record<string, any>): BaseRecord;
    count(filter: Filter): Promise<number>;
    find(filter: Filter, params?: {
        limit?: number;
        offset?: number;
        sort?: {
            sortBy?: string;
            direction?: 'asc' | 'desc';
        };
    }): Promise<Array<BaseRecord>>;
    protected buildSortBy(sort?: {
        sortBy?: string;
        direction?: 'asc' | 'desc';
    }): {
        [x: string]: "asc" | "desc";
    } | {
        [x: string]: {
            [x: string]: "asc" | "desc";
        };
    };
    findOne(id: string | number): Promise<BaseRecord | null>;
    findMany(ids: Array<string | number>): Promise<Array<BaseRecord>>;
    create(params: Record<string, any>): Promise<Record<string, any>>;
    update(pk: string | number, params?: Record<string, any>): Promise<Record<string, any>>;
    delete(id: string | number): Promise<void>;
    static isAdapterFor(args: {
        model: DMMF.Model;
        client: PrismaClient;
    }): boolean;
    protected prepareProperties(): {
        [propertyPath: string]: Property;
    };
    protected prepareParams(params: Record<string, any>): Record<string, any>;
    protected prepareReturnValues(params: Record<string, any>): Record<string, any>;
}
