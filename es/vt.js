function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
The MIT License (MIT)

Copyright (c) 2019 https://github.com/wubostc/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import * as React from "react";
var useRef = React.useRef,
    useState = React.useState,
    useCallback = React.useCallback,
    useContext = React.useContext,
    useEffect = React.useEffect,
    useMemo = React.useMemo;
/**
 * `INIT` -> `LOADED` -> `RUNNING`
 */

var e_VT_STATE;

(function (e_VT_STATE) {
  e_VT_STATE[e_VT_STATE["INIT"] = 1] = "INIT";
  e_VT_STATE[e_VT_STATE["LOADED"] = 2] = "LOADED";
  e_VT_STATE[e_VT_STATE["RUNNING"] = 4] = "RUNNING";
})(e_VT_STATE || (e_VT_STATE = {}));

function default_context() {
  return {
    vt_state: e_VT_STATE.INIT,
    possible_hight_per_tr: -1,
    computed_h: 0,
    re_computed: 0,
    row_height: [],
    row_count: 0,
    prev_row_count: 0,
    _offset_top: 0 | 0,
    _offset_head: 0 | 0,
    _offset_tail: 0 | 1,
    WH: 0
  };
}
/* overload __DIAGNOSIS__. */


function helper_diagnosis(ctx) {
  if (ctx.hasOwnProperty("CLICK~__DIAGNOSIS__")) return;
  Object.defineProperty(ctx, "CLICK~__DIAGNOSIS__", {
    get: function get() {
      console.debug("OoOoOoO DIAGNOSIS OoOoOoO");
      var expect_height = 0;

      for (var i = 0; i < ctx.row_count; ++i) {
        expect_height += ctx.row_height[i];
      }

      var color, explain;

      if (expect_height > ctx.computed_h) {
        color = "color:rgb(15, 179, 9)"; // green

        explain = "lower than expected";
      } else if (expect_height < ctx.computed_h) {
        color = "color:rgb(202, 61, 81)"; // red

        explain = "higher than expected";
      } else {
        color = "color:rgba(0, 0, 0, 0.85)";
        explain = "normal";
      }

      console.debug("%c%d(%d)(".concat(explain, ")"), color, expect_height, ctx.computed_h - expect_height);
      console.debug("OoOoOoOoOoOoOOoOoOoOoOoOo");
    },
    configurable: false,
    enumerable: false
  });
}

function log_debug(ctx, msg) {
  if (ctx.debug) {
    var ts = new Date().getTime();
    console.debug("%c[".concat(ctx.id, "][").concat(ts, "][").concat(msg, "] vt"), "color:#a00", ctx);
  }
}
/**
 * THE EVENTS OF SCROLLING.
 */


var SCROLLEVT_NULL = 0 << 0;
var SCROLLEVT_INIT = 1 << 0;
var SCROLLEVT_RECOMPUTE = 1 << 1;
var SCROLLEVT_NATIVE = 1 << 3; // the factory function returns a SimEvent.

function _make_evt(ne) {
  var target = ne.target;
  return {
    target: {
      scrollTop: target.scrollTop,
      scrollLeft: target.scrollLeft
    },
    end: target.scrollHeight - target.clientHeight === target.scrollTop,
    flag: SCROLLEVT_NATIVE
  };
}
/**
 * Default Implementation Layer.
 */

/** AntD.TableComponent.table */


var TableImpl = React.forwardRef(function TableImpl(props, ref) {
  return React.createElement("table", Object.assign({
    ref: ref
  }, props));
});
/** AntD.TableComponent.body.wrapper */

function WrapperImpl(props) {
  return React.createElement("tbody", Object.assign({}, props));
}
/** AntD.TableComponent.body.row */


var RowImpl = React.forwardRef(function RowImpl(props, ref) {
  return React.createElement("tr", Object.assign({
    ref: ref
  }, props));
});
/**
 * O(n)
 * returns offset: [head, tail, top]
 */

