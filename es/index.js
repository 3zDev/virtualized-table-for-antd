function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
The MIT License (MIT)

Copyright (c) 2019 https://github.com/wubostc/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useRef, useMemo } from "react";
import { vt_components, _set_components, init } from "./vt";
var _brower = 1;
var _node = 2;

(function () {
  var env = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window instanceof Window ? _brower : _node;

  if (env & _brower) {
    if (!Object.hasOwnProperty.call(window, "requestAnimationFrame") && !window.requestAnimationFrame) throw new Error("Please using the modern browers or appropriate polyfill!");
  }
})();

export function useOnce(factory) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var ref = useRef(null);
  return useMemo(function () {
    return factory.apply(void 0, args);
  }, [ref.current]);
}
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

function useVT(fnOpts) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var opts = useMemo(function () {
    return Object.assign({
      id: +new Date()
    }, fnOpts());
  }, deps);
  var ctx = init();
  var set = useOnce(function () {
    return function (components) {
      return _set_components(ctx, components);
    };
  });
  var vt = useMemo(function () {
    return vt_components(ctx, opts);
  }, [opts]);
  return [vt, set];
}

export { useVT };