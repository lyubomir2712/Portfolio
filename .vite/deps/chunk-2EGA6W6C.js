import {
  DefaultPropsProvider_default,
  GlobalStyles_default,
  defaultTheme_default,
  extendSxProp,
  identifier_default,
  require_prop_types,
  unstable_memoTheme,
  useDefaultProps
} from "./chunk-47WAFGZV.js";
import {
  require_jsx_runtime
} from "./chunk-YYCRCX5F.js";
import {
  __toESM,
  require_react
} from "./chunk-UCZTVSZO.js";

// node_modules/@mui/material/zero-styled/index.js
var React2 = __toESM(require_react());

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function GlobalStyles(props) {
  return (0, import_jsx_runtime.jsx)(GlobalStyles_default, {
    ...props,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}
true ? GlobalStyles.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.bool])
} : void 0;

// node_modules/@mui/material/zero-styled/index.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function internal_createExtendSxProp() {
  return extendSxProp;
}

// node_modules/@mui/material/utils/memoTheme.js
var memoTheme = unstable_memoTheme;
var memoTheme_default = memoTheme;

// node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function DefaultPropsProvider(props) {
  return (0, import_jsx_runtime3.jsx)(DefaultPropsProvider_default, {
    ...props
  });
}
true ? DefaultPropsProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types2.default.node,
  /**
   * @ignore
   */
  value: import_prop_types2.default.object.isRequired
} : void 0;
function useDefaultProps2(params) {
  return useDefaultProps(params);
}

export {
  internal_createExtendSxProp,
  memoTheme_default,
  useDefaultProps2 as useDefaultProps
};
//# sourceMappingURL=chunk-2EGA6W6C.js.map
