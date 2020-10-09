import * as React from "react";
import { TableComponents } from "rc-table/es/interface";
import { TableProps as RcTableProps } from 'rc-table/es/Table';
export interface vt_opts<RecordType> {
    id?: number;
    /**
     * @default 5
     */
    overscanRowCount?: number;
    /**
     * this only needs the scroll.y
     */
    scroll: RcTableProps<RecordType>['scroll'];
    /**
     * wheel event(only works on native events).
     */
    onScroll?: ({ left, top, isEnd, }: {
        top: number;
        left: number;
        isEnd: boolean;
    }) => void;
    initTop?: number;
    /**
     * @default false
     */
    debug?: boolean;
}
/**
 * `INIT` -> `LOADED` -> `RUNNING`
 */
declare enum e_VT_STATE {
    INIT = 1,
    LOADED = 2,
    RUNNING = 4
}
interface RecordType extends Object {
    [x: string]: any;
}
interface VT_CONTEXT<T = RecordType> extends vt_opts<T> {
    _y: number;
    _raw_y: number | string;
    _vtcomponents: TableComponents<RecordType>;
    components: TableComponents<RecordType>;
    computed_h: number;
    vt_state: e_VT_STATE;
    possible_hight_per_tr: number;
    re_computed: number;
    row_height: number[];
    row_count: number;
    prev_row_count: number;
    wrap_inst: React.RefObject<HTMLDivElement>;
    VTScroll?: (param?: {
        top: number;
        left: number;
    }) => {
        top: number;
        left: number;
    };
    _React_ptr: any;
    WH: number;
    HND_PAINT: number;
    _offset_top: number;
    _offset_head: number;
    _offset_tail: number;
}
export declare function _set_components<T>(ctx: VT_CONTEXT<T>, components: TableComponents<T>): void;
export declare function init<T>(): VT_CONTEXT<T>;
export declare function vt_components<T>(ctx: VT_CONTEXT<T>, vt_opts: vt_opts<T>): TableComponents<T>;
export {};