function scroll_with_offset(ctx, top, scroll_y) {
  var row_height = ctx.row_height,
      row_count = ctx.row_count,
      default_h = ctx.possible_hight_per_tr,
      overscanRowCount = ctx.overscanRowCount;
  var overscan = overscanRowCount;

  if (typeof scroll_y === "number") {
    ctx._raw_y = scroll_y;
    ctx._y = ctx._raw_y;
  } else if (typeof scroll_y === "string") {
    /* a string, like "calc(100vh - 300px)" */
    if (ctx.debug) console.warn("AntD.Table.scroll.y: ".concat(scroll_y, ", it may cause performance problems."));
    ctx._raw_y = scroll_y;
    ctx._y = ctx.wrap_inst.current.parentElement.offsetHeight;
  } else {
    if (ctx.debug) console.warn("AntD.Table.scroll.y: ".concat(scroll_y, ", it may cause performance problems."));
    console.info("VT will not works well, did you forget to set `scroll.y`?");
    ctx._raw_y = null;
    ctx._y = ctx.wrap_inst.current.parentElement.offsetHeight;
  }

  console.assert(ctx._y >= 0); // to calc `_top` with `row_height` and `overscan`.

  var _top = 0,
      i = 0;

  for (; i < row_count && _top <= top; ++i) {
    _top += row_height[i] || default_h;
  }

  while (i > 0 && overscan--) {
    _top -= row_height[--i];
  } // the height to render.


  var torender_h = 0,
      j = i;

  for (; j < row_count && torender_h < ctx._y; ++j) {
    torender_h += row_height[j] || default_h;
  }

  j += overscanRowCount * 2;
  if (j > row_count) j = row_count; // returns [head, tail, top].

  return [0 | i, 0 | j, 0 | _top];
} // set the variables for offset top/head/tail.


function _set_offset(ctx, top, head, tail) {
  ctx._offset_top = 0 | top;
  ctx._offset_head = 0 | head;
  ctx._offset_tail = 0 | tail;
}

function update_wrap_style(ctx, h) {
  if (ctx.WH === h) return;
  ctx.WH = h;
  ctx.wrap_inst.current.style.height = "".concat(h, "px");
  ctx.wrap_inst.current.style.maxHeight = "".concat(h, "px");
} // scrolls the parent element to specified location.


function scroll_to(ctx, top, left) {
  if (!ctx.wrap_inst.current) return;
  var ele = ctx.wrap_inst.current.parentElement;
  /** ie */

  ele.scrollTop = top;
  ele.scrollLeft = left;
}

function _repainting(ctx, ms) {
  var fn = function fn() {
    log_debug(ctx, "REPAINTING");

    if (ctx.vt_state === e_VT_STATE.RUNNING && ctx.wrap_inst.current) {
      // output to the buffer
      update_wrap_style(ctx, ctx.computed_h);
    } // free this handle manually.


    ctx.HND_PAINT = 0;
  };

  return ms < 0 ? window.requestAnimationFrame(fn) : window.setTimeout(fn, ms);
} // a wrapper function for `_repainting`.


function repainting(ctx) {
  if (ctx.HND_PAINT > 0) return;
  ctx.HND_PAINT = _repainting(ctx, -1);
}

function srs_expand(ctx, len, prev_len, fill_value) {
  var slen = len - prev_len;
  var shadow_rows = new Array(slen).fill(fill_value);
  ctx.row_height = ctx.row_height.concat(shadow_rows);
  ctx.computed_h += slen * fill_value;
}

function srs_shrink(ctx, len, prev_len) {
  var rows = ctx.row_height;
  var h2shrink = 0;

  for (var i = len; i < prev_len; ++i) {
    h2shrink += rows[i];
  }

  ctx.computed_h -= h2shrink;
}

function set_tr_cnt(ctx, n) {
  ctx.re_computed = n - ctx.row_count;
  ctx.prev_row_count = ctx.row_count;
  ctx.row_count = n;
}

