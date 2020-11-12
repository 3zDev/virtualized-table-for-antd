/// <reference types="react" />
import { TableComponents, vt_opts } from "./vt";
export declare function useOnce<T, U>(factory: (...args: U[]) => T, ...args: U[]): T;
/**
 * @example
 *
 * function MyTableComponent() {
 *
 * // ... your code
 *
 *
 * // `set_components` is the same as the setComponents
 * const [ vt, set_components ] = useVT(() => ({ scroll: { y: 600 } }));
 *
 *
 * return (
 *  <Table
 *   columns={columns}
 *   dataSource={dataSource}
 *   scroll={{ x: 1000, y: 600 }}
 *   components={vt}
 *  />
 * );
 * }
 */
declare function useVT(fnOpts: () => vt_opts, deps?: React.DependencyList): [TableComponents, (components: TableComponents) => void];
export { useVT };