function VTable(props) {
  var style = props.style,
      context = props.context,
      rest = _objectWithoutProperties(props, ["style", "context"]);
  /*********** DOM ************/


  var wrap_inst = useMemo(function () {
    return React.createRef();
  }, []);
  /*********** context ************/

  var ctx = useContext(context);
  useMemo(function () {
    Object.assign(ctx, default_context());

    if (ctx.wrap_inst && ctx.wrap_inst.current) {
      ctx.wrap_inst.current.parentElement.onscroll = null;
    }

    ctx.wrap_inst = wrap_inst;
    helper_diagnosis(ctx);
  }, []); // the state of scroll event

  var _useState = useState({
    top: ctx.initTop,
    left: 0,
    flag: SCROLLEVT_NULL,
    end: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      scroll = _useState2[0],
      setScroll = _useState2[1];
  /*********** scroll event ************/


  var event_queue = useRef([]).current;
  var nevent_queue = useRef([]).current; // the Native EVENT.

  var HND_RAF = useRef(0); // handle of requestAnimationFrame

  /* eslint-disable prefer-const */

  var RAF_update_self;
  /*********** scroll hook ************/

  var scroll_hook = useCallback(function (e) {
    if (ctx.vt_state !== e_VT_STATE.RUNNING) return;

    if (e) {
      if (e.flag) {
        event_queue.push(e);
      } else {
        nevent_queue.push(e);
      }
    }

    if (nevent_queue.length || event_queue.length) {
      if (HND_RAF.current) cancelAnimationFrame(HND_RAF.current); // requestAnimationFrame, ie >= 10

      HND_RAF.current = requestAnimationFrame(RAF_update_self);
    }
  }, []);
  /* requestAnimationFrame callback */

  RAF_update_self = useCallback(function (timestamp) {
    if (ctx.vt_state !== e_VT_STATE.RUNNING) return;
    var nevq = nevent_queue,
        evq = event_queue;
    var e; // consume the `evq` first.

    if (evq.length) {
      e = evq.shift();
    } else if (nevq.length) {
      // take the last event from the `nevq`.
      e = _make_evt(nevq.pop());
      nevq.length = 0;
    } else {
      return;
    }

    var scrollTop = e.target.scrollTop;
    var scrollLeft = e.target.scrollLeft;
    var flag = e.flag;

    if (ctx.debug) {
      console.debug("[".concat(ctx.id, "][SCROLL] top: %d, left: %d"), scrollTop, scrollLeft);
    } // checks every tr's height, which will take some time...


    var offset = scroll_with_offset(ctx, scrollTop, ctx.scroll.y);
    var head = offset[0];
    var tail = offset[1];
    var top = offset[2];
    var prev_head = ctx._offset_head;
    var prev_tail = ctx._offset_tail;
    var prev_top = ctx._offset_top;

    switch (flag) {
      case SCROLLEVT_INIT:
        log_debug(ctx, "SCROLLEVT_INIT");

        _set_offset(ctx, top, head, tail);

        setScroll({
          top: scrollTop,
          left: scrollLeft,
          flag: SCROLLEVT_INIT,
          end: false
        });
        break;

      case SCROLLEVT_RECOMPUTE:
        log_debug(ctx, "SCROLLEVT_RECOMPUTE");

        if (head === prev_head && tail === prev_tail && top === prev_top) {
          HND_RAF.current = 0;
          if (event_queue.length) scroll_hook(null); // consume the next.

          return;
        }

        _set_offset(ctx, top, head, tail);

        setScroll({
          top: scrollTop,
          left: scrollLeft,
          flag: SCROLLEVT_RECOMPUTE,
          end: false
        });
        break;

      case SCROLLEVT_NATIVE:
        log_debug(ctx, "SCROLLEVT_NATIVE");
        HND_RAF.current = 0;

        if (ctx.onScroll) {
          ctx.onScroll({
            top: scrollTop,
            left: scrollLeft,
            isEnd: e.end
          });
        }

        if (head === prev_head && tail === prev_tail && top === prev_top) {
          return;
        }

        _set_offset(ctx, top, head, tail);

        setScroll({
          top: scrollTop,
          left: scrollLeft,
          flag: SCROLLEVT_NATIVE,
          end: e.end
        });
        break;
    }
  }, []);
  useEffect(function () {
    ctx.wrap_inst.current.parentElement.onscroll = scroll_hook;
  }, [wrap_inst]); // update DOM style.

  useEffect(function () {
    switch (scroll.flag) {
      case SCROLLEVT_INIT:
      case SCROLLEVT_RECOMPUTE:
        scroll_to(ctx, scroll.top, scroll.left);
        HND_RAF.current = 0;
        if (event_queue.length) scroll_hook(null); // consume the next.

        break;

      default:
        break;
    }
  }, [scroll]);
  useEffect(function () {
    switch (ctx.vt_state) {
      case e_VT_STATE.INIT:
        // init vt without the rows.
        break;

      case e_VT_STATE.LOADED:
        // changed by VTRow only.
        ctx.vt_state = e_VT_STATE.RUNNING; // force update.

        scroll_hook({
          target: {
            scrollTop: scroll.top,
            scrollLeft: 0
          },
          flag: SCROLLEVT_INIT
        });
        break;

      case e_VT_STATE.RUNNING:
        if (ctx.re_computed !== 0) {
          // rerender
          ctx.re_computed = 0;
          scroll_hook({
            target: {
              scrollTop: scroll.top,
              scrollLeft: scroll.left
            },
            flag: SCROLLEVT_RECOMPUTE
          });
        }

        break;
    }
  });
  style.position = "relative";
  style.top = ctx._offset_top;

  var width = style.width,
      rest_style = _objectWithoutProperties(style, ["width"]);

  var wrap_style = useMemo(function () {
    return {
      width: width,
      position: "relative",
      transform: "matrix(1, 0, 0, 1, 0, 0)"
    };
  }, [width]);
  var Table = ctx.components.table;
  return React.createElement("div", {
    ref: wrap_inst,
    style: wrap_style
  }, React.createElement(context.Provider, {
    value: _objectSpread({}, ctx)
  }, React.createElement(Table, Object.assign({}, rest, {
    style: rest_style
  }))));
}

function VWrapper(props) {
  var _props$children = _slicedToArray(props.children, 2),
      measureRow = _props$children[0],
      rows = _props$children[1],
      ctx = props.ctx,
      restProps = _objectWithoutProperties(props, ["children", "ctx"]);

  var Wrapper = ctx.components.body.wrapper;

  if (!Array.isArray(rows)) {
    // reference https://github.com/react-component/table/blob/master/src/Body/index.tsx#L66
    // emptyNode if these rows are not array.
    return React.createElement(Wrapper, Object.assign({}, restProps), measureRow, rows);
  }

  var head = ctx._offset_head,
      tail = ctx._offset_tail;
  var children = rows;
  var len = children.length;
  var trs;

  switch (ctx.vt_state) {
    case e_VT_STATE.INIT:
      if (len >= 0) {
        console.assert(head === 0);
        console.assert(tail === 1);
        trs = children.slice(head, tail);
        ctx.re_computed = len;
        ctx.prev_row_count = len;
        ctx.row_count = len;
      }

      break;

    case e_VT_STATE.RUNNING:
      {
        if (tail > len) {
          var offset = tail - len;
          tail -= offset;
          head -= offset;
          if (head < 0) head = 0;
          if (tail < 0) tail = 0; // update the `head` and `tail`.

          _set_offset(ctx, ctx._offset_top
          /* NOTE: invalided param, just to fill for this param */
          , head, tail);
        }

        if (ctx.row_count !== len) {
          set_tr_cnt(ctx, len);
        }

        len = ctx.row_count;
        var prev_len = ctx.prev_row_count;
        /* shadow-rows rendering phase. */

        if (len < prev_len) {
          srs_shrink(ctx, len, prev_len);
        } else if (len > prev_len) {
          var _rows = ctx.row_height;

          if (len - _rows.length > 0) {
            srs_expand(ctx, len, _rows.length, ctx.possible_hight_per_tr);
          } else {
            // calculate the total height quickly.
            _rows.fill(ctx.possible_hight_per_tr, prev_len, len);

            ctx.computed_h += ctx.possible_hight_per_tr * (len - prev_len);
          }
        }

        trs = children.slice(head, tail);
        ctx.prev_row_count = ctx.row_count;
      }
      break;

    case e_VT_STATE.LOADED:
      console.assert(false);
      break;
  }

  return React.createElement(Wrapper, Object.assign({}, restProps), measureRow, trs);
}

function VTRow(props) {
  var inst = React.createRef();

  var context = props.context,
      rest = _objectWithoutProperties(props, ["context"]);

  var ctx = context;
  var children = props.children;
  var Row = ctx.components.body.row;

  if (!Array.isArray(children)) {
    // reference https://github.com/react-component/table/blob/master/src/Body/ExpandedRow.tsx#L55
    return React.createElement(Row, Object.assign({}, rest), children);
  }

  var index = children[0].props.index;
  var last_index = useRef(children[0].props.index);
  useEffect(function () {
    if (ctx.vt_state === e_VT_STATE.RUNNING) {
      // apply_h(ctx, index, inst.current.offsetHeight, "dom");
      repainting(ctx);
    } else {
      console.assert(ctx.vt_state === e_VT_STATE.INIT);
      ctx.vt_state = e_VT_STATE.LOADED;
      ctx.possible_hight_per_tr = inst.current.offsetHeight;
      srs_expand(ctx, ctx.row_count, 0, ctx.possible_hight_per_tr); // create a timeout task.

      _repainting(ctx, 16);
    }

    return function () {
      return repainting(ctx);
    };
  }, []);
  useEffect(function () {
    var h = Math.ceil(inst.current.getBoundingClientRect().height); // change from fb9f71f

    var curr_h = ctx.row_height[index];
    var last_h = ctx.row_height[last_index.current];
    ctx.computed_h -= curr_h;
    ctx.computed_h += last_h;
    ctx.computed_h += h - last_h;
    ctx.row_height[index] = h;
    repainting(ctx);
  });
  return React.createElement(Row, Object.assign({}, rest, {
    ref: inst
  }));
}

export function _set_components(ctx, components) {
  var table = components.table,
      body = components.body,
      header = components.header;
  ctx.components.body = _objectSpread(_objectSpread({}, ctx.components.body), body);

  if (body && body.cell) {
    ctx._vtcomponents.body.cell = body.cell;
  }

  if (header) {
    ctx.components.header = header;
    ctx._vtcomponents.header = header;
  }

  if (table) {
    ctx.components.table = table;
  }
}
export function init() {
  var ctx = useRef(React.createContext({})).current;
  var ctx_value = useContext(ctx);
  var VTableC = useCallback(function (props) {
    return React.createElement(VTable, Object.assign({}, props, {
      context: ctx
    }));
  }, []);
  var VWrapperC = useCallback(function (props) {
    return React.createElement(ctx.Consumer, null, function ()
    /* value */
    {
      return React.createElement(VWrapper, Object.assign({}, props, {
        ctx: ctx_value
      }));
    });
  }, []);
  var VRowC = useCallback(function (props) {
    return React.createElement(VTRow, Object.assign({}, props, {
      context: ctx_value
    }));
  }, []);
  useMemo(function () {
    // set the virtual layer.
    ctx_value._vtcomponents = {
      table: VTableC,
      body: {
        wrapper: VWrapperC,
        row: VRowC
      }
    }; // set the default implementation layer.

    ctx_value.components = {};

    _set_components(ctx_value, {
      table: TableImpl,
      body: {
        wrapper: WrapperImpl,
        row: RowImpl
      }
    }); // start -> `INIT`


    ctx_value.vt_state = e_VT_STATE.INIT;
  }, []);
  return ctx_value;
}
export function vt_components(ctx, vt_opts) {
  Object.assign(ctx, {
    initTop: 0,
    overscanRowCount: 5,
    debug: false
  }, vt_opts);

  if (vt_opts.debug) {
    console.debug("[".concat(vt_opts.id, "] calling VTComponents with"), vt_opts);
  }

  return ctx._vtcomponents;
}