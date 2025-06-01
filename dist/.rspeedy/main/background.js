(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("background.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,__Function__,global,requestAnimationFrame,cancelAnimationFrame) {
lynx = lynx || {};
lynx.targetSdkVersion=lynx.targetSdkVersion||"3.2";
var Promise = lynx.Promise;
fetch = fetch || lynx.fetch;
requestAnimationFrame = requestAnimationFrame || lynx.requestAnimationFrame;
cancelAnimationFrame = cancelAnimationFrame || lynx.cancelAnimationFrame;
// lynx chunks entries
if (!lynx.__chunk_entries__) {
  // Initialize once
  lynx.__chunk_entries__ = {};
}
if (!lynx.__chunk_entries__["main"]) {
  lynx.__chunk_entries__["main"] = globDynamicComponentEntry;
} else {
  globDynamicComponentEntry = lynx.__chunk_entries__["main"];
}

"use strict";
var __webpack_modules__ = ({
"(react:background)/./src/assets/close.png": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "static/image/close.97118d6e.png";

}),
"(react:background)/./src/assets/lynx-logo.png": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "static/image/lynx-logo.620eb8d1.png";

}),
"(react:background)/./src/assets/react-logo.png": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "static/image/react-logo.75eb3837.png";

}),
"(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs": (function (module, __unused_webpack_exports, __webpack_require__) {
/**
 * @param {Function} fn
 * @param {number} time
 * @returns {function(): void}
 */ function debounce(fn, time) {
    let timeout = 0;
    return function debounced(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(()=>fn.apply(this, args), time);
    };
}
function updateStyle(cssId = 0) {
    const cssHotUpdateList = __webpack_require__.cssHotUpdateList;
    if (!cssHotUpdateList) throw new Error('cssHotUpdateList is not found');
    for (const [chunkName, cssHotUpdatePath] of cssHotUpdateList)lynx.requireModuleAsync(// the LynxGroup level cache here.
    // Temporarily using `Date.now` to avoid being cached.
    __webpack_require__.p + cssHotUpdatePath, (err, ret)=>{
        if (err) throw new Error(`Failed to load CSS update file: ${cssHotUpdatePath}`);
        if (ret.content) lynx.getCoreContext().dispatchEvent({
            type: 'lynx.hmr.css',
            data: {
                cssId,
                content: ret.content,
                deps: ret.deps,
                entry: lynx.__chunk_entries__[chunkName]
            }
        });
    });
}
/**
 * @param {string | number} moduleId
 * @param {unknown} options
 * @param {number=} cssId
 * @returns {() => void}
 */ module.exports = function update(moduleId, options, cssId) {
    // TODO: should not pass cssId === ''
    if (!cssId) cssId = 0;
    function update() {
        updateStyle(cssId);
    }
    return debounce(update, 50);
};


}),
"(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs": (function (module, __unused_webpack_exports, __webpack_require__) {
const { isComponent, flush } = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js");
// eslint-disable-next-line
const getExports = (m)=>m.exports || m.__proto__.exports;
function isSafeExport(key) {
    return key === '__esModule' || key === '__N_SSG' || key === '__N_SSP' || key === 'config';
}
function registerExports(moduleExports, moduleId) {
    globalThis['__PREFRESH__'].register(moduleExports, moduleId + ' %exports%');
    if (moduleExports == null || typeof moduleExports !== 'object') return;
    for(const key in moduleExports){
        if (isSafeExport(key)) continue;
        const exportValue = moduleExports[key];
        const typeID = moduleId + ' %exports% ' + key;
        globalThis['__PREFRESH__'].register(exportValue, typeID);
    }
}
const shouldBind = (m)=>{
    let isCitizen = false;
    const moduleExports = getExports(m);
    if (isComponent(moduleExports)) isCitizen = true;
    if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') isCitizen = isCitizen || false;
    else for(const key in moduleExports){
        if (key === '__esModule') continue;
        const exportValue = moduleExports[key];
        if (isComponent(exportValue)) isCitizen = isCitizen || true;
    }
    return isCitizen;
};
module.exports = Object.freeze({
    getExports,
    shouldBind,
    flush,
    registerExports
});


}),
"(react:background)/./node_modules/@lynx-js/react/components/lib/Page.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Page: () => (Page)
});
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// We use "@lynx-js/react" here
// because import * as ReactLynx from "@lynx-js/react/internal"; will be added when transform
// no matter if we use "@lynx-js/react" here


let pageMounted = false;
const Page = /* @__PURE__ */ function() {
    return (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(props, ref) {
        const { children, ...restProps } = props;
        _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_1__.__root.setAttribute('values', [
            {
                ref,
                ...restProps,
                __spread: true
            }
        ]);
        const isFirstPageElement = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
        (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
            if (pageMounted) {
                lynx.reportError(new Error(`Attempt to render more than one \`<page />\`, which is not supported.`));
                isFirstPageElement.current = false;
            } else pageMounted = true;
            return ()=>{
                _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_1__.__root.setAttribute('values', [
                    {
                        ...Object.fromEntries(Object.entries(restProps).map(([key, _val])=>{
                            return [
                                key,
                                undefined
                            ];
                        })),
                        __spread: true
                    }
                ]);
                /* v8 ignore next */ if (isFirstPageElement.current) pageMounted = false;
            };
        }, []);
        return children;
    });
}();
 //# sourceMappingURL=Page.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/components/lib/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Page: () => (/* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_0__.Page)
});
/* ESM import */var _Page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/components/lib/Page.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
 //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  flush: () => (flush),
  isComponent: () => (isComponent)
});
/* ESM import */var _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js");
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/catchError.js

// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/constants.js
var VNODE_COMPONENT = "__c";
var NAMESPACE = "__PREFRESH__";
var COMPONENT_HOOKS = "__H";
var HOOKS_LIST = "__";
var EFFECTS_LIST = "__h";
var RERENDER_COUNT = "__r";
var CATCH_ERROR_OPTION = "__e";
var COMPONENT_DIRTY = "__d";
var HOOK_VALUE = "__";
var HOOK_ARGS = "__H";
var HOOK_CLEANUP = "__c";
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/catchError.js
var oldCatchError = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options[CATCH_ERROR_OPTION];
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options[CATCH_ERROR_OPTION] = (error, vnode, oldVNode)=>{
    if (vnode[VNODE_COMPONENT] && vnode[VNODE_COMPONENT][COMPONENT_DIRTY]) vnode[VNODE_COMPONENT][COMPONENT_DIRTY] = false;
    if (oldCatchError) oldCatchError(error, vnode, oldVNode);
};
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/debounceRendering.js

var defer = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = (process)=>{
    defer(()=>{
        try {
            process();
        } catch (e) {
            process[RERENDER_COUNT] = 0;
            throw e;
        }
    });
};
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/vnode.js

// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/vnodesForComponent.js
var vnodesForComponent = /* @__PURE__ */ new WeakMap();
var mappedVNodes = /* @__PURE__ */ new WeakMap();
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/vnode.js
var getMappedVnode = (type)=>{
    if (mappedVNodes.has(type)) return getMappedVnode(mappedVNodes.get(type));
    return type;
};
var BUILT_IN_COMPONENTS = [
    "Fragment",
    "Suspense",
    "SuspenseList"
];
var isBuiltIn = (type)=>{
    return BUILT_IN_COMPONENTS.includes(type.name);
};
var oldVnode = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.vnode = (vnode)=>{
    if (vnode && typeof vnode.type === "function" && !isBuiltIn(vnode.type)) {
        const vnodes = vnodesForComponent.get(vnode.type);
        if (!vnodes) vnodesForComponent.set(vnode.type, [
            vnode
        ]);
        else vnodes.push(vnode);
        const foundType = getMappedVnode(vnode.type);
        if (foundType !== vnode.type) {
            const vnodes2 = vnodesForComponent.get(foundType);
            if (!vnodes2) vnodesForComponent.set(foundType, [
                vnode
            ]);
            else vnodes2.push(vnode);
        }
        vnode.type = foundType;
        if (vnode[VNODE_COMPONENT] && "prototype" in vnode.type && vnode.type.prototype.render) vnode[VNODE_COMPONENT].constructor = vnode.type;
    }
    if (oldVnode) oldVnode(vnode);
};
var oldDiffed = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.diffed;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.diffed = (vnode)=>{
    if (vnode && typeof vnode.type === "function") {
        const vnodes = vnodesForComponent.get(vnode.type);
        if (vnodes) {
            const matchingDom = vnodes.filter((p)=>p.__c === vnode.__c);
            if (matchingDom.length > 1) {
                const i = vnodes.findIndex((p)=>p === matchingDom[0]);
                vnodes.splice(i, 1);
            }
        }
    }
    if (oldDiffed) oldDiffed(vnode);
};
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/unmount.js

var oldUnmount = _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
_lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.options.unmount = (vnode)=>{
    const type = (vnode || {}).type;
    if (typeof type === "function" && vnodesForComponent.has(type)) {
        const vnodes = vnodesForComponent.get(type);
        if (vnodes) {
            const index = vnodes.indexOf(vnode);
            if (index !== -1) vnodes.splice(index, 1);
        }
    }
    if (oldUnmount) oldUnmount(vnode);
};
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/index.js

// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/runtime/signaturesForType.js
var signaturesForType = /* @__PURE__ */ new WeakMap();
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/computeKey.js
var computeKey = (signature)=>{
    let fullKey = signature.key;
    let hooks;
    try {
        hooks = signature.getCustomHooks();
    } catch (err) {
        signature.forceReset = true;
        return fullKey;
    }
    for(let i = 0; i < hooks.length; i++){
        const hook = hooks[i];
        if (typeof hook !== "function") {
            signature.forceReset = true;
            return fullKey;
        }
        const nestedHookSignature = signaturesForType.get(hook);
        if (nestedHookSignature === void 0) continue;
        const nestedHookKey = computeKey(nestedHookSignature);
        if (nestedHookSignature.forceReset) signature.forceReset = true;
        fullKey += "\n---\n" + nestedHookKey;
    }
    return fullKey;
};
// ../../../node_modules/.pnpm/@prefresh+core@1.5.3_preact@10.23.2/node_modules/@prefresh/core/src/index.js
var typesById = /* @__PURE__ */ new Map();
var pendingUpdates = [];
function sign(type, key, forceReset, getCustomHooks, status) {
    if (type) {
        let signature = signaturesForType.get(type);
        if (status === "begin") {
            signaturesForType.set(type, {
                type,
                key,
                forceReset,
                getCustomHooks: getCustomHooks || (()=>[])
            });
            return "needsHooks";
        } else if (status === "needsHooks") signature.fullKey = computeKey(signature);
    }
}
function replaceComponent(OldType, NewType, resetHookState) {
    const vnodes = vnodesForComponent.get(OldType);
    if (!vnodes) return;
    vnodesForComponent.delete(OldType);
    vnodesForComponent.set(NewType, vnodes);
    mappedVNodes.set(OldType, NewType);
    pendingUpdates = pendingUpdates.filter((p)=>p[0] !== OldType);
    vnodes.forEach((vnode)=>{
        if (!vnode.__c || !vnode.__c.__P) return;
        vnode.type = NewType;
        if (vnode[VNODE_COMPONENT]) {
            vnode[VNODE_COMPONENT].constructor = vnode.type;
            try {
                if (vnode[VNODE_COMPONENT] instanceof OldType) {
                    const oldInst = vnode[VNODE_COMPONENT];
                    const newInst = new NewType(vnode[VNODE_COMPONENT].props, vnode[VNODE_COMPONENT].context);
                    vnode[VNODE_COMPONENT] = newInst;
                    for(let i in oldInst){
                        const type = typeof oldInst[i];
                        if (!(i in newInst)) newInst[i] = oldInst[i];
                        else if (type !== "function" && typeof newInst[i] === type) {
                            if (type === "object" && newInst[i] != null && newInst[i].constructor === oldInst[i].constructor) Object.assign(newInst[i], oldInst[i]);
                            else newInst[i] = oldInst[i];
                        }
                    }
                }
            } catch (e) {
                vnode[VNODE_COMPONENT].constructor = NewType;
            }
            if (resetHookState) {
                if (vnode[VNODE_COMPONENT][COMPONENT_HOOKS] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].length) vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].forEach((possibleEffect)=>{
                    if (possibleEffect[HOOK_CLEANUP] && typeof possibleEffect[HOOK_CLEANUP] === "function") {
                        possibleEffect[HOOK_CLEANUP]();
                        possibleEffect[HOOK_CLEANUP] = void 0;
                    } else if (possibleEffect[HOOK_ARGS] && possibleEffect[HOOK_VALUE] && Object.keys(possibleEffect).length === 3) {
                        const cleanupKey = Object.keys(possibleEffect).find((key)=>key !== HOOK_ARGS && key !== HOOK_VALUE);
                        if (cleanupKey && typeof possibleEffect[cleanupKey] == "function") {
                            possibleEffect[cleanupKey]();
                            possibleEffect[cleanupKey] = void 0;
                        }
                    }
                });
                vnode[VNODE_COMPONENT][COMPONENT_HOOKS] = {
                    [HOOKS_LIST]: [],
                    [EFFECTS_LIST]: []
                };
            } else if (vnode[VNODE_COMPONENT][COMPONENT_HOOKS] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST] && vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].length) {
                vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].forEach((possibleEffect)=>{
                    if (possibleEffect[HOOK_CLEANUP] && typeof possibleEffect[HOOK_CLEANUP] === "function") {
                        possibleEffect[HOOK_CLEANUP]();
                        possibleEffect[HOOK_CLEANUP] = void 0;
                    } else if (possibleEffect[HOOK_ARGS] && possibleEffect[HOOK_VALUE] && Object.keys(possibleEffect).length === 3) {
                        const cleanupKey = Object.keys(possibleEffect).find((key)=>key !== HOOK_ARGS && key !== HOOK_VALUE);
                        if (cleanupKey && typeof possibleEffect[cleanupKey] == "function") possibleEffect[cleanupKey]();
                        possibleEffect[cleanupKey] = void 0;
                    }
                });
                vnode[VNODE_COMPONENT][COMPONENT_HOOKS][HOOKS_LIST].forEach((hook)=>{
                    if (hook.__H && Array.isArray(hook.__H)) hook.__H = void 0;
                });
            }
            _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate.call(vnode[VNODE_COMPONENT]);
        }
    });
}
globalThis[NAMESPACE] = {
    getSignature: (type)=>signaturesForType.get(type),
    register: (type, id)=>{
        if (typeof type !== "function") return;
        if (typesById.has(id)) {
            const existing = typesById.get(id);
            if (existing !== type) {
                pendingUpdates.push([
                    existing,
                    type
                ]);
                typesById.set(id, type);
            }
        } else typesById.set(id, type);
        if (!signaturesForType.has(type)) signaturesForType.set(type, {
            getCustomHooks: ()=>[],
            type
        });
    },
    getPendingUpdates: ()=>pendingUpdates,
    flush: ()=>{
        pendingUpdates = [];
    },
    replaceComponent,
    sign,
    computeKey
};
// ../../../node_modules/.pnpm/@prefresh+utils@1.2.0/node_modules/@prefresh/utils/src/index.js
var compareSignatures = (prev, next)=>{
    const prevSignature = globalThis.__PREFRESH__.getSignature(prev) || {};
    const nextSignature = globalThis.__PREFRESH__.getSignature(next) || {};
    if (prevSignature.key !== nextSignature.key || globalThis.__PREFRESH__.computeKey(prevSignature) !== globalThis.__PREFRESH__.computeKey(nextSignature) || nextSignature.forceReset) globalThis.__PREFRESH__.replaceComponent(prev, next, true);
    else globalThis.__PREFRESH__.replaceComponent(prev, next, false);
};
var flush = ()=>{
    const pending = [
        ...globalThis.__PREFRESH__.getPendingUpdates()
    ];
    globalThis.__PREFRESH__.flush();
    if (pending.length > 0) pending.forEach(([prev, next])=>{
        compareSignatures(prev, next);
    });
};
var isComponent = (exportValue)=>{
    if (typeof exportValue === "function") {
        if (exportValue.prototype != null && exportValue.prototype.isReactComponent) return true;
        const name = exportValue.name || exportValue.displayName;
        return typeof name === "string" && name[0] && name[0] == name[0].toUpperCase();
    }
    return false;
};



}),
"(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment),
  jsx: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx),
  jsxDEV: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV),
  jsxs: () => (/* reexport safe */ preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)
});
/* ESM import */var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackgroundSnapshotInstance: () => (BackgroundSnapshotInstance),
  hydrate: () => (hydrate)
});
/* ESM import */var _gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGestureBagkround.js");
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _worklet_ctx_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.










class BackgroundSnapshotInstance {
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    contains(child) {
        return child.parentNode === this;
    }
    // TODO: write tests for this
    // This will be called in `lazy`/`Suspense`.
    // We currently ignore this since we did not find a way to test.
    /* v8 ignore start */ appendChild(child) {
        return this.insertBefore(child);
    }
    /* v8 ignore stop */ insertBefore(node, beforeNode) {
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.InsertBefore, this.__id, node.__id, beforeNode === null || beforeNode === void 0 ? void 0 : beforeNode.__id);
        // If the node already has a parent, remove it from its current parent
        const p = node.__parent;
        if (p) {
            if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
            else p.__firstChild = node.__nextSibling;
            if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
            else p.__lastChild = node.__previousSibling;
        }
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    removeChild(node) {
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.RemoveChild, this.__id, node.__id);
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
        (0,_snapshot_js__WEBPACK_IMPORTED_MODULE_5__.traverseSnapshotInstance)(node, (v)=>{
            v.__parent = null;
            _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__.globalBackgroundSnapshotInstancesToRemove.push(v.__id);
        });
    }
    get childNodes() {
        const nodes = [];
        let node = this.__firstChild;
        while(node){
            nodes.push(node);
            if (node === this.__lastChild) break;
            node = node.__nextSibling;
        }
        return nodes;
    }
    setAttribute(key, value) {
        if (false) {}
        if (key === 'values') {
            if (_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch) {
                const oldValues = this.__values;
                if (oldValues) for(let index = 0; index < value.length; index++){
                    const { needUpdate, valueToCommit } = this.setAttributeImpl(value[index], oldValues[index], index);
                    if (needUpdate) _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.SetAttribute, this.__id, index, valueToCommit);
                }
                else {
                    const patch = [];
                    const length = value.length;
                    for(let index = 0; index < length; ++index){
                        const { valueToCommit } = this.setAttributeImpl(value[index], null, index);
                        patch[index] = valueToCommit;
                    }
                    _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.SetAttributes, this.__id, patch);
                }
            }
            this.__values = value;
            if (false) {}
            return;
        }
        // old path (`<__snapshot_xxxx_xxxx __0={} __1={} />` or `this.setAttribute(0, xxx)`)
        // is reserved as slow path
        const index = typeof key === 'string' ? Number(key.slice(2)) : key;
        var _this___values;
        ((_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [])[index] = value;
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.SetAttribute, this.__id, index, value);
        if (false) {}
    }
    setAttributeImpl(newValue, oldValue, index) {
        if (!newValue) {
            if (oldValue && oldValue.__ref) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.markRefToRemove)(`${this.__id}:${index}:`, oldValue);
            return {
                needUpdate: oldValue !== newValue,
                valueToCommit: newValue
            };
        }
        const newType = typeof newValue;
        if (newType === 'object') {
            if (newValue.__spread) {
                const oldSpread = oldValue ? oldValue.__spread : oldValue;
                const newSpread = (0,_snapshot_spread_js__WEBPACK_IMPORTED_MODULE_7__.transformSpread)(this, index, newValue);
                const needUpdate = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.isDirectOrDeepEqual)(oldSpread, newSpread);
                // use __spread to cache the transform result for next diff
                newValue.__spread = newSpread;
                if (needUpdate) {
                    if (oldSpread && oldSpread.ref) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.markRefToRemove)(`${this.__id}:${index}:ref`, oldValue.ref);
                    for(let key in newSpread){
                        const newSpreadValue = newSpread[key];
                        if (!newSpreadValue) continue;
                        if (newSpreadValue._wkltId) newSpread[key] = (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_9__.onPostWorkletCtx)(newSpreadValue);
                        else if (newSpreadValue.__isGesture) (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_0__.processGestureBackground)(newSpreadValue);
                        else if (key == '__lynx_timing_flag' && (oldSpread === null || oldSpread === void 0 ? void 0 : oldSpread[key]) != newSpreadValue) {
                            if (_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.globalPipelineOptions) _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.globalPipelineOptions.needTimestamps = true;
                        }
                    }
                }
                return {
                    needUpdate,
                    valueToCommit: newSpread
                };
            }
            if (newValue.__ref) {
                // force update to update ref value
                // TODO: ref: optimize this. The ref update maybe can be done on the background thread to reduce updating.
                // The old ref must have a place to be stored because it needs to be cleared when the main thread returns.
                (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.markRefToRemove)(`${this.__id}:${index}:`, oldValue);
                // update ref. On the main thread, the ref id will be replaced with value's sign when updating.
                return {
                    needUpdate: true,
                    valueToCommit: newValue.__ref
                };
            }
            if (newValue._wkltId) return {
                needUpdate: true,
                valueToCommit: (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_9__.onPostWorkletCtx)(newValue)
            };
            if (newValue.__isGesture) {
                (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_0__.processGestureBackground)(newValue);
                return {
                    needUpdate: true,
                    valueToCommit: newValue
                };
            }
            if (newValue.__ltf) {
                // __lynx_timing_flag
                if (_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.globalPipelineOptions && (oldValue === null || oldValue === void 0 ? void 0 : oldValue.__ltf) != newValue.__ltf) {
                    _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.globalPipelineOptions.needTimestamps = true;
                    return {
                        needUpdate: true,
                        valueToCommit: newValue
                    };
                }
                return {
                    needUpdate: false,
                    valueToCommit: newValue
                };
            }
            return {
                needUpdate: !(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.isDirectOrDeepEqual)(oldValue, newValue),
                valueToCommit: newValue
            };
        }
        if (newType === 'function') {
            if (newValue.__ref) {
                (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.markRefToRemove)(`${this.__id}:${index}:`, oldValue);
                return {
                    needUpdate: true,
                    valueToCommit: newValue.__ref
                };
            }
            /* event */ return {
                needUpdate: !oldValue,
                valueToCommit: 1
            };
        }
        return {
            needUpdate: oldValue !== newValue,
            valueToCommit: newValue
        };
    }
    constructor(type){
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        let id;
        id = this.__id = _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.backgroundSnapshotInstanceManager.nextId += 1;
        _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.backgroundSnapshotInstanceManager.values.set(id, this);
        _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === null || _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch === void 0 ? void 0 : _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.CreateElement, type, id);
    }
}
function hydrate(before, after) {
    (0,_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.initGlobalSnapshotPatch)();
    const helper2 = (afters, parentId)=>{
        for (const child of afters){
            const id = child.__id;
            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.CreateElement, child.type, id);
            const values = child.__values;
            if (values) {
                child.__values = undefined;
                child.setAttribute('values', values);
            }
            helper2(child.childNodes, id);
            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.InsertBefore, parentId, id, undefined);
        }
    };
    const helper = (before, after)=>{
        var _after___values;
        _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.backgroundSnapshotInstanceManager.updateId(after.__id, before.id);
        (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
            const old = before.values[index];
            if (value) {
                if (value.__spread) {
                    // `value.__spread` my contain event ids using snapshot ids before hydration. Remove it.
                    delete value.__spread;
                    value = (0,_snapshot_spread_js__WEBPACK_IMPORTED_MODULE_7__.transformSpread)(after, index, value);
                    for(let key in value){
                        if (value[key] && value[key]._wkltId) (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_9__.onPostWorkletCtx)(value[key]);
                        else if (value[key] && value[key].__isGesture) (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_0__.processGestureBackground)(value[key]);
                    }
                    after.__values[index].__spread = value;
                } else if (value.__ref) {
                    if (old) value = old;
                    else value = value.__ref;
                } else if (typeof value === 'function') value = `${after.__id}:${index}:`;
            }
            if (value && value._wkltId) (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_9__.onPostWorkletCtx)(value);
            else if (value && value.__isGesture) (0,_gesture_processGestureBagkround_js__WEBPACK_IMPORTED_MODULE_0__.processGestureBackground)(value);
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.isDirectOrDeepEqual)(value, old)) _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.SetAttribute, after.__id, index, value);
        });
        const { slot } = _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.snapshotManager.values.get(after.type);
        const beforeChildNodes = before.children || [];
        const afterChildNodes = after.childNodes;
        if (!slot) return;
        slot.forEach(([type], index)=>{
            switch(type){
                case _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.DynamicPartType.Slot:
                case _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.DynamicPartType.MultiChildren:
                    {
                        // TODO: the following null assertions are not 100% safe
                        const v1 = beforeChildNodes[index];
                        const v2 = afterChildNodes[index];
                        helper(v1, v2);
                        break;
                    }
                case _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.DynamicPartType.Children:
                case _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.DynamicPartType.ListChildren:
                    {
                        const diffResult = (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_1__.diffArrayLepus)(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                            helper(a, b);
                        });
                        (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_1__.diffArrayAction)(beforeChildNodes, diffResult, (node, target)=>{
                            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.CreateElement, node.type, node.__id);
                            helper2(node.childNodes, node.__id);
                            const values = node.__values;
                            if (values) {
                                node.__values = undefined;
                                node.setAttribute('values', values);
                            }
                            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.InsertBefore, before.id, node.__id, target === null || target === void 0 ? void 0 : target.id);
                            return undefined;
                        }, (node)=>{
                            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.RemoveChild, before.id, node.id);
                        }, (node, target)=>{
                            // changedList.push([SnapshotOperation.RemoveChild, before.id, node.id]);
                            _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotOperation.InsertBefore, before.id, node.id, target === null || target === void 0 ? void 0 : target.id);
                        });
                        break;
                    }
            }
        });
    };
    helper(before, after);
    return (0,_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_3__.takeGlobalSnapshotPatch)();
} //# sourceMappingURL=backgroundSnapshot.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/componentIs.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// for better reuse if runtime is changed
function factory({ createElement, useMemo, Suspense, lazy }, loadLazyBundle) {
    /**
     * @internal a polyfill for <component is=? />
     */ const __ComponentIsPolyfill = ({ is, ...props })=>{
        if (typeof is !== 'string') {
            lynx.reportError(new Error('You must provide a string to props `is` when using syntax `<component is=? />`.'));
            return null;
        }
        // @ts-ignore
        const D = useMemo(()=>lazy(()=>loadLazyBundle(is)), [
            is
        ]);
        return createElement(Suspense, {
            key: is
        }, createElement(D, props));
    };
    return __ComponentIsPolyfill;
} //# sourceMappingURL=componentIs.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory),
  withInitDataInState: () => (withInitDataInState)
});
// for better reuse if runtime is changed
function factory({ createContext, useState, createElement, useLynxGlobalEventListener: useListener }, prop, eventName) {
    const Context = createContext({});
    const Provider = ({ children })=>{
        const [__, set] = useState(lynx[prop]);
        const handleChange = ()=>{
            set(lynx[prop]);
        };
        useChanged(handleChange);
        return createElement(Context.Provider, {
            value: __
        }, children);
    };
    const Consumer = Context.Consumer;
    const use = ()=>{
        const [__, set] = useState(lynx[prop]);
        useChanged(()=>{
            set(lynx[prop]);
        });
        return __;
    };
    const useChanged = (callback)=>{
        // @ts-ignore
        useListener(eventName, callback);
    };
    return {
        Context: ()=>Context,
        Provider: ()=>Provider,
        Consumer: ()=>Consumer,
        use: ()=>use,
        useChanged: ()=>useChanged
    };
}
/**
 * Higher-Order Component (HOC) that injects `initData` into the state of the given class component.
 *
 * This HOC checks if the provided component is a class component. If it is, it wraps the component
 * and injects the `initData` into its state. It also adds a listener
 * to update the state when data changes, and removes the listener when the component unmounts.
 *
 * @typeParam P - The type of the props of the wrapped component.
 * @typeParam S - The type of the state of the wrapped component.
 *
 * @param App - The class component to be wrapped by the HOC.
 *
 * @returns The original component if it is not a class component, otherwise a new class component
 *          with `initData` injection and state update functionality.
 *
 * @example
 * ```typescript
 * class App extends React.Component<MyProps, MyState> {
 *   // component implementation
 * }
 *
 * export default withInitDataInState(App);
 * ```
 * @public
 */ function withInitDataInState(App) {
    const isClassComponent = 'prototype' in App && App.prototype.render;
    if (!isClassComponent) return App;
    class C extends App {
        componentWillUnmount() {
            var _super_componentWillUnmount;
            (_super_componentWillUnmount = super.componentWillUnmount) === null || _super_componentWillUnmount === void 0 ? void 0 : _super_componentWillUnmount.call(this);
            lynx.getJSModule('GlobalEventEmitter').removeListener('onDataChanged', this.h);
        }
        constructor(props){
            super(props);
            this.state = {
                ...this.state,
                ...lynx.__initData
            };
            lynx.getJSModule('GlobalEventEmitter').addListener('onDataChanged', this.h = ()=>{
                this.setState(lynx.__initData);
            });
        }
    }
    return C;
} //# sourceMappingURL=initData.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/lynxComponent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ComponentFromReactRuntime: () => (ComponentFromReactRuntime),
  wrapWithLynxComponent: () => (wrapWithLynxComponent)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function wrapWithLynxComponent(jsxSnapshot, jsxComponent) {
    const C = jsxComponent.type;
    if (typeof C === 'function') {
        if (C === ComponentFromReactRuntime || C.prototype instanceof ComponentFromReactRuntime) {
            if (jsxSnapshot.length === 1) return jsxSnapshot(jsxComponent);
            else {
                // spread
                if (!jsxComponent.props.removeComponentElement) return jsxSnapshot(jsxComponent, takeComponentAttributes(jsxComponent));
            }
        }
    }
    return jsxComponent;
}
// @ts-expect-error
class ComponentFromReactRuntime extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
}
const __COMPONENT_ATTRIBUTES__ = /* @__PURE__ */ new Set([
    'name',
    'style',
    'class',
    'flatten',
    'clip-radius',
    'overlap',
    'user-interaction-enabled',
    'native-interaction-enabled',
    'block-native-event',
    'enableLayoutOnly',
    'cssAlignWithLegacyW3C',
    'intersection-observers',
    'trigger-global-event',
    'exposure-scene',
    'exposure-id',
    'exposure-screen-margin-top',
    'exposure-screen-margin-bottom',
    'exposure-screen-margin-left',
    'exposure-screen-margin-right',
    'focusable',
    'focus-index',
    'accessibility-label',
    'accessibility-element',
    'accessibility-traits',
    'enable-new-animator'
]);
function takeComponentAttributes(jsxComponent) {
    const attributes = {};
    Object.keys(jsxComponent.props).forEach((k)=>{
        // let re1 = Regex::new(r"^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$").unwrap();
        // let re2 = Regex::new(r"^data-([A-Za-z]+)$").unwrap();
        if (__COMPONENT_ATTRIBUTES__.has(k) || k === 'id' || k === 'className' || k === 'dataSet' || k === 'data-set' || k === 'removeComponentElement' || k.match(/^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$/) || k.match(/^data-([A-Za-z]+)$/)) {
            attributes[k] = jsxComponent.props[k];
            delete jsxComponent.props[k];
        }
    });
    return attributes;
} //# sourceMappingURL=lynxComponent.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/debug/profile.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initProfileHook: () => (initProfileHook)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function initProfileHook() {
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = function(vnode) {
        // This __PROFILE__ is used for DCE testing
        if (false) {}
        oldDiff === null || oldDiff === void 0 ? void 0 : oldDiff(vnode);
    };
    const oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = function(vnode) {
        // This __PROFILE__ is used for DCE testing
        if (false) {} // for options[DIFF]
        oldDiffed === null || oldDiffed === void 0 ? void 0 : oldDiffed(vnode);
    };
    // Profile the user-provided `render`.
    const oldRender = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER] = function(vnode) {
        const displayName = getDisplayName(vnode.type);
        const originalRender = vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT].render;
        vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT].render = function render(props, state, context) {
            // This __PROFILE__ is used for DCE testing
            if (false) {}
            try {
                return originalRender.call(this, props, state, context);
            } finally{
                // This __PROFILE__ is used for DCE testing
                if (false) {}
                vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT].render = originalRender;
            }
        };
        oldRender === null || oldRender === void 0 ? void 0 : oldRender(vnode);
    };
}
function getDisplayName(type) {
    var _type_displayName;
    return (_type_displayName = type.displayName) !== null && _type_displayName !== void 0 ? _type_displayName : type.name;
} //# sourceMappingURL=profile.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/document.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  document: () => (document),
  setupBackgroundDocument: () => (setupBackgroundDocument),
  setupDocument: () => (setupDocument)
});
/* ESM import */var _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const document = {};
/**
 * Sets up the document interface for the background thread.
 * All DOM operations are intercepted to create {@link BackgroundSnapshotInstance}.
 */ function setupBackgroundDocument() {
    document.createElement = function(type) {
        return new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance(type);
    };
    document.createElementNS = function(_ns, type) {
        return new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance(type);
    };
    document.createTextNode = function(text) {
        const i = new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance(null);
        i.setAttribute(0, text);
        Object.defineProperty(i, 'data', {
            set (v) {
                i.setAttribute(0, v);
            }
        });
        return i;
    };
}
/**
 * Sets up the document interface for the main thread.
 * All DOM operations are intercepted to create {@link SnapshotInstance}.
 */ function setupDocument() {
    document.createElement = function(type) {
        return new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(type);
    };
    document.createElementNS = function(_ns, type) {
        return new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(type);
    };
    document.createTextNode = function(text) {
        const i = new _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotInstance(null);
        i.setAttribute(0, text);
        Object.defineProperty(i, 'data', {
            set (v) {
                i.setAttribute(0, v);
            }
        });
        return i;
    };
}
// if (__JS__) {
//   setupBackgroundDocument();
// } else if (__LEPUS__) {
//   setupDocument();
// }
 //# sourceMappingURL=document.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGesture.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processGesture: () => (processGesture)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function isSerializedGesture(gesture) {
    var _gesture___isSerialized;
    return (_gesture___isSerialized = gesture.__isSerialized) !== null && _gesture___isSerialized !== void 0 ? _gesture___isSerialized : false;
}
function getGestureInfo(gesture, oldGesture, isFirstScreen, dom) {
    var _baseGesture_waitFor, _baseGesture_simultaneousWith, _baseGesture_continueWith;
    const config = {
        callbacks: []
    };
    const baseGesture = gesture;
    if (baseGesture.config) config.config = baseGesture.config;
    for (const key of Object.keys(baseGesture.callbacks)){
        const callback = baseGesture.callbacks[key];
        const oldCallback = oldGesture === null || oldGesture === void 0 ? void 0 : oldGesture.callbacks[key];
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onWorkletCtxUpdate)(callback, oldCallback, isFirstScreen, dom);
        config.callbacks.push({
            name: key,
            callback: callback
        });
    }
    var _baseGesture_waitFor_map, _baseGesture_simultaneousWith_map, _baseGesture_continueWith_map;
    const relationMap = {
        waitFor: (_baseGesture_waitFor_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_waitFor = baseGesture.waitFor) === null || _baseGesture_waitFor === void 0 ? void 0 : _baseGesture_waitFor.map((subGesture)=>subGesture.id)) !== null && _baseGesture_waitFor_map !== void 0 ? _baseGesture_waitFor_map : [],
        simultaneous: (_baseGesture_simultaneousWith_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_simultaneousWith = baseGesture.simultaneousWith) === null || _baseGesture_simultaneousWith === void 0 ? void 0 : _baseGesture_simultaneousWith.map((subGesture)=>subGesture.id)) !== null && _baseGesture_simultaneousWith_map !== void 0 ? _baseGesture_simultaneousWith_map : [],
        continueWith: (_baseGesture_continueWith_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_continueWith = baseGesture.continueWith) === null || _baseGesture_continueWith === void 0 ? void 0 : _baseGesture_continueWith.map((subGesture)=>subGesture.id)) !== null && _baseGesture_continueWith_map !== void 0 ? _baseGesture_continueWith_map : []
    };
    return {
        config,
        relationMap
    };
}
function processGesture(dom, gesture, oldGesture, isFirstScreen, gestureOptions) {
    if (!gesture || !isSerializedGesture(gesture)) return;
    if (!(gestureOptions && gestureOptions.domSet)) {
        __SetAttribute(dom, 'has-react-gesture', true);
        __SetAttribute(dom, 'flatten', false);
    }
    if (gesture.type === _types_js__WEBPACK_IMPORTED_MODULE_1__.GestureTypeInner.COMPOSED) for (const [index, subGesture] of gesture.gestures.entries())processGesture(dom, subGesture, oldGesture === null || oldGesture === void 0 ? void 0 : oldGesture.gestures[index], isFirstScreen, {
        domSet: true
    });
    else {
        const baseGesture = gesture;
        const oldBaseGesture = oldGesture;
        const { config, relationMap } = getGestureInfo(baseGesture, oldBaseGesture, isFirstScreen, dom);
        __SetGestureDetector(dom, baseGesture.id, baseGesture.type, config, relationMap);
    }
} //# sourceMappingURL=processGesture.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGestureBagkround.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processGestureBackground: () => (processGestureBackground)
});
/* ESM import */var _worklet_ctx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js");
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js");


function processGestureBackground(gesture) {
    if (gesture.type === _types_js__WEBPACK_IMPORTED_MODULE_1__.GestureTypeInner.COMPOSED) for (const subGesture of gesture.gestures)processGestureBackground(subGesture);
    else {
        const baseGesture = gesture;
        for (const [name, value] of Object.entries(baseGesture.callbacks))baseGesture.callbacks[name] = (0,_worklet_ctx_js__WEBPACK_IMPORTED_MODULE_0__.onPostWorkletCtx)(value);
    }
} //# sourceMappingURL=processGestureBagkround.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GestureTypeInner: () => (GestureTypeInner)
});
var GestureTypeInner;
(function(GestureTypeInner) {
    GestureTypeInner[GestureTypeInner["COMPOSED"] = -1] = "COMPOSED";
    GestureTypeInner[GestureTypeInner["PAN"] = 0] = "PAN";
    GestureTypeInner[GestureTypeInner["FLING"] = 1] = "FLING";
    GestureTypeInner[GestureTypeInner["DEFAULT"] = 2] = "DEFAULT";
    GestureTypeInner[GestureTypeInner["TAP"] = 3] = "TAP";
    GestureTypeInner[GestureTypeInner["LONGPRESS"] = 4] = "LONGPRESS";
    GestureTypeInner[GestureTypeInner["ROTATION"] = 5] = "ROTATION";
    GestureTypeInner[GestureTypeInner["PINCH"] = 6] = "PINCH";
    GestureTypeInner[GestureTypeInner["NATIVE"] = 7] = "NATIVE";
})(GestureTypeInner || (GestureTypeInner = {})); //# sourceMappingURL=types.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
  useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
  useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
  useEffect: () => (useEffect),
  useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
  useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useId),
  useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
  useLayoutEffect: () => (useLayoutEffect),
  useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
  useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
  useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
  useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)
});
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * `useLayoutEffect` is now an alias of `useEffect`. Use `useEffect` instead.
 *
 * Accepts a function that contains imperative, possibly effectful code. The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 *
 * @deprecated `useLayoutEffect` in the background thread cannot offer the precise timing for reading layout information and synchronously re-render, which is different from React.
 */ function useLayoutEffect(effect, deps) {
    return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(effect, deps);
}
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 */ function useEffect(effect, deps) {
    return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(effect, deps);
}
 //# sourceMappingURL=react.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/useLynxGlobalEventListener.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useLynxGlobalEventListener: () => (useLynxGlobalEventListener)
});
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * `useLynxGlobalEventListener` help you `addListener` as early as possible.
 *
 * @example
 *
 * Use this hooks to listen to event 'exposure' and event 'disexposure'
 *
 * ```jsx
 * function App() {
 *   useLynxGlobalEventListener('exposure', (e) => {
 *     console.log("exposure", e)
 *   })
 *   useLynxGlobalEventListener('disexposure', (e) => {
 *     console.log("disexposure", e)
 *   })
 *   return (
 *     <view
 *       style='width: 100px; height: 100px; background-color: red;'
 *       exposure-id='a'
 *     />
 *   )
 * }
 * ```
 *
 * @param eventName - Event name to listen
 * @param listener - Event handler
 * @public
 */ function useLynxGlobalEventListener(eventName, listener) {
    'background only';
    const previousArgsRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (previousArgsRef.current) {
            const [eventName, listener] = previousArgsRef.current;
            lynx.getJSModule('GlobalEventEmitter').removeListener(eventName, listener);
        }
        lynx.getJSModule('GlobalEventEmitter').addListener(eventName, listener);
        previousArgsRef.current = [
            eventName,
            listener
        ];
    }, [
        eventName,
        listener
    ]);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            if (previousArgsRef.current) {
                const [eventName, listener] = previousArgsRef.current;
                lynx.getJSModule('GlobalEventEmitter').removeListener(eventName, listener);
            }
        };
    }, []);
} //# sourceMappingURL=useLynxGlobalEventListener.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  diffArrayAction: () => (diffArrayAction),
  diffArrayLepus: () => (diffArrayLepus),
  hydrate: () => (hydrate),
  isEmptyDiffResult: () => (isEmptyDiffResult)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




function isEmptyDiffResult(diffResult) {
    const hasChanged = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isEmptyObject)(diffResult.i) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isEmptyObject)(diffResult.m) || diffResult.r.length > 0;
    return !hasChanged;
}
function diffArrayLepus(before, after, isSameType, onDiffChildren) {
    let lastPlacedIndex = 0;
    const result = {
        $$diff: true,
        i: {},
        r: [],
        m: {}
    };
    const beforeMap = {};
    for(let i = 0; i < before.length; i++){
        var _beforeMap, _node_type;
        const node = before[i];
        var _;
        ((_ = (_beforeMap = beforeMap)[_node_type = node.type]) !== null && _ !== void 0 ? _ : _beforeMap[_node_type] = new Set()).add([
            node,
            i
        ]);
    }
    for(let i = 0; i < after.length; i++){
        const afterNode = after[i];
        const beforeNodes = beforeMap[afterNode.type];
        let beforeNode;
        if (beforeNodes && beforeNodes.size > 0 && ([beforeNode] = beforeNodes, beforeNode) && isSameType(beforeNode[0], afterNode)) {
            // Reuse old node
            beforeNodes.delete(beforeNode);
            const oldIndex = beforeNode[1];
            onDiffChildren(beforeNode[0], afterNode, oldIndex, i);
            if (oldIndex < lastPlacedIndex) {
                result.m[oldIndex] = i;
                continue;
            } else lastPlacedIndex = oldIndex;
        } else result.i[i] = afterNode;
    }
    // Delete
    for(const k in beforeMap)for (const [, i] of beforeMap[k])result.r.push(i);
    return result;
}
// export function diffIterableLepus<A extends Typed, B extends Typed>(
//   before: A[],
//   after: Iterable<B>,
//   isSameType: (a: A, b: B) => boolean,
//   onDiffChildren: (a: A, b: B) => void
// ): DiffResult<B> {
//   let returnResult = EMPTY_DIFF_RESULT as DiffResult<B>;
//   let lastPlacedIndex = 0;
//   const result: DiffResult<B> = {
//     $$diff: true,
//     i: {},
//     r: [],
//     m: {},
//   };
//   const beforeMap: Record<string, Set<[A, number]>> = {};
//   for (let i = 0; i < before.length; i++) {
//     let node = before[i];
//     (beforeMap[node.type] ??= new Set()).add([node, i]);
//   }
//   let i = 0;
//   for (const afterNode of after) {
//     const beforeNodes = beforeMap[afterNode.type];
//     let beforeNode: [A, number];
//     if (beforeNodes && (([beforeNode] = beforeNodes), beforeNode) && isSameType(beforeNode[0], afterNode)) {
//       // Reuse old node
//       beforeNodes.delete(beforeNode);
//       const oldIndex = beforeNode[1];
//       onDiffChildren(beforeNode[0], afterNode);
//       if (oldIndex < lastPlacedIndex) {
//         result.m[oldIndex] = i;
//         returnResult = result;
//         i++;
//         continue;
//       } else {
//         lastPlacedIndex = oldIndex;
//       }
//     } else {
//       // Create new node
//       result.i[i] = afterNode;
//       returnResult = result;
//     }
//     i++;
//   }
//   // delete
//   for (const k in beforeMap) {
//     for (const [, i] of beforeMap[k]) {
//       result.r.push(i);
//       returnResult = result;
//     }
//   }
//   return result;
// }
function diffArrayAction(before, diffResult, onInsert, onRemove, onMove) {
    if (isEmptyDiffResult(diffResult)) return before;
    const deleteSet = new Set(diffResult.r);
    const { i: insertMap, m: placementMap } = diffResult;
    const moveTempMap = new Map();
    let old;
    let k = 0;
    old = before[k];
    // let current: T | null | undefined = null;
    const result = [];
    let i = 0; // index of the old list
    let j = 0; // index of the new list
    let remain = Object.keys(insertMap).length;
    while(old || remain > 0){
        let keep = false;
        if (old && deleteSet.has(j)) onRemove(old);
        else if (old && placementMap[j] !== undefined) {
            // save node to re-use
            moveTempMap.set(placementMap[j], old);
            remain++;
        } else {
            // insert node
            let newNode = old;
            if (moveTempMap.has(i)) {
                // insert re-used node
                newNode = moveTempMap.get(i);
                keep = true;
                onMove(newNode, old);
                remain--;
            } else if (insertMap[i] !== undefined) {
                // insert new node
                newNode = onInsert(insertMap[i], old);
                keep = true;
                remain--;
            }
            result.push(newNode);
            i++;
        }
        if (old && !keep) {
            old = before[++k];
            j++;
        }
    }
    return result;
}
function hydrate(before, after, options) {
    var _after___values;
    after.__elements = before.__elements;
    after.__element_root = before.__element_root;
    if (!(options === null || options === void 0 ? void 0 : options.skipUnRef)) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_1__.unref)(before, false);
    let swap;
    if (swap = options === null || options === void 0 ? void 0 : options.swap) swap[before.__id] = after.__id;
    (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
        const old = before.__values[index];
        if (value !== old) {
            after.__values[index] = old;
            after.setAttribute(index, value);
        }
    });
    const { slot } = after.__snapshot_def;
    if (!slot) return;
    const beforeChildNodes = before.childNodes;
    const afterChildNodes = after.childNodes;
    slot.forEach(([type, elementIndex], index)=>{
        switch(type){
            case _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Slot:
            case _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.MultiChildren:
                {
                    // TODO: the following null assertions are not 100% safe
                    const v1 = beforeChildNodes[index];
                    const v2 = afterChildNodes[index];
                    hydrate(v1, v2, options);
                    break;
                }
            case _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Children:
                {
                    const diffResult = diffArrayLepus(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                        hydrate(a, b, options);
                    });
                    diffArrayAction(beforeChildNodes, diffResult, (node, target)=>{
                        node.ensureElements();
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                        return node;
                    }, (node)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                    }, (node, target)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                    });
                    break;
                }
            case _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.ListChildren:
                {
                    const removals = [];
                    const insertions = [];
                    const updateAction = [];
                    const diffResult = diffArrayLepus(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b, oldIndex, newIndex)=>{
                        if (JSON.stringify(a.__listItemPlatformInfo) !== JSON.stringify(b.__listItemPlatformInfo)) updateAction.push({
                            ...b.__listItemPlatformInfo,
                            from: newIndex,
                            to: newIndex,
                            // no flush
                            flush: false
                        });
                        // Mark list-item which is rendered (has `__elements`) as DELETE
                        // so list platform will call `enqueueComponent` on it
                        // and will call `componentAtIndex` on the inserted one
                        // In this way:
                        //  1. we make sure `<list/>` for hydrate is like a leaf node
                        //  2. we avoid hydrate so modifying recycleMap can be avoid
                        //  3. the delete list-item is recycled for later use, so no waste
                        if (a.__elements) {
                            removals.push(oldIndex);
                            insertions.push(newIndex);
                        }
                    });
                    for (const i of diffResult.r)removals.push(i);
                    for(const i in diffResult.i)insertions.push(Number(i));
                    for(const i in diffResult.m){
                        removals.push(Number(i));
                        insertions.push(diffResult.m[i]);
                    }
                    insertions.sort((a, b)=>a - b);
                    removals.sort((a, b)=>a - b);
                    const info = {
                        insertAction: insertions.map((it)=>({
                                position: it,
                                type: afterChildNodes[it].type,
                                ...afterChildNodes[it].__listItemPlatformInfo
                            })),
                        removeAction: removals,
                        updateAction
                    };
                    const listElement = before.__elements[elementIndex];
                    __SetAttribute(listElement, 'update-list-info', info);
                    const [componentAtIndex, componentAtIndexes] = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.componentAtIndexFactory)(afterChildNodes);
                    __UpdateListCallbacks(listElement, componentAtIndex, (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.enqueueComponentFactory)(), componentAtIndexes);
                    // The `before` & `after` target to the same list element, so we need to
                    // avoid the newly created list's (behind snapshot instance `after`) "update-list-info" being recorded.
                    delete _list_js__WEBPACK_IMPORTED_MODULE_0__.__pendingListUpdates.values[after.__id];
                }
        }
    });
} //# sourceMappingURL=hydrate.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Children),
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_5__.Component),
  Fragment: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Fragment),
  InitDataConsumer: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.InitDataConsumer),
  InitDataProvider: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.MainThreadRef),
  PureComponent: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.PureComponent),
  Suspense: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Suspense),
  createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_5__.createContext),
  createElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.createElement),
  createRef: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.createRef),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  forwardRef: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.forwardRef),
  isValidElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.isValidElement),
  lazy: () => (lazy),
  memo: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.memo),
  root: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.root),
  runOnBackground: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.runOnMainThread),
  useCallback: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useCallback),
  useContext: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useContext),
  useDebugValue: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useDebugValue),
  useEffect: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useEffect),
  useErrorBoundary: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useErrorBoundary),
  useId: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useId),
  useImperativeHandle: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle),
  useInitData: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useInitData),
  useInitDataChanged: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useInitDataChanged),
  useLayoutEffect: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect),
  useLynxGlobalEventListener: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useMainThreadRef),
  useMemo: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo),
  useReducer: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useReducer),
  useRef: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useRef),
  useState: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useState),
  useSyncExternalStore: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore),
  withInitDataInState: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.withInitDataInState)
});
/* ESM import */var _lynx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* ESM import */var _lynx_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/component.js");
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.








const lazy = /*#__PURE__*/ (()=>{
    lynx.loadLazyBundle = _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__.loadLazyBundle;
    return preact_compat__WEBPACK_IMPORTED_MODULE_2__.lazy;
})();
/**
 * @internal
 */ /* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // hooks
    useState: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useState,
    useReducer: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useReducer,
    useEffect: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useEffect,
    useLayoutEffect: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect,
    useRef: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useRef,
    useImperativeHandle: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle,
    useMemo: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo,
    useCallback: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useCallback,
    useContext: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useContext,
    useDebugValue: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useDebugValue,
    useSyncExternalStore: preact_compat__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore,
    createContext: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createContext,
    createRef: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createRef,
    Fragment: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Fragment,
    isValidElement: preact_compat__WEBPACK_IMPORTED_MODULE_2__.isValidElement,
    Children: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Children,
    Component: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Component,
    PureComponent: preact_compat__WEBPACK_IMPORTED_MODULE_2__.PureComponent,
    memo: preact_compat__WEBPACK_IMPORTED_MODULE_2__.memo,
    forwardRef: preact_compat__WEBPACK_IMPORTED_MODULE_2__.forwardRef,
    Suspense: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Suspense,
    lazy,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createElement
});

 //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_15__.Component),
  SnapshotInstance: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.SnapshotInstance),
  __ComponentIsPolyfill: () => (__ComponentIsPolyfill),
  __DynamicPartChildren: () => (__DynamicPartChildren),
  __DynamicPartChildren_0: () => (__DynamicPartChildren_0),
  __DynamicPartListChildren: () => (__DynamicPartListChildren),
  __DynamicPartMultiChildren: () => (__DynamicPartMultiChildren),
  __DynamicPartSlot: () => (__DynamicPartSlot),
  __dynamicImport: () => (/* reexport safe */ _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_16__.__dynamicImport),
  __page: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.__page),
  __pageId: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.__pageId),
  __root: () => (/* reexport safe */ _root_js__WEBPACK_IMPORTED_MODULE_6__.__root),
  createSnapshot: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.createSnapshot),
  loadDynamicJS: () => (/* reexport safe */ _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_16__.loadDynamicJS),
  loadLazyBundle: () => (/* reexport safe */ _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_5__.loadLazyBundle),
  loadWorkletRuntime: () => (/* reexport safe */ _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_21__.loadWorkletRuntime),
  options: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_15__.options),
  registerWorkletOnBackground: () => (/* reexport safe */ _worklet_hmr_js__WEBPACK_IMPORTED_MODULE_20__.registerWorkletOnBackground),
  snapshotCreateList: () => (/* reexport safe */ _list_js__WEBPACK_IMPORTED_MODULE_4__.snapshotCreateList),
  snapshotManager: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.snapshotManager),
  transformRef: () => (/* reexport safe */ _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_10__.transformRef),
  transformToWorklet: () => (/* reexport safe */ _worklet_transformToWorklet_js__WEBPACK_IMPORTED_MODULE_19__.transformToWorklet),
  updateEvent: () => (/* reexport safe */ _snapshot_event_js__WEBPACK_IMPORTED_MODULE_9__.updateEvent),
  updateGesture: () => (/* reexport safe */ _snapshot_gesture_js__WEBPACK_IMPORTED_MODULE_13__.updateGesture),
  updateListItemPlatformInfo: () => (/* reexport safe */ _snapshot_platformInfo_js__WEBPACK_IMPORTED_MODULE_14__.updateListItemPlatformInfo),
  updateRef: () => (/* reexport safe */ _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_10__.updateRef),
  updateSpread: () => (/* reexport safe */ _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_8__.updateSpread),
  updateWorkletEvent: () => (/* reexport safe */ _snapshot_workletEvent_js__WEBPACK_IMPORTED_MODULE_11__.updateWorkletEvent),
  updateWorkletRef: () => (/* reexport safe */ _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_12__.updateWorkletRef),
  withInitDataInState: () => (/* reexport safe */ _compat_initData_js__WEBPACK_IMPORTED_MODULE_17__.withInitDataInState),
  wrapWithLynxComponent: () => (/* reexport safe */ _compat_lynxComponent_js__WEBPACK_IMPORTED_MODULE_18__.wrapWithLynxComponent)
});
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var _lynx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* ESM import */var _compat_componentIs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/componentIs.js");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js");
/* ESM import */var _snapshot_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_workletEvent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _snapshot_gesture_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js");
/* ESM import */var _snapshot_platformInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/dynamic-js.js");
/* ESM import */var _compat_initData_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js");
/* ESM import */var _compat_lynxComponent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/lynxComponent.js");
/* ESM import */var _worklet_transformToWorklet_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/transformToWorklet.js");
/* ESM import */var _worklet_hmr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/hmr.js");
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.










const __DynamicPartSlot = _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.DynamicPartType.Slot;
const __DynamicPartMultiChildren = _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.DynamicPartType.MultiChildren;
const __DynamicPartChildren = _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.DynamicPartType.Children;
const __DynamicPartListChildren = _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.DynamicPartType.ListChildren;
const __DynamicPartChildren_0 = [
    [
        _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.DynamicPartType.Children,
        0
    ]
];











/**
 * @internal a polyfill for <component is=? />
 */ const __ComponentIsPolyfill = /* @__PURE__ */ (0,_compat_componentIs_js__WEBPACK_IMPORTED_MODULE_2__.factory)({
    Suspense: preact_compat__WEBPACK_IMPORTED_MODULE_0__.Suspense,
    lazy: preact_compat__WEBPACK_IMPORTED_MODULE_0__.lazy,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_0__.createElement,
    useMemo: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo
}, _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_5__.loadLazyBundle);



 //# sourceMappingURL=internal.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/delayUnmount.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initDelayUnmount: () => (initDelayUnmount),
  runDelayedUnmounts: () => (runDelayedUnmounts),
  takeDelayedUnmounts: () => (takeDelayedUnmounts)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");


let delayedUnmounts = [];
let parentVNode;
function takeDelayedUnmounts() {
    const ret = delayedUnmounts;
    delayedUnmounts = [];
    // not clearing `parentVNode` here, which would be cleared before next diff in `options[DIFF]`
    return ret;
}
function runDelayedUnmounts(delayedUnmounts) {
    for (const fn of delayedUnmounts)fn();
}
/**
 * Delay `componentWillUnmount` until main thread patching finishes.
 */ function initDelayUnmount() {
    const oldUnmount = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
    preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = (vnode)=>{
        if (!parentVNode) {
            // `parentVNode` is the first vnode to unmount,
            // which is needed to find proper error boundary when running `componentWillUnmount`.
            // Shallow copy vnode to prevent modification to vnode in preact unmounting process.
            parentVNode = {
                ...vnode
            };
            const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
            preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = (vnode)=>{
                // A new diff indicates that the unmounting process of parentVNode is finished.
                parentVNode = undefined;
                preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = oldDiff;
                oldDiff === null || oldDiff === void 0 ? void 0 : oldDiff(vnode);
            };
        }
        const component = vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
        if (component) {
            if (oldUnmount) {
                const vnode_clone = {
                    ...vnode
                };
                delayedUnmounts.push(()=>{
                    const v = vnode_clone[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT][_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.VNODE];
                    vnode_clone[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT][_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.VNODE] = vnode_clone;
                    oldUnmount === null || oldUnmount === void 0 ? void 0 : oldUnmount(vnode_clone);
                    vnode_clone[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT][_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.VNODE] = v;
                });
            }
            if (component.componentWillUnmount) {
                const unmount = component.componentWillUnmount;
                // @ts-ignore
                component.componentWillUnmount = undefined;
                const parentVNode_ = parentVNode;
                delayedUnmounts.push(()=>{
                    try {
                        component.componentWillUnmount = unmount;
                        component.componentWillUnmount();
                    } catch (e) {
                        preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.CATCH_ERROR](e, parentVNode_);
                    }
                });
            }
        }
    };
}
 //# sourceMappingURL=delayUnmount.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyBackground: () => (destroyBackground)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _event_delayEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayEvents.js");
/* ESM import */var _event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayLifecycleEvents.js");
/* ESM import */var _patch_commit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.





function destroyBackground() {
    if (false) {}
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, _root_js__WEBPACK_IMPORTED_MODULE_1__.__root);
    _patch_commit_js__WEBPACK_IMPORTED_MODULE_4__.globalCommitTaskMap.forEach((task)=>{
        task();
    });
    _patch_commit_js__WEBPACK_IMPORTED_MODULE_4__.globalCommitTaskMap.clear();
    // Clear delayed events which should not be executed after destroyed.
    // This is important when the page is performing a reload.
    _event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_3__.delayedLifecycleEvents.length = 0;
    if (_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_2__.delayedEvents) _event_delayEvents_js__WEBPACK_IMPORTED_MODULE_2__.delayedEvents.length = 0;
    if (false) {}
}
 //# sourceMappingURL=destroy.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayEvents.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayedEvents: () => (delayedEvents),
  delayedPublishEvent: () => (delayedPublishEvent)
});
let delayedEvents;
function delayedPublishEvent(handlerName, data) {
    delayedEvents !== null && delayedEvents !== void 0 ? delayedEvents : delayedEvents = [];
    delayedEvents.push([
        handlerName,
        data
    ]);
}
 //# sourceMappingURL=delayEvents.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayLifecycleEvents.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayLifecycleEvent: () => (delayLifecycleEvent),
  delayedLifecycleEvents: () => (delayedLifecycleEvents)
});
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");

const delayedLifecycleEvents = [];
function delayLifecycleEvent(type, data) {
    // We need to ensure that firstScreen events are executed before other events.
    // This is because firstScreen events are used to initialize the dom tree,
    // and other events depend on the dom tree being fully constructed.
    // There might be some edge cases where ctx cannot be found in `ref` lifecycle event,
    // and they should be ignored safely.
    if (type === _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__.LifecycleConstant.firstScreen) delayedLifecycleEvents.unshift([
        type,
        data
    ]);
    else delayedLifecycleEvents.push([
        type,
        data
    ]);
}
/**
 * @internal
 */  //# sourceMappingURL=delayLifecycleEvents.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/jsReady.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearJSReadyEventIdSwap: () => (clearJSReadyEventIdSwap),
  isJSReady: () => (isJSReady),
  jsReady: () => (jsReady),
  jsReadyEventIdSwap: () => (jsReadyEventIdSwap),
  resetJSReady: () => (resetJSReady)
});
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");



let isJSReady;
let jsReadyEventIdSwap;
function jsReady() {
    isJSReady = true;
    __OnLifecycleEvent([
        _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__.LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root: JSON.stringify(_root_js__WEBPACK_IMPORTED_MODULE_1__.__root),
            refPatch: JSON.stringify((0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__.takeGlobalRefPatchMap)()),
            jsReadyEventIdSwap
        }
    ]);
    jsReadyEventIdSwap = {};
}
function clearJSReadyEventIdSwap() {
    jsReadyEventIdSwap = {};
}
function resetJSReady() {
    isJSReady = false;
    jsReadyEventIdSwap = {};
}
/**
 * @internal
 */  //# sourceMappingURL=jsReady.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getReloadVersion: () => (getReloadVersion),
  increaseReloadVersion: () => (increaseReloadVersion)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
let reloadVersion = 0;
function getReloadVersion() {
    return reloadVersion;
}
function increaseReloadVersion() {
    return ++reloadVersion;
}
 //# sourceMappingURL=pass.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearCommitTaskId: () => (clearCommitTaskId),
  commitPatchUpdate: () => (commitPatchUpdate),
  genCommitTaskId: () => (genCommitTaskId),
  globalBackgroundSnapshotInstancesToRemove: () => (globalBackgroundSnapshotInstancesToRemove),
  globalCommitTaskMap: () => (globalCommitTaskMap),
  globalFlushOptions: () => (globalFlushOptions),
  nextCommitTaskId: () => (nextCommitTaskId),
  replaceCommitHook: () => (replaceCommitHook),
  replaceRequestAnimationFrame: () => (replaceRequestAnimationFrame)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _worklet_workletRefPool_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
/* ESM import */var _delayUnmount_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/delayUnmount.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
/* ESM import */var _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.











let globalFlushOptions = {};
const globalCommitTaskMap = /*@__PURE__*/ new Map();
let nextCommitTaskId = 1;
let globalBackgroundSnapshotInstancesToRemove = [];
/**
 * Replaces Preact's default commit hook with our custom implementation
 */ function replaceCommitHook() {
    const originalPreactCommit = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.COMMIT];
    const commit = async (vnode, commitQueue)=>{
        // Mark the end of virtual DOM diffing phase for performance tracking
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTimingLegacy)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.updateDiffVdomEnd);
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.diffVdomEnd);
        // The callback functions to be called after components are rendered.
        const renderCallbacks = commitQueue.map((component)=>{
            const ret = {
                component,
                [_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.RENDER_CALLBACKS]: component[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.RENDER_CALLBACKS],
                [_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.VNODE]: component[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.VNODE]
            };
            component[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.RENDER_CALLBACKS] = [];
            return ret;
        });
        commitQueue.length = 0;
        const delayedUnmounts = (0,_delayUnmount_js__WEBPACK_IMPORTED_MODULE_8__.takeDelayedUnmounts)();
        const backgroundSnapshotInstancesToRemove = globalBackgroundSnapshotInstancesToRemove;
        globalBackgroundSnapshotInstancesToRemove = [];
        const commitTaskId = genCommitTaskId();
        // Register the commit task
        globalCommitTaskMap.set(commitTaskId, ()=>{
            (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__.updateBackgroundRefs)(commitTaskId);
            (0,_delayUnmount_js__WEBPACK_IMPORTED_MODULE_8__.runDelayedUnmounts)(delayedUnmounts);
            originalPreactCommit === null || originalPreactCommit === void 0 ? void 0 : originalPreactCommit(vnode, renderCallbacks);
            renderCallbacks.some((wrapper)=>{
                try {
                    wrapper[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.RENDER_CALLBACKS].some((cb)=>{
                        cb.call(wrapper.component);
                    });
                } catch (e) {
                    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.CATCH_ERROR](e, wrapper[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.VNODE]);
                }
            });
            if (backgroundSnapshotInstancesToRemove.length) setTimeout(()=>{
                backgroundSnapshotInstancesToRemove.forEach((id)=>{
                    _snapshot_js__WEBPACK_IMPORTED_MODULE_4__.backgroundSnapshotInstanceManager.values["delete"](id);
                });
            }, 10000);
        });
        // Collect patches for this update
        const snapshotPatch = (0,_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_10__.takeGlobalSnapshotPatch)();
        const flushOptions = globalFlushOptions;
        const workletRefInitValuePatch = (0,_worklet_workletRefPool_js__WEBPACK_IMPORTED_MODULE_7__.takeWorkletRefInitValuePatch)();
        globalFlushOptions = {};
        if (!snapshotPatch && workletRefInitValuePatch.length === 0) return;
        const patch = {
            id: commitTaskId
        };
        // TODO: check all fields in `flushOptions` from runtime3
        if (snapshotPatch === null || snapshotPatch === void 0 ? void 0 : snapshotPatch.length) patch.snapshotPatch = snapshotPatch;
        if (workletRefInitValuePatch.length) patch.workletRefInitValuePatch = workletRefInitValuePatch;
        const patchList = {
            patchList: [
                patch
            ]
        };
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isEmptyObject)(flushOptions)) patchList.flushOptions = flushOptions;
        const obj = commitPatchUpdate(patchList, {});
        // Send the update to the native layer
        lynx.getNativeApp().callLepusMethod(_lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.patchUpdate, obj, ()=>{
            const commitTask = globalCommitTaskMap.get(commitTaskId);
            if (commitTask) {
                commitTask();
                globalCommitTaskMap.delete(commitTaskId);
            }
        });
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.COMMIT] = commit;
}
/**
 * Prepares the patch update for transmission to the native layer
 */ function commitPatchUpdate(patchList, patchOptions) {
    // console.debug('********** JS update:');
    // printSnapshotInstance(
    //   (backgroundSnapshotInstanceManager.values.get(1) || backgroundSnapshotInstanceManager.values.get(-1))!,
    // );
    // console.debug('commitPatchUpdate: ', JSON.stringify(patchList));
    if (false) {}
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.packChangesStart);
    const obj = {
        data: JSON.stringify(patchList),
        patchOptions: {
            ...patchOptions,
            reloadVersion: (0,_pass_js__WEBPACK_IMPORTED_MODULE_9__.getReloadVersion)()
        }
    };
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.packChangesEnd);
    if (_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.globalPipelineOptions) {
        obj.patchOptions.pipelineOptions = _lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.globalPipelineOptions;
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_2__.setPipeline)(undefined);
    }
    if (false) {}
    return obj;
}
/**
 * Generates a unique ID for commit tasks
 */ function genCommitTaskId() {
    return nextCommitTaskId++;
}
/**
 * Resets the commit task ID counter
 */ function clearCommitTaskId() {
    nextCommitTaskId = 1;
}
function replaceRequestAnimationFrame() {
    // to make afterPaintEffects run faster
    const resolvedPromise = Promise.resolve();
    preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame = (cb)=>{
        resolvedPromise.then(cb);
    };
}
/**
 * @internal
 */  //# sourceMappingURL=commit.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrationFinished.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isMainThreadHydrationFinished: () => (isMainThreadHydrationFinished),
  setMainThreadHydrationFinished: () => (setMainThreadHydrationFinished)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");

let isMainThreadHydrationFinished = false;
function setMainThreadHydrationFinished(isFinished) {
    if (isFinished && !isMainThreadHydrationFinished) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onHydrationFinished)();
    isMainThreadHydrationFinished = isFinished;
} //# sourceMappingURL=isMainThreadHydrationFinished.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SnapshotOperation: () => (SnapshotOperation),
  __globalSnapshotPatch: () => (__globalSnapshotPatch),
  deinitGlobalSnapshotPatch: () => (deinitGlobalSnapshotPatch),
  initGlobalSnapshotPatch: () => (initGlobalSnapshotPatch),
  takeGlobalSnapshotPatch: () => (takeGlobalSnapshotPatch)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Defines the core patch operations for the snapshot system.
 * The patch operations are designed to be serializable and minimal, allowing
 * efficient transmission between threads and application to element tree.
 */ var SnapshotOperation;
(function(SnapshotOperation) {
    SnapshotOperation[SnapshotOperation["CreateElement"] = 0] = "CreateElement";
    SnapshotOperation[SnapshotOperation["InsertBefore"] = 1] = "InsertBefore";
    SnapshotOperation[SnapshotOperation["RemoveChild"] = 2] = "RemoveChild";
    SnapshotOperation[SnapshotOperation["SetAttribute"] = 3] = "SetAttribute";
    SnapshotOperation[SnapshotOperation["SetAttributes"] = 4] = "SetAttributes";
    SnapshotOperation[SnapshotOperation["DEV_ONLY_AddSnapshot"] = 100] = "DEV_ONLY_AddSnapshot";
    SnapshotOperation[SnapshotOperation["DEV_ONLY_RegisterWorklet"] = 101] = "DEV_ONLY_RegisterWorklet";
})(SnapshotOperation || (SnapshotOperation = {}));
let __globalSnapshotPatch;
function takeGlobalSnapshotPatch() {
    if (__globalSnapshotPatch) {
        const list = __globalSnapshotPatch;
        __globalSnapshotPatch = [];
        return list;
    } else return undefined;
}
function initGlobalSnapshotPatch() {
    __globalSnapshotPatch = [];
}
function deinitGlobalSnapshotPatch() {
    __globalSnapshotPatch = undefined;
} //# sourceMappingURL=snapshotPatch.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatchApply.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  snapshotPatchApply: () => (snapshotPatchApply)
});
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the patch application logic for the snapshot system.
 * This module is responsible for interpreting and executing patch operations
 * that were generated in the background thread, applying them to the DOM
 * in the main thread.
 *
 * The module handles various operations like element creation, insertion,
 * removal, and attribute updates, ensuring they are applied in the correct
 * order and with proper error handling.
 */ 

function reportCtxNotFound() {
    lynx.reportError(new Error(`snapshotPatchApply failed: ctx not found`));
}
/**
 * Applies a patch of snapshot operations to the main thread.
 * This is the counterpart to the patch generation in the background thread.
 * Each operation in the patch is processed sequentially to update the DOM.
 */ function snapshotPatchApply(snapshotPatch) {
    const length = snapshotPatch.length;
    for(let i = 0; i < length; ++i)switch(snapshotPatch[i]){
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.CreateElement:
            {
                const type = snapshotPatch[++i];
                const id = snapshotPatch[++i];
                new _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotInstance(type, id);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.InsertBefore:
            {
                const parentId = snapshotPatch[++i];
                const childId = snapshotPatch[++i];
                const beforeId = snapshotPatch[++i];
                const parent = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.get(parentId);
                const child = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.get(childId);
                const existingNode = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.get(beforeId);
                if (!parent || !child) reportCtxNotFound();
                else parent.insertBefore(child, existingNode);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.RemoveChild:
            {
                const parentId = snapshotPatch[++i];
                const childId = snapshotPatch[++i];
                const parent = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.get(parentId);
                const child = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.get(childId);
                if (!parent || !child) reportCtxNotFound();
                else parent.removeChild(child);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.SetAttribute:
            {
                const id = snapshotPatch[++i];
                const dynamicPartIndex = snapshotPatch[++i];
                const value = snapshotPatch[++i];
                const si = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.get(id);
                if (si) si.setAttribute(dynamicPartIndex, value);
                else reportCtxNotFound();
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.SetAttributes:
            {
                const id = snapshotPatch[++i];
                const values = snapshotPatch[++i];
                const si = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.get(id);
                if (si) si.setAttribute('values', values);
                else reportCtxNotFound();
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.DEV_ONLY_AddSnapshot:
            if (true) {
                const uniqID = snapshotPatch[++i];
                const create = snapshotPatch[++i];
                const update = snapshotPatch[++i];
                const slot = snapshotPatch[++i];
                var _snapshotPatch_;
                const cssId = (_snapshotPatch_ = snapshotPatch[++i]) !== null && _snapshotPatch_ !== void 0 ? _snapshotPatch_ : 0;
                const entryName = snapshotPatch[++i];
                if (!_snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotManager.values.has((0,_snapshot_js__WEBPACK_IMPORTED_MODULE_0__.entryUniqID)(uniqID, entryName))) // Update the evaluated snapshots from JS.
                (0,_snapshot_js__WEBPACK_IMPORTED_MODULE_0__.createSnapshot)(uniqID, evaluate(create), update.map(evaluate), slot, cssId, entryName);
            }
            break;
    }
}
/**
 * Evaluates a string as code with ReactLynx runtime injected.
 * Used for HMR (Hot Module Replacement) to update snapshot definitions.
 */ function evaluate(code) {
    return new Function(`return ${code}`)();
} //# sourceMappingURL=snapshotPatchApply.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/updateMainThread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  commitMainThreadPatchUpdate: () => (commitMainThreadPatchUpdate),
  injectUpdateMainThread: () => (injectUpdateMainThread)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _snapshotPatchApply_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatchApply.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
/* ESM import */var _isMainThreadHydrationFinished_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrationFinished.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.










function updateMainThread({ data, patchOptions }) {
    if (patchOptions.reloadVersion < (0,_pass_js__WEBPACK_IMPORTED_MODULE_8__.getReloadVersion)()) return;
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.setPipeline)(patchOptions.pipelineOptions);
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceTimingKeys.mtsRenderStart);
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceTimingKeys.parseChangesStart);
    const { patchList, flushOptions = {} } = JSON.parse(data);
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceTimingKeys.parseChangesEnd);
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceTimingKeys.patchChangesStart);
    for (const { snapshotPatch, workletRefInitValuePatch, id } of patchList){
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRefInitValueChanges)(workletRefInitValuePatch);
        _list_js__WEBPACK_IMPORTED_MODULE_3__.__pendingListUpdates.clear();
        if (snapshotPatch) (0,_snapshotPatchApply_js__WEBPACK_IMPORTED_MODULE_1__.snapshotPatchApply)(snapshotPatch);
        _list_js__WEBPACK_IMPORTED_MODULE_3__.__pendingListUpdates.flush();
        // console.debug('********** Lepus updatePatch:');
        // printSnapshotInstance(snapshotInstanceManager.values.get(-1)!);
        commitMainThreadPatchUpdate(id);
    }
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceTimingKeys.patchChangesEnd);
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)(_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceTimingKeys.mtsRenderEnd);
    if (patchOptions.isHydration) (0,_isMainThreadHydrationFinished_js__WEBPACK_IMPORTED_MODULE_9__.setMainThreadHydrationFinished)(true);
    if (patchOptions.pipelineOptions) flushOptions.pipelineOptions = patchOptions.pipelineOptions;
    // TODO: triggerDataUpdated?
    __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_6__.__page, flushOptions);
}
function injectUpdateMainThread() {
    Object.assign(globalThis, {
        [_lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__.LifecycleConstant.patchUpdate]: updateMainThread
    });
}
function commitMainThreadPatchUpdate(commitTaskId) {
    const refPatch = (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_5__.takeGlobalRefPatchMap)();
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.isEmptyObject)(refPatch)) __OnLifecycleEvent([
        _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__.LifecycleConstant.ref,
        {
            commitTaskId,
            refPatch: JSON.stringify(refPatch)
        }
    ]);
}
/**
 * @internal
 */  //# sourceMappingURL=updateMainThread.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/reload.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  reloadBackground: () => (reloadBackground),
  reloadMainThread: () => (reloadMainThread)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _worklet_destroy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js");
/* ESM import */var _event_jsReady_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/jsReady.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
/* ESM import */var _patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _render_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js");
/* ESM import */var _patch_isMainThreadHydrationFinished_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrationFinished.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the reload (thinking of "refresh" in browser) for both main thread
 * and background thread.
 */ 














function reloadMainThread(data, options) {
    if (false) {}
    (0,_pass_js__WEBPACK_IMPORTED_MODULE_11__.increaseReloadVersion)();
    if (typeof data == 'object' && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.isEmptyObject)(data)) Object.assign(lynx.__initData, data);
    (0,_worklet_destroy_js__WEBPACK_IMPORTED_MODULE_8__.destroyWorklet)();
    _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.snapshotInstanceManager.clear();
    _list_js__WEBPACK_IMPORTED_MODULE_3__.__pendingListUpdates.clear();
    (0,_event_jsReady_js__WEBPACK_IMPORTED_MODULE_10__.clearJSReadyEventIdSwap)();
    (0,_patch_isMainThreadHydrationFinished_js__WEBPACK_IMPORTED_MODULE_14__.setMainThreadHydrationFinished)(false);
    const oldRoot = _root_js__WEBPACK_IMPORTED_MODULE_4__.__root;
    (0,_root_js__WEBPACK_IMPORTED_MODULE_4__.setRoot)(new _snapshot_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotInstance('root'));
    _root_js__WEBPACK_IMPORTED_MODULE_4__.__root.__jsx = oldRoot.__jsx;
    (0,_render_js__WEBPACK_IMPORTED_MODULE_13__.renderMainThread)();
    (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_1__.hydrate)(oldRoot, _root_js__WEBPACK_IMPORTED_MODULE_4__.__root, {
        skipUnRef: true
    });
    // always call this before `__FlushElementTree`
    _list_js__WEBPACK_IMPORTED_MODULE_3__.__pendingListUpdates.flush();
    if (_event_jsReady_js__WEBPACK_IMPORTED_MODULE_10__.isJSReady) __OnLifecycleEvent([
        _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__.LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root: JSON.stringify(_root_js__WEBPACK_IMPORTED_MODULE_4__.__root),
            refPatch: JSON.stringify((0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_6__.takeGlobalRefPatchMap)())
        }
    ]);
    __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_5__.__page, options);
    if (false) {}
    return;
}
function reloadBackground(updateData) {
    if (false) {}
    (0,_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_12__.deinitGlobalSnapshotPatch)();
    (0,_destroy_js__WEBPACK_IMPORTED_MODULE_9__.destroyBackground)();
    (0,_pass_js__WEBPACK_IMPORTED_MODULE_11__.increaseReloadVersion)();
    // COW when modify `lynx.__initData` to make sure Provider & Consumer works
    lynx.__initData = Object.assign({}, lynx.__initData, updateData);
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(_root_js__WEBPACK_IMPORTED_MODULE_4__.__root.__jsx, _root_js__WEBPACK_IMPORTED_MODULE_4__.__root);
    if (false) {}
}
 //# sourceMappingURL=reload.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderMainThread: () => (renderMainThread)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _opcodes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js");
/* ESM import */var _renderToOpcodes_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/index.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the IFR (Instant First-Frame Rendering) on main thread.
 */ 



function renderMainThread() {
    /* v8 ignore start */ if (false) {}
    else {
        let opcodes;
        try {
            if (false) {}
            // @ts-ignore
            opcodes = (0,_renderToOpcodes_index_js__WEBPACK_IMPORTED_MODULE_2__.render)(_root_js__WEBPACK_IMPORTED_MODULE_3__.__root.__jsx);
        } catch (e) {
            lynx.reportError(e);
            opcodes = [];
        } finally{
            if (false) {}
        }
        if (false) {}
        (0,_opcodes_js__WEBPACK_IMPORTED_MODULE_1__.renderOpcodesInto)(opcodes, _root_js__WEBPACK_IMPORTED_MODULE_3__.__root);
        if (false) {}
        if (false) {}
    }
/* v8 ignore stop */ }
 //# sourceMappingURL=render.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LifecycleConstant: () => (LifecycleConstant),
  NativeUpdateDataType: () => (NativeUpdateDataType)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
class LifecycleConstant {
}
LifecycleConstant.firstScreen = 'rLynxFirstScreen';
LifecycleConstant.updateFromRoot = 'updateFromRoot';
LifecycleConstant.globalEventFromLepus = 'globalEventFromLepus';
LifecycleConstant.ref = 'rLynxRef';
LifecycleConstant.jsReady = 'rLynxJSReady';
LifecycleConstant.patchUpdate = 'rLynxChange';
var NativeUpdateDataType;
(function(NativeUpdateDataType) {
    NativeUpdateDataType[NativeUpdateDataType["UPDATE"] = 0] = "UPDATE";
    NativeUpdateDataType[NativeUpdateDataType["RESET"] = 1] = "RESET";
})(NativeUpdateDataType || (NativeUpdateDataType = {})); //# sourceMappingURL=lifecycleConstant.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ListUpdateInfoRecording: () => (ListUpdateInfoRecording),
  __pendingListUpdates: () => (__pendingListUpdates),
  clearListGlobal: () => (clearListGlobal),
  componentAtIndexFactory: () => (componentAtIndexFactory),
  enqueueComponentFactory: () => (enqueueComponentFactory),
  gRecycleMap: () => (gRecycleMap),
  gSignMap: () => (gSignMap),
  snapshotCreateList: () => (snapshotCreateList),
  snapshotDestroyList: () => (snapshotDestroyList)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/updateMainThread.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


// class ListUpdateInfoDiffing implements ListUpdateInfo {
//   private oldChildNodes: SnapshotInstance[];
//   constructor(private list: SnapshotInstance) {
//     this.oldChildNodes = list.childNodes;
//   }
//   flush(): void {
//     Object.defineProperty(SnapshotInstance.prototype, "key", {
//       get: function () {
//         return this.values[0]["item-key"];
//       },
//     });
//   }
//   onInsertBefore(newNode: SnapshotInstance, existingNode?: SnapshotInstance | undefined): void {}
//   onRemoveChild(child: SnapshotInstance): void {}
//   onSetAttribute(child: SnapshotInstance, attr: any): void {
//     throw new Error("Method not implemented.");
//   }
// }
class ListUpdateInfoRecording {
    // private __commitAndReset() {
    //   (this.__pendingAttributes ??= []).push(this.__toAttribute());
    //   this.oldChildNodes = this.list.childNodes;
    //   this.oldChildNodesSet = new Set(this.oldChildNodes);
    //   this.removeChild1.clear();
    //   this.removeChild2.clear();
    //   this.insertBefore.clear();
    //   this.appendChild.length = 0;
    //   this.platformInfoUpdate.clear();
    // }
    flush() {
        const elementIndex = this.list.__snapshot_def.slot[0][1];
        const listElement = this.list.__elements[elementIndex];
        // this.__pendingAttributes?.forEach(pendingAttribute => {
        //   __SetAttribute(listElement, "update-list-info", pendingAttribute);
        //   __FlushElementTree(listElement);
        // });
        __SetAttribute(listElement, 'update-list-info', this.__toAttribute());
        const [componentAtIndex, componentAtIndexes] = componentAtIndexFactory(this.list.childNodes);
        __UpdateListCallbacks(listElement, componentAtIndex, enqueueComponentFactory(), componentAtIndexes);
    }
    onInsertBefore(newNode, existingNode) {
        // @ts-ignore
        if (newNode.__parent) //   this.__commitAndReset();
        // }
        this.removeChild.add(newNode);
        if (existingNode) {
            var _this_insertBefore_get;
            // if (!this.oldChildNodesSet.has(existingNode)) {
            //   this.__commitAndReset();
            // }
            const newChildren = (_this_insertBefore_get = this.insertBefore.get(existingNode)) !== null && _this_insertBefore_get !== void 0 ? _this_insertBefore_get : [];
            newChildren.push(newNode);
            this.insertBefore.set(existingNode, newChildren);
        } else this.appendChild.push(newNode);
    }
    onRemoveChild(child) {
        // if (!this.oldChildNodesSet.has(child)) {
        //   this.__commitAndReset();
        // }
        this.removeChild.add(child);
    }
    onSetAttribute(child, attr, _oldAttr) {
        this.platformInfoUpdate.set(child, attr);
    }
    __toAttribute() {
        const { removeChild, insertBefore, appendChild, platformInfoUpdate } = this;
        const removals = [];
        const insertions = [];
        const updates = [];
        let j = 0;
        for(let i = 0; i < this.oldChildNodes.length; i++, j++){
            const child = this.oldChildNodes[i];
            if (platformInfoUpdate.has(child)) updates.push({
                ...platformInfoUpdate.get(child),
                from: +j,
                to: +j,
                // no flush
                flush: false,
                type: child.type
            });
            if (insertBefore.has(child)) {
                const children = insertBefore.get(child);
                children.forEach((c)=>{
                    insertions.push({
                        position: j,
                        type: c.type,
                        ...c.__listItemPlatformInfo
                    });
                    j++;
                });
            }
            if (removeChild.has(child)) {
                removals.push(i);
                removeChild.delete(child);
                j--;
            }
        }
        for(let i = 0; i < appendChild.length; i++){
            const child = appendChild[i];
            insertions.push({
                position: j + i,
                type: child.type,
                ...child.__listItemPlatformInfo
            });
        }
        insertions.sort((a, b)=>a.position - b.position);
        removals.sort((a, b)=>a - b);
        if (SystemInfo.lynxSdkVersion === '2.14' || SystemInfo.lynxSdkVersion === '2.15' || SystemInfo.lynxSdkVersion === '2.16' || SystemInfo.lynxSdkVersion === '2.17' || SystemInfo.lynxSdkVersion === '2.18') {
            const elementIndex = this.list.__snapshot_def.slot[0][1];
            const listElement = this.list.__elements[elementIndex];
            // `__GetAttributeByName` is available since Lynx 2.14
            if (__GetAttributeByName(listElement, 'custom-list-name') === 'list-container') {
                // `updateAction` must be full (not incremental) when Lynx version <= 2.18 and
                // when `custom-list-name` is `list-container` (available when Lynx version >= 2.14) is true,
                updates.length = 0;
                this.list.childNodes.forEach((child, index)=>{
                    updates.push({
                        ...child.__listItemPlatformInfo,
                        from: index,
                        to: index,
                        // no flush
                        flush: false,
                        type: child.type
                    });
                });
            }
        }
        return {
            insertAction: insertions,
            removeAction: removals,
            updateAction: updates
        };
    }
    toJSON() {
        // if (this.__pendingAttributes) {
        //   return [...this.__pendingAttributes, this.__toAttribute()];
        // } else {
        //   return [this.__toAttribute()];
        // }
        return [
            this.__toAttribute()
        ];
    }
    constructor(list){
        // private oldChildNodesSet: Set<SnapshotInstance>;
        this.removeChild = new Set();
        this.insertBefore = new Map();
        this.appendChild = [];
        this.platformInfoUpdate = new Map();
        this.list = list;
        this.oldChildNodes = list.childNodes;
    // this.oldChildNodesSet = new Set(this.oldChildNodes);
    }
}
const __pendingListUpdates = {
    values: {},
    clear () {
        this.values = {};
    },
    flush () {
        Object.values(this.values).forEach((update)=>{
            update.flush();
        });
        this.clear();
    }
};
const gSignMap = {};
const gRecycleMap = {};
function clearListGlobal() {
    for(const key in gSignMap)delete gSignMap[key];
    for(const key in gRecycleMap)delete gRecycleMap[key];
}
function componentAtIndexFactory(ctx) {
    const componentAtIndex = (list, listID, cellIndex, operationID, enableReuseNotification, enableBatchRender = false, asyncFlush = false)=>{
        const signMap = gSignMap[listID];
        const recycleMap = gRecycleMap[listID];
        if (!signMap || !recycleMap) throw new Error('componentAtIndex called on removed list');
        const childCtx = ctx[cellIndex];
        if (!childCtx) throw new Error('childCtx not found');
        const platformInfo = childCtx.__listItemPlatformInfo || {};
        var _platformInfo_reuseidentifier;
        const uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        const recycleSignMap = recycleMap.get(uniqID);
        if (childCtx.__elements) {
            /**
             * If this situation is encountered, there might be two cases:
             * 1. Reusing with itself
             *    In this case, enqueueComponent will be triggered first, followed by componentAtIndex.
             * 2. Moving
             *    In this case, the trigger order is uncertain; componentAtIndex might be triggered first, or enqueueComponent might be triggered first.
             *
             * When enqueueComponent is triggered first, there must be an item in the reuse pool with the same sign as here, which can be returned directly.
             * When componentAtIndex is triggered first, a clone needs to be made first, then follow the logic for adding or reusing. The cloned item will enter the reuse pool in the subsequent enqueueComponent.
             */ const root = childCtx.__elements[0];
            const sign = __GetElementUniqueID(root);
            if (recycleSignMap === null || recycleSignMap === void 0 ? void 0 : recycleSignMap.has(sign)) {
                signMap.set(sign, childCtx);
                recycleSignMap.delete(sign);
                if (!enableBatchRender) __FlushElementTree(root, {
                    triggerLayout: true,
                    operationID,
                    elementID: sign,
                    listID
                });
                else if (enableBatchRender && asyncFlush) __FlushElementTree(root, {
                    asyncFlush: true
                });
                return sign;
            } else {
                const newCtx = childCtx.takeElements();
                signMap.set(sign, newCtx);
            }
        }
        if (recycleSignMap && recycleSignMap.size > 0) {
            const [first] = recycleSignMap;
            const [sign, oldCtx] = first;
            recycleSignMap.delete(sign);
            (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_0__.hydrate)(oldCtx, childCtx);
            oldCtx.unRenderElements();
            const root = childCtx.__element_root;
            if (!enableBatchRender) {
                const flushOptions = {
                    triggerLayout: true,
                    operationID,
                    elementID: sign,
                    listID
                };
                if (enableReuseNotification) flushOptions.listReuseNotification = {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                };
                __FlushElementTree(root, flushOptions);
            } else if (enableBatchRender && asyncFlush) {
                const flushOptions = {
                    asyncFlush: true
                };
                if (enableReuseNotification) flushOptions.listReuseNotification = {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                };
                __FlushElementTree(root, flushOptions);
            }
            signMap.set(sign, childCtx);
            (0,_lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_1__.commitMainThreadPatchUpdate)(undefined);
            return sign;
        }
        childCtx.ensureElements();
        const root = childCtx.__element_root;
        __AppendElement(list, root);
        const sign = __GetElementUniqueID(root);
        if (!enableBatchRender) __FlushElementTree(root, {
            triggerLayout: true,
            operationID,
            elementID: sign,
            listID
        });
        else if (enableBatchRender && asyncFlush) __FlushElementTree(root, {
            asyncFlush: true
        });
        signMap.set(sign, childCtx);
        (0,_lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_1__.commitMainThreadPatchUpdate)(undefined);
        return sign;
    };
    const componentAtIndexes = (list, listID, cellIndexes, operationIDs, enableReuseNotification, asyncFlush)=>{
        const uiSigns = cellIndexes.map((cellIndex, index)=>{
            var _operationIDs_index;
            const operationID = (_operationIDs_index = operationIDs[index]) !== null && _operationIDs_index !== void 0 ? _operationIDs_index : 0;
            return componentAtIndex(list, listID, cellIndex, operationID, enableReuseNotification, true, asyncFlush);
        });
        __FlushElementTree(list, {
            triggerLayout: true,
            operationIDs: operationIDs,
            elementIDs: uiSigns,
            listID
        });
    };
    return [
        componentAtIndex,
        componentAtIndexes
    ];
}
function enqueueComponentFactory() {
    const enqueueComponent = (_, listID, sign)=>{
        const signMap = gSignMap[listID];
        const recycleMap = gRecycleMap[listID];
        if (!signMap || !recycleMap) throw new Error('enqueueComponent called on removed list');
        const childCtx = signMap.get(sign);
        if (!childCtx) return;
        const platformInfo = childCtx.__listItemPlatformInfo || {};
        var _platformInfo_reuseidentifier;
        const uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        if (!recycleMap.has(uniqID)) recycleMap.set(uniqID, new Map());
        recycleMap.get(uniqID).set(sign, childCtx);
    };
    return enqueueComponent;
}
function snapshotCreateList(pageId, _ctx, _expIndex) {
    const signMap = new Map();
    const recycleMap = new Map();
    const [componentAtIndex, componentAtIndexes] = componentAtIndexFactory([]);
    const list = __CreateList(pageId, componentAtIndex, enqueueComponentFactory(), {}, componentAtIndexes);
    const listID = __GetElementUniqueID(list);
    gSignMap[listID] = signMap;
    gRecycleMap[listID] = recycleMap;
    return list;
}
function snapshotDestroyList(si) {
    const [, elementIndex] = si.__snapshot_def.slot[0];
    const list = si.__elements[elementIndex];
    const listID = __GetElementUniqueID(list);
    delete gSignMap[listID];
    delete gRecycleMap[listID];
} //# sourceMappingURL=list.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InitDataConsumer: () => (InitDataConsumer),
  InitDataProvider: () => (InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_10__.MainThreadRef),
  root: () => (root),
  runOnBackground: () => (/* reexport safe */ _worklet_runOnBackground_js__WEBPACK_IMPORTED_MODULE_8__.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _worklet_runOnMainThread_js__WEBPACK_IMPORTED_MODULE_9__.runOnMainThread),
  useInitData: () => (useInitData),
  useInitDataChanged: () => (useInitDataChanged),
  useLynxGlobalEventListener: () => (/* reexport safe */ _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_4__.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_10__.useMainThreadRef),
  withInitDataInState: () => (/* reexport safe */ _compat_initData_js__WEBPACK_IMPORTED_MODULE_3__.withInitDataInState)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");
/* ESM import */var _compat_initData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js");
/* ESM import */var _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/useLynxGlobalEventListener.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _lynx_tt_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/tt.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _worklet_runOnBackground_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js");
/* ESM import */var _worklet_runOnMainThread_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnMainThread.js");
/* ESM import */var _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRef.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.








/**
 * The default and only root of ReactLynx for you to render JSX
 * @example
 * ```ts
 * import { root } from "@lynx-js/react"
 * ```
 *
 * @public
 */ const root = {
    render: (jsx)=>{
        _root_js__WEBPACK_IMPORTED_MODULE_7__.__root.__jsx = jsx;
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(jsx, _root_js__WEBPACK_IMPORTED_MODULE_7__.__root);
        if (true) // `firstScreen` message might have been reached.
        (0,_lynx_tt_js__WEBPACK_IMPORTED_MODULE_6__.flushDelayedLifecycleEvents)();
        else {}
    },
    registerDataProcessors: (dataProcessorDefinition)=>{
        lynx.registerDataProcessors(dataProcessorDefinition);
    }
};
const _InitData = /* @__PURE__ */ (0,_compat_initData_js__WEBPACK_IMPORTED_MODULE_3__.factory)({
    createContext: preact_compat__WEBPACK_IMPORTED_MODULE_1__.createContext,
    useState: preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_1__.createElement,
    useLynxGlobalEventListener: _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_4__.useLynxGlobalEventListener
}, '__initData', 'onDataChanged');
/**
 * The {@link https://react.dev/reference/react/createContext#provider | Provider} Component that provide `initData`,
 * you must wrap your JSX inside it
 * @group Components
 *
 * @example
 *
 * ```ts
 * import { root } from "@lynx-js/react"
 *
 * function App() {
 *   return (
 *     <InitDataConsumer children={(initData) => <view>...</view>}/>
 *   )
 * }
 *
 * root.render(
 *   <InitDataProvider>
 *      <App/>
 *   </InitDataProvider>
 * );
 *
 * ```
 *
 * @public
 */ const InitDataProvider = /* @__PURE__ */ _InitData.Provider();
/**
 * The {@link https://react.dev/reference/react/createContext#consumer | Consumer} Component that provide `initData`.
 * This should be used with {@link InitDataProvider}
 * @group Components
 * @public
 */ const InitDataConsumer = /* @__PURE__ */ _InitData.Consumer();
/**
 * A React Hooks for you to get `initData`.
 * If `initData` is changed, a re-render will be triggered automatically.
 *
 * @example
 *
 * ```ts
 * function App() {
 *   const initData = useInitData();
 *
 *   initData.someProperty // use it
 * }
 * ```
 *
 * @public
 */ const useInitData = /* @__PURE__ */ _InitData.use();
/**
 * A React Hooks for you to get notified when `initData` changed.
 *
 * @example
 * ```ts
 * function App() {
 *   useInitDataChanged((data) => {
 *     data.someProperty // can use it
 *   })
 * }
 * ```
 * @public
 */ const useInitDataChanged = /* @__PURE__ */ _InitData.useChanged();




 //# sourceMappingURL=lynx-api.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForce: () => (/* reexport safe */ _lynx_runWithForce_js__WEBPACK_IMPORTED_MODULE_9__.runWithForce)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _debug_profile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/debug/profile.js");
/* ESM import */var _document_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/document.js");
/* ESM import */var _lifecycle_delayUnmount_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/delayUnmount.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _lynx_env_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/env.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _lynx_tt_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/tt.js");
/* ESM import */var _lynx_runWithForce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/runWithForce.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

// to make sure preact's hooks to register earlier than ours









// TODO: replace this with __PROFILE__
if (false) {}
// Trick Preact and TypeScript to accept our custom document adapter.
preact__WEBPACK_IMPORTED_MODULE_0__.options.document = _document_js__WEBPACK_IMPORTED_MODULE_3__.document;
(0,_document_js__WEBPACK_IMPORTED_MODULE_3__.setupBackgroundDocument)();
(0,_lynx_tt_js__WEBPACK_IMPORTED_MODULE_8__.injectTt)();
if (false) {}
else {
    (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__.replaceCommitHook)();
    (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_5__.replaceRequestAnimationFrame)();
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_7__.initTimingAPI)();
    (0,_lifecycle_delayUnmount_js__WEBPACK_IMPORTED_MODULE_4__.initDelayUnmount)();
}
(0,_lynx_env_js__WEBPACK_IMPORTED_MODULE_6__.setupLynxTestingEnv)(); //# sourceMappingURL=lynx.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/component.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _performance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




{
    const __Component = preact__WEBPACK_IMPORTED_MODULE_0__.Component;
    __Component.prototype._reactAppInstance = lynxCoreInject.tt;
    __Component.prototype.getNodeRef = function(a, b) {
        if (true) lynx.reportError(new Error('getNodeRef is deprecated and has different behavior in ReactLynx 3.0, please use ref or lynx.createSelectorQuery instead.'));
        return lynxCoreInject.tt._reactLynx.ReactComponent.prototype.getNodeRef.call({
            _type: '',
            _nativeApp: lynxCoreInject.tt._nativeApp,
            _uiModule: lynxCoreInject.tt._nativeApp.nativeModuleProxy.LynxUIMethodModule,
            _reactAppInstance: lynxCoreInject.tt
        }, a, b);
    };
    __Component.prototype.getNodeRefFromRoot = function(a) {
        if (true) lynx.reportError(new Error('getNodeRefFromRoot is deprecated and has different behavior in ReactLynx 3.0, please use ref or lynx.createSelectorQuery instead.'));
        return lynxCoreInject.tt._reactLynx.ReactComponent.prototype.getNodeRefFromRoot.call({
            _type: '',
            _nativeApp: lynxCoreInject.tt._nativeApp,
            _uiModule: lynxCoreInject.tt._nativeApp.nativeModuleProxy.LynxUIMethodModule,
            _reactAppInstance: lynxCoreInject.tt
        }, a);
    };
    __Component.prototype.registerModule = function(name, module) {
        this._reactAppInstance.registerModule(name, module);
    };
    __Component.prototype.getJSModule = function(name) {
        return this._reactAppInstance.getJSModule(name);
    };
    __Component.prototype.addGlobalEventListener = function(eventName, callback, context) {
        return this._reactAppInstance.getJSModule('GlobalEventEmitter').addListener(eventName, callback, context);
    };
    __Component.prototype.getElementById = function(id) {
        if (true) lynx.reportError(new Error('getElementById on component instance is deprecated and has different behavior in ReactLynx 3.0, please use ref or lynx.getElementById instead.'));
        return lynx.getElementById(id);
    };
    __Component.prototype.GlobalEventEmitter = lynxCoreInject.tt.GlobalEventEmitter;
    __Component.prototype.createSelectorQuery = function() {
        if (true) lynx.reportError(new Error('createSelectorQuery on component instance is deprecated and has different behavior in ReactLynx 3.0, please use ref or lynx.createSelectorQuery instead.'));
        return lynx.createSelectorQuery();
    };
    const oldSetState = __Component.prototype.setState;
    __Component.prototype.setState = function(state, callback) {
        oldSetState.call(this, state, callback);
        // @ts-ignore
        const timingFlag = this[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_STATE][_performance_js__WEBPACK_IMPORTED_MODULE_1__.PerfSpecificKey];
        if (timingFlag) {
            _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_2__.globalFlushOptions.__lynx_timing_flag = timingFlag;
            (0,_performance_js__WEBPACK_IMPORTED_MODULE_1__.markTimingLegacy)(_performance_js__WEBPACK_IMPORTED_MODULE_1__.PerformanceTimingKeys.updateSetStateTrigger, timingFlag);
            this[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_STATE][_performance_js__WEBPACK_IMPORTED_MODULE_1__.PerfSpecificKey] = '';
        }
    };
} //# sourceMappingURL=component.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/dynamic-js.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __dynamicImport: () => (__dynamicImport),
  loadDynamicJS: () => (loadDynamicJS)
});
/* ESM import */var _lazy_bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function loadDynamicJS(url) {
    return new Promise((resolve, reject)=>{
        lynx.requireModuleAsync(url, (err, data)=>{
            if (err) reject(err);
            else resolve(data);
        });
    });
}
function __dynamicImport(url, options) {
    var _options_with;
    const t = options === null || options === void 0 ? void 0 : (_options_with = options.with) === null || _options_with === void 0 ? void 0 : _options_with.type;
    if (t === 'component' || t === 'tsx' || t === 'jsx') return (0,_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_0__.loadLazyBundle)(url);
    else return loadDynamicJS(url);
} //# sourceMappingURL=dynamic-js.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/env.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupLynxTestingEnv: () => (setupLynxTestingEnv)
});
function setupLynxTestingEnv() {
    {
        const { initData, updateData } = lynxCoreInject.tt._params;
        // @ts-ignore
        lynx.__initData = {
            ...initData,
            ...updateData
        };
        lynx.registerDataProcessors = function() {};
    }
} //# sourceMappingURL=env.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadLazyBundle: () => (loadLazyBundle),
  mainThreadLazy: () => (mainThreadLazy),
  makeSyncThen: () => (makeSyncThen)
});
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/compat/dist/compat.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * To make code below works
 * const App1 = lazy(() => import("./x").then(({App1}) => ({default: App1})))
 * const App2 = lazy(() => import("./x").then(({App2}) => ({default: App2})))
 * @internal
 */ const makeSyncThen = function(result) {
    return function(onF) {
        if (onF) {
            let ret;
            try {
                ret = onF(result);
            } catch (e) {
                return Promise.reject(e);
            }
            // @ts-ignore
            if (ret && typeof ret.then === 'function' /* `thenable` object */ ) //   import("./x").then(() => new Promise(...))
            // )
            // Calling `then` and passing a callback is standard behavior
            // but in Lepus runtime the callback will never be called
            // So can be simplified to code below
            return new Promise(()=>{});
            const p = Promise.resolve(ret);
            // @ts-ignore
            p.then = makeSyncThen(ret);
            return p;
        }
        return this;
    };
};
/**
 * Load dynamic component from source. Designed to be used with `lazy`.
 * @param source - where dynamic component template.js locates
 * @returns
 * @public
 */ const loadLazyBundle = /*#__PURE__*/ (()=>{
    lynx.loadLazyBundle = loadLazyBundle;
    function loadLazyBundle(source) {
        return new Promise((resolve, reject)=>{
            const callback = (result)=>{
                const { code, detail } = result;
                if (code === 0) {
                    const { schema } = detail;
                    const exports = lynxCoreInject.tt.getDynamicComponentExports(schema);
                    // `code === 0` means that the lazy bundle has been successfully parsed. However,
                    // its javascript files may still fail to run, which would prevent the retrieval of the exports object.
                    if (exports) {
                        resolve(exports);
                        return;
                    }
                }
                reject(new Error('Lazy bundle load failed: ' + JSON.stringify(result)));
            };
            if (typeof lynx.QueryComponent === 'function') lynx.QueryComponent(source, callback);
            else lynx.getNativeLynx().QueryComponent(source, callback);
        });
    }
    return loadLazyBundle;
})();
/**
 * @internal
 */ function mainThreadLazy(loader) {
    const Lazy = (0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.lazy)(loader);
    function _Lazy(props) {
        try {
            // @ts-expect-error `Lazy` returned from `backgroundLazy` should be a FC
            return Lazy(props);
        } catch (e) {
            // We should never throw at mainThread
            return (0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact_compat__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
        }
    }
    return _Lazy;
} //# sourceMappingURL=lazy-bundle.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PerfSpecificKey: () => (PerfSpecificKey),
  PerformanceTimingFlags: () => (PerformanceTimingFlags),
  PerformanceTimingKeys: () => (PerformanceTimingKeys),
  PipelineOrigins: () => (PipelineOrigins),
  beginPipeline: () => (beginPipeline),
  globalPipelineOptions: () => (globalPipelineOptions),
  initTimingAPI: () => (initTimingAPI),
  markTiming: () => (markTiming),
  markTimingLegacy: () => (markTimingLegacy),
  setPipeline: () => (setPipeline)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




var PerformanceTimingKeys;
(function(PerformanceTimingKeys) {
    PerformanceTimingKeys[PerformanceTimingKeys["updateSetStateTrigger"] = 0] = "updateSetStateTrigger";
    PerformanceTimingKeys[PerformanceTimingKeys["updateDiffVdomStart"] = 1] = "updateDiffVdomStart";
    PerformanceTimingKeys[PerformanceTimingKeys["updateDiffVdomEnd"] = 2] = "updateDiffVdomEnd";
    // updateSetStateTrigger, updateDiffVdomStart and updateDiffVdomEnd is deprecated
    PerformanceTimingKeys[PerformanceTimingKeys["diffVdomStart"] = 3] = "diffVdomStart";
    PerformanceTimingKeys[PerformanceTimingKeys["diffVdomEnd"] = 4] = "diffVdomEnd";
    PerformanceTimingKeys[PerformanceTimingKeys["packChangesStart"] = 5] = "packChangesStart";
    PerformanceTimingKeys[PerformanceTimingKeys["packChangesEnd"] = 6] = "packChangesEnd";
    PerformanceTimingKeys[PerformanceTimingKeys["parseChangesStart"] = 7] = "parseChangesStart";
    PerformanceTimingKeys[PerformanceTimingKeys["parseChangesEnd"] = 8] = "parseChangesEnd";
    PerformanceTimingKeys[PerformanceTimingKeys["patchChangesStart"] = 9] = "patchChangesStart";
    PerformanceTimingKeys[PerformanceTimingKeys["patchChangesEnd"] = 10] = "patchChangesEnd";
    PerformanceTimingKeys[PerformanceTimingKeys["hydrateParseSnapshotStart"] = 11] = "hydrateParseSnapshotStart";
    PerformanceTimingKeys[PerformanceTimingKeys["hydrateParseSnapshotEnd"] = 12] = "hydrateParseSnapshotEnd";
    PerformanceTimingKeys[PerformanceTimingKeys["mtsRenderStart"] = 13] = "mtsRenderStart";
    PerformanceTimingKeys[PerformanceTimingKeys["mtsRenderEnd"] = 14] = "mtsRenderEnd";
})(PerformanceTimingKeys || (PerformanceTimingKeys = {}));
const PerformanceTimingFlags = {
    reactLynxHydrate: 'react_lynx_hydrate'
};
const PipelineOrigins = {
    reactLynxHydrate: 'reactLynxHydrate',
    updateTriggeredByBts: 'updateTriggeredByBts'
};
/**
 * @deprecated used by old timing api(setState timing flag)
 */ const PerfSpecificKey = '__lynx_timing_flag';
let timingFlag;
let shouldMarkDiffVdomStart = false;
let shouldMarkDiffVdomEnd = false;
let globalPipelineOptions;
/**
 * @deprecated used by old timing api(setState timing flag)
 */ function markTimingLegacy(key, timingFlag_) {
    var _lynx_getNativeApp_markTiming, _lynx_getNativeApp;
    switch(key){
        case PerformanceTimingKeys.updateSetStateTrigger:
            shouldMarkDiffVdomStart = true;
            shouldMarkDiffVdomEnd = true;
            timingFlag = timingFlag_;
            break;
        case PerformanceTimingKeys.updateDiffVdomStart:
            /* v8 ignore start */ if (!shouldMarkDiffVdomStart) return;
            /* v8 ignore stop */ shouldMarkDiffVdomStart = false;
            break;
        case PerformanceTimingKeys.updateDiffVdomEnd:
            if (!shouldMarkDiffVdomEnd) return;
            shouldMarkDiffVdomEnd = false;
            break;
    }
    (_lynx_getNativeApp_markTiming = (_lynx_getNativeApp = lynx.getNativeApp()).markTiming) === null || _lynx_getNativeApp_markTiming === void 0 ? void 0 : _lynx_getNativeApp_markTiming.call(_lynx_getNativeApp, timingFlag, PerformanceTimingKeys[key]);
}
function beginPipeline(needTimestamps, pipelineOrigin, timingFlag) {
    var _lynx_performance__generatePipelineOptions, _lynx_performance;
    globalPipelineOptions = (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__generatePipelineOptions = _lynx_performance._generatePipelineOptions) === null || _lynx_performance__generatePipelineOptions === void 0 ? void 0 : _lynx_performance__generatePipelineOptions.call(_lynx_performance);
    if (globalPipelineOptions) {
        var _lynx_performance__onPipelineStart, _lynx_performance1, _lynx_performance__onPipelineStart1, _lynx_performance2, _lynx_performance__bindPipelineIdWithTimingFlag, _lynx_performance3;
        globalPipelineOptions.needTimestamps = needTimestamps;
        globalPipelineOptions.pipelineOrigin = pipelineOrigin;
        globalPipelineOptions.dsl = 'reactLynx';
        switch(pipelineOrigin){
            case PipelineOrigins.reactLynxHydrate:
                globalPipelineOptions.stage = 'hydrate';
                break;
            case PipelineOrigins.updateTriggeredByBts:
                globalPipelineOptions.stage = 'update';
                break;
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isSdkVersionGt)(3, 0)) (_lynx_performance1 = lynx.performance) === null || _lynx_performance1 === void 0 ? void 0 : (_lynx_performance__onPipelineStart = _lynx_performance1._onPipelineStart) === null || _lynx_performance__onPipelineStart === void 0 ? void 0 : _lynx_performance__onPipelineStart.call(_lynx_performance1, globalPipelineOptions.pipelineID, globalPipelineOptions);
        else (_lynx_performance2 = lynx.performance) === null || _lynx_performance2 === void 0 ? void 0 : (_lynx_performance__onPipelineStart1 = _lynx_performance2._onPipelineStart) === null || _lynx_performance__onPipelineStart1 === void 0 ? void 0 : _lynx_performance__onPipelineStart1.call(_lynx_performance2, globalPipelineOptions.pipelineID);
        if (timingFlag) (_lynx_performance3 = lynx.performance) === null || _lynx_performance3 === void 0 ? void 0 : (_lynx_performance__bindPipelineIdWithTimingFlag = _lynx_performance3._bindPipelineIdWithTimingFlag) === null || _lynx_performance__bindPipelineIdWithTimingFlag === void 0 ? void 0 : _lynx_performance__bindPipelineIdWithTimingFlag.call(_lynx_performance3, globalPipelineOptions.pipelineID, timingFlag);
    }
}
function setPipeline(pipeline) {
    globalPipelineOptions = pipeline;
}
function markTiming(timestampKey, force) {
    var _lynx_performance__markTiming, _lynx_performance;
    if (globalPipelineOptions && (force || globalPipelineOptions.needTimestamps)) (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__markTiming = _lynx_performance._markTiming) === null || _lynx_performance__markTiming === void 0 ? void 0 : _lynx_performance__markTiming.call(_lynx_performance, globalPipelineOptions.pipelineID, PerformanceTimingKeys[timestampKey]);
}
function initTimingAPI() {
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = (vnode)=>{
        // check `__globalSnapshotPatch` to make sure this only runs after hydrate
        if (_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_2__.__globalSnapshotPatch) {
            if (!globalPipelineOptions) {
                beginPipeline(false, PipelineOrigins.updateTriggeredByBts);
                markTiming(PerformanceTimingKeys.diffVdomStart, true);
            }
            if (shouldMarkDiffVdomStart) markTimingLegacy(PerformanceTimingKeys.updateDiffVdomStart);
        }
        oldDiff === null || oldDiff === void 0 ? void 0 : oldDiff(vnode);
    };
}
/**
 * @internal
 */  //# sourceMappingURL=performance.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/runWithForce.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForce: () => (runWithForce)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");


const sForcedVNode = Symbol('FORCE');
function runWithForce(cb) {
    // save vnode and its `_component` in WeakMap
    const m = new WeakMap();
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = (vnode)=>{
        if (oldDiff) oldDiff(vnode);
        // when `options[DIFF]` is called, a newVnode is passed in
        // so its `vnode[COMPONENT]` should be null,
        // but it will be set later
        Object.defineProperty(vnode, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT, {
            configurable: true,
            set (c) {
                m.set(vnode, c);
                if (c) c[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.FORCE] = true;
            },
            get () {
                return m.get(vnode);
            }
        });
        vnode[sForcedVNode] = true;
    };
    const oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = (vnode)=>{
        if (oldDiffed) oldDiffed(vnode);
        // There would be cases when `options[DIFF]` has been reset while options[DIFFED] is not,
        // so we need to check if `vnode` is patched by `options[DIFF]`.
        // We only want to change the patched vnode
        if (vnode[sForcedVNode]) {
            // delete is a reverse operation of previous `Object.defineProperty`
            delete vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
            delete vnode[sForcedVNode];
            // restore
            vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT] = m.get(vnode);
        }
    };
    try {
        cb();
    } finally{
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = oldDiff;
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = oldDiffed;
    }
} //# sourceMappingURL=runWithForce.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/tt.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  flushDelayedLifecycleEvents: () => (flushDelayedLifecycleEvents),
  injectTt: () => (injectTt),
  runWithForce: () => (/* reexport safe */ _runWithForce_js__WEBPACK_IMPORTED_MODULE_4__.runWithForce)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _performance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js");
/* ESM import */var _runWithForce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lynx/runWithForce.js");
/* ESM import */var _lifecycle_destroy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js");
/* ESM import */var _lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayEvents.js");
/* ESM import */var _lifecycle_event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayLifecycleEvents.js");
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _lifecycle_reload_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/reload.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _worklet_destroy_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
















function injectTt() {
    // @ts-ignore
    const tt = lynxCoreInject.tt;
    tt.OnLifecycleEvent = onLifecycleEvent;
    tt.publishEvent = _lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__.delayedPublishEvent;
    tt.publicComponentEvent = delayedPublicComponentEvent;
    tt.callDestroyLifetimeFun = ()=>{
        (0,_worklet_destroy_js__WEBPACK_IMPORTED_MODULE_14__.destroyWorklet)();
        (0,_lifecycle_destroy_js__WEBPACK_IMPORTED_MODULE_5__.destroyBackground)();
    };
    tt.updateGlobalProps = updateGlobalProps;
    tt.updateCardData = updateCardData;
    tt.onAppReload = _lifecycle_reload_js__WEBPACK_IMPORTED_MODULE_9__.reloadBackground;
    tt.processCardConfig = ()=>{
    // used to updateTheme, no longer rely on this function
    };
}
function onLifecycleEvent([type, data]) {
    const hasRootRendered = _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_10__.CHILDREN in _root_js__WEBPACK_IMPORTED_MODULE_11__.__root;
    // never called `render(<App/>, __root)`
    // happens if user call `root.render()` async
    if (!hasRootRendered) {
        (0,_lifecycle_event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_7__.delayLifecycleEvent)(type, data);
        return;
    }
    if (false) {}
    try {
        onLifecycleEventImpl(type, data);
    } catch (e) {
        lynx.reportError(e);
    }
    if (false) {}
}
function onLifecycleEventImpl(type, data) {
    switch(type){
        case _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.firstScreen:
            {
                const { root: lepusSide, refPatch, jsReadyEventIdSwap } = data;
                if (false) {}
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.beginPipeline)(true, _performance_js__WEBPACK_IMPORTED_MODULE_2__.PipelineOrigins.reactLynxHydrate, _performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingFlags.reactLynxHydrate);
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.hydrateParseSnapshotStart);
                const before = JSON.parse(lepusSide);
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.hydrateParseSnapshotEnd);
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.diffVdomStart);
                const snapshotPatch = (0,_backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_3__.hydrate)(before, _root_js__WEBPACK_IMPORTED_MODULE_11__.__root);
                if (false) {}
                (0,_performance_js__WEBPACK_IMPORTED_MODULE_2__.markTiming)(_performance_js__WEBPACK_IMPORTED_MODULE_2__.PerformanceTimingKeys.diffVdomEnd);
                // TODO: It seems `delayedEvents` and `delayedLifecycleEvents` should be merged into one array to ensure the proper order of events.
                flushDelayedLifecycleEvents();
                if (_lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__.delayedEvents) {
                    _lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__.delayedEvents.forEach((args)=>{
                        const [handlerName, data] = args;
                        let [idStr, ...rest] = handlerName.split(':');
                        while(jsReadyEventIdSwap[idStr])idStr = jsReadyEventIdSwap[idStr];
                        try {
                            publishEvent([
                                idStr,
                                ...rest
                            ].join(':'), data);
                        } catch (e) {
                            lynx.reportError(e);
                        }
                    });
                    _lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__.delayedEvents.length = 0;
                }
                lynxCoreInject.tt.publishEvent = publishEvent;
                lynxCoreInject.tt.publicComponentEvent = publicComponentEvent;
                if (false) {}
                if (refPatch) {
                    _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_12__.globalRefsToSet.set(0, JSON.parse(refPatch));
                    (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_12__.updateBackgroundRefs)(0);
                }
                if (false) {}
                // console.debug("********** After hydration:");
                // printSnapshotInstance(__root as BackgroundSnapshotInstance);
                if (false) {}
                const commitTaskId = (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_8__.genCommitTaskId)();
                const patchList = {
                    patchList: [
                        {
                            snapshotPatch,
                            id: commitTaskId
                        }
                    ]
                };
                const obj = (0,_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_8__.commitPatchUpdate)(patchList, {
                    isHydration: true
                });
                lynx.getNativeApp().callLepusMethod(_lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.patchUpdate, obj, ()=>{
                    (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_12__.updateBackgroundRefs)(commitTaskId);
                    _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_8__.globalCommitTaskMap.forEach((commitTask, id)=>{
                        if (id > commitTaskId) return;
                        commitTask();
                        _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_8__.globalCommitTaskMap["delete"](id);
                    });
                });
                break;
            }
        case _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.globalEventFromLepus:
            {
                const [eventName, params] = data;
                lynx.getJSModule('GlobalEventEmitter').trigger(eventName, params);
                break;
            }
        case _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.LifecycleConstant.ref:
            {
                const { refPatch, commitTaskId } = data;
                if (commitTaskId) _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_12__.globalRefsToSet.set(commitTaskId, JSON.parse(refPatch));
                else {
                    _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_12__.globalRefsToSet.set(0, JSON.parse(refPatch));
                    (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_12__.updateBackgroundRefs)(0);
                }
                break;
            }
    }
}
let flushingDelayedLifecycleEvents = false;
function flushDelayedLifecycleEvents() {
    // avoid stackoverflow
    if (flushingDelayedLifecycleEvents) return;
    flushingDelayedLifecycleEvents = true;
    if (_lifecycle_event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_7__.delayedLifecycleEvents) {
        _lifecycle_event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_7__.delayedLifecycleEvents.forEach((e)=>{
            onLifecycleEvent(e);
        });
        _lifecycle_event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_7__.delayedLifecycleEvents.length = 0;
    }
    flushingDelayedLifecycleEvents = false;
}
function publishEvent(handlerName, data) {
    var // TODO: delay js events until js ready
    _lynxCoreInject_tt_callBeforePublishEvent, _lynxCoreInject_tt;
    (_lynxCoreInject_tt_callBeforePublishEvent = (_lynxCoreInject_tt = lynxCoreInject.tt).callBeforePublishEvent) === null || _lynxCoreInject_tt_callBeforePublishEvent === void 0 ? void 0 : _lynxCoreInject_tt_callBeforePublishEvent.call(_lynxCoreInject_tt, data);
    const eventHandler = _snapshot_js__WEBPACK_IMPORTED_MODULE_13__.backgroundSnapshotInstanceManager.getValueBySign(handlerName);
    if (eventHandler) try {
        eventHandler(data);
    } catch (e) {
        lynx.reportError(e);
    }
}
function publicComponentEvent(_componentId, handlerName, data) {
    publishEvent(handlerName, data);
}
function delayedPublicComponentEvent(_componentId, handlerName, data) {
    (0,_lifecycle_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_6__.delayedPublishEvent)(handlerName, data);
}
function updateGlobalProps(newData) {
    Object.assign(lynx.__globalProps, newData);
    // Our purpose is to make sure SYNC setState inside `emit`'s listeners
    // can be batched with updateFromRoot
    // This is already done because updateFromRoot will consume all dirty flags marked by
    // the setState, and setState's flush will be a noop. No extra diffs will be needed.
    Promise.resolve().then(()=>{
        (0,_runWithForce_js__WEBPACK_IMPORTED_MODULE_4__.runWithForce)(()=>(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(_root_js__WEBPACK_IMPORTED_MODULE_11__.__root.__jsx, _root_js__WEBPACK_IMPORTED_MODULE_11__.__root));
    });
    lynxCoreInject.tt.GlobalEventEmitter.emit('onGlobalPropsChanged');
}
function updateCardData(newData, options) {
    const { ['__lynx_timing_flag']: performanceTimingFlag, ...restNewData } = newData;
    if (performanceTimingFlag) lynx.reportError(new Error(`Received unsupported updateData with \`__lynx_timing_flag\` (value "${performanceTimingFlag}"), the timing flag is ignored`));
    const { type = _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.NativeUpdateDataType.UPDATE } = options || {};
    if (type == _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_1__.NativeUpdateDataType.RESET) lynx.__initData = {};
    // COW when modify `lynx.__initData` to make sure Provider & Consumer works
    // @ts-ignore
    lynx.__initData = Object.assign({}, lynx.__initData, restNewData);
    lynxCoreInject.tt.GlobalEventEmitter.emit('onDataChanged');
}
 //# sourceMappingURL=tt.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderOpcodesInto: () => (renderOpcodesInto),
  ssrHydrateByOpcodes: () => (ssrHydrateByOpcodes)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



var Opcode;
(function(Opcode) {
    Opcode[Opcode["Begin"] = 0] = "Begin";
    Opcode[Opcode["End"] = 1] = "End";
    Opcode[Opcode["Attr"] = 2] = "Attr";
    Opcode[Opcode["Text"] = 3] = "Text";
})(Opcode || (Opcode = {}));
function ssrHydrateByOpcodes(opcodes, into, refMap) {
    let top = into;
    const stack = [
        into
    ];
    for(let i = 0; i < opcodes.length;){
        const opcode = opcodes[i];
        switch(opcode){
            case Opcode.Begin:
                {
                    const p = top;
                    const [type, __id, elements] = opcodes[i + 1];
                    top = new _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.SnapshotInstance(type, __id);
                    top.__pendingElements = elements;
                    p.insertBefore(top);
                    stack.push(top);
                    i += 2;
                    break;
                }
            case Opcode.End:
                {
                    // @ts-ignore
                    top[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.CHILDREN] = undefined;
                    top.__elements = top.__pendingElements.map(({ ssrID })=>refMap[ssrID]);
                    top.__element_root = top.__elements[0];
                    delete top.__pendingElements;
                    if (top.__snapshot_def.isListHolder) {
                        const listElement = top.__element_root;
                        const listElementUniqueID = __GetElementUniqueID(listElement);
                        const signMap = _list_js__WEBPACK_IMPORTED_MODULE_0__.gSignMap[listElementUniqueID] = new Map();
                        _list_js__WEBPACK_IMPORTED_MODULE_0__.gRecycleMap[listElementUniqueID] = new Map();
                        const enqueueFunc = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.enqueueComponentFactory)();
                        const [componentAtIndex, componentAtIndexes] = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.componentAtIndexFactory)(top.childNodes);
                        for (const child of top.childNodes)if (child.__element_root) {
                            const childElementUniqueID = __GetElementUniqueID(child.__element_root);
                            signMap.set(childElementUniqueID, child);
                            enqueueFunc(listElement, listElementUniqueID, childElementUniqueID);
                        }
                        __UpdateListCallbacks(listElement, componentAtIndex, enqueueFunc, componentAtIndexes);
                    }
                    stack.pop();
                    const p = stack[stack.length - 1];
                    top = p;
                    i += 1;
                    break;
                }
            case Opcode.Attr:
                {
                    const key = opcodes[i + 1];
                    const value = opcodes[i + 2];
                    top.setAttribute(key, value);
                    i += 3;
                    break;
                }
            case Opcode.Text:
                {
                    const [[type, __id, elements], text] = opcodes[i + 1];
                    const s = new _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.SnapshotInstance(type, __id);
                    s.setAttribute(0, text);
                    top.insertBefore(s);
                    s.__elements = elements.map(({ ssrID })=>refMap[ssrID]);
                    s.__element_root = s.__elements[0];
                    i += 2;
                    break;
                }
        }
    }
}
function renderOpcodesInto(opcodes, into) {
    let top = into;
    const stack = [
        into
    ];
    for(let i = 0; i < opcodes.length;){
        const opcode = opcodes[i];
        switch(opcode){
            case Opcode.Begin:
                {
                    const p = top;
                    top = opcodes[i + 1];
                    // @ts-ignore
                    if (top.__parent) {
                        // already inserted
                        top = new _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.SnapshotInstance(top.type);
                        opcodes[i + 1] = top;
                    }
                    p.insertBefore(top);
                    stack.push(top);
                    i += 2;
                    break;
                }
            case Opcode.End:
                {
                    // @ts-ignore
                    top[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.CHILDREN] = undefined;
                    stack.pop();
                    const p = stack[stack.length - 1];
                    top = p;
                    i += 1;
                    break;
                }
            case Opcode.Attr:
                {
                    const key = opcodes[i + 1];
                    const value = opcodes[i + 2];
                    top.setAttribute(key, value);
                    i += 3;
                    break;
                }
            case Opcode.Text:
                {
                    const text = opcodes[i + 1];
                    const s = new _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.SnapshotInstance(null);
                    if (false) {}
                    s.setAttribute(0, text);
                    top.insertBefore(s);
                    i += 2;
                    break;
                }
        }
    }
} //# sourceMappingURL=opcodes.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CATCH_ERROR: () => (CATCH_ERROR),
  CHILDREN: () => (CHILDREN),
  CHILD_DID_SUSPEND: () => (CHILD_DID_SUSPEND),
  COMMIT: () => (COMMIT),
  COMPONENT: () => (COMPONENT),
  DIFF: () => (DIFF),
  DIFFED: () => (DIFFED),
  DIRTY: () => (DIRTY),
  FORCE: () => (FORCE),
  HOOK: () => (HOOK),
  MASK: () => (MASK),
  NEXT_STATE: () => (NEXT_STATE),
  PARENT: () => (PARENT),
  RENDER: () => (RENDER),
  RENDER_CALLBACKS: () => (RENDER_CALLBACKS),
  SKIP_EFFECTS: () => (SKIP_EFFECTS),
  VNODE: () => (VNODE)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const DIFF = '__b';
const RENDER = '__r';
const DIFFED = 'diffed';
const COMMIT = '__c';
const SKIP_EFFECTS = '__s';
const CATCH_ERROR = '__e';
// VNode properties
const COMPONENT = '__c';
const CHILDREN = '__k';
const PARENT = '__';
const MASK = '__m';
// Component properties
const VNODE = '__v';
const DIRTY = '__d';
const FORCE = '__e';
const NEXT_STATE = '__s';
const CHILD_DID_SUSPEND = '__c';
const RENDER_CALLBACKS = '__h';
const HOOK = '__h'; //# sourceMappingURL=constants.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __OpAttr: () => (__OpAttr),
  __OpBegin: () => (__OpBegin),
  __OpEnd: () => (__OpEnd),
  __OpText: () => (__OpText),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  render: () => (render),
  renderToStaticMarkup: () => (renderToStaticMarkup),
  renderToString: () => (renderToString)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements rendering to opcodes.
 * This module is modified from preact-render-to-string@6.0.3 to generate
 * opcodes instead of HTML strings for Lynx.
 */ // @ts-nocheck


/** @typedef {import('preact').VNode} VNode */ const EMPTY_ARR = [];
const isArray = /* @__PURE__ */ Array.isArray;
const assign = /* @__PURE__ */ Object.assign;
// Global state for the current render pass
let beforeDiff, afterDiff, renderHook, ummountHook;
/**
 * Render Preact JSX + Components to an HTML string.
 * @param {VNode} vnode	JSX Element / VNode to render
 * @param {object} [context] Initial root context object
 */ function renderToString(vnode, context) {
    // Performance optimization: `renderToString` is synchronous and we
    // therefore don't execute any effects. To do that we pass an empty
    // array to `options._commit` (`__c`). But we can go one step further
    // and avoid a lot of dirty checks and allocations by setting
    // `options._skipEffects` (`__s`) too.
    const previousSkipEffects = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS] = true;
    // store options hooks once before each synchronous render call
    beforeDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    afterDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    renderHook = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER];
    ummountHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
    const parent = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    parent[_constants_js__WEBPACK_IMPORTED_MODULE_1__.CHILDREN] = [
        vnode
    ];
    const opcodes = [];
    try {
        _renderToString(vnode, context || EMPTY_OBJ, false, undefined, parent, opcodes);
    } finally{
        // options._commit, we don't schedule any effects in this library right now,
        // so we can pass an empty queue to this hook.
        if (preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMMIT]) preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMMIT](vnode, EMPTY_ARR);
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS] = previousSkipEffects;
        EMPTY_ARR.length = 0;
    }
    return opcodes;
}
// Installed as setState/forceUpdate for function components
function markAsDirty() {
    this.__d = true;
}
const EMPTY_OBJ = {};
const __OpBegin = 0;
const __OpEnd = 1;
const __OpAttr = 2;
const __OpText = 3;
/**
 * @param {VNode} vnode
 * @param {Record<string, unknown>} context
 */ function renderClassComponent(vnode, context) {
    let type = /** @type {import("preact").ComponentClass<typeof vnode.props>} */ vnode.type;
    let c = new type(vnode.props, context);
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT] = c;
    c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.VNODE] = vnode;
    c.props = vnode.props;
    c.context = context;
    // turn off stateful re-rendering:
    c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = true;
    if (c.state == null) c.state = EMPTY_OBJ;
    if (c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.NEXT_STATE] == null) c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.NEXT_STATE] = c.state;
    if (type.getDerivedStateFromProps) c.state = assign({}, c.state, type.getDerivedStateFromProps(c.props, c.state));
    if (renderHook) renderHook(vnode);
    return c.render(c.props, c.state, context);
}
/**
 * Recursively render VNodes to HTML.
 * @param {VNode|any} vnode
 * @param {any} context
 * @param {boolean} isSvgMode
 * @param {any} selectValue
 * @param {VNode} parent
 * @param opcodes
 */ function _renderToString(vnode, context, isSvgMode, selectValue, parent, opcodes) {
    // Ignore non-rendered VNodes/values
    if (vnode == null || vnode === true || vnode === false || vnode === '') return;
    // Text VNodes: escape as HTML
    if (typeof vnode !== 'object') {
        if (typeof vnode === 'function') return;
        opcodes.push(__OpText, vnode + '');
        return;
    }
    // Recurse into children / Arrays
    if (isArray(vnode)) {
        parent[_constants_js__WEBPACK_IMPORTED_MODULE_1__.CHILDREN] = vnode;
        for(let i = 0; i < vnode.length; i++){
            let child = vnode[i];
            if (child == null || typeof child === 'boolean') continue;
            _renderToString(child, context, isSvgMode, selectValue, parent, opcodes);
        }
        return;
    }
    // VNodes have {constructor:undefined} to prevent JSON injection:
    // if (vnode.constructor !== undefined) return;
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = parent;
    if (beforeDiff) beforeDiff(vnode);
    let type = vnode.type, props = vnode.props, cctx = context, contextType, rendered, component;
    // Invoke rendering on Components
    if (typeof type === 'function') {
        if (type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment) rendered = props.children;
        else {
            contextType = type.contextType;
            if (contextType != null) {
                let provider = context[contextType.__c];
                cctx = provider ? provider.props.value : contextType.__;
            }
            if (type.prototype && typeof type.prototype.render === 'function') {
                rendered = /**#__NOINLINE__**/ renderClassComponent(vnode, cctx);
                component = vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
            } else {
                component = {
                    __v: vnode,
                    props,
                    context: cctx,
                    // silently drop state updates
                    setState: markAsDirty,
                    forceUpdate: markAsDirty,
                    __d: true,
                    // hooks
                    __h: []
                };
                vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT] = component;
                component.constructor = type;
                component.render = doRender;
                // If a hook invokes setState() to invalidate the component during rendering,
                // re-render it up to 25 times to allow "settling" of memoized states.
                // Note:
                //   This will need to be updated for Preact 11 to use internal.flags rather than component._dirty:
                //   https://github.com/preactjs/preact/blob/d4ca6fdb19bc715e49fd144e69f7296b2f4daa40/src/diff/component.js#L35-L44
                let count = 0;
                while(component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] && count++ < 25){
                    component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = false;
                    if (renderHook) renderHook(vnode);
                    rendered = component.render(props, component.state, cctx);
                }
                component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = true;
            }
            if (component.getChildContext != null) context = assign({}, context, component.getChildContext());
        }
        // When a component returns a Fragment node we flatten it in core, so we
        // need to mirror that logic here too
        let isTopLevelFragment = rendered != null && rendered.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment && rendered.key == null;
        rendered = isTopLevelFragment ? rendered.props.children : rendered;
        // Recurse into children before invoking the after-diff hook
        _renderToString(rendered, context, isSvgMode, selectValue, vnode, opcodes);
        if (afterDiff) afterDiff(vnode);
        vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = undefined;
        if (ummountHook) ummountHook(vnode);
        return;
    }
    let children;
    opcodes.push(__OpBegin, vnode);
    for(let name in props){
        let v = props[name];
        switch(name){
            case 'children':
                children = v;
                continue;
            // VDOM-specific props
            /* c8 ignore next 5 */ case 'key':
            case 'ref':
            case '__self':
            case '__source':
                continue;
            default:
        }
        // write this attribute to the buffer
        if (v != null && v !== false && typeof v !== 'function') opcodes.push(__OpAttr, name, v);
    }
    if (typeof children === 'string') opcodes.push(__OpText, children);
    else if (children != null && children !== false && children !== true) _renderToString(children, context, false, selectValue, vnode, opcodes);
    if (afterDiff) afterDiff(vnode);
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = undefined;
    if (ummountHook) ummountHook(vnode);
    opcodes.push(__OpEnd);
    return;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderToString);
const render = renderToString;
const renderToStaticMarkup = renderToString; //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/root.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __root: () => (__root),
  setRoot: () => (setRoot)
});
/* ESM import */var _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/backgroundSnapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * The internal ReactLynx's root.
 * {@link @lynx-js/react!Root | root}.
 */ let __root;
function setRoot(root) {
    __root = root;
}
setRoot(new _backgroundSnapshot_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundSnapshotInstance('root'));
 //# sourceMappingURL=root.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DynamicPartType: () => (DynamicPartType),
  SnapshotInstance: () => (SnapshotInstance),
  __page: () => (__page),
  __pageId: () => (__pageId),
  backgroundSnapshotInstanceManager: () => (backgroundSnapshotInstanceManager),
  clearPage: () => (clearPage),
  createSnapshot: () => (createSnapshot),
  entryUniqID: () => (entryUniqID),
  setupPage: () => (setupPage),
  snapshotInstanceManager: () => (snapshotInstanceManager),
  snapshotManager: () => (snapshotManager),
  traverseSnapshotInstance: () => (traverseSnapshotInstance)
});
/* ESM import */var _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




/**
 * Types of dynamic parts that can be updated in a snapshot
 * These are determined at compile time through static analysis
 */ var DynamicPartType;
(function(DynamicPartType) {
    DynamicPartType[DynamicPartType["Attr"] = 0] = "Attr";
    DynamicPartType[DynamicPartType["Spread"] = 1] = "Spread";
    DynamicPartType[DynamicPartType["Slot"] = 2] = "Slot";
    DynamicPartType[DynamicPartType["Children"] = 3] = "Children";
    DynamicPartType[DynamicPartType["ListChildren"] = 4] = "ListChildren";
    DynamicPartType[DynamicPartType["MultiChildren"] = 5] = "MultiChildren";
})(DynamicPartType || (DynamicPartType = {}));
let __page;
let __pageId = 0;
function setupPage(page) {
    __page = page;
    __pageId = __GetElementUniqueID(page);
}
function clearPage() {
    __page = undefined;
    __pageId = 0;
}
const snapshotManager = {
    values: /* @__PURE__ */ new Map([
        [
            'root',
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __page
                    ];
                },
                update: [],
                slot: [
                    [
                        DynamicPartType.Children,
                        0
                    ]
                ],
                isListHolder: false,
                cssId: 0
            }
        ],
        [
            'wrapper',
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __CreateWrapperElement(__pageId)
                    ];
                },
                update: [],
                slot: [
                    [
                        DynamicPartType.Children,
                        0
                    ]
                ],
                isListHolder: false
            }
        ],
        [
            null,
            {
                create () {
                    /* v8 ignore start */ if (false) {}
                    /* v8 ignore stop */ return [
                        __CreateElement('raw-text', __pageId)
                    ];
                },
                update: [
                    (ctx)=>{
                        /* v8 ignore start */ if (false) {}
                        /* v8 ignore stop */ if (ctx.__elements) __SetAttribute(ctx.__elements[0], 'text', ctx.__values[0]);
                    }
                ],
                slot: [],
                isListHolder: false
            }
        ]
    ])
};
const snapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
    }
};
const backgroundSnapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
    },
    updateId (id, newId) {
        const values = this.values;
        const si = values.get(id);
        values.delete(id);
        values.set(newId, si);
        si.__id = newId;
    },
    getValueBySign (str) {
        const res = str === null || str === void 0 ? void 0 : str.split(':');
        if (!res || res.length != 2 && res.length != 3) throw new Error('Invalid ctx format: ' + str);
        let id = Number(res[0]);
        const expIndex = Number(res[1]);
        const ctx = this.values.get(id);
        if (!ctx) return null;
        const spreadKey = res[2];
        if (spreadKey) return ctx.__values[expIndex][spreadKey];
        else return ctx.__values[expIndex];
    }
};
function entryUniqID(uniqID, entryName) {
    return entryName ? `${entryName}:${uniqID}` : uniqID;
}
function createSnapshot(uniqID, create, update, slot, cssId, entryName) {
    var _update_map;
    if ( true && _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.__globalSnapshotPatch && !snapshotManager.values.has(entryUniqID(uniqID, entryName)) && create !== null) // This means that `uniqID` is considered the "hash" of the snapshot.
    // When HMR (Hot Module Replacement) or fast refresh updates occur, `createSnapshot` will be re-executed with the new snapshot definition.
    _lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.__globalSnapshotPatch.push(_lifecycle_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotOperation.DEV_ONLY_AddSnapshot, uniqID, // This allows the updates to be applied to Lepus.
    // As a result, both the static part (`create`) and the dynamic parts (`update` and `slot`) can be updated.
    create.toString(), (_update_map = update === null || update === void 0 ? void 0 : update.map((f)=>f.toString())) !== null && _update_map !== void 0 ? _update_map : [], slot, cssId, entryName);
    uniqID = entryUniqID(uniqID, entryName);
    const s = {
        create,
        update,
        slot,
        cssId,
        entryName
    };
    snapshotManager.values.set(uniqID, s);
    if (slot && slot[0] && slot[0][0] === DynamicPartType.ListChildren) s.isListHolder = true;
    return uniqID;
}
function traverseSnapshotInstance(si, callback) {
    const c = si.childNodes;
    callback(si);
    for (const vv of c)traverseSnapshotInstance(vv, callback);
}
const DEFAULT_ENTRY_NAME = '__Card__';
const DEFAULT_CSS_ID = 0;
/**
 * The runtime instance of a {@link Snapshot} on the main thread that manages
 * the actual elements and handles updates to dynamic parts.
 *
 * This class is designed to be compatible with Preact's {@link ContainerNode}
 * interface for Preact's renderer to operate upon.
 */ class SnapshotInstance {
    ensureElements() {
        const { create, slot, isListHolder, cssId, entryName } = this.__snapshot_def;
        const elements = create(this);
        this.__elements = elements;
        this.__element_root = elements[0];
        if (cssId === undefined) {
            if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, DEFAULT_CSS_ID, entryName);
        } else if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, cssId, entryName);
        else __SetCSSId(this.__elements, cssId);
        const values = this.__values;
        if (values) {
            this.__values = undefined;
            this.setAttribute('values', values);
        }
        if (isListHolder) ;
        else {
            let index = 0;
            let child = this.__firstChild;
            while(child){
                child.ensureElements();
                const [type, elementIndex] = slot[index];
                switch(type){
                    case DynamicPartType.Slot:
                        __ReplaceElement(child.__element_root, elements[elementIndex]);
                        elements[elementIndex] = child.__element_root;
                        index++;
                        break;
                    /* v8 ignore start */ case DynamicPartType.MultiChildren:
                        if (__GetTag(elements[elementIndex]) === 'wrapper') __ReplaceElement(child.__element_root, elements[elementIndex]);
                        else __AppendElement(elements[elementIndex], child.__element_root);
                        index++;
                        break;
                    /* v8 ignore end */ case DynamicPartType.Children:
                    case DynamicPartType.ListChildren:
                        __AppendElement(elements[elementIndex], child.__element_root);
                        break;
                }
                child = child.__nextSibling;
            }
        }
    }
    unRenderElements() {
        const { isListHolder } = this.__snapshot_def;
        this.__elements = undefined;
        this.__element_root = undefined;
        if (isListHolder) ;
        else {
            let child = this.__firstChild;
            while(child){
                child.unRenderElements();
                child = child.__nextSibling;
            }
        }
    }
    takeElements() {
        const a = Object.create(SnapshotInstance.prototype);
        a.__id = this.__id;
        a.__snapshot_def = this.__snapshot_def;
        a.__values = this.__values;
        // all clear
        a.__parent = null;
        a.__firstChild = null;
        a.__lastChild = null;
        a.__nextSibling = null;
        a.__previousSibling = null;
        this.childNodes.map((c)=>c.takeElements()).forEach((node)=>a.__insertBefore(node));
        a.__elements = this.__elements;
        a.__element_root = this.__element_root;
        this.__elements = undefined;
        this.__element_root = undefined;
        return a;
    }
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    contains(child) {
        return child.parentNode === this;
    }
    get childNodes() {
        const nodes = [];
        let node = this.__firstChild;
        while(node){
            nodes.push(node);
            node = node.__nextSibling;
        }
        return nodes;
    }
    __insertBefore(node, beforeNode) {
        // If the node already has a parent, remove it from its current parent
        if (node.__parent) node.__parent.__removeChild(node);
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    __removeChild(node) {
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
    }
    insertBefore(newNode, existingNode) {
        const __snapshot_def = this.__snapshot_def;
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id;
            var _;
            ((_ = (__pendingListUpdates_values = _list_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _list_js__WEBPACK_IMPORTED_MODULE_1__.ListUpdateInfoRecording(this)).onInsertBefore(newNode, existingNode);
            this.__insertBefore(newNode, existingNode);
            return;
        }
        const shouldRemove = newNode.__parent === this;
        this.__insertBefore(newNode, existingNode);
        const __elements = this.__elements;
        if (__elements) {
            if (!newNode.__elements) newNode.ensureElements();
        } else return;
        const count = __snapshot_def.slot.length;
        if (count === 1) {
            const [, elementIndex] = __snapshot_def.slot[0];
            const parent = __elements[elementIndex];
            if (shouldRemove) __RemoveElement(parent, newNode.__element_root);
            if (existingNode) __InsertElementBefore(parent, newNode.__element_root, existingNode.__element_root);
            else __AppendElement(parent, newNode.__element_root);
        } else if (count > 1) {
            const index = this.__current_slot_index++;
            const [s, elementIndex] = __snapshot_def.slot[index];
            if (s === DynamicPartType.Slot) {
                __ReplaceElement(newNode.__element_root, __elements[elementIndex]);
                __elements[elementIndex] = newNode.__element_root;
            /* v8 ignore start */ } else if (s === DynamicPartType.MultiChildren) {
                if (__GetTag(__elements[elementIndex]) === 'wrapper') __ReplaceElement(newNode.__element_root, __elements[elementIndex]);
                else __AppendElement(__elements[elementIndex], newNode.__element_root);
            }
        /* v8 ignore end */ }
    }
    removeChild(child) {
        const r = ()=>{
            this.__removeChild(child);
            traverseSnapshotInstance(child, (v)=>{
                v.__parent = null;
                snapshotInstanceManager.values.delete(v.__id);
            });
        };
        const __snapshot_def = this.__snapshot_def;
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id;
            var _;
            ((_ = (__pendingListUpdates_values = _list_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _list_js__WEBPACK_IMPORTED_MODULE_1__.ListUpdateInfoRecording(this)).onRemoveChild(child);
            r();
            return;
        }
        // TODO: ref: can this be done on the background thread?
        (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_2__.unref)(child, true);
        r();
        if (this.__elements) {
            const [, elementIndex] = __snapshot_def.slot[0];
            __RemoveElement(this.__elements[elementIndex], child.__element_root);
        }
        if (child.__snapshot_def.isListHolder) (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.snapshotDestroyList)(child);
    }
    setAttribute(key, value) {
        const helper = (index, oldValue, newValue)=>{
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isDirectOrDeepEqual)(oldValue, newValue)) ;
            else this.__snapshot_def.update[index](this, index, oldValue);
        };
        if (key === 'values') {
            const oldValues = this.__values;
            this.__values = value;
            if (oldValues) for(let index = 0; index < value.length; index++)helper(index, oldValues[index], value[index]);
            else for(let index = 0; index < value.length; index++)helper(index, undefined, value[index]);
            return;
        }
        const index = typeof key === 'string' ? Number(key.slice(2)) : key;
        var _this___values;
        (_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [];
        helper(index, this.__values[index], this.__values[index] = value);
    }
    toJSON() {
        return {
            id: this.__id,
            type: this.type,
            values: this.__values,
            children: this.__firstChild ? this.childNodes : undefined
        };
    }
    constructor(type, id){
        this.__current_slot_index = 0;
        // onCreate?: () => void;
        // onAttach?: () => void;
        // onDetach?: () => void;
        // onRef?: () => void;
        // onUnref?: () => void;
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        this.__snapshot_def = snapshotManager.values.get(type);
        id || (id = snapshotInstanceManager.nextId -= 1);
        this.__id = id;
        snapshotInstanceManager.values.set(id, this);
    }
} //# sourceMappingURL=snapshot.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateEvent: () => (updateEvent)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function updateEvent(snapshot, expIndex, _oldValue, elementIndex, eventType, eventName, spreadKey) {
    const value = snapshot.__values[expIndex];
    let event;
    if (!value) event = undefined;
    else if (typeof value === 'string') event = value;
    else event = `${snapshot.__id}:${expIndex}:${spreadKey}`;
    // todo: reuseId?
    snapshot.__values[expIndex] = event;
    if (snapshot.__elements) __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
}
 //# sourceMappingURL=event.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateGesture: () => (updateGesture)
});
/* ESM import */var _gesture_processGesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGesture.js");
/* ESM import */var _lifecycle_patch_isMainThreadHydrationFinished_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrationFinished.js");


function updateGesture(snapshot, expIndex, oldValue, elementIndex, workletType) {
    if (!snapshot.__elements) return;
    if (false) {}
    const value = snapshot.__values[expIndex];
    if (workletType === 'main-thread') (0,_gesture_processGesture_js__WEBPACK_IMPORTED_MODULE_0__.processGesture)(snapshot.__elements[elementIndex], value, oldValue, !_lifecycle_patch_isMainThreadHydrationFinished_js__WEBPACK_IMPORTED_MODULE_1__.isMainThreadHydrationFinished);
    if (false) {}
} //# sourceMappingURL=gesture.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  platformInfoAttributes: () => (platformInfoAttributes),
  updateListItemPlatformInfo: () => (updateListItemPlatformInfo)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");

const platformInfoVirtualAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier'
]);
const platformInfoAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier',
    'full-span',
    'item-key',
    'sticky-top',
    'sticky-bottom',
    'estimated-height',
    'estimated-height-px',
    'estimated-main-axis-size-px'
]);
function updateListItemPlatformInfo(ctx, index, oldValue, elementIndex) {
    var __pendingListUpdates_values, _list___id;
    const newValue = ctx.__listItemPlatformInfo = ctx.__values[index];
    // @ts-ignore
    const list = ctx.__parent;
    var _;
    if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) ((_ = (__pendingListUpdates_values = _list_js__WEBPACK_IMPORTED_MODULE_0__.__pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new _list_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(list)).onSetAttribute(ctx, newValue, oldValue);
    // In this updater, unlike `updateSpread`, the shape of the value is guaranteed to be an fixed object.
    // No adding / removing keys.
    if (ctx.__elements) {
        const e = ctx.__elements[elementIndex];
        const value = ctx.__values[index];
        for(const k in value){
            if (platformInfoVirtualAttributes.has(k)) continue;
            __SetAttribute(e, k, value[k]);
        }
    }
}
 //# sourceMappingURL=platformInfo.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  globalRefsToRemove: () => (globalRefsToRemove),
  globalRefsToSet: () => (globalRefsToSet),
  markRefToRemove: () => (markRefToRemove),
  takeGlobalRefPatchMap: () => (takeGlobalRefPatchMap),
  transformRef: () => (transformRef),
  unref: () => (unref),
  updateBackgroundRefs: () => (updateBackgroundRefs),
  updateRef: () => (updateRef)
});
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _workletRef_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");



let globalRefPatch = {};
const globalRefsToRemove = /* @__PURE__ */ new Map();
const globalRefsToSet = /* @__PURE__ */ new Map();
let nextRefId = 1;
function unref(snapshot, recursive) {
    var _snapshot___ref_set, _snapshot___ref_set1, _snapshot___worklet_ref_set, _snapshot___worklet_ref_set1;
    (_snapshot___ref_set = snapshot.__ref_set) === null || _snapshot___ref_set === void 0 ? void 0 : _snapshot___ref_set.forEach((v)=>{
        globalRefPatch[v] = null;
    });
    (_snapshot___ref_set1 = snapshot.__ref_set) === null || _snapshot___ref_set1 === void 0 ? void 0 : _snapshot___ref_set1.clear();
    (_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.forEach((v)=>{
        if (v) (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_2__.workletUnRef)(v);
    });
    (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.clear();
    if (recursive) snapshot.childNodes.forEach((it)=>{
        unref(it, recursive);
    });
}
function applyRef(ref, value) {
    // TODO: ref: exceptions thrown in user functions should be able to be caught by an Error Boundary
    if (typeof ref == 'function') {
        const hasRefUnmount = typeof ref._unmount == 'function';
        if (hasRefUnmount) ref._unmount();
        if (!hasRefUnmount || value != null) // instance object itself to avoid shape
        // transitioning vnode
        ref._unmount = ref(value);
    } else ref.current = value;
}
function updateBackgroundRefs(commitId) {
    const oldRefMap = globalRefsToRemove.get(commitId);
    if (oldRefMap) {
        globalRefsToRemove.delete(commitId);
        for (const ref of oldRefMap.values())applyRef(ref, null);
    }
    const newRefMap = globalRefsToSet.get(commitId);
    if (newRefMap) {
        globalRefsToSet.delete(commitId);
        for(const sign in newRefMap){
            const ref = _snapshot_js__WEBPACK_IMPORTED_MODULE_1__.backgroundSnapshotInstanceManager.getValueBySign(sign);
            if (ref) {
                // TODO: ref: support __REF_FIRE_IMMEDIATELY__
                const v = newRefMap[sign] && lynx.createSelectorQuery().selectUniqueID(newRefMap[sign]);
                applyRef(ref, v);
            }
        }
    }
}
function updateRef(snapshot, expIndex, oldValue, elementIndex, spreadKey) {
    var _snapshot___ref_set;
    const value = snapshot.__values[expIndex];
    let ref;
    if (!value) ref = undefined;
    else if (typeof value === 'string') ref = value;
    else ref = `${snapshot.__id}:${expIndex}:${spreadKey}`;
    snapshot.__values[expIndex] = ref;
    if (snapshot.__elements && ref) {
        var _snapshot;
        __SetAttribute(snapshot.__elements[elementIndex], 'has-react-ref', true);
        const uid = __GetElementUniqueID(snapshot.__elements[elementIndex]);
        globalRefPatch[ref] = uid;
        var ___ref_set;
        (___ref_set = (_snapshot = snapshot).__ref_set) !== null && ___ref_set !== void 0 ? ___ref_set : _snapshot.__ref_set = new Set();
        snapshot.__ref_set.add(ref);
    }
    if (oldValue !== ref) (_snapshot___ref_set = snapshot.__ref_set) === null || _snapshot___ref_set === void 0 ? void 0 : _snapshot___ref_set.delete(oldValue);
}
function takeGlobalRefPatchMap() {
    const patch = globalRefPatch;
    globalRefPatch = {};
    return patch;
}
function transformRef(ref) {
    if (ref === undefined || ref === null) return ref;
    if (typeof ref === 'function' || typeof ref === 'object' && 'current' in ref) {
        if ('__ref' in ref) return ref;
        return Object.defineProperty(ref, '__ref', {
            value: nextRefId++
        });
    }
    throw new Error(`Elements' "ref" property should be a function, or an object created ` + `by createRef(), but got [${typeof ref}] instead`);
}
function markRefToRemove(sign, ref) {
    if (!ref) return;
    let oldRefs = globalRefsToRemove.get(_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__.nextCommitTaskId);
    if (!oldRefs) {
        oldRefs = new Map();
        globalRefsToRemove.set(_lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__.nextCommitTaskId, oldRefs);
    }
    oldRefs.set(sign, ref);
}
 //# sourceMappingURL=ref.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformSpread: () => (transformSpread),
  updateSpread: () => (updateSpread)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js");
/* ESM import */var _gesture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js");
/* ESM import */var _platformInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js");
/* ESM import */var _ref_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _workletEvent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js");
/* ESM import */var _workletRef_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.








const eventRegExp = /^(([A-Za-z-]*):)?(bind|catch|capture-bind|capture-catch|global-bind)([A-Za-z]+)$/;
const eventTypeMap = {
    bind: 'bindEvent',
    catch: 'catchEvent',
    'capture-bind': 'capture-bind',
    'capture-catch': 'capture-catch',
    'global-bind': 'global-bindEvent'
};
const noFlattenAttributes = /* @__PURE__ */ new Set([
    'name',
    'clip-radius',
    'overlap',
    'exposure-scene',
    'exposure-id'
]);
function updateSpread(snapshot, index, oldValue, elementIndex) {
    oldValue !== null && oldValue !== void 0 ? oldValue : oldValue = {};
    let newValue = snapshot.__values[index]; // compiler guarantee this must be an object;
    // @ts-ignore
    const list = snapshot.__parent;
    if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) {
        const oldPlatformInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.pick)(oldValue, _platformInfo_js__WEBPACK_IMPORTED_MODULE_4__.platformInfoAttributes);
        const platformInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.pick)(newValue, _platformInfo_js__WEBPACK_IMPORTED_MODULE_4__.platformInfoAttributes);
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isDirectOrDeepEqual)(oldPlatformInfo, platformInfo)) {
            var __pendingListUpdates_values, _list___id;
            var _;
            ((_ = (__pendingListUpdates_values = _list_js__WEBPACK_IMPORTED_MODULE_0__.__pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new _list_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(list)).onSetAttribute(snapshot, platformInfo, oldPlatformInfo);
            snapshot.__listItemPlatformInfo = platformInfo;
            // The fakeSnapshot is missing `__parent`, so no `ListUpdateInfoRecording#onSetAttribute` will be called
            const fakeSnapshot = {
                __values: {
                    get [index] () {
                        return platformInfo;
                    }
                },
                __id: snapshot.__id,
                __elements: snapshot.__elements
            };
            (0,_platformInfo_js__WEBPACK_IMPORTED_MODULE_4__.updateListItemPlatformInfo)(fakeSnapshot, index, oldPlatformInfo, elementIndex);
        }
    }
    if (!snapshot.__elements) return;
    if ('__spread' in newValue) {
        // first screen
        newValue = transformSpread(snapshot, index, newValue);
        snapshot.__values[index] = newValue;
    }
    const dataset = {};
    let match = null;
    for(const key in newValue){
        const v = newValue[key];
        if (v !== oldValue[key]) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], v);
            else if (key === 'style') __SetInlineStyles(snapshot.__elements[elementIndex], v);
            else if (key === 'id') __SetID(snapshot.__elements[elementIndex], v);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                var _snapshot;
                var ___ref_set;
                (___ref_set = (_snapshot = snapshot).__ref_set) !== null && ___ref_set !== void 0 ? ___ref_set : _snapshot.__ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __ref_set: snapshot.__ref_set
                };
                (0,_ref_js__WEBPACK_IMPORTED_MODULE_5__.updateRef)(fakeSnapshot, index, oldValue[key], elementIndex, key);
            } else if (key.endsWith(':ref')) {
                var _snapshot1;
                var ___worklet_ref_set;
                (___worklet_ref_set = (_snapshot1 = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot1.__worklet_ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_7__.updateWorkletRef)(fakeSnapshot, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                const workletType = key.slice(0, -8);
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_gesture_js__WEBPACK_IMPORTED_MODULE_3__.updateGesture)(fakeSnapshot, index, oldValue[key], elementIndex, workletType);
            } else if (match = eventRegExp.exec(key)) {
                const workletType = match[2];
                const eventType = eventTypeMap[match[3]];
                const eventName = match[4];
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the event value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType) (0,_workletEvent_js__WEBPACK_IMPORTED_MODULE_6__.updateWorkletEvent)(fakeSnapshot, index, oldValue[key], elementIndex, workletType, eventType, eventName);
                else (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.updateEvent)(fakeSnapshot, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (_platformInfo_js__WEBPACK_IMPORTED_MODULE_4__.platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, v);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) dataset[key.slice(5)] = v;
    }
    let hasOldDataset = false;
    for(const key in oldValue){
        if (!(key in newValue)) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], '');
            else if (key === 'style') __SetInlineStyles(snapshot.__elements[elementIndex], '');
            else if (key === 'id') __SetID(snapshot.__elements[elementIndex], null);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                var _snapshot2;
                var ___ref_set1;
                (___ref_set1 = (_snapshot2 = snapshot).__ref_set) !== null && ___ref_set1 !== void 0 ? ___ref_set1 : _snapshot2.__ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __ref_set: snapshot.__ref_set
                };
                (0,_ref_js__WEBPACK_IMPORTED_MODULE_5__.updateRef)(fakeSnapshot, index, oldValue[key], elementIndex, key);
            } else if (key.endsWith(':ref')) {
                var _snapshot3;
                var ___worklet_ref_set1;
                (___worklet_ref_set1 = (_snapshot3 = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set1 !== void 0 ? ___worklet_ref_set1 : _snapshot3.__worklet_ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_7__.updateWorkletRef)(fakeSnapshot, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                const workletType = key.slice(0, -8);
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_gesture_js__WEBPACK_IMPORTED_MODULE_3__.updateGesture)(fakeSnapshot, index, oldValue[key], elementIndex, workletType);
            } else if (match = eventRegExp.exec(key)) {
                const workletType = match[2];
                const eventType = eventTypeMap[match[3]];
                const eventName = match[4];
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType) (0,_workletEvent_js__WEBPACK_IMPORTED_MODULE_6__.updateWorkletEvent)(fakeSnapshot, index, oldValue[key], elementIndex, workletType, eventType, eventName);
                else (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.updateEvent)(fakeSnapshot, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (_platformInfo_js__WEBPACK_IMPORTED_MODULE_4__.platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, null);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) hasOldDataset = true;
    }
    // TODO: compare dataset before commit it to native?
    if (hasOldDataset || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isEmptyObject)(dataset)) __SetDataset(snapshot.__elements[elementIndex], dataset);
}
function transformSpread(snapshot, index, spread) {
    const result = {};
    let hasNoFlattenAttributes = false;
    for(const key in spread){
        var _transformRef;
        let value1 = spread[key];
        if (key === '__spread') ;
        else if (key === 'class' || key === 'className') {
            value1 !== null && value1 !== void 0 ? value1 : value1 = '';
            result['className'] = value1;
        } else if (key === 'ref') result[key] = (_transformRef = (0,_ref_js__WEBPACK_IMPORTED_MODULE_5__.transformRef)(value1)) === null || _transformRef === void 0 ? void 0 : _transformRef.__ref;
        else if (typeof value1 === 'function') result[key] = `${snapshot.__id}:${index}:${key}`;
        else {
            if (!hasNoFlattenAttributes && noFlattenAttributes.has(key)) hasNoFlattenAttributes = true;
            result[key] = value1;
        }
    }
    if (hasNoFlattenAttributes) result['flatten'] = false;
    return result;
}
 //# sourceMappingURL=spread.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateWorkletEvent: () => (updateWorkletEvent)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _lifecycle_patch_isMainThreadHydrationFinished_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrationFinished.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function updateWorkletEvent(snapshot, expIndex, oldValue, elementIndex, workletType, eventType, eventName) {
    if (!snapshot.__elements) return;
    var _ref;
    const value = (_ref = snapshot.__values[expIndex] || undefined) !== null && _ref !== void 0 ? _ref : {};
    value._workletType = workletType;
    if (workletType === 'main-thread') {
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onWorkletCtxUpdate)(value, oldValue, !_lifecycle_patch_isMainThreadHydrationFinished_js__WEBPACK_IMPORTED_MODULE_1__.isMainThreadHydrationFinished, snapshot.__elements[elementIndex]);
        const event = {
            type: 'worklet',
            value
        };
        __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
    }
}
 //# sourceMappingURL=workletEvent.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateWorkletRef: () => (updateWorkletRef),
  workletUnRef: () => (workletUnRef)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function workletUnRef(value) {
    if ('_wvid' in value) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRef)(value, null);
    else if ('_wkltId' in value) {
        if (typeof value._unmount == 'function') value._unmount();
        else (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.runWorkletCtx)(value, [
            null
        ]);
    }
}
function updateWorkletRef(snapshot, expIndex, oldValue, elementIndex, _workletType) {
    var _snapshot___worklet_ref_set;
    if (!snapshot.__elements) return;
    if (oldValue && ((_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.has(oldValue))) {
        var _snapshot___worklet_ref_set1;
        workletUnRef(oldValue);
        (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.delete(oldValue);
    }
    const value = snapshot.__values[expIndex];
    if (value === null || value === undefined) ;
    else if (value._wvid) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRef)(value, snapshot.__elements[elementIndex]);
    else if (value._wkltId) value._unmount = (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.runWorkletCtx)(value, [
        {
            elementRefptr: snapshot.__elements[elementIndex]
        }
    ]);
    else if (value._type === '__LEPUS__' || value._lepusWorkletHash) ;
    else throw new Error('MainThreadRef: main-thread:ref must be of type MainThreadRef or main-thread function.');
    if (value) {
        var _snapshot;
        var ___worklet_ref_set;
        (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
        snapshot.__worklet_ref_set.add(value);
    }
    // Add an arbitrary attribute to avoid this element being layout-only
    __SetAttribute(snapshot.__elements[elementIndex], 'has-react-ref', true);
}
 //# sourceMappingURL=workletRef.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isDirectOrDeepEqual: () => (isDirectOrDeepEqual),
  isEmptyObject: () => (isEmptyObject),
  isSdkVersionGt: () => (isSdkVersionGt),
  pick: () => (pick)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function isDirectOrDeepEqual(a, b) {
    if (a === b) return true;
    if (typeof a == 'object' && a !== null && typeof b == 'object' && b !== null && JSON.stringify(a) === JSON.stringify(b)) return true;
    return false;
}
function isEmptyObject(obj) {
    for(var _ in obj)return false;
    return true;
}
function isSdkVersionGt(major, minor) {
    const lynxSdkVersion = SystemInfo.lynxSdkVersion || '1.0';
    const version = lynxSdkVersion.split('.');
    return Number(version[0]) > major || Number(version[0]) == major && Number(version[1]) > minor;
}
function pick(obj, keys) {
    const result = {};
    for (const key of keys)if (key in obj) result[key] = obj[key];
    return result;
} //# sourceMappingURL=utils.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onPostWorkletCtx: () => (onPostWorkletCtx)
});
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
/* ESM import */var _runOnBackground_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js");


/**
 * @internal
 */ function onPostWorkletCtx(afterValue) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.isMtsEnabled)() && afterValue) {
        lynx.reportError(new Error('Main thread script requires Lynx sdk version 2.14'));
        return null;
    }
    if (!afterValue || !(0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.isRunOnBackgroundEnabled)()) return afterValue;
    (0,_runOnBackground_js__WEBPACK_IMPORTED_MODULE_1__.registerWorkletCtx)(afterValue);
    return afterValue;
} //# sourceMappingURL=ctx.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyTasks: () => (destroyTasks),
  destroyWorklet: () => (destroyWorklet)
});
/* ESM import */var _workletRefPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const destroyTasks = [];
function destroyWorklet() {
    (0,_workletRefPool_js__WEBPACK_IMPORTED_MODULE_0__.takeWorkletRefInitValuePatch)();
    for (const task of destroyTasks)task();
    destroyTasks.length = 0;
} //# sourceMappingURL=destroy.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/execMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletExecIdMap: () => (WorkletExecIdMap)
});
/* ESM import */var _indexMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js");

/**
 * `WorkletExecIdMap` ensures the worklet object is not released in js context when the main thread is still holding the
 * worklet object (or any of its jsFnHandles). The worklet object holds the js functions which might be called by `runOnBackground()`.
 * If the worklet object is incorrectly released earlier, the `runOnBackground()` would result in failure.
 *
 * Every time a worklet object is sent to the main thread, an `execId` is distributed and will be sent to element
 * context with the worklet object. This relationship is recorded in this class. When all the references to the
 * worklet object are released in the main thread, a message will be sent back to remove the record here.
 *
 * @internal
 */ class WorkletExecIdMap extends _indexMap_js__WEBPACK_IMPORTED_MODULE_0__.IndexMap {
    add(worklet) {
        const execId = super.add(worklet);
        worklet._execId = execId;
        return execId;
    }
    findJsFnHandle(execId, fnId) {
        const worklet = this.get(execId);
        if (!worklet) return undefined;
        const f = (value)=>{
            if (value === null || typeof value !== 'object') return undefined;
            const obj = value;
            if ('_jsFnId' in obj && obj['_jsFnId'] === fnId) return obj;
            for(const i in obj){
                const result = f(obj[i]);
                if (result) return result;
            }
            return undefined;
        };
        return f(worklet);
    }
} //# sourceMappingURL=execMap.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onFunctionCall: () => (onFunctionCall)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _indexMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



let resolveMap;
function initReturnValueListener() {
    const context = lynx.getCoreContext();
    resolveMap = new _indexMap_js__WEBPACK_IMPORTED_MODULE_2__.IndexMap();
    context.addEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet, onFunctionCallRet);
    _destroy_js__WEBPACK_IMPORTED_MODULE_1__.destroyTasks.push(()=>{
        context.removeEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet, onFunctionCallRet);
        resolveMap = undefined;
    });
}
/**
 * @internal
 */ function onFunctionCall(resolve) {
    if (!resolveMap) initReturnValueListener();
    return resolveMap.add(resolve);
}
function onFunctionCallRet(event) {
    const data = JSON.parse(event.data);
    const resolve = resolveMap.get(data.resolveId);
    resolveMap.remove(data.resolveId);
    resolve(data.returnValue);
}
 //# sourceMappingURL=functionCall.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearConfigCacheForTesting: () => (clearConfigCacheForTesting),
  isMtsEnabled: () => (isMtsEnabled),
  isRunOnBackgroundEnabled: () => (isRunOnBackgroundEnabled)
});
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let mtsEnabled;
let runOnBackgroundEnabled;
/**
 * @internal
 */ function isMtsEnabled() {
    return mtsEnabled !== null && mtsEnabled !== void 0 ? mtsEnabled : mtsEnabled = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSdkVersionGt)(2, 13);
}
/**
 * @internal
 */ function isRunOnBackgroundEnabled() {
    return runOnBackgroundEnabled !== null && runOnBackgroundEnabled !== void 0 ? runOnBackgroundEnabled : runOnBackgroundEnabled = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSdkVersionGt)(2, 15);
}
function clearConfigCacheForTesting() {
    mtsEnabled = undefined;
    runOnBackgroundEnabled = undefined;
}
 //# sourceMappingURL=functionality.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/hmr.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletOnBackground: () => (registerWorkletOnBackground)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// import { __globalSnapshotPatch } from '../lifecycle/patch/snapshotPatch.js';
// const workletHashSet: Set<string> = /* @__PURE__ */ new Set();
/* v8 ignore start */ /**
 * @internal
 */ // disable hmr until bugs are fixed
// TODO: re-enable hmr or change a way to impl it; also need to fix the test case DEV_ONLY_RegisterWorklet
function registerWorkletOnBackground(_type, _hash, _fn) {
// if (workletHashSet.has(hash)) {
//   return;
// }
// workletHashSet.add(hash);
// if (__globalSnapshotPatch) {
//   __globalSnapshotPatch.push(
//     SnapshotOperation.DEV_ONLY_RegisterWorklet,
//     hash,
//     // We use `Function.prototype.toString` to serialize the function for Lepus.
//     fn.toString(),
//   );
// }
}
/* v8 ignore stop */  //# sourceMappingURL=hmr.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IndexMap: () => (IndexMap)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
class IndexMap {
    add(value) {
        const index = ++this.lastIndex;
        this.indexMap.set(index, value);
        return index;
    }
    get(index) {
        return this.indexMap.get(index);
    }
    remove(index) {
        this.indexMap.delete(index);
    }
    constructor(){
        this.lastIndex = 0;
        this.indexMap = new Map();
    }
}
 //# sourceMappingURL=indexMap.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletCtx: () => (registerWorkletCtx),
  runJSFunction: () => (runJSFunction),
  runOnBackground: () => (runOnBackground)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _execMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/execMap.js");
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




let execIdMap;
function init() {
    'background only';
    if (execIdMap) return;
    execIdMap = new _execMap_js__WEBPACK_IMPORTED_MODULE_2__.WorkletExecIdMap();
    lynx.getCoreContext().addEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runOnBackground, runJSFunction);
    lynx.getCoreContext().addEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.releaseBackgroundWorkletCtx, releaseBackgroundWorkletCtx);
    _destroy_js__WEBPACK_IMPORTED_MODULE_1__.destroyTasks.push(()=>{
        lynx.getCoreContext().removeEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runOnBackground, runJSFunction);
        lynx.getCoreContext().removeEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.releaseBackgroundWorkletCtx, releaseBackgroundWorkletCtx);
        execIdMap = undefined;
    });
}
/**
 * @internal
 */ function runJSFunction(event) {
    'background only';
    const data = JSON.parse(event.data);
    const obj = execIdMap.findJsFnHandle(data.obj._execId, data.obj._jsFnId);
    const f = obj === null || obj === void 0 ? void 0 : obj._fn;
    if (!f) throw new Error('runOnBackground: JS function not found: ' + JSON.stringify(data.obj));
    const returnValue = f(...data.params);
    lynx.getCoreContext().dispatchEvent({
        type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet,
        data: JSON.stringify({
            resolveId: data.resolveId,
            returnValue
        })
    });
}
function releaseBackgroundWorkletCtx(event) {
    'background only';
    for (const id of event.data)execIdMap.remove(id);
}
/**
 * @internal
 */ function registerWorkletCtx(ctx) {
    'background only';
    init();
    execIdMap.add(ctx);
}
/**
 * `runOnBackground` allows triggering js functions on the background thread asynchronously.
 * @param f - The js function to be called.
 * @returns A function. Calling which with the arguments to be passed to the js function to trigger it on the background thread. This function returns a promise that resolves to the return value of the js function.
 * @example
 * ```ts
 * import { runOnBackground } from '@lynx-js/react';
 *
 * async function someMainthreadFunction() {
 *   'main thread';
 *   const fn = runOnBackground(() => {
 *     return 'hello';
 *   });
 *   const result = await fn();
}
 * ```
 * @public
 */ function runOnBackground(f) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_3__.isRunOnBackgroundEnabled)()) throw new Error('runOnBackground requires Lynx sdk version 2.16.');
    throw new Error('runOnBackground can only be used on the main thread.');
}
 //# sourceMappingURL=runOnBackground.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnMainThread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runOnMainThread: () => (runOnMainThread)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _ctx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/ctx.js");
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
/* ESM import */var _functionCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionCall.js");




/**
 * `runOnMainThread` allows triggering main thread functions on the main thread asynchronously.
 * @param fn - The main thread functions to be called.
 * @returns A function. Calling which with the arguments to be passed to the main thread function to trigger it on the main thread. This function returns a promise that resolves to the return value of the main thread function.
 * @example
 * ```ts
 * import { runOnMainThread } from '@lynx-js/react';
 *
 * async function someFunction() {
 *   const fn = runOnMainThread(() => {
 *     'main thread';
 *     return 'hello';
 *   });
 *   const result = await fn();
 * }
 * ```
 * @public
 */ function runOnMainThread(fn) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_2__.isMtsEnabled)()) throw new Error('runOnMainThread requires Lynx sdk version 2.14.');
    return async (...params)=>{
        return new Promise((resolve)=>{
            (0,_ctx_js__WEBPACK_IMPORTED_MODULE_1__.onPostWorkletCtx)(fn);
            const resolveId = (0,_functionCall_js__WEBPACK_IMPORTED_MODULE_3__.onFunctionCall)(resolve);
            lynx.getCoreContext().dispatchEvent({
                type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runWorkletCtx,
                data: JSON.stringify({
                    worklet: fn,
                    params,
                    resolveId
                })
            });
        });
    };
} //# sourceMappingURL=runOnMainThread.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/transformToWorklet.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformToWorklet: () => (transformToWorklet)
});
let lastId = 0;
/**
 * transform args of `runOnBackground()`.
 *
 * @internal
 */ function transformToWorklet(obj) {
    const id = ++lastId;
    if (typeof obj !== 'function') return {
        _jsFnId: id,
        _error: `Argument of runOnBackground should be a function, but got [${typeof obj}] instead`
    };
    return {
        _jsFnId: id,
        _fn: obj
    };
} //# sourceMappingURL=transformToWorklet.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRef.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MainThreadRef: () => (MainThreadRef),
  clearWorkletRefLastIdForTesting: () => (clearWorkletRefLastIdForTesting),
  useMainThreadRef: () => (useMainThreadRef)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _workletRefPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");



// Split into two variables for testing purposes
let lastIdBG = 0;
function clearWorkletRefLastIdForTesting() {
    lastIdBG = 0;
}
class WorkletRef {
    get current() {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed in the background thread.');
        /* v8 ignore next */ return undefined;
    }
    set current(_) {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed in the background thread.');
    }
    /**
     * @internal
     */ toJSON() {
        return {
            _wvid: this._wvid
        };
    }
    /**
     * @internal
     */ constructor(initValue, type){
        this._initValue = initValue;
        this._type = type;
        this._wvid = ++lastIdBG;
        (0,_workletRefPool_js__WEBPACK_IMPORTED_MODULE_1__.addWorkletRefInitValue)(this._wvid, initValue);
    }
}
/**
 * A `MainThreadRef` is a ref that can only be accessed on the main thread. It is used to preserve
 * states between main thread function calls.
 * The data saved in `current` property of the `MainThreadRef` can be read and written in
 * multiple main thread functions.
 * @public
 */ class MainThreadRef extends WorkletRef {
    constructor(initValue){
        super(initValue, 'main-thread');
        {
            var _lynx_getNativeApp_createJSObjectDestructionObserver, _lynx_getNativeApp;
            const id = this._wvid;
            this._lifecycleObserver = (_lynx_getNativeApp_createJSObjectDestructionObserver = (_lynx_getNativeApp = lynx.getNativeApp()).createJSObjectDestructionObserver) === null || _lynx_getNativeApp_createJSObjectDestructionObserver === void 0 ? void 0 : _lynx_getNativeApp_createJSObjectDestructionObserver.call(_lynx_getNativeApp, ()=>{
                var _lynx_getCoreContext, _lynx;
                (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx).dispatchEvent({
                    type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.releaseWorkletRef,
                    data: {
                        id
                    }
                });
            });
        }
    }
}
function useMainThreadRef(initValue) {
    return (0,_hooks_react_js__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return new MainThreadRef(initValue);
    }, []);
} //# sourceMappingURL=workletRef.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addWorkletRefInitValue: () => (addWorkletRefInitValue),
  takeWorkletRefInitValuePatch: () => (takeWorkletRefInitValuePatch)
});
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let initValuePatch = [];
const initValueIdSet = /*#__PURE__*/ new Set();
/**
 * @internal
 */ function addWorkletRefInitValue(id, value) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.isMtsEnabled)()) return;
    initValueIdSet.add(id);
    initValuePatch.push([
        id,
        value
    ]);
}
/**
 * @internal
 */ function takeWorkletRefInitValuePatch() {
    const res = initValuePatch;
    initValuePatch = [];
    return res;
} //# sourceMappingURL=workletRefPool.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/bindings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayRunOnBackground: () => (delayRunOnBackground),
  onHydrationFinished: () => (onHydrationFinished),
  onWorkletCtxUpdate: () => (onWorkletCtxUpdate),
  registerWorklet: () => (registerWorklet),
  runWorkletCtx: () => (runWorkletCtx),
  updateWorkletRef: () => (updateWorkletRef),
  updateWorkletRefInitValueChanges: () => (updateWorkletRefInitValueChanges)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * This function must be called when a worklet context is updated.
 *
 * @param worklet - The worklet to be updated
 * @param oldWorklet - The old worklet context
 * @param isFirstScreen - Whether it is before the hydration is finished
 * @param element - The element
 * @internal
 */ function onWorkletCtxUpdate(worklet, oldWorklet, isFirstScreen, element) {
    var _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager, _globalThis_lynxWorkletImpl, _globalThis_lynxWorkletImpl1, _globalThis_lynxWorkletImpl2;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : (_globalThis_lynxWorkletImpl__jsFunctionLifecycleManager = _globalThis_lynxWorkletImpl._jsFunctionLifecycleManager) === null || _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager === void 0 ? void 0 : _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager.addRef(worklet._execId, worklet);
    if (isFirstScreen && oldWorklet) (_globalThis_lynxWorkletImpl1 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl1 === void 0 ? void 0 : _globalThis_lynxWorkletImpl1._hydrateCtx(worklet, oldWorklet);
    (_globalThis_lynxWorkletImpl2 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl2 === void 0 ? void 0 : _globalThis_lynxWorkletImpl2._eventDelayImpl.runDelayedWorklet(worklet, element);
}
/**
 * Executes the worklet ctx.
 * @param worklet - The Worklet ctx to run.
 * @param params - An array as parameters of the worklet run.
 */ function runWorkletCtx(worklet, params) {
    var _globalThis_runWorklet, _globalThis;
    return (_globalThis_runWorklet = (_globalThis = globalThis).runWorklet) === null || _globalThis_runWorklet === void 0 ? void 0 : _globalThis_runWorklet.call(_globalThis, worklet, params);
}
/**
 * Save an element to a `WorkletRef`.
 *
 * @param workletRef - The `WorkletRef` to be updated.
 * @param element - The element.
 * @internal
 */ function updateWorkletRef(workletRef, element) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._refImpl.updateWorkletRef(workletRef, element);
}
/**
 * Update the initial value of the `WorkletRef`.
 *
 * @param patch - An array containing the index and new value of the worklet value.
 */ function updateWorkletRefInitValueChanges(patch) {
    var _globalThis_lynxWorkletImpl;
    if (patch) (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._refImpl.updateWorkletRefInitValueChanges(patch);
}
/**
 * This must be called when the hydration is finished.
 *
 * @internal
 */ function onHydrationFinished() {
    var _globalThis_lynxWorkletImpl, _globalThis_lynxWorkletImpl1;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._runOnBackgroundDelayImpl.runDelayedBackgroundFunctions();
    (_globalThis_lynxWorkletImpl1 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl1 === void 0 ? void 0 : _globalThis_lynxWorkletImpl1._refImpl.clearFirstScreenWorkletRefMap();
}
/**
 * Register a worklet.
 *
 * @internal
 */ function registerWorklet(type, id, worklet) {
    globalThis.registerWorklet(type, id, worklet);
}
/**
 * Delay a runOnBackground after hydration.
 *
 * @internal
 */ function delayRunOnBackground(fnObj, fn) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._runOnBackgroundDelayImpl.delayRunOnBackground(fnObj, fn);
}
 //# sourceMappingURL=bindings.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/events.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletEvents: () => (WorkletEvents)
});
var WorkletEvents;
(function(WorkletEvents) {
    WorkletEvents["runWorkletCtx"] = "Lynx.Worklet.runWorkletCtx";
    WorkletEvents["runOnBackground"] = "Lynx.Worklet.runOnBackground";
    WorkletEvents["FunctionCallRet"] = "Lynx.Worklet.FunctionCallRet";
    WorkletEvents["releaseBackgroundWorkletCtx"] = "Lynx.Worklet.releaseBackgroundWorkletCtx";
    WorkletEvents["releaseWorkletRef"] = "Lynx.Worklet.releaseWorkletRef";
})(WorkletEvents || (WorkletEvents = {}));
 //# sourceMappingURL=events.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletEvents: () => (/* reexport safe */ _events_js__WEBPACK_IMPORTED_MODULE_2__.WorkletEvents),
  delayRunOnBackground: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.delayRunOnBackground),
  loadWorkletRuntime: () => (/* reexport safe */ _loadRuntime_js__WEBPACK_IMPORTED_MODULE_0__.loadWorkletRuntime),
  onHydrationFinished: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.onHydrationFinished),
  onWorkletCtxUpdate: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.onWorkletCtxUpdate),
  runWorkletCtx: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.runWorkletCtx),
  updateWorkletRef: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.updateWorkletRef),
  updateWorkletRefInitValueChanges: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.updateWorkletRefInitValueChanges)
});
/* ESM import */var _loadRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/loadRuntime.js");
/* ESM import */var _bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/bindings.js");
/* ESM import */var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/events.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


 //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/loadRuntime.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadWorkletRuntime: () => (loadWorkletRuntime)
});
/* ESM import */var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/global.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * Loads and initializes the Lepus chunk in the main thread.
 * @param __schema - The dynamic component entry for loading the Lepus chunk.
 * @returns A boolean indicating whether the Lepus chunk was loaded and initialized successfully.
 */ function loadWorkletRuntime(__schema) {
    if (typeof __LoadLepusChunk === 'undefined') return false;
    if (globalThis.lynxWorkletImpl) return true;
    return __LoadLepusChunk('worklet-runtime', {
        dynamicComponentEntry: __schema,
        chunkType: 0
    });
}
 //# sourceMappingURL=loadRuntime.js.map


}),
"(react:background)/./node_modules/@lynx-js/react/worklet-runtime/lib/global.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
 //# sourceMappingURL=global.js.map


}),
"(react:background)/./node_modules/@lynx-js/rspeedy/client/hmr/WebSocketClient.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (WebSocketClient)
});
/* provided dependency */ var WebSocket = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/index.js")["default"];
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * @license MIT
Copyright JS Foundation and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ class WebSocketClient {
    /**
   * @param {(...args: any[]) => void} f - The callback for onOpen.
   */ onOpen(f) {
        this.client.onopen = f;
    }
    /**
   * @param {(...args: any[]) => void} f - The callback for onClose.
   */ onClose(f) {
        this.client.onclose = f;
    }
    // call f with the message string as the first argument
    /**
   * @param {(...args: any[]) => void} f - The callback for onMessage.
   */ onMessage(f) {
        this.client.onmessage = (e)=>{
            f(e.data);
        };
    }
    /**
   * @param {string} url - The WebSocket URL.
   */ constructor(url){
        // eslint-disable-next-line n/no-unsupported-features/node-builtins
        this.client = new WebSocket(url);
        this.client.onerror = (error)=>{
            // TODO: use the real webpack logger
            console.error('[webpack-dev-server]', error);
        };
    }
}



}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/createSocketURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createSocketURL: () => (createSocketURL)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function format(objURL) {
    var _objURL_protocol;
    let protocol = (_objURL_protocol = objURL.protocol) !== null && _objURL_protocol !== void 0 ? _objURL_protocol : '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    var _objURL_auth;
    let auth = (_objURL_auth = objURL.auth) !== null && _objURL_auth !== void 0 ? _objURL_auth : '';
    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3a/i, ':');
        auth += '@';
    }
    let host = '';
    if (objURL.hostname) {
        host = auth + (objURL.hostname.includes(':') ? `[${objURL.hostname}]` : objURL.hostname);
        if (objURL.port) host += `:${objURL.port}`;
    }
    var _objURL_pathname;
    let pathname = (_objURL_pathname = objURL.pathname) !== null && _objURL_pathname !== void 0 ? _objURL_pathname : '';
    if (objURL.slashes) {
        host = `//${host || ''}`;
        if (pathname && !pathname.startsWith('/')) pathname = `/${pathname}`;
    } else if (!host) host = '';
    var _objURL_search;
    let search = (_objURL_search = objURL.search) !== null && _objURL_search !== void 0 ? _objURL_search : '';
    if (search && !search.startsWith('?')) search = `?${search}`;
    var _objURL_hash;
    let hash = (_objURL_hash = objURL.hash) !== null && _objURL_hash !== void 0 ? _objURL_hash : '';
    if (hash && !hash.startsWith('#')) hash = `#${hash}`;
    pathname = pathname.replace(/[#?]/g, /**
     * @param {string} match
     * @returns {string}
     */ (match)=>encodeURIComponent(match));
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
function createSocketURL(parsedURL, compilationId) {
    const { hostname } = parsedURL;
    let socketURLProtocol = parsedURL.protocol;
    socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, 'ws');
    let socketURLAuth = '';
    // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
    // Parse authentication credentials in case we need them
    if (parsedURL.username) {
        socketURLAuth = parsedURL.username;
        // Since HTTP basic authentication does not allow empty username,
        // we only include password if the username is not empty.
        if (parsedURL.password) socketURLAuth = socketURLAuth.concat(':', parsedURL.password);
    }
    // In case the host is a raw IPv6 address, it can be enclosed in
    // the brackets as the brackets are needed in the final URL string.
    // Need to remove those as url.format blindly adds its own set of brackets
    // if the host string contains colons. That would lead to non-working
    // double brackets (e.g. [[::]]) host
    //
    // All of these web socket url params are optionally passed in through resourceQuery,
    // so we need to fall back to the default if they are not provided
    const socketURLHostname = hostname.replace(/^\[(.*)\]$/, '$1');
    const socketURLPort = parsedURL.port;
    // If path is provided it'll be passed in via the resourceQuery as a
    // query param so it has to be parsed out of the querystring in order for the
    // client to open the socket to the correct location.
    let socketURLPathname = '/ws';
    if (parsedURL.pathname) socketURLPathname = parsedURL.pathname;
    return format({
        protocol: socketURLProtocol,
        auth: socketURLAuth,
        hostname: socketURLHostname,
        port: socketURLPort,
        pathname: socketURLPathname,
        slashes: true,
        search: compilationId ? `?compilationId=${compilationId}` : ''
    });
} //# sourceMappingURL=createSocketURL.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/index.js?hostname=192.168.50.43&port=3000&pathname=/rsbuild-hmr&hot=true&live-reload=true&protocol=ws": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
var __resourceQuery = "?hostname=192.168.50.43&port=3000&pathname=/rsbuild-hmr&hot=true&live-reload=true&protocol=ws";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _createSocketURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/createSocketURL.js");
/* ESM import */var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js");
/* ESM import */var _parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/parseURL.js");
/* ESM import */var _reloadApp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/reloadApp.js");
/* ESM import */var _socket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/socket.js");
/* ESM import */var _transport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






const status = {
    isReconnecting: false,
    currentHash: __webpack_require__.h()
};
const enabledFeatures = {
    'Hot Module Replacement': false,
    'Live Reloading': false,
    Progress: false,
    Overlay: false
};
const options = {
    hot: false,
    liveReload: false,
    progress: false
};
const parsedResourceQuery = (0,_parseURL_js__WEBPACK_IMPORTED_MODULE_2__.parseURL)(__resourceQuery);
const compilationId = "lynx_demo";
if (parsedResourceQuery['hot'] === 'true') {
    options.hot = true;
    enabledFeatures['Hot Module Replacement'] = true;
}
if (parsedResourceQuery['live-reload'] === 'true') {
    options.liveReload = true;
    enabledFeatures['Live Reloading'] = true;
}
if (parsedResourceQuery['progress'] === 'true') {
    options.progress = true;
    enabledFeatures.Progress = true;
}
(0,_log_js__WEBPACK_IMPORTED_MODULE_1__.logEnabledFeatures)(enabledFeatures);
const onSocketMessage = {
    hot () {
        if (parsedResourceQuery['hot'] === 'false') return;
        options.hot = true;
    },
    liveReload () {
        if (parsedResourceQuery['live-reload'] === 'false') return;
        options.liveReload = true;
    },
    invalid () {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info('App updated. Recompiling...');
    },
    hash (hash) {
        if (status.isReconnecting) {
            // We only need this once when reconnecting
            status.isReconnecting = false;
            // Here, we not only override the currentHash, but also override the
            // previousHash and the hash in webpack runtime.
            // In this way, we reset all the hash-related runtime status to match
            // the cold start.
            status.currentHash = status.previousHash = hash;
            // @ts-expect-error webpack runtime hack
            /* webpack/runtime/getFullHash */ __webpack_require__.h = function() {
                return hash;
            };
            return;
        }
        status.previousHash = status.currentHash;
        status.currentHash = hash;
    },
    reconnect (value) {
        if (parsedResourceQuery['reconnect'] === 'false') return;
        options.reconnect = value;
    },
    progress (value) {
        options.progress = value;
    },
    'still-ok': function stillOk() {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info('Nothing changed.');
    },
    ok () {
        (0,_reloadApp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options, status);
    },
    warnings (_warnings, params) {
        // TODO: format warnings
        if (params === null || params === void 0 ? void 0 : params.preventReloading) return;
        (0,_reloadApp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options, status);
    },
    'static-changed': function staticChanged(file) {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(`${file ? `"${file}"` : 'Content'} from static directory was changed. Reloading...`);
        (0,_reloadApp_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
            liveReload: true,
            hot: false,
            progress: false
        }, status);
    },
    errors (_errors) {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.error('Errors while compiling. Reload prevented.');
    // TODO: format errors
    },
    error (error) {
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.error(error.toString());
    },
    close () {
        // When the dev-server disconnected, we set `isReconnecting` to allow
        // override the webpack hash when dev-server restart and connect to client.
        status.isReconnecting = true;
        _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info('Disconnected!');
    }
};
const socketURL = (0,_createSocketURL_js__WEBPACK_IMPORTED_MODULE_0__.createSocketURL)(parsedResourceQuery, compilationId);
// @ts-expect-error I don't know TypeScript. I can't make it work :(
(0,_socket_js__WEBPACK_IMPORTED_MODULE_4__["default"])(socketURL, onSocketMessage, options.reconnect);
// Export the transport client so that it can be used in the `devServer.client.webSocketTransport`
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_transport_js__WEBPACK_IMPORTED_MODULE_5__.LynxTransportClient); //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  log: () => (log),
  logEnabledFeatures: () => (logEnabledFeatures)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const PREFIX = '[rspeedy-dev-server]';
const log = {
    error: console.error.bind(console, PREFIX),
    warn: console.warn.bind(console, PREFIX),
    info: console.info.bind(console, PREFIX),
    log: console.log.bind(console, PREFIX),
    debug: console.debug.bind(console, PREFIX)
};
const logEnabledFeatures = (features)=>{
    if (!features || Object.keys(features).length === 0) return;
    let logString = 'Server started:';
    // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
    for (const [key, enable] of Object.entries(features))logString += ` ${key} ${enable ? 'enabled' : 'disabled'},`;
    // replace last comma with a period
    logString = logString.slice(0, -1).concat('.');
    log.info(logString);
};
 //# sourceMappingURL=log.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/parseURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseURL: () => (parseURL)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function parseURL(resourceQuery) {
    const options = {};
    if (!(resourceQuery === null || resourceQuery === void 0 ? void 0 : resourceQuery.startsWith('?'))) return options;
    const searchParams = resourceQuery.slice(1).split('&');
    for (const keyValuePair of searchParams){
        const [key, value] = keyValuePair.split('=');
        options[key] = value === undefined ? true : decodeURIComponent(value);
    }
    return options;
} //# sourceMappingURL=parseURL.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/reloadApp.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/emitter.js");
/* ESM import */var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function reloadApp({ hot, liveReload }, status) {
    const { currentHash, previousHash } = status;
    const isInitial = currentHash.includes(previousHash);
    if (isInitial) return;
    if (hot) webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit('webpackHotUpdate', status.currentHash);
    else if (liveReload) {
        const intervalId = +setInterval(()=>{
            // reload immediately
            applyReload(intervalId);
        }, 10);
    }
}
function applyReload(intervalId) {
    var _NativeModules_LynxDevToolSetModule, _NativeModules_LynxDevtoolSetModule, _NativeModules_LynxDevToolSetModule_invokeCdp, _NativeModules_LynxDevToolSetModule1, _NativeModules_LynxDevtoolSetModule_invokeCdp, _NativeModules_LynxDevtoolSetModule1;
    clearInterval(intervalId);
    if (typeof ((_NativeModules_LynxDevToolSetModule = NativeModules.LynxDevToolSetModule) === null || _NativeModules_LynxDevToolSetModule === void 0 ? void 0 : _NativeModules_LynxDevToolSetModule.invokeCdp) !== 'function' && typeof ((_NativeModules_LynxDevtoolSetModule = NativeModules.LynxDevtoolSetModule) === null || _NativeModules_LynxDevtoolSetModule === void 0 ? void 0 : _NativeModules_LynxDevtoolSetModule.invokeCdp) !== 'function') {
        console.error('[HMR] live-reload failed: cannot invoke cdp from DevTool.');
        console.error('[HMR] Please reload the page manually.');
        return;
    }
    var _NativeModules_LynxDevToolSetModule_invokeCdp_bind;
    const invokeCdp = (_NativeModules_LynxDevToolSetModule_invokeCdp_bind = (_NativeModules_LynxDevToolSetModule1 = NativeModules.LynxDevToolSetModule) === null || _NativeModules_LynxDevToolSetModule1 === void 0 ? void 0 : (_NativeModules_LynxDevToolSetModule_invokeCdp = _NativeModules_LynxDevToolSetModule1.invokeCdp) === null || _NativeModules_LynxDevToolSetModule_invokeCdp === void 0 ? void 0 : _NativeModules_LynxDevToolSetModule_invokeCdp.bind(NativeModules.LynxDevToolSetModule)) !== null && _NativeModules_LynxDevToolSetModule_invokeCdp_bind !== void 0 ? _NativeModules_LynxDevToolSetModule_invokeCdp_bind : (_NativeModules_LynxDevtoolSetModule1 = NativeModules.LynxDevtoolSetModule) === null || _NativeModules_LynxDevtoolSetModule1 === void 0 ? void 0 : (_NativeModules_LynxDevtoolSetModule_invokeCdp = _NativeModules_LynxDevtoolSetModule1.invokeCdp) === null || _NativeModules_LynxDevtoolSetModule_invokeCdp === void 0 ? void 0 : _NativeModules_LynxDevtoolSetModule_invokeCdp.bind(NativeModules.LynxDevtoolSetModule, 'Page.reload');
    invokeCdp === null || invokeCdp === void 0 ? void 0 : invokeCdp(JSON.stringify({
        method: 'Page.reload',
        params: {
            ignoreCache: true
        }
    }), (data)=>{
        if (!data) return;
        try {
            const { error } = JSON.parse(data);
            if (error) console.error('[HMR] live-reload failed:', error.message);
        } catch  {
        // explicitly ignore error
        }
    });
}
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp); //# sourceMappingURL=reloadApp.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/socket.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  client: () => (client),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/log.js");
/* ESM import */var _transport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/rspeedy/client/hmr/WebSocketClient.js")["default"];
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


// this LynxTransportClient is here as a default fallback, in case the client is not injected
const C = typeof __webpack_dev_server_client__ === 'undefined' ? _transport_js__WEBPACK_IMPORTED_MODULE_1__.LynxTransportClient : 'default' in __webpack_dev_server_client__ ? __webpack_dev_server_client__.default : __webpack_dev_server_client__;
let retries = 0;
let maxRetries = 10;
// Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
let client = null;
const socket = function initSocket(url, handlers, reconnect) {
    client = new C(url);
    client.onOpen(()=>{
        retries = 0;
        if (reconnect !== undefined) maxRetries = reconnect;
    });
    client.onClose(()=>{
        var _handlers_close;
        if (retries === 0) (_handlers_close = handlers['close']) === null || _handlers_close === void 0 ? void 0 : _handlers_close.call(handlers, void 0, void 0);
        // Try to reconnect.
        client = null;
        // After 10 retries stop trying, to prevent log spam.
        if (retries < maxRetries) {
            // Exponentially increase timeout to reconnect.
            // Respectfully copied from the package `got`.
            const retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
            retries += 1;
            _log_js__WEBPACK_IMPORTED_MODULE_0__.log.info('Trying to reconnect...');
            setTimeout(()=>{
                socket(url, handlers, reconnect);
            }, retryInMs);
        } else _log_js__WEBPACK_IMPORTED_MODULE_0__.log.error('Unable to establish a connection after exceeding the maximum retry attempts.');
    });
    client.onMessage((data)=>{
        var _handlers_message_type;
        const message = JSON.parse(data);
        (_handlers_message_type = handlers[message.type]) === null || _handlers_message_type === void 0 ? void 0 : _handlers_message_type.call(handlers, message.data, message.params);
    });
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket); //# sourceMappingURL=socket.js.map


}),
"(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/transport.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LynxTransportClient: () => (LynxTransportClient)
});
/**
 * LynxTransportClient is the client transport implementation for webpack-dev-server.
 * It can be used in the
 * {@link https://webpack.js.org/configuration/dev-server/#websockettransport | `devServer.client.webSocketTransport`}
 * configuration of webpack.
 * It should be used with `LynxTransportServer`.
 *
 * @example
 * ```js
 * // webpack.config.js
 * import { createRequire } from 'node:module'
 * import { LynxTransportServer } from '@lynx-js/webpack-dev-transport'
 *
 * const require = createRequire(import.meta.url)
 * export default {
 *   devServer: {
 *     client: {
 *       webSocketTransport: require.resolve('@lynx-js/webpack-dev-transport/client')
 *     },
 *     allowedHosts: 'all',
 *     webSocketServer: LynxTransportServer
 *   }
 * }
 * ```
 *
 * @public
 */ class LynxTransportClient {
    /** {@inheritdoc Client.onOpen} */ onOpen(callback) {
        callback();
    }
    /** {@inheritdoc Client.onClose} */ onClose(_callback) {
    // webpack-dev-server will retry in the `callback`
    // but `onOpen` in Lynx will never fail.
    }
    /** {@inheritdoc Client.onMessage} */ onMessage(callback) {
        lynx.getDevtool().addEventListener(LynxTransportClient.EventType, (event)=>{
            const CDP = JSON.parse(event.data.message);
            if (CDP.method === LynxTransportClient.EventType) callback(CDP.params.data);
        });
    }
} //# sourceMappingURL=transport.js.map
/** @internal */ LynxTransportClient.EventType = 'message';


}),
"(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocket.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WebSocket: () => (WebSocket)
});
/* ESM import */var _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js");
/* ESM import */var _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js");
/* ESM import */var _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js");
/* ESM import */var _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




var _impl = /*#__PURE__*/ new WeakMap();
/**
 * The implementation of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket | WebSocket}
 * for Lynx.
 *
 * @remarks
 *
 * This only works in environment that has `NativeModules.LynxWebSocketModule`.
 *
 * @public
 */ class WebSocket {
    /**
     * The `addEventListener()` method of the `EventTarget` interface sets up a function that will be called whenever the specified event is delivered to the target.
     * @param type - A case-sensitive string representing the event type to listen for.
     * @param callback - The function that receives a notification. See {@link @lynx-js/websocket#EventMap} for details of events.
     */ addEventListener(type, callback) {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).addEventListener(type, callback);
    }
    /**
     * The `removeEventListener()` method of the `EventTarget` interface removes an event listener from the WebSocket.
     * @param type - The type of event to stop listening for.
     * @param callback - The function to remove as an event listener.
     */ removeEventListener(type, callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).removeEventListener(type, callback);
    }
    /**
     * onmessage is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onmessage = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onmessage() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onmessage;
    }
    set onmessage(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onmessage = callback;
    }
    /**
     * onopen is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onopen = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onopen() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onopen;
    }
    set onopen(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onopen = callback;
    }
    /**
     * onclose is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onclose = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onclose() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onclose;
    }
    set onclose(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onclose = callback;
    }
    /**
     * onerror is the Web-style callback of {@link WebSocket}.
     *
     * @example
     *
     * ```js
     * const socket = new WebSocket(url)
     * socket.onerror = ({ data }) => {
     *   // handle data
     * }
     * ```
     * @public
     */ get onerror() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onerror;
    }
    set onerror(callback) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).onerror = callback;
    }
    /**
     * The `url` read-only property returns the URL of the {@link WebSocket} passed by the constructor.
     */ get url() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).url;
    }
    /**
     * The `readyState` read-only property returns the current state of the {@link WebSocket} connection.
     */ get readyState() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).readyState;
    }
    /**
     * The WebSocket.protocol read-only property returns the name of the sub-protocol the server selected.
     *
     * @remarks
     * This will be one of the strings specified in the protocols parameter when creating the WebSocket object,
     * or the empty string if no connection is established.
     */ get protocol() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).protocol;
    }
    /**
     * The `send` method send the specified data to be transmitted to the server over the {@link WebSocket} connection.
     *
     * @remarks
     * It will throw an exception if you call `send()` when the connection is in the {@link WebSocket.CONNECTING | CONNECTING } state. If you call `send()` when the connection is in the {@link WebSocket.CLOSING | CLOSING } or {@link WebSocket.CLOSED | CLOSED } states, it will silently discard the data.
     * @param data - The specified data to be transmitted.
     */ send(data) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).send(data);
    }
    /**
     * The `ping` method send an empty message to the server over the {@link WebSocket} connection.
     * @remarks
     * It will throw an exception if you call `ping()` when the connection is in the {@link WebSocket.CONNECTING | CONNECTING } state. If you call `ping()` when the connection is in the {@link WebSocket.CLOSING | CLOSING } or {@link WebSocket.CLOSED | CLOSED } states, it will silently discard the data.
     */ ping() {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).ping();
    }
    /**
     * The `close()` method closes the {@link WebSocket} connection or connection attempt, if any.
     *
     * @remarks
     * If the connection is already {@link WebSocket.CLOSED | CLOSED }, this method does nothing.
     */ close(code, reason) {
        (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _impl).close(code, reason);
    }
    /**
     * @param url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
     * @param protocols - Either a single protocol string or an array of protocol strings. If it is omitted, an empty array is used by default, i.e. `[]`.
     * @param options - Extra options for Lynx only.
     */ constructor(url, protocols, options = {}){
        (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_2__._)(this, _impl, {
            writable: true,
            value: void 0
        });
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _impl, new _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.WebSocketImpl(NativeModules.LynxWebSocketModule, url, protocols, options));
    }
} //# sourceMappingURL=WebSocket.js.map
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CONNECTING}
     */ WebSocket.CONNECTING = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.CONNECTING;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.OPEN}
     */ WebSocket.OPEN = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.OPEN;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CLOSING}
     */ WebSocket.CLOSING = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.CLOSING;
/**
     * {@inheritdoc @lynx-js/websocket#ReadyState.CLOSED}
     */ WebSocket.CLOSED = _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_0__.ReadyState.CLOSED;


}),
"(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CloseCode: () => (CloseCode),
  GlobalEventEmitter: () => (GlobalEventEmitter),
  ReadyState: () => (ReadyState),
  WebSocketImpl: () => (WebSocketImpl)
});
/* ESM import */var _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js");
/* ESM import */var _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js");
/* ESM import */var _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js");
/* ESM import */var _swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_get.js");
/* ESM import */var _swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_init.js");
/* ESM import */var _swc_helpers_class_static_private_field_update__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_static_private_field_update.js");
/* ESM import */var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/eventemitter3/index.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






var _a;

/**
 * The `ReadyState` describe the state of a `WebSocket` connection.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
 * @public
 */ var ReadyState;
(function(ReadyState) {
    /** Socket has been created. The connection is not yet open. */ ReadyState[ReadyState["CONNECTING"] = 0] = "CONNECTING";
    /** The connection is open and ready to communicate. */ ReadyState[ReadyState["OPEN"] = 1] = "OPEN";
    /** The connection is in the process of closing. */ ReadyState[ReadyState["CLOSING"] = 2] = "CLOSING";
    /** The connection is closed or couldn't be opened. */ ReadyState[ReadyState["CLOSED"] = 3] = "CLOSED";
})(ReadyState || (ReadyState = {}));
const GlobalEventEmitter = lynx.getJSModule('GlobalEventEmitter');
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
 */ var CloseCode;
(function(CloseCode) {
    CloseCode[CloseCode["NORMAL"] = 1000] = "NORMAL";
    CloseCode[CloseCode["ABNORMAL"] = 1006] = "ABNORMAL";
})(CloseCode || (CloseCode = {}));
var _socketID = /*#__PURE__*/ new WeakMap(), _close = /*#__PURE__*/ new WeakSet(), _registerEvents = /*#__PURE__*/ new WeakSet(), _unregisterEvents = /*#__PURE__*/ new WeakSet(), _previousOnMessage = /*#__PURE__*/ new WeakMap(), _onMessage = /*#__PURE__*/ new WeakSet(), _previousOnOpen = /*#__PURE__*/ new WeakMap(), _onOpen = /*#__PURE__*/ new WeakSet(), _previousOnClose = /*#__PURE__*/ new WeakMap(), _onClosed = /*#__PURE__*/ new WeakSet(), _previousOnError = /*#__PURE__*/ new WeakMap(), _onFailed = /*#__PURE__*/ new WeakSet(), _createWebSocketEvent = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ class WebSocketImpl extends eventemitter3__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
    addEventListener(type, callback) {
        if (!callback) return;
        this.addListener(type, callback);
        return;
    }
    removeEventListener(type, callback) {
        return this.removeListener(type, callback);
    }
    dispatchEvent(event) {
        return this.emit(event.type, event);
    }
    send(data) {
        if (this.readyState === ReadyState.CONNECTING) throw new Error('INVALID_STATE_ERR');
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        if (typeof data === 'string') {
            var _this_websocketModule;
            (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.send(data, (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
            return;
        }
        // TODO: support binary data
        throw new Error('Unsupported data type');
    }
    ping() {
        var _this_websocketModule;
        if (this.readyState === ReadyState.CONNECTING) throw new Error('INVALID_STATE_ERR');
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.ping((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
    }
    close(code, reason) {
        if (this.readyState === ReadyState.CLOSING || this.readyState === ReadyState.CLOSED) return;
        this.readyState = ReadyState.CLOSING;
        (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _close, close).call(this, code, reason);
    }
    get onmessage() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnMessage);
    }
    set onmessage(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnMessage)) this.removeEventListener('message', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnMessage));
        this.addEventListener('message', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnMessage, callback);
    }
    get onopen() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnOpen);
    }
    set onopen(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnOpen)) this.removeEventListener('open', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnOpen));
        this.addEventListener('open', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnOpen, callback);
    }
    get onclose() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnClose);
    }
    set onclose(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnClose)) this.removeEventListener('close', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnClose));
        this.addEventListener('close', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnClose, callback);
    }
    get onerror() {
        return (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnError);
    }
    set onerror(callback) {
        if ((0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnError)) this.removeEventListener('error', (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _previousOnError));
        this.addEventListener('error', callback);
        (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnError, callback);
    }
    constructor(websocketModule, url, protocols, options = {}){
        var _this_websocketModule;
        super(), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _close), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _registerEvents), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _unregisterEvents), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onMessage), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onOpen), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onClosed), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _onFailed), (0,_swc_helpers_class_private_method_init__WEBPACK_IMPORTED_MODULE_4__._)(this, _createWebSocketEvent), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _socketID, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnMessage, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnOpen, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnClose, {
            writable: true,
            value: void 0
        }), (0,_swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_5__._)(this, _previousOnError, {
            writable: true,
            value: void 0
        }), this.readyState = ReadyState.CONNECTING, (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _socketID, (0,_swc_helpers_class_static_private_field_update__WEBPACK_IMPORTED_MODULE_6__._)(_a, WebSocketImpl, _nextWebSocketId).value++), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnMessage, null), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnOpen, null), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnClose, null), (0,_swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_3__._)(this, _previousOnError, null);
        this.websocketModule = websocketModule;
        this.url = url;
        if (!websocketModule) {
            lynx.reportError(new Error(`WebSocket is not found. Please use Lynx >= 2.16 or consider using a polyfill.`), {
                level: 'warning'
            });
            return;
        }
        if (typeof protocols === 'string') protocols = [
            protocols
        ];
        if (!Array.isArray(protocols)) protocols = [];
        (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _registerEvents, registerEvents).call(this);
        (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.connect(url, protocols, options, (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
    }
}
var _nextWebSocketId = {
    writable: true,
    value: 1
};
function close(code, reason) {
    var _this_websocketModule;
    // See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
    const statusCode = typeof code === 'number' ? code : CloseCode.NORMAL;
    const closeReason = typeof reason === 'string' ? reason : '';
    (_this_websocketModule = this.websocketModule) === null || _this_websocketModule === void 0 ? void 0 : _this_websocketModule.close(statusCode, closeReason, (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID));
}
function registerEvents() {
    /* eslint-disable @typescript-eslint/unbound-method */ GlobalEventEmitter.addListener('websocketMessage', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onMessage, onMessage), this);
    GlobalEventEmitter.addListener('websocketOpen', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onOpen, onOpen), this);
    GlobalEventEmitter.addListener('websocketClosed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onClosed, onClosed), this);
    GlobalEventEmitter.addListener('websocketFailed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onFailed, onFailed), this);
/* eslint-enable @typescript-eslint/unbound-method */ }
function unregisterEvents() {
    /* eslint-disable @typescript-eslint/unbound-method */ GlobalEventEmitter.removeListener('websocketMessage', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onMessage, onMessage));
    GlobalEventEmitter.removeListener('websocketOpen', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onOpen, onOpen));
    GlobalEventEmitter.removeListener('websocketClosed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onClosed, onClosed));
    GlobalEventEmitter.removeListener('websocketFailed', (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _onFailed, onFailed));
/* eslint-enable @typescript-eslint/unbound-method */ }
function onMessage(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    const data = event.data;
    event.type;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'message', {
        data
    }));
}
function onOpen(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    this.readyState = ReadyState.OPEN;
    this.protocol = event.protocol;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'open'));
}
function onClosed(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    this.readyState = ReadyState.CLOSED;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'close', {
        code: event.code,
        reason: event.reason
    }));
    (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _unregisterEvents, unregisterEvents).call(this);
}
function onFailed(event) {
    if (event.id !== (0,_swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_1__._)(this, _socketID)) return;
    this.readyState = ReadyState.CLOSED;
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'error', {
        message: event.message
    }));
    this.dispatchEvent((0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _createWebSocketEvent, createWebSocketEvent).call(this, 'close', {
        code: CloseCode.ABNORMAL,
        reason: event.message
    }));
    (0,_swc_helpers_class_private_method_get__WEBPACK_IMPORTED_MODULE_2__._)(this, _unregisterEvents, unregisterEvents).call(this);
}
function createWebSocketEvent(type, data) {
    return Object.assign({
        type,
        target: this
    }, data);
}
_a = WebSocketImpl; //# sourceMappingURL=WebSocketImpl.js.map


}),
"(react:background)/./node_modules/@lynx-js/websocket/lib/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReadyState: () => (/* reexport safe */ _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_1__.ReadyState),
  WebSocket: () => (/* reexport safe */ _WebSocket_js__WEBPACK_IMPORTED_MODULE_0__.WebSocket),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _WebSocket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocket.js");
/* ESM import */var _WebSocketImpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/websocket/lib/WebSocketImpl.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_WebSocket_js__WEBPACK_IMPORTED_MODULE_0__.WebSocket);
 //# sourceMappingURL=index.js.map


}),
"(react:background)/./node_modules/@remix-run/router/dist/router.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AbortedDeferredError: () => (AbortedDeferredError),
  Action: () => (Action),
  IDLE_BLOCKER: () => (IDLE_BLOCKER),
  IDLE_FETCHER: () => (IDLE_FETCHER),
  IDLE_NAVIGATION: () => (IDLE_NAVIGATION),
  UNSAFE_DEFERRED_SYMBOL: () => (UNSAFE_DEFERRED_SYMBOL),
  UNSAFE_DeferredData: () => (DeferredData),
  UNSAFE_ErrorResponseImpl: () => (ErrorResponseImpl),
  UNSAFE_convertRouteMatchToUiMatch: () => (convertRouteMatchToUiMatch),
  UNSAFE_convertRoutesToDataRoutes: () => (convertRoutesToDataRoutes),
  UNSAFE_decodePath: () => (decodePath),
  UNSAFE_getResolveToMatches: () => (getResolveToMatches),
  UNSAFE_invariant: () => (invariant),
  UNSAFE_warning: () => (warning),
  createBrowserHistory: () => (createBrowserHistory),
  createHashHistory: () => (createHashHistory),
  createMemoryHistory: () => (createMemoryHistory),
  createPath: () => (createPath),
  createRouter: () => (createRouter),
  createStaticHandler: () => (createStaticHandler),
  data: () => (data),
  defer: () => (defer),
  generatePath: () => (generatePath),
  getStaticContextFromError: () => (getStaticContextFromError),
  getToPathname: () => (getToPathname),
  isDataWithResponseInit: () => (isDataWithResponseInit),
  isDeferredData: () => (isDeferredData),
  isRouteErrorResponse: () => (isRouteErrorResponse),
  joinPaths: () => (joinPaths),
  json: () => (json),
  matchPath: () => (matchPath),
  matchRoutes: () => (matchRoutes),
  normalizePathname: () => (normalizePathname),
  parsePath: () => (parsePath),
  redirect: () => (redirect),
  redirectDocument: () => (redirectDocument),
  replace: () => (replace),
  resolvePath: () => (resolvePath),
  resolveTo: () => (resolveTo),
  stripBasename: () => (stripBasename)
});
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */ var Action;
(function(Action) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */ function createMemoryHistory(options) {
    if (options === void 0) options = {};
    let { initialEntries = [
        "/"
    ], initialIndex, v5Compat = false } = options;
    let entries; // Declare so we can access from createMemoryLocation
    entries = initialEntries.map((entry, index)=>createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
    let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    let action = Action.Pop;
    let listener = null;
    function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
        return entries[index];
    }
    function createMemoryLocation(to, state, key) {
        if (state === void 0) state = null;
        let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
    }
    function createHref(to) {
        return typeof to === "string" ? to : createPath(to);
    }
    let history = {
        get index () {
            return index;
        },
        get action () {
            return action;
        },
        get location () {
            return getCurrentLocation();
        },
        createHref,
        createURL (to) {
            return new URL(createHref(to), "http://localhost");
        },
        encodeLocation (to) {
            let path = typeof to === "string" ? parsePath(to) : to;
            return {
                pathname: path.pathname || "",
                search: path.search || "",
                hash: path.hash || ""
            };
        },
        push (to, state) {
            action = Action.Push;
            let nextLocation = createMemoryLocation(to, state);
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            if (v5Compat && listener) listener({
                action,
                location: nextLocation,
                delta: 1
            });
        },
        replace (to, state) {
            action = Action.Replace;
            let nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) listener({
                action,
                location: nextLocation,
                delta: 0
            });
        },
        go (delta) {
            action = Action.Pop;
            let nextIndex = clampIndex(index + delta);
            let nextLocation = entries[nextIndex];
            index = nextIndex;
            if (listener) listener({
                action,
                location: nextLocation,
                delta
            });
        },
        listen (fn) {
            listener = fn;
            return ()=>{
                listener = null;
            };
        }
    };
    return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function createBrowserHistory(options) {
    if (options === void 0) options = {};
    function createBrowserLocation(window1, globalHistory) {
        let { pathname, search, hash } = window1.location;
        return createLocation("", {
            pathname,
            search,
            hash
        }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createBrowserHref(window1, to) {
        return typeof to === "string" ? to : createPath(to);
    }
    return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function createHashHistory(options) {
    if (options === void 0) options = {};
    function createHashLocation(window1, globalHistory) {
        let { pathname = "/", search = "", hash = "" } = parsePath(window1.location.hash.substr(1));
        // Hash URL should always have a leading / just like window.location.pathname
        // does, so if an app ends up at a route like /#something then we add a
        // leading slash so all of our path-matching behaves the same as if it would
        // in a browser router.  This is particularly important when there exists a
        // root splat route (<Route path="*">) since that matches internally against
        // "/*" and we'd expect /#something to 404 in a hash router app.
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) pathname = "/" + pathname;
        return createLocation("", {
            pathname,
            search,
            hash
        }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createHashHref(window1, to) {
        let base = window1.document.querySelector("base");
        let href = "";
        if (base && base.getAttribute("href")) {
            let url = window1.location.href;
            let hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : createPath(to));
    }
    function validateHashLocation(location, to) {
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    }
    return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience, so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message);
        // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
function createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */ function getHistoryState(location, index) {
    return {
        usr: location.state,
        key: location.key,
        idx: index
    };
}
/**
 * Creates a Location object with a unique key from the given Path
 */ function createLocation(current, to, state, key) {
    if (state === void 0) state = null;
    let location = _extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
    }, typeof to === "string" ? parsePath(to) : to, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || createKey()
    });
    return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */ function createPath(_ref) {
    let { pathname = "/", search = "", hash = "" } = _ref;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */ function parsePath(path) {
    let parsedPath = {};
    if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) parsedPath.pathname = path;
    }
    return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    if (options === void 0) options = {};
    let { window: window1 = document.defaultView, v5Compat = false } = options;
    let globalHistory = window1.history;
    let action = Action.Pop;
    let listener = null;
    let index = getIndex();
    // Index should only be null when we initialize. If not, it's because the
    // user called history.pushState or history.replaceState directly, in which
    // case we should log a warning as it will result in bugs.
    if (index == null) {
        index = 0;
        globalHistory.replaceState(_extends({}, globalHistory.state, {
            idx: index
        }), "");
    }
    function getIndex() {
        let state = globalHistory.state || {
            idx: null
        };
        return state.idx;
    }
    function handlePop() {
        action = Action.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) listener({
            action,
            location: history.location,
            delta
        });
    }
    function push(to, state) {
        action = Action.Push;
        let location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        // try...catch because iOS limits us to 100 pushState calls :/
        try {
            globalHistory.pushState(historyState, "", url);
        } catch (error) {
            // If the exception is because `state` can't be serialized, let that throw
            // outwards just like a replace call would so the dev knows the cause
            // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
            // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
            if (error instanceof DOMException && error.name === "DataCloneError") throw error;
            // They are going to lose state here, but there is no real
            // way to warn them about it since the page will refresh...
            window1.location.assign(url);
        }
        if (v5Compat && listener) listener({
            action,
            location: history.location,
            delta: 1
        });
    }
    function replace(to, state) {
        action = Action.Replace;
        let location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) listener({
            action,
            location: history.location,
            delta: 0
        });
    }
    function createURL(to) {
        // window.location.origin is "null" (the literal string value) in Firefox
        // under certain conditions, notably when serving from a local HTML file
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
        let base = window1.location.origin !== "null" ? window1.location.origin : window1.location.href;
        let href = typeof to === "string" ? to : createPath(to);
        // Treating this as a full URL will strip any trailing spaces so we need to
        // pre-encode them since they might be part of a matching splat param from
        // an ancestor route
        href = href.replace(/ $/, "%20");
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
    }
    let history = {
        get action () {
            return action;
        },
        get location () {
            return getLocation(window1, globalHistory);
        },
        listen (fn) {
            if (listener) throw new Error("A history only accepts one active listener");
            window1.addEventListener(PopStateEventType, handlePop);
            listener = fn;
            return ()=>{
                window1.removeEventListener(PopStateEventType, handlePop);
                listener = null;
            };
        },
        createHref (to) {
            return createHref(window1, to);
        },
        createURL,
        encodeLocation (to) {
            // Encode a Location the same way window.location would
            let url = createURL(to);
            return {
                pathname: url.pathname,
                search: url.search,
                hash: url.hash
            };
        },
        push,
        replace,
        go (n) {
            return globalHistory.go(n);
        }
    };
    return history;
}
//#endregion
var ResultType;
(function(ResultType) {
    ResultType["data"] = "data";
    ResultType["deferred"] = "deferred";
    ResultType["redirect"] = "redirect";
    ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
const immutableRouteKeys = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function isIndexRoute(route) {
    return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
    if (parentPath === void 0) parentPath = [];
    if (manifest === void 0) manifest = {};
    return routes.map((route, index)=>{
        let treePath = [
            ...parentPath,
            String(index)
        ];
        let id = typeof route.id === "string" ? route.id : treePath.join("-");
        invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
        invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
        if (isIndexRoute(route)) {
            let indexRoute = _extends({}, route, mapRouteProperties(route), {
                id
            });
            manifest[id] = indexRoute;
            return indexRoute;
        } else {
            let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
                id,
                children: undefined
            });
            manifest[id] = pathOrLayoutRoute;
            if (route.children) pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
            return pathOrLayoutRoute;
        }
    });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/v6/utils/match-routes
 */ function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) basename = "/";
    return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) return null;
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for(let i = 0; matches == null && i < branches.length; ++i){
        // Incoming pathnames are generally encoded from either window.location
        // or from router.navigate, but we want to match against the unencoded
        // paths in the route definitions.  Memory router locations won't be
        // encoded here but there also shouldn't be anything to decode so this
        // should be a safe operation.  This avoids needing matchRoutes to be
        // history-aware.
        let decoded = decodePath(pathname);
        matches = matchRouteBranch(branches[i], decoded, allowPartial);
    }
    return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
        id: route.id,
        pathname,
        params,
        data: loaderData[route.id],
        handle: route.handle
    };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) branches = [];
    if (parentsMeta === void 0) parentsMeta = [];
    if (parentPath === void 0) parentPath = "";
    let flattenRoute = (route, index, relativePath)=>{
        let meta = {
            relativePath: relativePath === undefined ? route.path || "" : relativePath,
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route
        };
        if (meta.relativePath.startsWith("/")) {
            invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([
            parentPath,
            meta.relativePath
        ]);
        let routesMeta = parentsMeta.concat(meta);
        // Add the children before adding this route to the array, so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            invariant(// @ts-expect-error
            route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
            flattenRoutes(route.children, branches, routesMeta, path);
        }
        // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) return;
        branches.push({
            path,
            score: computeScore(path, route.index),
            routesMeta
        });
    };
    routes.forEach((route, index)=>{
        var _route$path;
        // coarse-grain check for optional params
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) flattenRoute(route, index);
        else for (let exploded of explodeOptionalSegments(route.path))flattenRoute(route, index, exploded);
    });
    return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */ function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    // Optional path segments are denoted by a trailing `?`
    let isOptional = first.endsWith("?");
    // Compute the corresponding required segment: `foo?` -> `foo`
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [
        required,
        ""
    ] : [
        required
    ];
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    // All child paths with the prefix.  Do this for all children before the
    // optional version for all children, so we get consistent ordering where the
    // parent optional aspect is preferred as required.  Otherwise, we can get
    // child sections interspersed where deeper optional segments are higher than
    // parent optional segments, where for example, /:two would explode _earlier_
    // then /:one.  By always including the parent as required _for all children_
    // first, we avoid this issue
    result.push(...restExploded.map((subpath)=>subpath === "" ? required : [
            required,
            subpath
        ].join("/")));
    // Then, if this is an optional value, add all child versions without
    if (isOptional) result.push(...restExploded);
    // for absolute paths, ensure `/` instead of empty segment
    return result.map((exploded)=>path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
    branches.sort((a, b)=>a.score !== b.score ? b.score - a.score // Higher score first
         : compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex), b.routesMeta.map((meta)=>meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s)=>s === "*";
function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) initialScore += splatPenalty;
    if (index) initialScore += indexRouteValue;
    return segments.filter((s)=>!isSplat(s)).reduce((score, segment)=>score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]);
    return siblings ? // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // so they sort equally.
    0;
}
function matchRouteBranch(branch, pathname, allowPartial) {
    if (allowPartial === void 0) allowPartial = false;
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for(let i = 0; i < routesMeta.length; ++i){
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end
        }, remainingPathname);
        let route = meta.route;
        if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
        }, remainingPathname);
        if (!match) return null;
        Object.assign(matchedParams, match.params);
        matches.push({
            // TODO: Can this as be avoided?
            params: matchedParams,
            pathname: joinPaths([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: normalizePathname(joinPaths([
                matchedPathname,
                match.pathnameBase
            ])),
            route
        });
        if (match.pathnameBase !== "/") matchedPathname = joinPaths([
            matchedPathname,
            match.pathnameBase
        ]);
    }
    return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/v6/utils/generate-path
 */ function generatePath(originalPath, params) {
    if (params === void 0) params = {};
    let path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
        path = path.replace(/\*$/, "/*");
    }
    // ensure `/` is added at the beginning if the path is absolute
    const prefix = path.startsWith("/") ? "/" : "";
    const stringify = (p)=>p == null ? "" : typeof p === "string" ? p : String(p);
    const segments = path.split(/\/+/).map((segment, index, array)=>{
        const isLastSegment = index === array.length - 1;
        // only apply the splat if it's the last segment
        if (isLastSegment && segment === "*") {
            const star = "*";
            // Apply the splat
            return stringify(params[star]);
        }
        const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
        if (keyMatch) {
            const [, key, optional] = keyMatch;
            let param = params[key];
            invariant(optional === "?" || param != null, "Missing \":" + key + "\" param");
            return stringify(param);
        }
        // Remove any optional markers from optional static segments
        return segment.replace(/\?$/g, "");
    }) // Remove empty segments
    .filter((segment)=>!!segment);
    return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/v6/utils/match-path
 */ function matchPath(pattern, pathname) {
    if (typeof pattern === "string") pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
    };
    let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce((memo, _ref, index)=>{
        let { paramName, isOptional } = _ref;
        // We need to compute the pathnameBase here using the raw splat value
        // instead of using params["*"] later because it will be decoded then
        if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index];
        if (isOptional && !value) memo[paramName] = undefined;
        else memo[paramName] = (value || "").replace(/%2F/g, "/");
        return memo;
    }, {});
    return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
    };
}
function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) caseSensitive = false;
    if (end === void 0) end = true;
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional)=>{
        params.push({
            paramName,
            isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
        params.push({
            paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
         : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else if (end) regexpSource += "\\/*$";
    else if (path !== "" && path !== "/") // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
    let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [
        matcher,
        params
    ];
}
function decodePath(value) {
    try {
        return value.split("/").map((v)=>decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
        warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
        return value;
    }
}
/**
 * @private
 */ function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
    // We want to leave trailing slash behavior in the user's control, so if they
    // specify a basename with a trailing slash, we should support it
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") return null;
    return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/v6/utils/resolve-path
 */ function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) fromPathname = "/";
    let { pathname: toPathname, search = "", hash = "" } = typeof to === "string" ? parsePath(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
    };
}
function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment)=>{
        if (segment === "..") {
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") segments.push(segment);
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */ function getPathContributingMatches(matches) {
    return matches.filter((match, index)=>index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function getResolveToMatches(matches, v7_relativeSplatPath) {
    let pathMatches = getPathContributingMatches(matches);
    // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
    // match so we include splat values for "." links.  See:
    // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
    if (v7_relativeSplatPath) return pathMatches.map((match, idx)=>idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
    return pathMatches.map((match)=>match.pathnameBase);
}
/**
 * @private
 */ function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) isPathRelative = false;
    let to;
    if (typeof toArg === "string") to = parsePath(toArg);
    else {
        to = _extends({}, toArg);
        invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
        invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
        invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    // Routing is relative to the current pathname if explicitly requested.
    //
    // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.
    if (toPathname == null) from = locationPathname;
    else {
        let routePathnameIndex = routePathnames.length - 1;
        // With relative="route" (the default), each leading .. segment means
        // "go up one route" instead of "go up one URL segment".  This is a key
        // difference from how <a href> works and a major reason we call this a
        // "to" value instead of a "href".
        if (!isPathRelative && toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/");
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    // Ensure the pathname has a trailing slash if the original "to" had one
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    // Or if this was a link to the current path which has a trailing slash
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
    return path;
}
/**
 * @private
 */ function getToPathname(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */ const joinPaths = (paths)=>paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */ const normalizePathname = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */ const normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */ const normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 *
 * @deprecated The `json` method is deprecated in favor of returning raw objects.
 * This method will be removed in v7.
 */ const json = function json(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    let headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json; charset=utf-8");
    return new Response(JSON.stringify(data), _extends({}, responseInit, {
        headers
    }));
};
class DataWithResponseInit {
    constructor(data, init){
        this.type = "DataWithResponseInit";
        this.data = data;
        this.init = init || null;
    }
}
/**
 * Create "responses" that contain `status`/`headers` without forcing
 * serialization into an actual `Response` - used by Remix single fetch
 */ function data(data, init) {
    return new DataWithResponseInit(data, typeof init === "number" ? {
        status: init
    } : init);
}
class AbortedDeferredError extends Error {
}
class DeferredData {
    trackPromise(key, value) {
        if (!(value instanceof Promise)) return value;
        this.deferredKeys.push(key);
        this.pendingKeysSet.add(key);
        // We store a little wrapper promise that will be extended with
        // _data/_error props upon resolve/reject
        let promise = Promise.race([
            value,
            this.abortPromise
        ]).then((data)=>this.onSettle(promise, key, undefined, data), (error)=>this.onSettle(promise, key, error));
        // Register rejection listeners to avoid uncaught promise rejections on
        // errors or aborted deferred values
        promise.catch(()=>{});
        Object.defineProperty(promise, "_tracked", {
            get: ()=>true
        });
        return promise;
    }
    onSettle(promise, key, error, data) {
        if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
            this.unlistenAbortSignal();
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            return Promise.reject(error);
        }
        this.pendingKeysSet.delete(key);
        if (this.done) this.unlistenAbortSignal();
        // If the promise was resolved/rejected with undefined, we'll throw an error as you
        // should always resolve with a value or null
        if (error === undefined && data === undefined) {
            let undefinedError = new Error("Deferred data for key \"" + key + "\" resolved/rejected with `undefined`, " + "you must resolve/reject with a value or `null`.");
            Object.defineProperty(promise, "_error", {
                get: ()=>undefinedError
            });
            this.emit(false, key);
            return Promise.reject(undefinedError);
        }
        if (data === undefined) {
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            this.emit(false, key);
            return Promise.reject(error);
        }
        Object.defineProperty(promise, "_data", {
            get: ()=>data
        });
        this.emit(false, key);
        return data;
    }
    emit(aborted, settledKey) {
        this.subscribers.forEach((subscriber)=>subscriber(aborted, settledKey));
    }
    subscribe(fn) {
        this.subscribers.add(fn);
        return ()=>this.subscribers.delete(fn);
    }
    cancel() {
        this.controller.abort();
        this.pendingKeysSet.forEach((v, k)=>this.pendingKeysSet.delete(k));
        this.emit(true);
    }
    async resolveData(signal) {
        let aborted = false;
        if (!this.done) {
            let onAbort = ()=>this.cancel();
            signal.addEventListener("abort", onAbort);
            aborted = await new Promise((resolve)=>{
                this.subscribe((aborted)=>{
                    signal.removeEventListener("abort", onAbort);
                    if (aborted || this.done) resolve(aborted);
                });
            });
        }
        return aborted;
    }
    get done() {
        return this.pendingKeysSet.size === 0;
    }
    get unwrappedData() {
        invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
        return Object.entries(this.data).reduce((acc, _ref3)=>{
            let [key, value] = _ref3;
            return Object.assign(acc, {
                [key]: unwrapTrackedPromise(value)
            });
        }, {});
    }
    get pendingKeys() {
        return Array.from(this.pendingKeysSet);
    }
    constructor(data, responseInit){
        this.pendingKeysSet = new Set();
        this.subscribers = new Set();
        this.deferredKeys = [];
        invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
        // Set up an AbortController + Promise we can race against to exit early
        // cancellation
        let reject;
        this.abortPromise = new Promise((_, r)=>reject = r);
        this.controller = new AbortController();
        let onAbort = ()=>reject(new AbortedDeferredError("Deferred data aborted"));
        this.unlistenAbortSignal = ()=>this.controller.signal.removeEventListener("abort", onAbort);
        this.controller.signal.addEventListener("abort", onAbort);
        this.data = Object.entries(data).reduce((acc, _ref2)=>{
            let [key, value] = _ref2;
            return Object.assign(acc, {
                [key]: this.trackPromise(key, value)
            });
        }, {});
        if (this.done) this.unlistenAbortSignal();
        this.init = responseInit;
    }
}
function isTrackedPromise(value) {
    return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
    if (!isTrackedPromise(value)) return value;
    if (value._error) throw value._error;
    return value._data;
}
/**
 * @deprecated The `defer` method is deprecated in favor of returning raw
 * objects. This method will be removed in v7.
 */ const defer = function defer(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const redirect = function redirect(url, init) {
    if (init === void 0) init = 302;
    let responseInit = init;
    if (typeof responseInit === "number") responseInit = {
        status: responseInit
    };
    else if (typeof responseInit.status === "undefined") responseInit.status = 302;
    let headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, _extends({}, responseInit, {
        headers
    }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const redirectDocument = (url, init)=>{
    let response = redirect(url, init);
    response.headers.set("X-Remix-Reload-Document", "true");
    return response;
};
/**
 * A redirect response that will perform a `history.replaceState` instead of a
 * `history.pushState` for client-side navigation redirects.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const replace = (url, init)=>{
    let response = redirect(url, init);
    response.headers.set("X-Remix-Replace", "true");
    return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */ class ErrorResponseImpl {
    constructor(status, statusText, data, internal){
        if (internal === void 0) internal = false;
        this.status = status;
        this.statusText = statusText || "";
        this.internal = internal;
        if (data instanceof Error) {
            this.data = data.toString();
            this.error = data;
        } else this.data = data;
    }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */ function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = [
    "post",
    "put",
    "patch",
    "delete"
];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = [
    "get",
    ...validMutationMethodsArr
];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
const redirectPreserveMethodStatusCodes = new Set([
    307,
    308
]);
const IDLE_NAVIGATION = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
const IDLE_FETCHER = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
const IDLE_BLOCKER = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const defaultMapRouteProperties = (route)=>({
        hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */ function createRouter(init) {
    const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
    const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
    const isServer = !isBrowser;
    invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let mapRouteProperties;
    if (init.mapRouteProperties) mapRouteProperties = init.mapRouteProperties;
    else if (init.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = defaultMapRouteProperties;
    // Routes keyed by ID
    let manifest = {};
    // Routes in tree format for matching
    let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
    let inFlightDataRoutes;
    let basename = init.basename || "/";
    let dataStrategyImpl = init.dataStrategy || defaultDataStrategy;
    let patchRoutesOnNavigationImpl = init.patchRoutesOnNavigation;
    // Config driven behavior flags
    let future = _extends({
        v7_fetcherPersist: false,
        v7_normalizeFormMethod: false,
        v7_partialHydration: false,
        v7_prependBasename: false,
        v7_relativeSplatPath: false,
        v7_skipActionErrorRevalidation: false
    }, init.future);
    // Cleanup function for history
    let unlistenHistory = null;
    // Externally-provided functions to call on all state changes
    let subscribers = new Set();
    // Externally-provided object to hold scroll restoration locations during routing
    let savedScrollPositions = null;
    // Externally-provided function to get scroll restoration keys
    let getScrollRestorationKey = null;
    // Externally-provided function to get current scroll position
    let getScrollPosition = null;
    // One-time flag to control the initial hydration scroll restoration.  Because
    // we don't get the saved positions from <ScrollRestoration /> until _after_
    // the initial render, we need to manually trigger a separate updateState to
    // send along the restoreScrollPosition
    // Set to true if we have `hydrationData` since we assume we were SSR'd and that
    // SSR did the initial scroll restoration.
    let initialScrollRestored = init.hydrationData != null;
    let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
    let initialMatchesIsFOW = false;
    let initialErrors = null;
    if (initialMatches == null && !patchRoutesOnNavigationImpl) {
        // If we do not match a user-provided-route, fall back to the root
        // to allow the error boundary to take over
        let error = getInternalRouterError(404, {
            pathname: init.history.location.pathname
        });
        let { matches, route } = getShortCircuitMatches(dataRoutes);
        initialMatches = matches;
        initialErrors = {
            [route.id]: error
        };
    }
    // In SPA apps, if the user provided a patchRoutesOnNavigation implementation and
    // our initial match is a splat route, clear them out so we run through lazy
    // discovery on hydration in case there's a more accurate lazy route match.
    // In SSR apps (with `hydrationData`), we expect that the server will send
    // up the proper matched routes so we don't want to run lazy discovery on
    // initial hydration and want to hydrate into the splat route.
    if (initialMatches && !init.hydrationData) {
        let fogOfWar = checkFogOfWar(initialMatches, dataRoutes, init.history.location.pathname);
        if (fogOfWar.active) initialMatches = null;
    }
    let initialized;
    if (!initialMatches) {
        initialized = false;
        initialMatches = [];
        // If partial hydration and fog of war is enabled, we will be running
        // `patchRoutesOnNavigation` during hydration so include any partial matches as
        // the initial matches so we can properly render `HydrateFallback`'s
        if (future.v7_partialHydration) {
            let fogOfWar = checkFogOfWar(null, dataRoutes, init.history.location.pathname);
            if (fogOfWar.active && fogOfWar.matches) {
                initialMatchesIsFOW = true;
                initialMatches = fogOfWar.matches;
            }
        }
    } else if (initialMatches.some((m)=>m.route.lazy)) // functions around still then we'll need to run them in initialize()
    initialized = false;
    else if (!initialMatches.some((m)=>m.route.loader)) initialized = true;
    else if (future.v7_partialHydration) {
        // If partial hydration is enabled, we're initialized so long as we were
        // provided with hydrationData for every route with a loader, and no loaders
        // were marked for explicit hydration
        let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
        let errors = init.hydrationData ? init.hydrationData.errors : null;
        // If errors exist, don't consider routes below the boundary
        if (errors) {
            let idx = initialMatches.findIndex((m)=>errors[m.route.id] !== undefined);
            initialized = initialMatches.slice(0, idx + 1).every((m)=>!shouldLoadRouteOnHydration(m.route, loaderData, errors));
        } else initialized = initialMatches.every((m)=>!shouldLoadRouteOnHydration(m.route, loaderData, errors));
    } else // hydrationData - which is expected to be complete
    initialized = init.hydrationData != null;
    let router;
    let state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized,
        navigation: IDLE_NAVIGATION,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: new Map(),
        blockers: new Map()
    };
    // -- Stateful internal variables to manage navigations --
    // Current navigation in progress (to be committed in completeNavigation)
    let pendingAction = Action.Pop;
    // Should the current navigation prevent the scroll reset if scroll cannot
    // be restored?
    let pendingPreventScrollReset = false;
    // AbortController for the active navigation
    let pendingNavigationController;
    // Should the current navigation enable document.startViewTransition?
    let pendingViewTransitionEnabled = false;
    // Store applied view transitions so we can apply them on POP
    let appliedViewTransitions = new Map();
    // Cleanup function for persisting applied transitions to sessionStorage
    let removePageHideEventListener = null;
    // We use this to avoid touching history in completeNavigation if a
    // revalidation is entirely uninterrupted
    let isUninterruptedRevalidation = false;
    // Use this internal flag to force revalidation of all loaders:
    //  - submissions (completed or interrupted)
    //  - useRevalidator()
    //  - X-Remix-Revalidate (from redirect)
    let isRevalidationRequired = false;
    // Use this internal array to capture routes that require revalidation due
    // to a cancelled deferred on action submission
    let cancelledDeferredRoutes = [];
    // Use this internal array to capture fetcher loads that were cancelled by an
    // action navigation and require revalidation
    let cancelledFetcherLoads = new Set();
    // AbortControllers for any in-flight fetchers
    let fetchControllers = new Map();
    // Track loads based on the order in which they started
    let incrementingLoadId = 0;
    // Track the outstanding pending navigation data load to be compared against
    // the globally incrementing load when a fetcher load lands after a completed
    // navigation
    let pendingNavigationLoadId = -1;
    // Fetchers that triggered data reloads as a result of their actions
    let fetchReloadIds = new Map();
    // Fetchers that triggered redirect navigations
    let fetchRedirectIds = new Set();
    // Most recent href/match for fetcher.load calls for fetchers
    let fetchLoadMatches = new Map();
    // Ref-count mounted fetchers so we know when it's ok to clean them up
    let activeFetchers = new Map();
    // Fetchers that have requested a delete when using v7_fetcherPersist,
    // they'll be officially removed after they return to idle
    let deletedFetchers = new Set();
    // Store DeferredData instances for active route matches.  When a
    // route loader returns defer() we stick one in here.  Then, when a nested
    // promise resolves we update loaderData.  If a new navigation starts we
    // cancel active deferreds for eliminated routes.
    let activeDeferreds = new Map();
    // Store blocker functions in a separate Map outside of router state since
    // we don't need to update UI state if they change
    let blockerFunctions = new Map();
    // Flag to ignore the next history update, so we can revert the URL change on
    // a POP navigation that was blocked by the user without touching router state
    let unblockBlockerHistoryUpdate = undefined;
    // Initialize the router, all side effects should be kicked off from here.
    // Implemented as a Fluent API for ease of:
    //   let router = createRouter(init).initialize();
    function initialize() {
        // If history informs us of a POP navigation, start the navigation but do not update
        // state.  We'll update our own state once the navigation completes
        unlistenHistory = init.history.listen((_ref)=>{
            let { action: historyAction, location, delta } = _ref;
            // Ignore this event if it was just us resetting the URL from a
            // blocked POP navigation
            if (unblockBlockerHistoryUpdate) {
                unblockBlockerHistoryUpdate();
                unblockBlockerHistoryUpdate = undefined;
                return;
            }
            warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let blockerKey = shouldBlockNavigation({
                currentLocation: state.location,
                nextLocation: location,
                historyAction
            });
            if (blockerKey && delta != null) {
                // Restore the URL to match the current UI, but don't update router state
                let nextHistoryUpdatePromise = new Promise((resolve)=>{
                    unblockBlockerHistoryUpdate = resolve;
                });
                init.history.go(delta * -1);
                // Put the blocker into a blocked state
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location,
                    proceed () {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: undefined,
                            reset: undefined,
                            location
                        });
                        // Re-do the same POP navigation we just blocked, after the url
                        // restoration is also complete.  See:
                        // https://github.com/remix-run/react-router/issues/11613
                        nextHistoryUpdatePromise.then(()=>init.history.go(delta));
                    },
                    reset () {
                        let blockers = new Map(state.blockers);
                        blockers.set(blockerKey, IDLE_BLOCKER);
                        updateState({
                            blockers
                        });
                    }
                });
                return;
            }
            return startNavigation(historyAction, location);
        });
        if (isBrowser) {
            // FIXME: This feels gross.  How can we cleanup the lines between
            // scrollRestoration/appliedTransitions persistance?
            restoreAppliedTransitions(routerWindow, appliedViewTransitions);
            let _saveAppliedTransitions = ()=>persistAppliedTransitions(routerWindow, appliedViewTransitions);
            routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
            removePageHideEventListener = ()=>routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
        }
        // Kick off initial data load if needed.  Use Pop to avoid modifying history
        // Note we don't do any handling of lazy here.  For SPA's it'll get handled
        // in the normal navigation flow.  For SSR it's expected that lazy modules are
        // resolved prior to router creation since we can't go into a fallbackElement
        // UI for SSR'd apps
        if (!state.initialized) startNavigation(Action.Pop, state.location, {
            initialHydration: true
        });
        return router;
    }
    // Clean up a router and it's side effects
    function dispose() {
        if (unlistenHistory) unlistenHistory();
        if (removePageHideEventListener) removePageHideEventListener();
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach((_, key)=>deleteFetcher(key));
        state.blockers.forEach((_, key)=>deleteBlocker(key));
    }
    // Subscribe to state updates for the router
    function subscribe(fn) {
        subscribers.add(fn);
        return ()=>subscribers.delete(fn);
    }
    // Update our state and notify the calling context of the change
    function updateState(newState, opts) {
        if (opts === void 0) opts = {};
        state = _extends({}, state, newState);
        // Prep fetcher cleanup so we can tell the UI which fetcher data entries
        // can be removed
        let completedFetchers = [];
        let deletedFetchersKeys = [];
        if (future.v7_fetcherPersist) state.fetchers.forEach((fetcher, key)=>{
            if (fetcher.state === "idle") {
                if (deletedFetchers.has(key)) deletedFetchersKeys.push(key);
                else // revalidations and such
                completedFetchers.push(key);
            }
        });
        // Remove any lingering deleted fetchers that have already been removed
        // from state.fetchers
        deletedFetchers.forEach((key)=>{
            if (!state.fetchers.has(key) && !fetchControllers.has(key)) deletedFetchersKeys.push(key);
        });
        // Iterate over a local copy so that if flushSync is used and we end up
        // removing and adding a new subscriber due to the useCallback dependencies,
        // we don't get ourselves into a loop calling the new subscriber immediately
        [
            ...subscribers
        ].forEach((subscriber)=>subscriber(state, {
                deletedFetchers: deletedFetchersKeys,
                viewTransitionOpts: opts.viewTransitionOpts,
                flushSync: opts.flushSync === true
            }));
        // Remove idle fetchers from state since we only care about in-flight fetchers.
        if (future.v7_fetcherPersist) {
            completedFetchers.forEach((key)=>state.fetchers.delete(key));
            deletedFetchersKeys.forEach((key)=>deleteFetcher(key));
        } else // Set now that we've handed the keys off to the data layer
        deletedFetchersKeys.forEach((key)=>deletedFetchers.delete(key));
    }
    // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
    // and setting state.[historyAction/location/matches] to the new route.
    // - Location is a required param
    // - Navigation will always be set to IDLE_NAVIGATION
    // - Can pass any other state in newState
    function completeNavigation(location, newState, _temp) {
        var _location$state, _location$state2;
        let { flushSync } = _temp === void 0 ? {} : _temp;
        // Deduce if we're in a loading/actionReload state:
        // - We have committed actionData in the store
        // - The current navigation was a mutation submission
        // - We're past the submitting state and into the loading state
        // - The location being loaded is not the result of a redirect
        let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
        let actionData;
        if (newState.actionData) {
            if (Object.keys(newState.actionData).length > 0) actionData = newState.actionData;
            else actionData = null;
        } else if (isActionReload) actionData = state.actionData;
        else actionData = null;
        // Always preserve any existing loaderData from re-used routes
        let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        // On a successful navigation we can assume we got through all blockers
        // so we can start fresh
        let blockers = state.blockers;
        if (blockers.size > 0) {
            blockers = new Map(blockers);
            blockers.forEach((_, k)=>blockers.set(k, IDLE_BLOCKER));
        }
        // Always respect the user flag.  Otherwise don't reset on mutation
        // submission navigations unless they redirect
        let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        // Commit any in-flight routes at the end of the HMR revalidation "navigation"
        if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = undefined;
        }
        if (isUninterruptedRevalidation) ;
        else if (pendingAction === Action.Pop) ;
        else if (pendingAction === Action.Push) init.history.push(location, location.state);
        else if (pendingAction === Action.Replace) init.history.replace(location, location.state);
        let viewTransitionOpts;
        // On POP, enable transitions if they were enabled on the original navigation
        if (pendingAction === Action.Pop) {
            // Forward takes precedence so they behave like the original navigation
            let priorPaths = appliedViewTransitions.get(state.location.pathname);
            if (priorPaths && priorPaths.has(location.pathname)) viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
            else if (appliedViewTransitions.has(location.pathname)) // the new location and enable if that location previously enabled
            viewTransitionOpts = {
                currentLocation: location,
                nextLocation: state.location
            };
        } else if (pendingViewTransitionEnabled) {
            // Store the applied transition on PUSH/REPLACE
            let toPaths = appliedViewTransitions.get(state.location.pathname);
            if (toPaths) toPaths.add(location.pathname);
            else {
                toPaths = new Set([
                    location.pathname
                ]);
                appliedViewTransitions.set(state.location.pathname, toPaths);
            }
            viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
        }
        updateState(_extends({}, newState, {
            actionData,
            loaderData,
            historyAction: pendingAction,
            location,
            initialized: true,
            navigation: IDLE_NAVIGATION,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
            preventScrollReset,
            blockers
        }), {
            viewTransitionOpts,
            flushSync: flushSync === true
        });
        // Reset stateful navigation vars
        pendingAction = Action.Pop;
        pendingPreventScrollReset = false;
        pendingViewTransitionEnabled = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        cancelledDeferredRoutes = [];
    }
    // Trigger a navigation event, which can either be a numerical POP or a PUSH
    // replace with an optional submission
    async function navigate(to, opts) {
        if (typeof to === "number") {
            init.history.go(to);
            return;
        }
        let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
        let { path, submission, error } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
        let currentLocation = state.location;
        let nextLocation = createLocation(state.location, path, opts && opts.state);
        // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
        // URL from window.location, so we need to encode it here so the behavior
        // remains the same as POP and non-data-router usages.  new URL() does all
        // the same encoding we'd get from a history.pushState/window.location read
        // without having to touch history
        nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
        let userReplace = opts && opts.replace != null ? opts.replace : undefined;
        let historyAction = Action.Push;
        if (userReplace === true) historyAction = Action.Replace;
        else if (userReplace === false) ;
        else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) // users don't have to double-click the back button to get to the prior
        // location.  If the user redirects to a different location from the
        // action/loader this will be ignored and the redirect will be a PUSH
        historyAction = Action.Replace;
        let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
        let flushSync = (opts && opts.flushSync) === true;
        let blockerKey = shouldBlockNavigation({
            currentLocation,
            nextLocation,
            historyAction
        });
        if (blockerKey) {
            // Put the blocker into a blocked state
            updateBlocker(blockerKey, {
                state: "blocked",
                location: nextLocation,
                proceed () {
                    updateBlocker(blockerKey, {
                        state: "proceeding",
                        proceed: undefined,
                        reset: undefined,
                        location: nextLocation
                    });
                    // Send the same navigation through
                    navigate(to, opts);
                },
                reset () {
                    let blockers = new Map(state.blockers);
                    blockers.set(blockerKey, IDLE_BLOCKER);
                    updateState({
                        blockers
                    });
                }
            });
            return;
        }
        return await startNavigation(historyAction, nextLocation, {
            submission,
            // Send through the formData serialization error if we have one so we can
            // render at the right error boundary after we match routes
            pendingError: error,
            preventScrollReset,
            replace: opts && opts.replace,
            enableViewTransition: opts && opts.viewTransition,
            flushSync
        });
    }
    // Revalidate all current loaders.  If a navigation is in progress or if this
    // is interrupted by a navigation, allow this to "succeed" by calling all
    // loaders during the next loader round
    function revalidate() {
        interruptActiveLoads();
        updateState({
            revalidation: "loading"
        });
        // If we're currently submitting an action, we don't need to start a new
        // navigation, we'll just let the follow up loader execution call all loaders
        if (state.navigation.state === "submitting") return;
        // If we're currently in an idle state, start a new navigation for the current
        // action/location and mark it as uninterrupted, which will skip the history
        // update in completeNavigation
        if (state.navigation.state === "idle") {
            startNavigation(state.historyAction, state.location, {
                startUninterruptedRevalidation: true
            });
            return;
        }
        // Otherwise, if we're currently in a loading state, just start a new
        // navigation to the navigation.location but do not trigger an uninterrupted
        // revalidation so that history correctly updates once the navigation completes
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
            overrideNavigation: state.navigation,
            // Proxy through any rending view transition
            enableViewTransition: pendingViewTransitionEnabled === true
        });
    }
    // Start a navigation to the given action/location.  Can optionally provide a
    // overrideNavigation which will override the normalLoad in the case of a redirect
    // navigation
    async function startNavigation(historyAction, location, opts) {
        // Abort any in-progress navigations and start a new one. Unset any ongoing
        // uninterrupted revalidations unless told otherwise, since we want this
        // new navigation to update history normally
        pendingNavigationController && pendingNavigationController.abort();
        pendingNavigationController = null;
        pendingAction = historyAction;
        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
        // Save the current scroll position every time we start a new navigation,
        // and track whether we should reset scroll on completion
        saveScrollPosition(state.location, state.matches);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let loadingNavigation = opts && opts.overrideNavigation;
        let matches = opts != null && opts.initialHydration && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ? state.matches : matchRoutes(routesToUse, location, basename);
        let flushSync = (opts && opts.flushSync) === true;
        // Short circuit if it's only a hash change and not a revalidation or
        // mutation submission.
        //
        // Ignore on initial page loads because since the initial hydration will always
        // be "same hash".  For example, on /page#hash and submit a <Form method="post">
        // which will default to a navigation to /page
        if (matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
            completeNavigation(location, {
                matches
            }, {
                flushSync
            });
            return;
        }
        let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
        if (fogOfWar.active && fogOfWar.matches) matches = fogOfWar.matches;
        // Short circuit with a 404 on the root error boundary if we match nothing
        if (!matches) {
            let { error, notFoundMatches, route } = handleNavigational404(location.pathname);
            completeNavigation(location, {
                matches: notFoundMatches,
                loaderData: {},
                errors: {
                    [route.id]: error
                }
            }, {
                flushSync
            });
            return;
        }
        // Create a controller/Request for this navigation
        pendingNavigationController = new AbortController();
        let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
        let pendingActionResult;
        if (opts && opts.pendingError) // with binary FormData so assign here and skip to handleLoaders.  That
        // way we handle calling loaders above the boundary etc.  It's not really
        // different from an actionError in that sense.
        pendingActionResult = [
            findNearestBoundary(matches).route.id,
            {
                type: ResultType.error,
                error: opts.pendingError
            }
        ];
        else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
            // Call action if we received an action submission
            let actionResult = await handleAction(request, location, opts.submission, matches, fogOfWar.active, {
                replace: opts.replace,
                flushSync
            });
            if (actionResult.shortCircuited) return;
            // If we received a 404 from handleAction, it's because we couldn't lazily
            // discover the destination route so we don't want to call loaders
            if (actionResult.pendingActionResult) {
                let [routeId, result] = actionResult.pendingActionResult;
                if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
                    pendingNavigationController = null;
                    completeNavigation(location, {
                        matches: actionResult.matches,
                        loaderData: {},
                        errors: {
                            [routeId]: result.error
                        }
                    });
                    return;
                }
            }
            matches = actionResult.matches || matches;
            pendingActionResult = actionResult.pendingActionResult;
            loadingNavigation = getLoadingNavigation(location, opts.submission);
            flushSync = false;
            // No need to do fog of war matching again on loader execution
            fogOfWar.active = false;
            // Create a GET request for the loaders
            request = createClientSideRequest(init.history, request.url, request.signal);
        }
        // Call loaders
        let { shortCircuited, matches: updatedMatches, loaderData, errors } = await handleLoaders(request, location, matches, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
        if (shortCircuited) return;
        // Clean up now that the action/loaders have completed.  Don't clean up if
        // we short circuited because pendingNavigationController will have already
        // been assigned to a new controller for the next navigation
        pendingNavigationController = null;
        completeNavigation(location, _extends({
            matches: updatedMatches || matches
        }, getActionDataForCommit(pendingActionResult), {
            loaderData,
            errors
        }));
    }
    // Call the action matched by the leaf route for this navigation and handle
    // redirects/errors
    async function handleAction(request, location, submission, matches, isFogOfWar, opts) {
        if (opts === void 0) opts = {};
        interruptActiveLoads();
        // Put us in a submitting state
        let navigation = getSubmittingNavigation(location, submission);
        updateState({
            navigation
        }, {
            flushSync: opts.flushSync === true
        });
        if (isFogOfWar) {
            let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
            if (discoverResult.type === "aborted") return {
                shortCircuited: true
            };
            else if (discoverResult.type === "error") {
                let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
                return {
                    matches: discoverResult.partialMatches,
                    pendingActionResult: [
                        boundaryId,
                        {
                            type: ResultType.error,
                            error: discoverResult.error
                        }
                    ]
                };
            } else if (!discoverResult.matches) {
                let { notFoundMatches, error, route } = handleNavigational404(location.pathname);
                return {
                    matches: notFoundMatches,
                    pendingActionResult: [
                        route.id,
                        {
                            type: ResultType.error,
                            error
                        }
                    ]
                };
            } else matches = discoverResult.matches;
        }
        // Call our action and get the result
        let result;
        let actionMatch = getTargetMatch(matches, location);
        if (!actionMatch.route.action && !actionMatch.route.lazy) result = {
            type: ResultType.error,
            error: getInternalRouterError(405, {
                method: request.method,
                pathname: location.pathname,
                routeId: actionMatch.route.id
            })
        };
        else {
            let results = await callDataStrategy("action", state, request, [
                actionMatch
            ], matches, null);
            result = results[actionMatch.route.id];
            if (request.signal.aborted) return {
                shortCircuited: true
            };
        }
        if (isRedirectResult(result)) {
            let replace;
            if (opts && opts.replace != null) replace = opts.replace;
            else {
                // If the user didn't explicity indicate replace behavior, replace if
                // we redirected to the exact same location we're currently at to avoid
                // double back-buttons
                let location = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
                replace = location === state.location.pathname + state.location.search;
            }
            await startRedirectNavigation(request, result, true, {
                submission,
                replace
            });
            return {
                shortCircuited: true
            };
        }
        if (isDeferredResult(result)) throw getInternalRouterError(400, {
            type: "defer-action"
        });
        if (isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
            // By default, all submissions to the current location are REPLACE
            // navigations, but if the action threw an error that'll be rendered in
            // an errorElement, we fall back to PUSH so that the user can use the
            // back button to get back to the pre-submission form location to try
            // again
            if ((opts && opts.replace) !== true) pendingAction = Action.Push;
            return {
                matches,
                pendingActionResult: [
                    boundaryMatch.route.id,
                    result
                ]
            };
        }
        return {
            matches,
            pendingActionResult: [
                actionMatch.route.id,
                result
            ]
        };
    }
    // Call all applicable loaders for the given matches, handling redirects,
    // errors, etc.
    async function handleLoaders(request, location, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionResult) {
        // Figure out the right navigation we want to use for data loading
        let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
        // If this was a redirect from an action we don't have a "submission" but
        // we have it on the loading navigation so use that if available
        let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
        // If this is an uninterrupted revalidation, we remain in our current idle
        // state.  If not, we need to switch to our loading state and load data,
        // preserving any new action data or existing action data (in the case of
        // a revalidation interrupting an actionReload)
        // If we have partialHydration enabled, then don't update the state for the
        // initial data load since it's not a "navigation"
        let shouldUpdateNavigationState = !isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration);
        // When fog of war is enabled, we enter our `loading` state earlier so we
        // can discover new routes during the `loading` state.  We skip this if
        // we've already run actions since we would have done our matching already.
        // If the children() function threw then, we want to proceed with the
        // partial matches it discovered.
        if (isFogOfWar) {
            if (shouldUpdateNavigationState) {
                let actionData = getUpdatedActionData(pendingActionResult);
                updateState(_extends({
                    navigation: loadingNavigation
                }, actionData !== undefined ? {
                    actionData
                } : {}), {
                    flushSync
                });
            }
            let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
            if (discoverResult.type === "aborted") return {
                shortCircuited: true
            };
            else if (discoverResult.type === "error") {
                let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
                return {
                    matches: discoverResult.partialMatches,
                    loaderData: {},
                    errors: {
                        [boundaryId]: discoverResult.error
                    }
                };
            } else if (!discoverResult.matches) {
                let { error, notFoundMatches, route } = handleNavigational404(location.pathname);
                return {
                    matches: notFoundMatches,
                    loaderData: {},
                    errors: {
                        [route.id]: error
                    }
                };
            } else matches = discoverResult.matches;
        }
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
        // Cancel pending deferreds for no-longer-matched routes or routes we're
        // about to reload.  Note that if this is an action reload we would have
        // already cancelled all pending deferreds so this would be a no-op
        cancelActiveDeferreds((routeId)=>!(matches && matches.some((m)=>m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m)=>m.route.id === routeId));
        pendingNavigationLoadId = ++incrementingLoadId;
        // Short circuit if we have no loaders to run
        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
            let updatedFetchers = markFetchRedirectsDone();
            completeNavigation(location, _extends({
                matches,
                loaderData: {},
                // Commit pending error if we're short circuiting
                errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
                    [pendingActionResult[0]]: pendingActionResult[1].error
                } : null
            }, getActionDataForCommit(pendingActionResult), updatedFetchers ? {
                fetchers: new Map(state.fetchers)
            } : {}), {
                flushSync
            });
            return {
                shortCircuited: true
            };
        }
        if (shouldUpdateNavigationState) {
            let updates = {};
            if (!isFogOfWar) {
                // Only update navigation/actionNData if we didn't already do it above
                updates.navigation = loadingNavigation;
                let actionData = getUpdatedActionData(pendingActionResult);
                if (actionData !== undefined) updates.actionData = actionData;
            }
            if (revalidatingFetchers.length > 0) updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
            updateState(updates, {
                flushSync
            });
        }
        revalidatingFetchers.forEach((rf)=>{
            abortFetcher(rf.key);
            if (rf.controller) // (via deleteFetcher) does not abort the triggering navigation that
            // triggered the revalidation
            fetchControllers.set(rf.key, rf.controller);
        });
        // Proxy navigation abort through to revalidation fetchers
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((f)=>abortFetcher(f.key));
        if (pendingNavigationController) pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, request);
        if (request.signal.aborted) return {
            shortCircuited: true
        };
        // Clean up _after_ loaders have completed.  Don't clean up if we short
        // circuited because fetchControllers would have been aborted and
        // reassigned to new controllers for the next navigation
        if (pendingNavigationController) pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        revalidatingFetchers.forEach((rf)=>fetchControllers.delete(rf.key));
        // If any loaders returned a redirect Response, start a new REPLACE navigation
        let redirect = findRedirect(loaderResults);
        if (redirect) {
            await startRedirectNavigation(request, redirect.result, true, {
                replace
            });
            return {
                shortCircuited: true
            };
        }
        redirect = findRedirect(fetcherResults);
        if (redirect) {
            // If this redirect came from a fetcher make sure we mark it in
            // fetchRedirectIds so it doesn't get revalidated on the next set of
            // loader executions
            fetchRedirectIds.add(redirect.key);
            await startRedirectNavigation(request, redirect.result, true, {
                replace
            });
            return {
                shortCircuited: true
            };
        }
        // Process and commit output from loaders
        let { loaderData, errors } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
        // Wire up subscribers to update loaderData as promises settle
        activeDeferreds.forEach((deferredData, routeId)=>{
            deferredData.subscribe((aborted)=>{
                // Note: No need to updateState here since the TrackedPromise on
                // loaderData is stable across resolve/reject
                // Remove this instance if we were aborted or if promises have settled
                if (aborted || deferredData.done) activeDeferreds.delete(routeId);
            });
        });
        // Preserve SSR errors during partial hydration
        if (future.v7_partialHydration && initialHydration && state.errors) errors = _extends({}, state.errors, errors);
        let updatedFetchers = markFetchRedirectsDone();
        let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
        let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
        return _extends({
            matches,
            loaderData,
            errors
        }, shouldUpdateFetchers ? {
            fetchers: new Map(state.fetchers)
        } : {});
    }
    function getUpdatedActionData(pendingActionResult) {
        if (pendingActionResult && !isErrorResult(pendingActionResult[1])) // would be a breaking change to use any.
        // TODO: v7 - change `RouteData` to use `unknown` instead of `any`
        return {
            [pendingActionResult[0]]: pendingActionResult[1].data
        };
        else if (state.actionData) {
            if (Object.keys(state.actionData).length === 0) return null;
            else return state.actionData;
        }
    }
    function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
        revalidatingFetchers.forEach((rf)=>{
            let fetcher = state.fetchers.get(rf.key);
            let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
            state.fetchers.set(rf.key, revalidatingFetcher);
        });
        return new Map(state.fetchers);
    }
    // Trigger a fetcher load/submit for the given fetcher key
    function fetch(key, routeId, href, opts) {
        if (isServer) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        abortFetcher(key);
        let flushSync = (opts && opts.flushSync) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
        let matches = matchRoutes(routesToUse, normalizedPath, basename);
        let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
        if (fogOfWar.active && fogOfWar.matches) matches = fogOfWar.matches;
        if (!matches) {
            setFetcherError(key, routeId, getInternalRouterError(404, {
                pathname: normalizedPath
            }), {
                flushSync
            });
            return;
        }
        let { path, submission, error } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
        if (error) {
            setFetcherError(key, routeId, error, {
                flushSync
            });
            return;
        }
        let match = getTargetMatch(matches, path);
        let preventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && isMutationMethod(submission.formMethod)) {
            handleFetcherAction(key, routeId, path, match, matches, fogOfWar.active, flushSync, preventScrollReset, submission);
            return;
        }
        // Store off the match so we can call it's shouldRevalidate on subsequent
        // revalidations
        fetchLoadMatches.set(key, {
            routeId,
            path
        });
        handleFetcherLoader(key, routeId, path, match, matches, fogOfWar.active, flushSync, preventScrollReset, submission);
    }
    // Call the action for the matched fetcher.submit(), and then handle redirects,
    // errors, and revalidation
    async function handleFetcherAction(key, routeId, path, match, requestMatches, isFogOfWar, flushSync, preventScrollReset, submission) {
        interruptActiveLoads();
        fetchLoadMatches.delete(key);
        function detectAndHandle405Error(m) {
            if (!m.route.action && !m.route.lazy) {
                let error = getInternalRouterError(405, {
                    method: submission.formMethod,
                    pathname: path,
                    routeId: routeId
                });
                setFetcherError(key, routeId, error, {
                    flushSync
                });
                return true;
            }
            return false;
        }
        if (!isFogOfWar && detectAndHandle405Error(match)) return;
        // Put this fetcher into it's submitting state
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
            flushSync
        });
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
        if (isFogOfWar) {
            let discoverResult = await discoverRoutes(requestMatches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
            if (discoverResult.type === "aborted") return;
            else if (discoverResult.type === "error") {
                setFetcherError(key, routeId, discoverResult.error, {
                    flushSync
                });
                return;
            } else if (!discoverResult.matches) {
                setFetcherError(key, routeId, getInternalRouterError(404, {
                    pathname: path
                }), {
                    flushSync
                });
                return;
            } else {
                requestMatches = discoverResult.matches;
                match = getTargetMatch(requestMatches, path);
                if (detectAndHandle405Error(match)) return;
            }
        }
        // Call the action for the fetcher
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let actionResults = await callDataStrategy("action", state, fetchRequest, [
            match
        ], requestMatches, key);
        let actionResult = actionResults[match.route.id];
        if (fetchRequest.signal.aborted) {
            // We can delete this so long as we weren't aborted by our own fetcher
            // re-submit which would have put _new_ controller is in fetchControllers
            if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
            return;
        }
        // When using v7_fetcherPersist, we don't want errors bubbling up to the UI
        // or redirects processed for unmounted fetchers so we just revert them to
        // idle
        if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
            if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
                updateFetcherState(key, getDoneFetcher(undefined));
                return;
            }
        } else {
            if (isRedirectResult(actionResult)) {
                fetchControllers.delete(key);
                if (pendingNavigationLoadId > originatingLoadId) {
                    // A new navigation was kicked off after our action started, so that
                    // should take precedence over this redirect navigation.  We already
                    // set isRevalidationRequired so all loaders for the new route should
                    // fire unless opted out via shouldRevalidate
                    updateFetcherState(key, getDoneFetcher(undefined));
                    return;
                } else {
                    fetchRedirectIds.add(key);
                    updateFetcherState(key, getLoadingFetcher(submission));
                    return startRedirectNavigation(fetchRequest, actionResult, false, {
                        fetcherSubmission: submission,
                        preventScrollReset
                    });
                }
            }
            // Process any non-redirect errors thrown
            if (isErrorResult(actionResult)) {
                setFetcherError(key, routeId, actionResult.error);
                return;
            }
        }
        if (isDeferredResult(actionResult)) throw getInternalRouterError(400, {
            type: "defer-action"
        });
        // Start the data load for current matches, or the next location if we're
        // in the middle of a navigation
        let nextLocation = state.navigation.location || state.location;
        let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
        invariant(matches, "Didn't find any matches after fetcher action");
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let loadFetcher = getLoadingFetcher(submission, actionResult.data);
        state.fetchers.set(key, loadFetcher);
        let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [
            match.route.id,
            actionResult
        ]);
        // Put all revalidating fetchers into the loading state, except for the
        // current fetcher which we want to keep in it's current loading state which
        // contains it's action submission info + action data
        revalidatingFetchers.filter((rf)=>rf.key !== key).forEach((rf)=>{
            let staleKey = rf.key;
            let existingFetcher = state.fetchers.get(staleKey);
            let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
            state.fetchers.set(staleKey, revalidatingFetcher);
            abortFetcher(staleKey);
            if (rf.controller) fetchControllers.set(staleKey, rf.controller);
        });
        updateState({
            fetchers: new Map(state.fetchers)
        });
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((rf)=>abortFetcher(rf.key));
        abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
        if (abortController.signal.aborted) return;
        abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        fetchReloadIds.delete(key);
        fetchControllers.delete(key);
        revalidatingFetchers.forEach((r)=>fetchControllers.delete(r.key));
        let redirect = findRedirect(loaderResults);
        if (redirect) return startRedirectNavigation(revalidationRequest, redirect.result, false, {
            preventScrollReset
        });
        redirect = findRedirect(fetcherResults);
        if (redirect) {
            // If this redirect came from a fetcher make sure we mark it in
            // fetchRedirectIds so it doesn't get revalidated on the next set of
            // loader executions
            fetchRedirectIds.add(redirect.key);
            return startRedirectNavigation(revalidationRequest, redirect.result, false, {
                preventScrollReset
            });
        }
        // Process and commit output from loaders
        let { loaderData, errors } = processLoaderData(state, matches, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
        // Since we let revalidations complete even if the submitting fetcher was
        // deleted, only put it back to idle if it hasn't been deleted
        if (state.fetchers.has(key)) {
            let doneFetcher = getDoneFetcher(actionResult.data);
            state.fetchers.set(key, doneFetcher);
        }
        abortStaleFetchLoads(loadId);
        // If we are currently in a navigation loading state and this fetcher is
        // more recent than the navigation, we want the newer data so abort the
        // navigation and complete it with the fetcher data
        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
            invariant(pendingAction, "Expected pending action");
            pendingNavigationController && pendingNavigationController.abort();
            completeNavigation(state.navigation.location, {
                matches,
                loaderData,
                errors,
                fetchers: new Map(state.fetchers)
            });
        } else {
            // otherwise just update with the fetcher data, preserving any existing
            // loaderData for loaders that did not need to reload.  We have to
            // manually merge here since we aren't going through completeNavigation
            updateState({
                errors,
                loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
                fetchers: new Map(state.fetchers)
            });
            isRevalidationRequired = false;
        }
    }
    // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
    async function handleFetcherLoader(key, routeId, path, match, matches, isFogOfWar, flushSync, preventScrollReset, submission) {
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
            flushSync
        });
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
        if (isFogOfWar) {
            let discoverResult = await discoverRoutes(matches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
            if (discoverResult.type === "aborted") return;
            else if (discoverResult.type === "error") {
                setFetcherError(key, routeId, discoverResult.error, {
                    flushSync
                });
                return;
            } else if (!discoverResult.matches) {
                setFetcherError(key, routeId, getInternalRouterError(404, {
                    pathname: path
                }), {
                    flushSync
                });
                return;
            } else {
                matches = discoverResult.matches;
                match = getTargetMatch(matches, path);
            }
        }
        // Call the loader for this fetcher route match
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let results = await callDataStrategy("loader", state, fetchRequest, [
            match
        ], matches, key);
        let result = results[match.route.id];
        // Deferred isn't supported for fetcher loads, await everything and treat it
        // as a normal load.  resolveDeferredData will return undefined if this
        // fetcher gets aborted, so we just leave result untouched and short circuit
        // below if that happens
        if (isDeferredResult(result)) result = await resolveDeferredData(result, fetchRequest.signal, true) || result;
        // We can delete this so long as we weren't aborted by our our own fetcher
        // re-load which would have put _new_ controller is in fetchControllers
        if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
        if (fetchRequest.signal.aborted) return;
        // We don't want errors bubbling up or redirects followed for unmounted
        // fetchers, so short circuit here if it was removed from the UI
        if (deletedFetchers.has(key)) {
            updateFetcherState(key, getDoneFetcher(undefined));
            return;
        }
        // If the loader threw a redirect Response, start a new REPLACE navigation
        if (isRedirectResult(result)) {
            if (pendingNavigationLoadId > originatingLoadId) {
                // A new navigation was kicked off after our loader started, so that
                // should take precedence over this redirect navigation
                updateFetcherState(key, getDoneFetcher(undefined));
                return;
            } else {
                fetchRedirectIds.add(key);
                await startRedirectNavigation(fetchRequest, result, false, {
                    preventScrollReset
                });
                return;
            }
        }
        // Process any non-redirect errors thrown
        if (isErrorResult(result)) {
            setFetcherError(key, routeId, result.error);
            return;
        }
        invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
        // Put the fetcher back into an idle state
        updateFetcherState(key, getDoneFetcher(result.data));
    }
    /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */ async function startRedirectNavigation(request, redirect, isNavigation, _temp2) {
        let { submission, fetcherSubmission, preventScrollReset, replace } = _temp2 === void 0 ? {} : _temp2;
        if (redirect.response.headers.has("X-Remix-Revalidate")) isRevalidationRequired = true;
        let location = redirect.response.headers.get("Location");
        invariant(location, "Expected a Location header on the redirect Response");
        location = normalizeRedirectLocation(location, new URL(request.url), basename);
        let redirectLocation = createLocation(state.location, location, {
            _isRedirect: true
        });
        if (isBrowser) {
            let isDocumentReload = false;
            if (redirect.response.headers.has("X-Remix-Reload-Document")) isDocumentReload = true;
            else if (ABSOLUTE_URL_REGEX.test(location)) {
                const url = init.history.createURL(location);
                isDocumentReload = url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
                stripBasename(url.pathname, basename) == null;
            }
            if (isDocumentReload) {
                if (replace) routerWindow.location.replace(location);
                else routerWindow.location.assign(location);
                return;
            }
        }
        // There's no need to abort on redirects, since we don't detect the
        // redirect until the action/loaders have settled
        pendingNavigationController = null;
        let redirectHistoryAction = replace === true || redirect.response.headers.has("X-Remix-Replace") ? Action.Replace : Action.Push;
        // Use the incoming submission if provided, fallback on the active one in
        // state.navigation
        let { formMethod, formAction, formEncType } = state.navigation;
        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) submission = getSubmissionFromNavigation(state.navigation);
        // If this was a 307/308 submission we want to preserve the HTTP method and
        // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
        // redirected location
        let activeSubmission = submission || fetcherSubmission;
        if (redirectPreserveMethodStatusCodes.has(redirect.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) await startNavigation(redirectHistoryAction, redirectLocation, {
            submission: _extends({}, activeSubmission, {
                formAction: location
            }),
            // Preserve these flags across redirects
            preventScrollReset: preventScrollReset || pendingPreventScrollReset,
            enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
        });
        else {
            // If we have a navigation submission, we will preserve it through the
            // redirect navigation
            let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
            await startNavigation(redirectHistoryAction, redirectLocation, {
                overrideNavigation,
                // Send fetcher submissions through for shouldRevalidate
                fetcherSubmission,
                // Preserve these flags across redirects
                preventScrollReset: preventScrollReset || pendingPreventScrollReset,
                enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
            });
        }
    }
    // Utility wrapper for calling dataStrategy client-side without having to
    // pass around the manifest, mapRouteProperties, etc.
    async function callDataStrategy(type, state, request, matchesToLoad, matches, fetcherKey) {
        let results;
        let dataResults = {};
        try {
            results = await callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties);
        } catch (e) {
            // If the outer dataStrategy method throws, just return the error for all
            // matches - and it'll naturally bubble to the root
            matchesToLoad.forEach((m)=>{
                dataResults[m.route.id] = {
                    type: ResultType.error,
                    error: e
                };
            });
            return dataResults;
        }
        for (let [routeId, result] of Object.entries(results))if (isRedirectDataStrategyResultResult(result)) {
            let response = result.result;
            dataResults[routeId] = {
                type: ResultType.redirect,
                response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, future.v7_relativeSplatPath)
            };
        } else dataResults[routeId] = await convertDataStrategyResultToDataResult(result);
        return dataResults;
    }
    async function callLoadersAndMaybeResolveData(state, matches, matchesToLoad, fetchersToLoad, request) {
        let currentMatches = state.matches;
        // Kick off loaders and fetchers in parallel
        let loaderResultsPromise = callDataStrategy("loader", state, request, matchesToLoad, matches, null);
        let fetcherResultsPromise = Promise.all(fetchersToLoad.map(async (f)=>{
            if (f.matches && f.match && f.controller) {
                let results = await callDataStrategy("loader", state, createClientSideRequest(init.history, f.path, f.controller.signal), [
                    f.match
                ], f.matches, f.key);
                let result = results[f.match.route.id];
                // Fetcher results are keyed by fetcher key from here on out, not routeId
                return {
                    [f.key]: result
                };
            } else return Promise.resolve({
                [f.key]: {
                    type: ResultType.error,
                    error: getInternalRouterError(404, {
                        pathname: f.path
                    })
                }
            });
        }));
        let loaderResults = await loaderResultsPromise;
        let fetcherResults = (await fetcherResultsPromise).reduce((acc, r)=>Object.assign(acc, r), {});
        await Promise.all([
            resolveNavigationDeferredResults(matches, loaderResults, request.signal, currentMatches, state.loaderData),
            resolveFetcherDeferredResults(matches, fetcherResults, fetchersToLoad)
        ]);
        return {
            loaderResults,
            fetcherResults
        };
    }
    function interruptActiveLoads() {
        // Every interruption triggers a revalidation
        isRevalidationRequired = true;
        // Cancel pending route-level deferreds and mark cancelled routes for
        // revalidation
        cancelledDeferredRoutes.push(...cancelActiveDeferreds());
        // Abort in-flight fetcher loads
        fetchLoadMatches.forEach((_, key)=>{
            if (fetchControllers.has(key)) cancelledFetcherLoads.add(key);
            abortFetcher(key);
        });
    }
    function updateFetcherState(key, fetcher, opts) {
        if (opts === void 0) opts = {};
        state.fetchers.set(key, fetcher);
        updateState({
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function setFetcherError(key, routeId, error, opts) {
        if (opts === void 0) opts = {};
        let boundaryMatch = findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
            errors: {
                [boundaryMatch.route.id]: error
            },
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function getFetcher(key) {
        activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
        // If this fetcher was previously marked for deletion, unmark it since we
        // have a new instance
        if (deletedFetchers.has(key)) deletedFetchers.delete(key);
        return state.fetchers.get(key) || IDLE_FETCHER;
    }
    function deleteFetcher(key) {
        let fetcher = state.fetchers.get(key);
        // Don't abort the controller if this is a deletion of a fetcher.submit()
        // in it's loading phase since - we don't want to abort the corresponding
        // revalidation and want them to complete and land
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) abortFetcher(key);
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        // If we opted into the flag we can clear this now since we're calling
        // deleteFetcher() at the end of updateState() and we've already handed the
        // deleted fetcher keys off to the data layer.
        // If not, we're eagerly calling deleteFetcher() and we need to keep this
        // Set populated until the next updateState call, and we'll clear
        // `deletedFetchers` then
        if (future.v7_fetcherPersist) deletedFetchers.delete(key);
        cancelledFetcherLoads.delete(key);
        state.fetchers.delete(key);
    }
    function deleteFetcherAndUpdateState(key) {
        let count = (activeFetchers.get(key) || 0) - 1;
        if (count <= 0) {
            activeFetchers.delete(key);
            deletedFetchers.add(key);
            if (!future.v7_fetcherPersist) deleteFetcher(key);
        } else activeFetchers.set(key, count);
        updateState({
            fetchers: new Map(state.fetchers)
        });
    }
    function abortFetcher(key) {
        let controller = fetchControllers.get(key);
        if (controller) {
            controller.abort();
            fetchControllers.delete(key);
        }
    }
    function markFetchersDone(keys) {
        for (let key of keys){
            let fetcher = getFetcher(key);
            let doneFetcher = getDoneFetcher(fetcher.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    function markFetchRedirectsDone() {
        let doneKeys = [];
        let updatedFetchers = false;
        for (let key of fetchRedirectIds){
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                fetchRedirectIds.delete(key);
                doneKeys.push(key);
                updatedFetchers = true;
            }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
    }
    function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds)if (id < landedId) {
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                abortFetcher(key);
                fetchReloadIds.delete(key);
                yeetedKeys.push(key);
            }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
    }
    function getBlocker(key, fn) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        if (blockerFunctions.get(key) !== fn) blockerFunctions.set(key, fn);
        return blocker;
    }
    function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
    }
    // Utility function to update blockers, ensuring valid state transitions
    function updateBlocker(key, newBlocker) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        // Poor mans state machine :)
        // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
        invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
        let blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({
            blockers
        });
    }
    function shouldBlockNavigation(_ref2) {
        let { currentLocation, nextLocation, historyAction } = _ref2;
        if (blockerFunctions.size === 0) return;
        // We ony support a single active blocker at the moment since we don't have
        // any compelling use cases for multi-blocker yet
        if (blockerFunctions.size > 1) warning(false, "A router only supports one blocker at a time");
        let entries = Array.from(blockerFunctions.entries());
        let [blockerKey, blockerFunction] = entries[entries.length - 1];
        let blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") // it and can let this navigation continue
        return;
        // At this point, we know we're unblocked/blocked so we need to check the
        // user-provided blocker function
        if (blockerFunction({
            currentLocation,
            nextLocation,
            historyAction
        })) return blockerKey;
    }
    function handleNavigational404(pathname) {
        let error = getInternalRouterError(404, {
            pathname
        });
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let { matches, route } = getShortCircuitMatches(routesToUse);
        // Cancel all pending deferred on 404s since we don't keep any routes
        cancelActiveDeferreds();
        return {
            notFoundMatches: matches,
            route,
            error
        };
    }
    function cancelActiveDeferreds(predicate) {
        let cancelledRouteIds = [];
        activeDeferreds.forEach((dfd, routeId)=>{
            if (!predicate || predicate(routeId)) {
                // Cancel the deferred - but do not remove from activeDeferreds here -
                // we rely on the subscribers to do that so our tests can assert proper
                // cleanup via _internalActiveDeferreds
                dfd.cancel();
                cancelledRouteIds.push(routeId);
                activeDeferreds.delete(routeId);
            }
        });
        return cancelledRouteIds;
    }
    // Opt in to capturing and reporting scroll positions during navigations,
    // used by the <ScrollRestoration> component
    function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey = getKey || null;
        // Perform initial hydration scroll restoration, since we miss the boat on
        // the initial updateState() because we've not yet rendered <ScrollRestoration/>
        // and therefore have no savedScrollPositions available
        if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
            initialScrollRestored = true;
            let y = getSavedScrollPosition(state.location, state.matches);
            if (y != null) updateState({
                restoreScrollPosition: y
            });
        }
        return ()=>{
            savedScrollPositions = null;
            getScrollPosition = null;
            getScrollRestorationKey = null;
        };
    }
    function getScrollKey(location, matches) {
        if (getScrollRestorationKey) {
            let key = getScrollRestorationKey(location, matches.map((m)=>convertRouteMatchToUiMatch(m, state.loaderData)));
            return key || location.key;
        }
        return location.key;
    }
    function saveScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollPosition) {
            let key = getScrollKey(location, matches);
            savedScrollPositions[key] = getScrollPosition();
        }
    }
    function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions) {
            let key = getScrollKey(location, matches);
            let y = savedScrollPositions[key];
            if (typeof y === "number") return y;
        }
        return null;
    }
    function checkFogOfWar(matches, routesToUse, pathname) {
        if (patchRoutesOnNavigationImpl) {
            if (!matches) {
                let fogMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
                return {
                    active: true,
                    matches: fogMatches || []
                };
            } else if (Object.keys(matches[0].params).length > 0) {
                // If we matched a dynamic param or a splat, it might only be because
                // we haven't yet discovered other routes that would match with a
                // higher score.  Call patchRoutesOnNavigation just to be sure
                let partialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
                return {
                    active: true,
                    matches: partialMatches
                };
            }
        }
        return {
            active: false,
            matches: null
        };
    }
    async function discoverRoutes(matches, pathname, signal, fetcherKey) {
        if (!patchRoutesOnNavigationImpl) return {
            type: "success",
            matches
        };
        let partialMatches = matches;
        while(true){
            let isNonHMR = inFlightDataRoutes == null;
            let routesToUse = inFlightDataRoutes || dataRoutes;
            let localManifest = manifest;
            try {
                await patchRoutesOnNavigationImpl({
                    signal,
                    path: pathname,
                    matches: partialMatches,
                    fetcherKey,
                    patch: (routeId, children)=>{
                        if (signal.aborted) return;
                        patchRoutesImpl(routeId, children, routesToUse, localManifest, mapRouteProperties);
                    }
                });
            } catch (e) {
                return {
                    type: "error",
                    error: e,
                    partialMatches
                };
            } finally{
                // If we are not in the middle of an HMR revalidation and we changed the
                // routes, provide a new identity so when we `updateState` at the end of
                // this navigation/fetch `router.routes` will be a new identity and
                // trigger a re-run of memoized `router.routes` dependencies.
                // HMR will already update the identity and reflow when it lands
                // `inFlightDataRoutes` in `completeNavigation`
                if (isNonHMR && !signal.aborted) dataRoutes = [
                    ...dataRoutes
                ];
            }
            if (signal.aborted) return {
                type: "aborted"
            };
            let newMatches = matchRoutes(routesToUse, pathname, basename);
            if (newMatches) return {
                type: "success",
                matches: newMatches
            };
            let newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
            // Avoid loops if the second pass results in the same partial matches
            if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every((m, i)=>m.route.id === newPartialMatches[i].route.id)) return {
                type: "success",
                matches: null
            };
            partialMatches = newPartialMatches;
        }
    }
    function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
    }
    function patchRoutes(routeId, children) {
        let isNonHMR = inFlightDataRoutes == null;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties);
        // If we are not in the middle of an HMR revalidation and we changed the
        // routes, provide a new identity and trigger a reflow via `updateState`
        // to re-run memoized `router.routes` dependencies.
        // HMR will already update the identity and reflow when it lands
        // `inFlightDataRoutes` in `completeNavigation`
        if (isNonHMR) {
            dataRoutes = [
                ...dataRoutes
            ];
            updateState({});
        }
    }
    router = {
        get basename () {
            return basename;
        },
        get future () {
            return future;
        },
        get state () {
            return state;
        },
        get routes () {
            return dataRoutes;
        },
        get window () {
            return routerWindow;
        },
        initialize,
        subscribe,
        enableScrollRestoration,
        navigate,
        fetch,
        revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (to)=>init.history.createHref(to),
        encodeLocation: (to)=>init.history.encodeLocation(to),
        getFetcher,
        deleteFetcher: deleteFetcherAndUpdateState,
        dispose,
        getBlocker,
        deleteBlocker,
        patchRoutes,
        _internalFetchControllers: fetchControllers,
        _internalActiveDeferreds: activeDeferreds,
        // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes
    };
    return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
    invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    let manifest = {};
    let basename = (opts ? opts.basename : null) || "/";
    let mapRouteProperties;
    if (opts != null && opts.mapRouteProperties) mapRouteProperties = opts.mapRouteProperties;
    else if (opts != null && opts.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = opts.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = defaultMapRouteProperties;
    // Config driven behavior flags
    let future = _extends({
        v7_relativeSplatPath: false,
        v7_throwAbortReason: false
    }, opts ? opts.future : null);
    let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
    /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   *
   * - `opts.requestContext` is an optional server context that will be passed
   *   to actions/loaders in the `context` parameter
   * - `opts.skipLoaderErrorBubbling` is an optional parameter that will prevent
   *   the bubbling of errors which allows single-fetch-type implementations
   *   where the client will handle the bubbling and we may need to return data
   *   for the handling route
   */ async function query(request, _temp3) {
        let { requestContext, skipLoaderErrorBubbling, dataStrategy } = _temp3 === void 0 ? {} : _temp3;
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename);
        // SSR supports HEAD requests while SPA doesn't
        if (!isValidMethod(method) && method !== "HEAD") {
            let error = getInternalRouterError(405, {
                method
            });
            let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
            return {
                basename,
                location,
                matches: methodNotAllowedMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        } else if (!matches) {
            let error = getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
            return {
                basename,
                location,
                matches: notFoundMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        }
        let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null);
        if (isResponse(result)) return result;
        // When returning StaticHandlerContext, we patch back in the location here
        // since we need it for React Context.  But this helps keep our submit and
        // loadRouteData operating on a Request instead of a Location
        return _extends({
            location,
            basename
        }, result);
    }
    /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   *
   * - `opts.routeId` allows you to specify the specific route handler to call.
   *   If not provided the handler will determine the proper route by matching
   *   against `request.url`
   * - `opts.requestContext` is an optional server context that will be passed
   *    to actions/loaders in the `context` parameter
   */ async function queryRoute(request, _temp4) {
        let { routeId, requestContext, dataStrategy } = _temp4 === void 0 ? {} : _temp4;
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename);
        // SSR supports HEAD requests while SPA doesn't
        if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") throw getInternalRouterError(405, {
            method
        });
        else if (!matches) throw getInternalRouterError(404, {
            pathname: location.pathname
        });
        let match = routeId ? matches.find((m)=>m.route.id === routeId) : getTargetMatch(matches, location);
        if (routeId && !match) throw getInternalRouterError(403, {
            pathname: location.pathname,
            routeId
        });
        else if (!match) throw getInternalRouterError(404, {
            pathname: location.pathname
        });
        let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, false, match);
        if (isResponse(result)) return result;
        let error = result.errors ? Object.values(result.errors)[0] : undefined;
        if (error !== undefined) // _something_ that wasn't a Response, but it's not guaranteed/required
        // to be an `instanceof Error` either, so we have to use throw here to
        // preserve the "error" state outside of queryImpl.
        throw error;
        // Pick off the right state value to return
        if (result.actionData) return Object.values(result.actionData)[0];
        if (result.loaderData) {
            var _result$activeDeferre;
            let data = Object.values(result.loaderData)[0];
            if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
            return data;
        }
        return undefined;
    }
    async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch) {
        invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
        try {
            if (isMutationMethod(request.method.toLowerCase())) {
                let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch != null);
                return result;
            }
            let result = await loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch);
            return isResponse(result) ? result : _extends({}, result, {
                actionData: null,
                actionHeaders: {}
            });
        } catch (e) {
            // If the user threw/returned a Response in callLoaderOrAction for a
            // `queryRoute` call, we throw the `DataStrategyResult` to bail out early
            // and then return or throw the raw Response here accordingly
            if (isDataStrategyResult(e) && isResponse(e.result)) {
                if (e.type === ResultType.error) throw e.result;
                return e.result;
            }
            // Redirects are always returned since they don't propagate to catch
            // boundaries
            if (isRedirectResponse(e)) return e;
            throw e;
        }
    }
    async function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
        let result;
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
            let error = getInternalRouterError(405, {
                method: request.method,
                pathname: new URL(request.url).pathname,
                routeId: actionMatch.route.id
            });
            if (isRouteRequest) throw error;
            result = {
                type: ResultType.error,
                error
            };
        } else {
            let results = await callDataStrategy("action", request, [
                actionMatch
            ], matches, isRouteRequest, requestContext, dataStrategy);
            result = results[actionMatch.route.id];
            if (request.signal.aborted) throwStaticHandlerAbortedError(request, isRouteRequest, future);
        }
        if (isRedirectResult(result)) // callLoaderOrAction, but the type narrowing here keeps TS happy and we
        // can get back on the "throw all redirect responses" train here should
        // this ever happen :/
        throw new Response(null, {
            status: result.response.status,
            headers: {
                Location: result.response.headers.get("Location")
            }
        });
        if (isDeferredResult(result)) {
            let error = getInternalRouterError(400, {
                type: "defer-action"
            });
            if (isRouteRequest) throw error;
            result = {
                type: ResultType.error,
                error
            };
        }
        if (isRouteRequest) {
            // Note: This should only be non-Response values if we get here, since
            // isRouteRequest should throw any Response received in callLoaderOrAction
            if (isErrorResult(result)) throw result.error;
            return {
                matches: [
                    actionMatch
                ],
                loaderData: {},
                actionData: {
                    [actionMatch.route.id]: result.data
                },
                errors: null,
                // Note: statusCode + headers are unused here since queryRoute will
                // return the raw Response or value
                statusCode: 200,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        }
        // Create a GET request for the loaders
        let loaderRequest = new Request(request.url, {
            headers: request.headers,
            redirect: request.redirect,
            signal: request.signal
        });
        if (isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
            let context = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, [
                boundaryMatch.route.id,
                result
            ]);
            // action status codes take precedence over loader status codes
            return _extends({}, context, {
                statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
                actionData: null,
                actionHeaders: _extends({}, result.headers ? {
                    [actionMatch.route.id]: result.headers
                } : {})
            });
        }
        let context = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null);
        return _extends({}, context, {
            actionData: {
                [actionMatch.route.id]: result.data
            }
        }, result.statusCode ? {
            statusCode: result.statusCode
        } : {}, {
            actionHeaders: result.headers ? {
                [actionMatch.route.id]: result.headers
            } : {}
        });
    }
    async function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
        let isRouteRequest = routeMatch != null;
        // Short circuit if we have no loaders to run (queryRoute())
        if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) throw getInternalRouterError(400, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: routeMatch == null ? void 0 : routeMatch.route.id
        });
        let requestMatches = routeMatch ? [
            routeMatch
        ] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
        let matchesToLoad = requestMatches.filter((m)=>m.route.loader || m.route.lazy);
        // Short circuit if we have no loaders to run (query())
        if (matchesToLoad.length === 0) return {
            matches,
            // Add a null for all matched routes for proper revalidation on the client
            loaderData: matches.reduce((acc, m)=>Object.assign(acc, {
                    [m.route.id]: null
                }), {}),
            errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
                [pendingActionResult[0]]: pendingActionResult[1].error
            } : null,
            statusCode: 200,
            loaderHeaders: {},
            activeDeferreds: null
        };
        let results = await callDataStrategy("loader", request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy);
        if (request.signal.aborted) throwStaticHandlerAbortedError(request, isRouteRequest, future);
        // Process and commit output from loaders
        let activeDeferreds = new Map();
        let context = processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling);
        // Add a null for any non-loader matches for proper revalidation on the client
        let executedLoaders = new Set(matchesToLoad.map((match)=>match.route.id));
        matches.forEach((match)=>{
            if (!executedLoaders.has(match.route.id)) context.loaderData[match.route.id] = null;
        });
        return _extends({}, context, {
            matches,
            activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
        });
    }
    // Utility wrapper for calling dataStrategy server-side without having to
    // pass around the manifest, mapRouteProperties, etc.
    async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy) {
        let results = await callDataStrategyImpl(dataStrategy || defaultDataStrategy, type, null, request, matchesToLoad, matches, null, manifest, mapRouteProperties, requestContext);
        let dataResults = {};
        await Promise.all(matches.map(async (match)=>{
            if (!(match.route.id in results)) return;
            let result = results[match.route.id];
            if (isRedirectDataStrategyResultResult(result)) {
                let response = result.result;
                // Throw redirects and let the server handle them with an HTTP redirect
                throw normalizeRelativeRoutingRedirectResponse(response, request, match.route.id, matches, basename, future.v7_relativeSplatPath);
            }
            if (isResponse(result.result) && isRouteRequest) // directly without unwrapping
            throw result;
            dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
        }));
        return dataResults;
    }
    return {
        dataRoutes,
        query,
        queryRoute
    };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */ function getStaticContextFromError(routes, context, error) {
    let newContext = _extends({}, context, {
        statusCode: isRouteErrorResponse(error) ? error.status : 500,
        errors: {
            [context._deepestRenderedBoundaryId || routes[0].id]: error
        }
    });
    return newContext;
}
function throwStaticHandlerAbortedError(request, isRouteRequest, future) {
    if (future.v7_throwAbortReason && request.signal.reason !== undefined) throw request.signal.reason;
    let method = isRouteRequest ? "queryRoute" : "query";
    throw new Error(method + "() call aborted: " + request.method + " " + request.url);
}
function isSubmissionNavigation(opts) {
    return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
    let contextualMatches;
    let activeRouteMatch;
    if (fromRouteId) {
        // Grab matches up to the calling route so our route-relative logic is
        // relative to the correct source route
        contextualMatches = [];
        for (let match of matches){
            contextualMatches.push(match);
            if (match.route.id === fromRouteId) {
                activeRouteMatch = match;
                break;
            }
        }
    } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
    }
    // Resolve the relative path
    let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
    // When `to` is not specified we inherit search/hash from the current
    // location, unlike when to="." and we just inherit the path.
    // See https://github.com/remix-run/remix/issues/927
    if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
    }
    // Account for `?index` params when routing to the current location
    if ((to == null || to === "" || to === ".") && activeRouteMatch) {
        let nakedIndex = hasNakedIndexQuery(path.search);
        if (activeRouteMatch.route.index && !nakedIndex) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
        else if (!activeRouteMatch.route.index && nakedIndex) {
            // Remove existing ones when we're not
            let params = new URLSearchParams(path.search);
            let indexValues = params.getAll("index");
            params.delete("index");
            indexValues.filter((v)=>v).forEach((v)=>params.append("index", v));
            let qs = params.toString();
            path.search = qs ? "?" + qs : "";
        }
    }
    // If we're operating within a basename, prepend it to the pathname.  If
    // this is a root navigation, then just use the raw basename which allows
    // the basename to have full control over the presence of a trailing slash
    // on root actions
    if (prependBasename && basename !== "/") path.pathname = path.pathname === "/" ? basename : joinPaths([
        basename,
        path.pathname
    ]);
    return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
    // Return location verbatim on non-submission navigations
    if (!opts || !isSubmissionNavigation(opts)) return {
        path
    };
    if (opts.formMethod && !isValidMethod(opts.formMethod)) return {
        path,
        error: getInternalRouterError(405, {
            method: opts.formMethod
        })
    };
    let getInvalidBodyError = ()=>({
            path,
            error: getInternalRouterError(400, {
                type: "invalid-body"
            })
        });
    // Create a Submission on non-GET navigations
    let rawFormMethod = opts.formMethod || "get";
    let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
    let formAction = stripHashFromPath(path);
    if (opts.body !== undefined) {
        if (opts.formEncType === "text/plain") {
            // text only support POST/PUT/PATCH/DELETE submissions
            if (!isMutationMethod(formMethod)) return getInvalidBodyError();
            let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? Array.from(opts.body.entries()).reduce((acc, _ref3)=>{
                let [name, value] = _ref3;
                return "" + acc + name + "=" + value + "\n";
            }, "") : String(opts.body);
            return {
                path,
                submission: {
                    formMethod,
                    formAction,
                    formEncType: opts.formEncType,
                    formData: undefined,
                    json: undefined,
                    text
                }
            };
        } else if (opts.formEncType === "application/json") {
            // json only supports POST/PUT/PATCH/DELETE submissions
            if (!isMutationMethod(formMethod)) return getInvalidBodyError();
            try {
                let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
                return {
                    path,
                    submission: {
                        formMethod,
                        formAction,
                        formEncType: opts.formEncType,
                        formData: undefined,
                        json,
                        text: undefined
                    }
                };
            } catch (e) {
                return getInvalidBodyError();
            }
        }
    }
    invariant(typeof FormData === "function", "FormData is not available in this environment");
    let searchParams;
    let formData;
    if (opts.formData) {
        searchParams = convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
    } else if (opts.body instanceof FormData) {
        searchParams = convertFormDataToSearchParams(opts.body);
        formData = opts.body;
    } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = convertSearchParamsToFormData(searchParams);
    } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
    } else try {
        searchParams = new URLSearchParams(opts.body);
        formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
        return getInvalidBodyError();
    }
    let submission = {
        formMethod,
        formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData,
        json: undefined,
        text: undefined
    };
    if (isMutationMethod(submission.formMethod)) return {
        path,
        submission
    };
    // Flatten submission onto URLSearchParams for GET submissions
    let parsedPath = parsePath(path);
    // On GET navigation submissions we can drop the ?index param from the
    // resulting location since all loaders will run.  But fetcher GET submissions
    // only run a single loader so we need to preserve any incoming ?index params
    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) searchParams.append("index", "");
    parsedPath.search = "?" + searchParams;
    return {
        path: createPath(parsedPath),
        submission
    };
}
// Filter out all routes at/below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary) {
    if (includeBoundary === void 0) includeBoundary = false;
    let index = matches.findIndex((m)=>m.route.id === boundaryId);
    if (index >= 0) return matches.slice(0, includeBoundary ? index + 1 : index);
    return matches;
}
function getMatchesToLoad(history, state, matches, submission, location, initialHydration, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
    let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : undefined;
    let currentUrl = history.createURL(state.location);
    let nextUrl = history.createURL(location);
    // Pick navigation matches that are net-new or qualify for revalidation
    let boundaryMatches = matches;
    if (initialHydration && state.errors) // This is inclusive to handle cases where a server loader ran successfully,
    // a child server loader bubbled up to this route, but this route has
    // `clientLoader.hydrate` so we want to still run the `clientLoader` so that
    // we have a complete version of `loaderData`
    boundaryMatches = getLoaderMatchesUntilBoundary(matches, Object.keys(state.errors)[0], true);
    else if (pendingActionResult && isErrorResult(pendingActionResult[1])) // boundary
    boundaryMatches = getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]);
    // Don't revalidate loaders by default after action 4xx/5xx responses
    // when the flag is enabled.  They can still opt-into revalidation via
    // `shouldRevalidate` via `actionResult`
    let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : undefined;
    let shouldSkipRevalidation = skipActionErrorRevalidation && actionStatus && actionStatus >= 400;
    let navigationMatches = boundaryMatches.filter((match, index)=>{
        let { route } = match;
        if (route.lazy) return true;
        if (route.loader == null) return false;
        if (initialHydration) return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
        // Always call the loader on new route instances and pending defer cancellations
        if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id)=>id === match.route.id)) return true;
        // This is the default implementation for when we revalidate.  If the route
        // provides it's own implementation, then we give them full control but
        // provide this value so they can leverage it if needed after they check
        // their own specific use cases
        let currentRouteMatch = state.matches[index];
        let nextRouteMatch = match;
        return shouldRevalidateLoader(match, _extends({
            currentUrl,
            currentParams: currentRouteMatch.params,
            nextUrl,
            nextParams: nextRouteMatch.params
        }, submission, {
            actionResult,
            actionStatus,
            defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
        }));
    });
    // Pick fetcher.loads that need to be revalidated
    let revalidatingFetchers = [];
    fetchLoadMatches.forEach((f, key)=>{
        // Don't revalidate:
        //  - on initial hydration (shouldn't be any fetchers then anyway)
        //  - if fetcher won't be present in the subsequent render
        //    - no longer matches the URL (v7_fetcherPersist=false)
        //    - was unmounted but persisted due to v7_fetcherPersist=true
        if (initialHydration || !matches.some((m)=>m.route.id === f.routeId) || deletedFetchers.has(key)) return;
        let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
        // If the fetcher path no longer matches, push it in with null matches so
        // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
        // currently only a use-case for Remix HMR where the route tree can change
        // at runtime and remove a route previously loaded via a fetcher
        if (!fetcherMatches) {
            revalidatingFetchers.push({
                key,
                routeId: f.routeId,
                path: f.path,
                matches: null,
                match: null,
                controller: null
            });
            return;
        }
        // Revalidating fetchers are decoupled from the route matches since they
        // load from a static href.  They revalidate based on explicit revalidation
        // (submission, useRevalidator, or X-Remix-Revalidate)
        let fetcher = state.fetchers.get(key);
        let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
        let shouldRevalidate = false;
        if (fetchRedirectIds.has(key)) shouldRevalidate = false;
        else if (cancelledFetcherLoads.has(key)) {
            // Always mark for revalidation if the fetcher was cancelled
            cancelledFetcherLoads.delete(key);
            shouldRevalidate = true;
        } else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) // revalidation, it would just be a brand new load if an explicit
        // revalidation is required
        shouldRevalidate = isRevalidationRequired;
        else // to explicit revalidations only
        shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
            currentUrl,
            currentParams: state.matches[state.matches.length - 1].params,
            nextUrl,
            nextParams: matches[matches.length - 1].params
        }, submission, {
            actionResult,
            actionStatus,
            defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
        }));
        if (shouldRevalidate) revalidatingFetchers.push({
            key,
            routeId: f.routeId,
            path: f.path,
            matches: fetcherMatches,
            match: fetcherMatch,
            controller: new AbortController()
        });
    });
    return [
        navigationMatches,
        revalidatingFetchers
    ];
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
    // We dunno if we have a loader - gotta find out!
    if (route.lazy) return true;
    // No loader, nothing to initialize
    if (!route.loader) return false;
    let hasData = loaderData != null && loaderData[route.id] !== undefined;
    let hasError = errors != null && errors[route.id] !== undefined;
    // Don't run if we error'd during SSR
    if (!hasData && hasError) return false;
    // Explicitly opting-in to running on hydration
    if (typeof route.loader === "function" && route.loader.hydrate === true) return true;
    // Otherwise, run if we're not yet initialized with anything
    return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
    let isNew = !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id;
    // Handle the case that we don't have data for a re-used route, potentially
    // from a prior error or from a cancelled pending deferred
    let isMissingData = currentLoaderData[match.route.id] === undefined;
    // Always load if this is a net-new route or we don't yet have data
    return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
    let currentPath = currentMatch.route.path;
    return currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"];
}
function shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
        let routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") return routeChoice;
    }
    return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties) {
    var _childrenToPatch;
    let childrenToPatch;
    if (routeId) {
        let route = manifest[routeId];
        invariant(route, "No route found to patch children into: routeId = " + routeId);
        if (!route.children) route.children = [];
        childrenToPatch = route.children;
    } else childrenToPatch = routesToUse;
    // Don't patch in routes we already know about so that `patch` is idempotent
    // to simplify user-land code. This is useful because we re-call the
    // `patchRoutesOnNavigation` function for matched routes with params.
    let uniqueChildren = children.filter((newRoute)=>!childrenToPatch.some((existingRoute)=>isSameRoute(newRoute, existingRoute)));
    let newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties, [
        routeId || "_",
        "patch",
        String(((_childrenToPatch = childrenToPatch) == null ? void 0 : _childrenToPatch.length) || "0")
    ], manifest);
    childrenToPatch.push(...newRoutes);
}
function isSameRoute(newRoute, existingRoute) {
    // Most optimal check is by id
    if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) return true;
    // Second is by pathing differences
    if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) return false;
    // Pathless layout routes are trickier since we need to check children.
    // If they have no children then they're the same as far as we can tell
    if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) return true;
    // Otherwise, we look to see if every child in the new route is already
    // represented in the existing route's children
    return newRoute.children.every((aChild, i)=>{
        var _existingRoute$childr;
        return (_existingRoute$childr = existingRoute.children) == null ? void 0 : _existingRoute$childr.some((bChild)=>isSameRoute(aChild, bChild));
    });
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */ async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
    if (!route.lazy) return;
    let lazyRoute = await route.lazy();
    // If the lazy route function was executed and removed by another parallel
    // call then we can return - first lazy() to finish wins because the return
    // value of lazy is expected to be static
    if (!route.lazy) return;
    let routeToUpdate = manifest[route.id];
    invariant(routeToUpdate, "No route found in manifest");
    // Update the route in place.  This should be safe because there's no way
    // we could yet be sitting on this route as we can't get there without
    // resolving lazy() first.
    //
    // This is different than the HMR "update" use-case where we may actively be
    // on the route being updated.  The main concern boils down to "does this
    // mutation affect any ongoing navigations or any current state.matches
    // values?".  If not, it should be safe to update in place.
    let routeUpdates = {};
    for(let lazyRouteProperty in lazyRoute){
        let staticRouteValue = routeToUpdate[lazyRouteProperty];
        let isPropertyStaticallyDefined = staticRouteValue !== undefined && // This property isn't static since it should always be updated based
        // on the route updates
        lazyRouteProperty !== "hasErrorBoundary";
        warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));
        if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
    // Mutate the route with the provided updates.  Do this first so we pass
    // the updated version to mapRouteProperties
    Object.assign(routeToUpdate, routeUpdates);
    // Mutate the `hasErrorBoundary` property on the route based on the route
    // updates and remove the `lazy` function so we don't resolve the lazy
    // route again.
    Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
        lazy: undefined
    }));
}
// Default implementation of `dataStrategy` which fetches all loaders in parallel
async function defaultDataStrategy(_ref4) {
    let { matches } = _ref4;
    let matchesToLoad = matches.filter((m)=>m.shouldLoad);
    let results = await Promise.all(matchesToLoad.map((m)=>m.resolve()));
    return results.reduce((acc, result, i)=>Object.assign(acc, {
            [matchesToLoad[i].route.id]: result
        }), {});
}
async function callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties, requestContext) {
    let loadRouteDefinitionsPromises = matches.map((m)=>m.route.lazy ? loadLazyRouteModule(m.route, mapRouteProperties, manifest) : undefined);
    let dsMatches = matches.map((match, i)=>{
        let loadRoutePromise = loadRouteDefinitionsPromises[i];
        let shouldLoad = matchesToLoad.some((m)=>m.route.id === match.route.id);
        // `resolve` encapsulates route.lazy(), executing the loader/action,
        // and mapping return values/thrown errors to a `DataStrategyResult`.  Users
        // can pass a callback to take fine-grained control over the execution
        // of the loader/action
        let resolve = async (handlerOverride)=>{
            if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) shouldLoad = true;
            return shouldLoad ? callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, requestContext) : Promise.resolve({
                type: ResultType.data,
                result: undefined
            });
        };
        return _extends({}, match, {
            shouldLoad,
            resolve
        });
    });
    // Send all matches here to allow for a middleware-type implementation.
    // handler will be a no-op for unneeded routes and we filter those results
    // back out below.
    let results = await dataStrategyImpl({
        matches: dsMatches,
        request,
        params: matches[0].params,
        fetcherKey,
        context: requestContext
    });
    // Wait for all routes to load here but 'swallow the error since we want
    // it to bubble up from the `await loadRoutePromise` in `callLoaderOrAction` -
    // called from `match.resolve()`
    try {
        await Promise.all(loadRouteDefinitionsPromises);
    } catch (e) {
    // No-op
    }
    return results;
}
// Default logic for calling a loader/action is the user has no specified a dataStrategy
async function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
    let result;
    let onReject;
    let runHandler = (handler)=>{
        // Setup a promise we can race against so that abort signals short circuit
        let reject;
        // This will never resolve so safe to type it as Promise<DataStrategyResult> to
        // satisfy the function return value
        let abortPromise = new Promise((_, r)=>reject = r);
        onReject = ()=>reject();
        request.signal.addEventListener("abort", onReject);
        let actualHandler = (ctx)=>{
            if (typeof handler !== "function") return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ("\"" + type + "\" [routeId: " + match.route.id + "]")));
            return handler({
                request,
                params: match.params,
                context: staticContext
            }, ...ctx !== undefined ? [
                ctx
            ] : []);
        };
        let handlerPromise = (async ()=>{
            try {
                let val = await (handlerOverride ? handlerOverride((ctx)=>actualHandler(ctx)) : actualHandler());
                return {
                    type: "data",
                    result: val
                };
            } catch (e) {
                return {
                    type: "error",
                    result: e
                };
            }
        })();
        return Promise.race([
            handlerPromise,
            abortPromise
        ]);
    };
    try {
        let handler = match.route[type];
        // If we have a route.lazy promise, await that first
        if (loadRoutePromise) {
            if (handler) {
                // Run statically defined handler in parallel with lazy()
                let handlerError;
                let [value] = await Promise.all([
                    // If the handler throws, don't let it immediately bubble out,
                    // since we need to let the lazy() execution finish so we know if this
                    // route has a boundary that can handle the error
                    runHandler(handler).catch((e)=>{
                        handlerError = e;
                    }),
                    loadRoutePromise
                ]);
                if (handlerError !== undefined) throw handlerError;
                result = value;
            } else {
                // Load lazy route module, then run any returned handler
                await loadRoutePromise;
                handler = match.route[type];
                if (handler) // with un-abortable behavior of handler execution on non-lazy or
                // previously-lazy-loaded routes
                result = await runHandler(handler);
                else if (type === "action") {
                    let url = new URL(request.url);
                    let pathname = url.pathname + url.search;
                    throw getInternalRouterError(405, {
                        method: request.method,
                        pathname,
                        routeId: match.route.id
                    });
                } else // hit the invariant below that errors on returning undefined.
                return {
                    type: ResultType.data,
                    result: undefined
                };
            }
        } else if (!handler) {
            let url = new URL(request.url);
            let pathname = url.pathname + url.search;
            throw getInternalRouterError(404, {
                pathname
            });
        } else result = await runHandler(handler);
        invariant(result.result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
    } catch (e) {
        // We should already be catching and converting normal handler executions to
        // DataStrategyResults and returning them, so anything that throws here is an
        // unexpected error we still need to wrap
        return {
            type: ResultType.error,
            result: e
        };
    } finally{
        if (onReject) request.signal.removeEventListener("abort", onReject);
    }
    return result;
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
    let { result, type } = dataStrategyResult;
    if (isResponse(result)) {
        let data;
        try {
            let contentType = result.headers.get("Content-Type");
            // Check between word boundaries instead of startsWith() due to the last
            // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
            if (contentType && /\bapplication\/json\b/.test(contentType)) {
                if (result.body == null) data = null;
                else data = await result.json();
            } else data = await result.text();
        } catch (e) {
            return {
                type: ResultType.error,
                error: e
            };
        }
        if (type === ResultType.error) return {
            type: ResultType.error,
            error: new ErrorResponseImpl(result.status, result.statusText, data),
            statusCode: result.status,
            headers: result.headers
        };
        return {
            type: ResultType.data,
            data,
            statusCode: result.status,
            headers: result.headers
        };
    }
    if (type === ResultType.error) {
        if (isDataWithResponseInit(result)) {
            var _result$init3, _result$init4;
            if (result.data instanceof Error) {
                var _result$init, _result$init2;
                return {
                    type: ResultType.error,
                    error: result.data,
                    statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
                    headers: (_result$init2 = result.init) != null && _result$init2.headers ? new Headers(result.init.headers) : undefined
                };
            }
            // Convert thrown data() to ErrorResponse instances
            return {
                type: ResultType.error,
                error: new ErrorResponseImpl(((_result$init3 = result.init) == null ? void 0 : _result$init3.status) || 500, undefined, result.data),
                statusCode: isRouteErrorResponse(result) ? result.status : undefined,
                headers: (_result$init4 = result.init) != null && _result$init4.headers ? new Headers(result.init.headers) : undefined
            };
        }
        return {
            type: ResultType.error,
            error: result,
            statusCode: isRouteErrorResponse(result) ? result.status : undefined
        };
    }
    if (isDeferredData(result)) {
        var _result$init5, _result$init6;
        return {
            type: ResultType.deferred,
            deferredData: result,
            statusCode: (_result$init5 = result.init) == null ? void 0 : _result$init5.status,
            headers: ((_result$init6 = result.init) == null ? void 0 : _result$init6.headers) && new Headers(result.init.headers)
        };
    }
    if (isDataWithResponseInit(result)) {
        var _result$init7, _result$init8;
        return {
            type: ResultType.data,
            data: result.data,
            statusCode: (_result$init7 = result.init) == null ? void 0 : _result$init7.status,
            headers: (_result$init8 = result.init) != null && _result$init8.headers ? new Headers(result.init.headers) : undefined
        };
    }
    return {
        type: ResultType.data,
        data: result
    };
}
// Support relative routing in internal redirects
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
    let location = response.headers.get("Location");
    invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
    if (!ABSOLUTE_URL_REGEX.test(location)) {
        let trimmedMatches = matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1);
        location = normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
        response.headers.set("Location", location);
    }
    return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
    if (ABSOLUTE_URL_REGEX.test(location)) {
        // Strip off the protocol+origin for same-origin + same-basename absolute redirects
        let normalizedLocation = location;
        let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
        let isSameBasename = stripBasename(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) return url.pathname + url.search + url.hash;
    }
    return location;
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
    let url = history.createURL(stripHashFromPath(location)).toString();
    let init = {
        signal
    };
    if (submission && isMutationMethod(submission.formMethod)) {
        let { formMethod, formEncType } = submission;
        // Didn't think we needed this but it turns out unlike other methods, patch
        // won't be properly normalized to uppercase and results in a 405 error.
        // See: https://fetch.spec.whatwg.org/#concept-method
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
            init.headers = new Headers({
                "Content-Type": formEncType
            });
            init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") init.body = submission.text;
        else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) init.body = convertFormDataToSearchParams(submission.formData);
        else init.body = submission.formData;
    }
    return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
    let searchParams = new URLSearchParams();
    for (let [key, value] of formData.entries())searchParams.append(key, typeof value === "string" ? value : value.name);
    return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
    let formData = new FormData();
    for (let [key, value] of searchParams.entries())formData.append(key, value);
    return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
    // Fill in loaderData/errors from our loaders
    let loaderData = {};
    let errors = null;
    let statusCode;
    let foundError = false;
    let loaderHeaders = {};
    let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : undefined;
    // Process loader results into state.loaderData/state.errors
    matches.forEach((match)=>{
        if (!(match.route.id in results)) return;
        let id = match.route.id;
        let result = results[id];
        invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if (isErrorResult(result)) {
            let error = result.error;
            // If we have a pending action error, we report it at the highest-route
            // that throws a loader error, and then clear it out to indicate that
            // it was consumed
            if (pendingError !== undefined) {
                error = pendingError;
                pendingError = undefined;
            }
            errors = errors || {};
            if (skipLoaderErrorBubbling) errors[id] = error;
            else {
                // Look upwards from the matched route for the closest ancestor error
                // boundary, defaulting to the root match.  Prefer higher error values
                // if lower errors bubble to the same boundary
                let boundaryMatch = findNearestBoundary(matches, id);
                if (errors[boundaryMatch.route.id] == null) errors[boundaryMatch.route.id] = error;
            }
            // Clear our any prior loaderData for the throwing route
            loaderData[id] = undefined;
            // Once we find our first (highest) error, we set the status code and
            // prevent deeper status codes from overriding
            if (!foundError) {
                foundError = true;
                statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
            }
            if (result.headers) loaderHeaders[id] = result.headers;
        } else if (isDeferredResult(result)) {
            activeDeferreds.set(id, result.deferredData);
            loaderData[id] = result.deferredData.data;
            // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.
            if (result.statusCode != null && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
            if (result.headers) loaderHeaders[id] = result.headers;
        } else {
            loaderData[id] = result.data;
            // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.
            if (result.statusCode && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
            if (result.headers) loaderHeaders[id] = result.headers;
        }
    });
    // If we didn't consume the pending action error (i.e., all loaders
    // resolved), then consume it here.  Also clear out any loaderData for the
    // throwing route
    if (pendingError !== undefined && pendingActionResult) {
        errors = {
            [pendingActionResult[0]]: pendingError
        };
        loaderData[pendingActionResult[0]] = undefined;
    }
    return {
        loaderData,
        errors,
        statusCode: statusCode || 200,
        loaderHeaders
    };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
    let { loaderData, errors } = processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, false // This method is only called client side so we always want to bubble
    );
    // Process results from our revalidating fetchers
    revalidatingFetchers.forEach((rf)=>{
        let { key, match, controller } = rf;
        let result = fetcherResults[key];
        invariant(result, "Did not find corresponding fetcher result");
        // Process fetcher non-redirect errors
        if (controller && controller.signal.aborted) return;
        else if (isErrorResult(result)) {
            let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) errors = _extends({}, errors, {
                [boundaryMatch.route.id]: result.error
            });
            state.fetchers.delete(key);
        } else if (isRedirectResult(result)) // keep this to type narrow to a success result in the else
        invariant(false, "Unhandled fetcher revalidation redirect");
        else if (isDeferredResult(result)) // in resolveDeferredResults
        invariant(false, "Unhandled fetcher deferred data");
        else {
            let doneFetcher = getDoneFetcher(result.data);
            state.fetchers.set(key, doneFetcher);
        }
    });
    return {
        loaderData,
        errors
    };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    let mergedLoaderData = _extends({}, newLoaderData);
    for (let match of matches){
        let id = match.route.id;
        if (newLoaderData.hasOwnProperty(id)) {
            if (newLoaderData[id] !== undefined) mergedLoaderData[id] = newLoaderData[id];
        } else if (loaderData[id] !== undefined && match.route.loader) // wasn't removed by HMR
        mergedLoaderData[id] = loaderData[id];
        if (errors && errors.hasOwnProperty(id)) break;
    }
    return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
    if (!pendingActionResult) return {};
    return isErrorResult(pendingActionResult[1]) ? {
        // Clear out prior actionData on errors
        actionData: {}
    } : {
        actionData: {
            [pendingActionResult[0]]: pendingActionResult[1].data
        }
    };
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
    let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1) : [
        ...matches
    ];
    return eligibleMatches.reverse().find((m)=>m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
    // Prefer a root layout route if present, otherwise shim in a route object
    let route = routes.length === 1 ? routes[0] : routes.find((r)=>r.index || !r.path || r.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route
            }
        ],
        route
    };
}
function getInternalRouterError(status, _temp5) {
    let { pathname, routeId, method, type, message } = _temp5 === void 0 ? {} : _temp5;
    let statusText = "Unknown Server Error";
    let errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
        else if (type === "defer-action") errorMessage = "defer() is not supported in actions";
        else if (type === "invalid-body") errorMessage = "Unable to encode submission body";
    } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
    } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = "No route matches URL \"" + pathname + "\"";
    } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
        else if (method) errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
    return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
    let entries = Object.entries(results);
    for(let i = entries.length - 1; i >= 0; i--){
        let [key, result] = entries[i];
        if (isRedirectResult(result)) return {
            key,
            result
        };
    }
}
function stripHashFromPath(path) {
    let parsedPath = typeof path === "string" ? parsePath(path) : path;
    return createPath(_extends({}, parsedPath, {
        hash: ""
    }));
}
function isHashChangeOnly(a, b) {
    if (a.pathname !== b.pathname || a.search !== b.search) return false;
    if (a.hash === "") return b.hash !== "";
    else if (a.hash === b.hash) return true;
    else if (b.hash !== "") return true;
    // If the hash is removed the browser will re-perform a request to the server
    // /page#hash -> /page
    return false;
}
function isDataStrategyResult(result) {
    return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === ResultType.data || result.type === ResultType.error);
}
function isRedirectDataStrategyResultResult(result) {
    return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isDeferredResult(result) {
    return result.type === ResultType.deferred;
}
function isErrorResult(result) {
    return result.type === ResultType.error;
}
function isRedirectResult(result) {
    return (result && result.type) === ResultType.redirect;
}
function isDataWithResponseInit(value) {
    return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isDeferredData(value) {
    let deferred = value;
    return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
    if (!isResponse(result)) return false;
    let status = result.status;
    let location = result.headers.get("Location");
    return status >= 300 && status <= 399 && location != null;
}
function isValidMethod(method) {
    return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
    return validMutationMethods.has(method.toLowerCase());
}
async function resolveNavigationDeferredResults(matches, results, signal, currentMatches, currentLoaderData) {
    let entries = Object.entries(results);
    for(let index = 0; index < entries.length; index++){
        let [routeId, result] = entries[index];
        let match = matches.find((m)=>(m == null ? void 0 : m.route.id) === routeId);
        // If we don't have a match, then we can have a deferred result to do
        // anything with.  This is for revalidating fetchers where the route was
        // removed during HMR
        if (!match) continue;
        let currentMatch = currentMatches.find((m)=>m.route.id === match.route.id);
        let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
        if (isDeferredResult(result) && isRevalidatingLoader) // against the signal in resolveDeferredData and they'll get aborted
        // there if needed
        await resolveDeferredData(result, signal, false).then((result)=>{
            if (result) results[routeId] = result;
        });
    }
}
async function resolveFetcherDeferredResults(matches, results, revalidatingFetchers) {
    for(let index = 0; index < revalidatingFetchers.length; index++){
        let { key, routeId, controller } = revalidatingFetchers[index];
        let result = results[key];
        let match = matches.find((m)=>(m == null ? void 0 : m.route.id) === routeId);
        // If we don't have a match, then we can have a deferred result to do
        // anything with.  This is for revalidating fetchers where the route was
        // removed during HMR
        if (!match) continue;
        if (isDeferredResult(result)) {
            // Note: we do not have to touch activeDeferreds here since we race them
            // against the signal in resolveDeferredData and they'll get aborted
            // there if needed
            invariant(controller, "Expected an AbortController for revalidating fetcher deferred result");
            await resolveDeferredData(result, controller.signal, true).then((result)=>{
                if (result) results[key] = result;
            });
        }
    }
}
async function resolveDeferredData(result, signal, unwrap) {
    if (unwrap === void 0) unwrap = false;
    let aborted = await result.deferredData.resolveData(signal);
    if (aborted) return;
    if (unwrap) try {
        return {
            type: ResultType.data,
            data: result.deferredData.unwrappedData
        };
    } catch (e) {
        // Handle any TrackedPromise._error values encountered while unwrapping
        return {
            type: ResultType.error,
            error: e
        };
    }
    return {
        type: ResultType.data,
        data: result.deferredData.data
    };
}
function hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some((v)=>v === "");
}
function getTargetMatch(matches, location) {
    let search = typeof location === "string" ? parsePath(location).search : location.search;
    if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) return matches[matches.length - 1];
    // Otherwise grab the deepest "path contributing" match (ignoring index and
    // pathless layout routes)
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
    let { formMethod, formAction, formEncType, text, formData, json } = navigation;
    if (!formMethod || !formAction || !formEncType) return;
    if (text != null) return {
        formMethod,
        formAction,
        formEncType,
        formData: undefined,
        json: undefined,
        text
    };
    else if (formData != null) return {
        formMethod,
        formAction,
        formEncType,
        formData,
        json: undefined,
        text: undefined
    };
    else if (json !== undefined) return {
        formMethod,
        formAction,
        formEncType,
        formData: undefined,
        json,
        text: undefined
    };
}
function getLoadingNavigation(location, submission) {
    if (submission) {
        let navigation = {
            state: "loading",
            location,
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text
        };
        return navigation;
    } else {
        let navigation = {
            state: "loading",
            location,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined
        };
        return navigation;
    }
}
function getSubmittingNavigation(location, submission) {
    let navigation = {
        state: "submitting",
        location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
    };
    return navigation;
}
function getLoadingFetcher(submission, data) {
    if (submission) {
        let fetcher = {
            state: "loading",
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text,
            data
        };
        return fetcher;
    } else {
        let fetcher = {
            state: "loading",
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined,
            data
        };
        return fetcher;
    }
}
function getSubmittingFetcher(submission, existingFetcher) {
    let fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : undefined
    };
    return fetcher;
}
function getDoneFetcher(data) {
    let fetcher = {
        state: "idle",
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined,
        data
    };
    return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
    try {
        let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
        if (sessionPositions) {
            let json = JSON.parse(sessionPositions);
            for (let [k, v] of Object.entries(json || {}))if (v && Array.isArray(v)) transitions.set(k, new Set(v || []));
        }
    } catch (e) {
    // no-op, use default empty object
    }
}
function persistAppliedTransitions(_window, transitions) {
    if (transitions.size > 0) {
        let json = {};
        for (let [k, v] of transitions)json[k] = [
            ...v
        ];
        try {
            _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
        } catch (error) {
            warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
        }
    }
}
//#endregion
 //# sourceMappingURL=router.js.map


}),
"(react:background)/./node_modules/@rspack/core/hot/dev-server.js": (function (module, __unused_webpack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ /* globals __webpack_hash__ */ if (true) {
    /** @type {undefined|string} */ var lastHash;
    var upToDate = function upToDate() {
        return /** @type {string} */ lastHash.indexOf(__webpack_require__.h()) >= 0;
    };
    var log = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/log.js");
    var check = function check() {
        module.hot.check(true).then(function(updatedModules) {
            if (!updatedModules) {
                log("warning", "[HMR] Cannot find update. " + (typeof window !== "undefined" ? "Need to do a full reload!" : "Please reload manually!"));
                log("warning", "[HMR] (Probably because of restarting the webpack-dev-server)");
                if (typeof window !== "undefined") window.location.reload();
                return;
            }
            if (!upToDate()) check();
            __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/log-apply-result.js")(updatedModules, updatedModules);
            if (upToDate()) log("info", "[HMR] App is up to date.");
        }).catch(function(err) {
            var status = module.hot.status();
            if ([
                "abort",
                "fail"
            ].indexOf(status) >= 0) {
                log("warning", "[HMR] Cannot apply update. " + (typeof window !== "undefined" ? "Need to do a full reload!" : "Please reload manually!"));
                log("warning", "[HMR] " + log.formatError(err));
                if (typeof window !== "undefined") window.location.reload();
            } else log("warning", "[HMR] Update failed: " + log.formatError(err));
        });
    };
    var hotEmitter = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/emitter.js");
    hotEmitter.on("webpackHotUpdate", function(currentHash) {
        lastHash = currentHash;
        if (!upToDate() && module.hot.status() === "idle") {
            log("info", "[HMR] Checking for updates on the server...");
            check();
        }
    });
    log("info", "[HMR] Waiting for update signal from WDS...");
} else {}


}),
"(react:background)/./node_modules/@rspack/core/hot/emitter.js": (function (module) {
function EventEmitter() {
    this.events = {};
}
EventEmitter.prototype.on = function(eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
};
EventEmitter.prototype.emit = function(eventName) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (this.events[eventName]) this.events[eventName].forEach(function(callback) {
        callback.apply(null, args);
    });
};
module.exports = new EventEmitter();


}),
"(react:background)/./node_modules/@rspack/core/hot/log-apply-result.js": (function (module, __unused_webpack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ /**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */ module.exports = function(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function(moduleId) {
        return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });
    var log = __webpack_require__("(react:background)/./node_modules/@rspack/core/hot/log.js");
    if (unacceptedModules.length > 0) {
        log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
        unacceptedModules.forEach(function(moduleId) {
            log("warning", "[HMR]  - " + moduleId);
        });
    }
    if (!renewedModules || renewedModules.length === 0) log("info", "[HMR] Nothing hot updated.");
    else {
        log("info", "[HMR] Updated modules:");
        renewedModules.forEach(function(moduleId) {
            if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
                var parts = moduleId.split("!");
                log.groupCollapsed("info", "[HMR]  - " + parts.pop());
                log("info", "[HMR]  - " + moduleId);
                log.groupEnd("info");
            } else log("info", "[HMR]  - " + moduleId);
        });
        var numberIds = renewedModules.every(function(moduleId) {
            return typeof moduleId === "number";
        });
        if (numberIds) log("info", '[HMR] Consider using the optimization.moduleIds: "named" for module names.');
    }
};


}),
"(react:background)/./node_modules/@rspack/core/hot/log.js": (function (module) {
/** @typedef {"info" | "warning" | "error"} LogLevel */ /** @type {LogLevel} */ var logLevel = "info";
function dummy() {}
/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */ function shouldLog(level) {
    var shouldLog = logLevel === "info" && level === "info" || [
        "info",
        "warning"
    ].indexOf(logLevel) >= 0 && level === "warning" || [
        "info",
        "warning",
        "error"
    ].indexOf(logLevel) >= 0 && level === "error";
    return shouldLog;
}
/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */ function logGroup(logFn) {
    return function(level, msg) {
        if (shouldLog(level)) logFn(msg);
    };
}
/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */ module.exports = function(level, msg) {
    if (shouldLog(level)) {
        if (level === "info") console.log(msg);
        else if (level === "warning") console.warn(msg);
        else if (level === "error") console.error(msg);
    }
};
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);
/**
 * @param {LogLevel} level log level
 */ module.exports.setLogLevel = function(level) {
    logLevel = level;
};
/**
 * @param {Error} err error
 * @returns {string} formatted error
 */ module.exports.formatError = function(err) {
    var message = err.message;
    var stack = err.stack;
    if (!stack) return message;
    else if (stack.indexOf(message) < 0) return message + "\n" + stack;
    else return stack;
};


}),
"(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_check_private_redeclaration)
});
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_get)
});
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_set)
});
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_apply_descriptor_update)
});
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) throw new TypeError("attempted to read set only private field");
        if (!("__destrWrapper" in descriptor)) descriptor.__destrWrapper = {
            set value (v){
                descriptor.set.call(receiver, v);
            },
            get value () {
                return descriptor.get.call(receiver);
            }
        };
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        return descriptor;
    }
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_access.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_check_private_static_access)
});
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_check_private_static_field_descriptor)
});
function _class_check_private_static_field_descriptor(descriptor, action) {
    if (descriptor === undefined) throw new TypeError("attempted to " + action + " private static field before its declaration");
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_extract_field_descriptor)
});
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_get.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_get)
});
/* ESM import */var _class_apply_descriptor_get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js");
/* ESM import */var _class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js");


function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0,_class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__._)(receiver, privateMap, "get");
    return (0,_class_apply_descriptor_get_js__WEBPACK_IMPORTED_MODULE_1__._)(receiver, descriptor);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_init.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_init)
});
/* ESM import */var _check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js");

function _class_private_field_init(obj, privateMap, value) {
    (0,_check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__._)(obj, privateMap);
    privateMap.set(obj, value);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_field_set.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_field_set)
});
/* ESM import */var _class_apply_descriptor_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js");
/* ESM import */var _class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js");


function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0,_class_extract_field_descriptor_js__WEBPACK_IMPORTED_MODULE_0__._)(receiver, privateMap, "set");
    (0,_class_apply_descriptor_set_js__WEBPACK_IMPORTED_MODULE_1__._)(receiver, descriptor, value);
    return value;
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_get.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_method_get)
});
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_private_method_init.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_private_method_init)
});
/* ESM import */var _check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_check_private_redeclaration.js");

function _class_private_method_init(obj, privateSet) {
    (0,_check_private_redeclaration_js__WEBPACK_IMPORTED_MODULE_0__._)(obj, privateSet);
    privateSet.add(obj);
}



}),
"(react:background)/./node_modules/@swc/helpers/esm/_class_static_private_field_update.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _: () => (_class_static_private_field_update)
});
/* ESM import */var _class_apply_descriptor_update_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js");
/* ESM import */var _class_check_private_static_access_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_access.js");
/* ESM import */var _class_check_private_static_field_descriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@swc/helpers/esm/_class_check_private_static_field_descriptor.js");



function _class_static_private_field_update(receiver, classConstructor, descriptor) {
    (0,_class_check_private_static_access_js__WEBPACK_IMPORTED_MODULE_0__._)(receiver, classConstructor);
    (0,_class_check_private_static_field_descriptor_js__WEBPACK_IMPORTED_MODULE_1__._)(descriptor, "update");
    return (0,_class_apply_descriptor_update_js__WEBPACK_IMPORTED_MODULE_2__._)(receiver, descriptor);
}



}),
"(react:background)/./node_modules/eventemitter3/index.js": (function (module) {

var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') throw new TypeError('The listener must be a function');
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
//
// Expose the module.
//
if (true) module.exports = EventEmitter;


}),
"(react:background)/./node_modules/eventemitter3/index.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EventEmitter: () => (/* reexport default from dynamic */ _index_js__WEBPACK_IMPORTED_MODULE_0___default.a),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/eventemitter3/index.js");
/* ESM import */var _index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_0__);


/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_index_js__WEBPACK_IMPORTED_MODULE_0___default()));


}),
"(react:background)/./node_modules/preact/compat/dist/compat.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (Children),
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
  Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
  PureComponent: () => (PureComponent),
  StrictMode: () => (StrictMode),
  Suspense: () => (Suspense),
  SuspenseList: () => (SuspenseList),
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
  cloneElement: () => (cloneElement),
  createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
  createElement: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
  createFactory: () => (createFactory),
  createPortal: () => (createPortal),
  createRef: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
  "default": () => (index),
  findDOMNode: () => (findDOMNode),
  flushSync: () => (flushSync),
  forwardRef: () => (forwardRef),
  hydrate: () => (hydrate),
  isElement: () => (isElement),
  isFragment: () => (isFragment),
  isMemo: () => (isMemo),
  isValidElement: () => (isValidElement),
  lazy: () => (lazy),
  memo: () => (memo),
  render: () => (render),
  startTransition: () => (startTransition),
  unmountComponentAtNode: () => (unmountComponentAtNode),
  unstable_batchedUpdates: () => (unstable_batchedUpdates),
  useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
  useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
  useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
  useDeferredValue: () => (useDeferredValue),
  useEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
  useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
  useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
  useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
  useInsertionEffect: () => (useInsertionEffect),
  useLayoutEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
  useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
  useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
  useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
  useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
  useSyncExternalStore: () => (useSyncExternalStore),
  useTransition: () => (useTransition),
  version: () => (version)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/preact/hooks/dist/hooks.mjs");




/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Check if two objects have a different shape
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */ function shallowDiffers(a, b) {
    for(var i in a)if (i !== '__source' && !(i in b)) return true;
    for(var _i in b)if (_i !== '__source' && a[_i] !== b[_i]) return true;
    return false;
}
/**
 * Check if two values are the same value
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */ function is(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
/**
 * Component class with a predefined `shouldComponentUpdate` implementation
 */ function PureComponent(p, c) {
    this.props = p;
    this.context = c;
}
PureComponent.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
// Some third-party libraries check if this property is present
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
    return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};
/**
 * Memoize a component, so that it only updates when the props actually have
 * changed. This was previously known as `React.pure`.
 * @param {import('./internal').FunctionComponent} c functional component
 * @param {(prev: object, next: object) => boolean} [comparer] Custom equality function
 * @returns {import('./internal').FunctionComponent}
 */ function memo(c, comparer) {
    function shouldUpdate(nextProps) {
        var ref = this.props.ref;
        var updateRef = ref == nextProps.ref;
        if (!updateRef && ref) ref.call ? ref(null) : ref.current = null;
        if (!comparer) return shallowDiffers(this.props, nextProps);
        return !comparer(this.props, nextProps) || !updateRef;
    }
    function Memoed(props) {
        this.shouldComponentUpdate = shouldUpdate;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(c, props);
    }
    Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')';
    Memoed.prototype.isReactComponent = true;
    Memoed.__f = true;
    return Memoed;
}
var oldDiffHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function(vnode) {
    if (vnode.type && vnode.type.__f && vnode.ref) {
        vnode.props.ref = vnode.ref;
        vnode.ref = null;
    }
    if (oldDiffHook) oldDiffHook(vnode);
};
var REACT_FORWARD_SYMBOL = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.forward_ref') || 0xf47;
/**
 * Pass ref down to a child. This is mainly used in libraries with HOCs that
 * wrap components. Using `forwardRef` there is an easy way to get a reference
 * of the wrapped component instead of one of the wrapper itself.
 * @param {import('./index').ForwardFn} fn
 * @returns {import('./internal').FunctionComponent}
 */ function forwardRef(fn) {
    function Forwarded(props) {
        var clone = assign({}, props);
        delete clone.ref;
        return fn(clone, props.ref || null);
    }
    // mobx-react checks for this being present
    Forwarded.$$typeof = REACT_FORWARD_SYMBOL;
    // mobx-react heavily relies on implementation details.
    // It expects an object here with a `render` property,
    // and prototype.render will fail. Without this
    // mobx-react throws.
    Forwarded.render = Forwarded;
    Forwarded.prototype.isReactComponent = Forwarded.__f = true;
    Forwarded.displayName = 'ForwardRef(' + (fn.displayName || fn.name) + ')';
    return Forwarded;
}
var mapFn = function mapFn(children, fn) {
    if (children == null) return null;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children).map(fn));
};
// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
    map: mapFn,
    forEach: mapFn,
    count: function count(children) {
        return children ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children).length : 0;
    },
    only: function only(children) {
        var normalized = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children);
        if (normalized.length !== 1) throw 'Children.only';
        return normalized[0];
    },
    toArray: preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray
};
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
var oldCatchError = preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__e = function(error, newVNode, oldVNode, errorInfo) {
    if (error.then) {
        /** @type {import('./internal').Component} */ var component;
        var vnode = newVNode;
        for(; vnode = vnode.__;)if ((component = vnode.__c) && component.__c) {
            if (newVNode.__e == null) {
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
            }
            // Don't call oldCatchError if we found a Suspense
            return component.__c(error, newVNode);
        }
    }
    oldCatchError(error, newVNode, oldVNode, errorInfo);
};
var oldUnmount = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function(vnode) {
    /** @type {import('./internal').Component} */ var component = vnode.__c;
    if (component && component.__R) component.__R();
    // if the component is still hydrating
    // most likely it is because the component is suspended
    // we set the vnode.type as `null` so that it is not a typeof function
    // so the unmount will remove the vnode._dom
    if (component && vnode.__u & MODE_HYDRATE) vnode.type = null;
    if (oldUnmount) oldUnmount(vnode);
};
function detachedClone(vnode, detachedParent, parentDom) {
    if (vnode) {
        if (vnode.__c && vnode.__c.__H) {
            vnode.__c.__H.__.forEach(function(effect) {
                if (typeof effect.__c == 'function') effect.__c();
            });
            vnode.__c.__H = null;
        }
        vnode = assign({}, vnode);
        if (vnode.__c != null) {
            if (vnode.__c.__P === parentDom) vnode.__c.__P = detachedParent;
            vnode.__c = null;
        }
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return detachedClone(child, detachedParent, parentDom);
        });
    }
    return vnode;
}
function removeOriginal(vnode, detachedParent, originalParent) {
    if (vnode && originalParent) {
        vnode.__v = null;
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return removeOriginal(child, detachedParent, originalParent);
        });
        if (vnode.__c) {
            if (vnode.__c.__P === detachedParent) {
                if (vnode.__e) originalParent.appendChild(vnode.__e);
                vnode.__c.__e = true;
                vnode.__c.__P = originalParent;
            }
        }
    }
    return vnode;
}
// having custom inheritance instead of a class here saves a lot of bytes
function Suspense() {
    // we do not call super here to golf some bytes...
    this.__u = 0;
    this._suspenders = null;
    this.__b = null;
}
// Things we do here to save some bytes but are not proper JS inheritance:
// - call `new Component()` as the prototype
// - do not set `Suspense.prototype.constructor` to `Suspense`
Suspense.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
/**
 * @this {import('./internal').SuspenseComponent}
 * @param {Promise} promise The thrown promise
 * @param {import('./internal').VNode<any, any>} suspendingVNode The suspending component
 */ Suspense.prototype.__c = function(promise, suspendingVNode) {
    var suspendingComponent = suspendingVNode.__c;
    /** @type {import('./internal').SuspenseComponent} */ var c = this;
    if (c._suspenders == null) c._suspenders = [];
    c._suspenders.push(suspendingComponent);
    var resolve = suspended(c.__v);
    var resolved = false;
    var onResolved = function onResolved() {
        if (resolved) return;
        resolved = true;
        suspendingComponent.__R = null;
        if (resolve) resolve(onSuspensionComplete);
        else onSuspensionComplete();
    };
    suspendingComponent.__R = onResolved;
    var onSuspensionComplete = function onSuspensionComplete() {
        if (!--c.__u) {
            // If the suspension was during hydration we don't need to restore the
            // suspended children into the _children array
            if (c.state.__a) {
                var suspendedVNode = c.state.__a;
                c.__v.__k[0] = removeOriginal(suspendedVNode, suspendedVNode.__c.__P, suspendedVNode.__c.__O);
            }
            c.setState({
                __a: c.__b = null
            });
            var _suspended;
            while(_suspended = c._suspenders.pop())_suspended.forceUpdate();
        }
    };
    /**
   * We do not set `suspended: true` during hydration because we want the actual markup
   * to remain on screen and hydrate it when the suspense actually gets resolved.
   * While in non-hydration cases the usual fallback -> component flow would occour.
   */ if (!c.__u++ && !(suspendingVNode.__u & MODE_HYDRATE)) c.setState({
        __a: c.__b = c.__v.__k[0]
    });
    promise.then(onResolved, onResolved);
};
Suspense.prototype.componentWillUnmount = function() {
    this._suspenders = [];
};
/**
 * @this {import('./internal').SuspenseComponent}
 * @param {import('./internal').SuspenseComponent["props"]} props
 * @param {import('./internal').SuspenseState} state
 */ Suspense.prototype.render = function(props, state) {
    if (this.__b) {
        // When the Suspense's _vnode was created by a call to createVNode
        // (i.e. due to a setState further up in the tree)
        // it's _children prop is null, in this case we "forget" about the parked vnodes to detach
        if (this.__v.__k) {
            var detachedParent = preact__WEBPACK_IMPORTED_MODULE_0__.options.document.createElement('div');
            var detachedComponent = this.__v.__k[0].__c;
            this.__v.__k[0] = detachedClone(this.__b, detachedParent, detachedComponent.__O = detachedComponent.__P);
        }
        this.__b = null;
    }
    // Wrap fallback tree in a VNode that prevents itself from being marked as aborting mid-hydration:
    /** @type {import('./internal').VNode} */ var fallback = state.__a && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.fallback);
    if (fallback) fallback.__u &= ~MODE_HYDRATE;
    return [
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, state.__a ? null : props.children),
        fallback
    ];
};
/**
 * Checks and calls the parent component's _suspended method, passing in the
 * suspended vnode. This is a way for a parent (e.g. SuspenseList) to get notified
 * that one of its children/descendants suspended.
 *
 * The parent MAY return a callback. The callback will get called when the
 * suspension resolves, notifying the parent of the fact.
 * Moreover, the callback gets function `unsuspend` as a parameter. The resolved
 * child descendant will not actually get unsuspended until `unsuspend` gets called.
 * This is a way for the parent to delay unsuspending.
 *
 * If the parent does not return a callback then the resolved vnode
 * gets unsuspended immediately when it resolves.
 *
 * @param {import('./internal').VNode} vnode
 * @returns {((unsuspend: () => void) => void)?}
 */ function suspended(vnode) {
    /** @type {import('./internal').Component} */ var component = vnode.__.__c;
    return component && component.__a && component.__a(vnode);
}
function lazy(loader) {
    var prom;
    var component;
    var error;
    function Lazy(props) {
        if (!prom) {
            prom = loader();
            prom.then(function(exports) {
                component = exports.default || exports;
            }, function(e) {
                error = e;
            });
        }
        if (error) throw error;
        if (!component) throw prom;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, props);
    }
    Lazy.displayName = 'Lazy';
    Lazy.__f = true;
    return Lazy;
}
// Indexes to linked list nodes (nodes are stored as arrays to save bytes).
var SUSPENDED_COUNT = 0;
var RESOLVED_COUNT = 1;
var NEXT_NODE = 2;
// Having custom inheritance instead of a class here saves a lot of bytes.
function SuspenseList() {
    this._next = null;
    this._map = null;
}
// Mark one of child's earlier suspensions as resolved.
// Some pending callbacks may become callable due to this
// (e.g. the last suspended descendant gets resolved when
// revealOrder === 'together'). Process those callbacks as well.
var resolve = function resolve(list, child, node) {
    if (++node[RESOLVED_COUNT] === node[SUSPENDED_COUNT]) // matches the number of times it's been resolved. Therefore we
    // mark the child as completely resolved by deleting it from ._map.
    // This is used to figure out when *all* children have been completely
    // resolved when revealOrder is 'together'.
    list._map.delete(child);
    // If revealOrder is falsy then we can do an early exit, as the
    // callbacks won't get queued in the node anyway.
    // If revealOrder is 'together' then also do an early exit
    // if all suspended descendants have not yet been resolved.
    if (!list.props.revealOrder || list.props.revealOrder[0] === 't' && list._map.size) return;
    // Walk the currently suspended children in order, calling their
    // stored callbacks on the way. Stop if we encounter a child that
    // has not been completely resolved yet.
    node = list._next;
    while(node){
        while(node.length > 3)node.pop()();
        if (node[RESOLVED_COUNT] < node[SUSPENDED_COUNT]) break;
        list._next = node = node[NEXT_NODE];
    }
};
// Things we do here to save some bytes but are not proper JS inheritance:
// - call `new Component()` as the prototype
// - do not set `Suspense.prototype.constructor` to `Suspense`
SuspenseList.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
SuspenseList.prototype.__a = function(child) {
    var list = this;
    var delegated = suspended(list.__v);
    var node = list._map.get(child);
    node[SUSPENDED_COUNT]++;
    return function(unsuspend) {
        var wrappedUnsuspend = function wrappedUnsuspend() {
            if (!list.props.revealOrder) // is no need to coordinate a specific order or unsuspends.
            unsuspend();
            else {
                node.push(unsuspend);
                resolve(list, child, node);
            }
        };
        if (delegated) delegated(wrappedUnsuspend);
        else wrappedUnsuspend();
    };
};
SuspenseList.prototype.render = function(props) {
    this._next = null;
    this._map = new Map();
    var children = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(props.children);
    if (props.revealOrder && props.revealOrder[0] === 'b') // then flip the child list around so that the last child will be
    // the first in the linked list.
    children.reverse();
    // Build the linked list. Iterate through the children in reverse order
    // so that `_next` points to the first linked list node to be resolved.
    for(var i = children.length; i--;)// 	[suspended_count, resolved_count, next_node]
    // where suspended_count and resolved_count are numeric counters for
    // keeping track how many times a node has been suspended and resolved.
    //
    // Note that suspended_count starts from 1 instead of 0, so we can block
    // processing callbacks until componentDidMount has been called. In a sense
    // node is suspended at least until componentDidMount gets called!
    //
    // Pending callbacks are added to the end of the node:
    // 	[suspended_count, resolved_count, next_node, callback_0, callback_1, ...]
    this._map.set(children[i], this._next = [
        1,
        0,
        this._next
    ]);
    return props.children;
};
SuspenseList.prototype.componentDidUpdate = SuspenseList.prototype.componentDidMount = function() {
    var _this = this;
    // Iterate through all children after mounting for two reasons:
    // 1. As each node[SUSPENDED_COUNT] starts from 1, this iteration increases
    //    each node[RELEASED_COUNT] by 1, therefore balancing the counters.
    //    The nodes can now be completely consumed from the linked list.
    // 2. Handle nodes that might have gotten resolved between render and
    //    componentDidMount.
    this._map.forEach(function(node, child) {
        resolve(_this, child, node);
    });
};
/**
 * @param {import('../../src/index').RenderableProps<{ context: any }>} props
 */ function ContextProvider(props) {
    this.getChildContext = function() {
        return props.context;
    };
    return props.children;
}
/**
 * Portal component
 * @this {import('./internal').Component}
 * @param {object | null | undefined} props
 *
 * TODO: use createRoot() instead of fake root
 */ function Portal(props) {
    var _this = this;
    var container = props._container;
    _this.componentWillUnmount = function() {
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, _this._temp);
        _this._temp = null;
        _this._container = null;
    };
    // When we change container we should clear our old container and
    // indicate a new mount.
    if (_this._container && _this._container !== container) _this.componentWillUnmount();
    if (!_this._temp) {
        _this._container = container;
        // Create a fake DOM parent node that manages a subset of `container`'s children:
        _this._temp = {
            nodeType: 1,
            parentNode: container,
            childNodes: [],
            contains: function contains() {
                return true;
            },
            appendChild: function appendChild(child) {
                this.childNodes.push(child);
                _this._container.appendChild(child);
            },
            insertBefore: function insertBefore(child, before) {
                this.childNodes.push(child);
                _this._container.appendChild(child);
            },
            removeChild: function removeChild(child) {
                this.childNodes.splice(this.childNodes.indexOf(child) >>> 1, 1);
                _this._container.removeChild(child);
            }
        };
    }
    // Render our wrapping element into temp.
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContextProvider, {
        context: _this.context
    }, props.__v), _this._temp);
}
/**
 * Create a `Portal` to continue rendering the vnode tree at a different DOM node
 * @param {import('./internal').VNode} vnode The vnode to render
 * @param {import('./internal').PreactElement} container The DOM node to continue rendering in to.
 */ function createPortal(vnode, container) {
    var el = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(Portal, {
        __v: vnode,
        _container: container
    });
    el.containerInfo = container;
    return el;
}
var REACT_ELEMENT_TYPE = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;
// Some libraries like `react-virtualized` explicitly check for this.
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent = {};
var oldVNodeHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function(vnode) {
    vnode.$$typeof = REACT_ELEMENT_TYPE;
    if (oldVNodeHook) oldVNodeHook(vnode);
};
// `UNSAFE_*` lifecycle hooks
// Preact only ever invokes the unprefixed methods.
// Here we provide a base "fallback" implementation that calls any defined UNSAFE_ prefixed method.
// - If a component defines its own `componentDidMount()` (including via defineProperty), use that.
// - If a component defines `UNSAFE_componentDidMount()`, `componentDidMount` is the alias getter/setter.
// - If anything assigns to an `UNSAFE_*` property, the assignment is forwarded to the unprefixed property.
// See https://github.com/preactjs/preact/issues/1941
[
    'componentWillMount',
    'componentWillReceiveProps',
    'componentWillUpdate'
].forEach(function(key) {
    Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype, key, {
        configurable: true,
        get: function get() {
            return this['UNSAFE_' + key];
        },
        set: function set(v) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                value: v
            });
        }
    });
});
/**
 * Proxy render() since React returns a Component reference.
 * @param {import('./internal').VNode} vnode VNode tree to render
 * @param {import('./internal').PreactElement} parent DOM node to render vnode tree into
 * @param {() => void} [callback] Optional callback that will be called after rendering
 * @returns {import('./internal').Component | null} The root component reference or null
 */ function render(vnode, parent, callback) {
    // React destroys any existing DOM nodes, see #1727
    // ...but only on the first render, see #1828
    if (parent.__k == null) parent.textContent = '';
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
function hydrate(vnode, parent, callback) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
var oldEventHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.event;
preact__WEBPACK_IMPORTED_MODULE_0__.options.event = function(e) {
    if (oldEventHook) e = oldEventHook(e);
    e.persist = empty;
    e.isPropagationStopped = isPropagationStopped;
    e.isDefaultPrevented = isDefaultPrevented;
    return e.nativeEvent = e;
};
function empty() {}
function isPropagationStopped() {
    return this.cancelBubble;
}
function isDefaultPrevented() {
    return this.defaultPrevented;
}
// This is a very very private internal function for React it
// is used to sort-of do runtime dependency injection.
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
    ReactCurrentDispatcher: {
        current: {
            useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
            useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
            useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
            useDeferredValue: useDeferredValue,
            useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
            useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
            useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
            useInsertionEffect: useInsertionEffect,
            useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
            useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
            // useMutableSource, // experimental-only and replaced by uSES, likely not worth supporting
            useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
            useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
            useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
            useSyncExternalStore: useSyncExternalStore,
            useTransition: useTransition
        }
    }
};
var version = '18.3.1'; // trick libraries to think we are react
/**
 * Legacy version of createElement.
 * @param {import('./internal').VNode["type"]} type The node name or Component constructor
 */ function createFactory(type) {
    return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null, type);
}
/**
 * Check if the passed element is a valid (p)react node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isValidElement(element) {
    return !!element && element.$$typeof === REACT_ELEMENT_TYPE;
}
/**
 * Check if the passed element is a Fragment node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isFragment(element) {
    return isValidElement(element) && element.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
/**
 * Check if the passed element is a Memo node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isMemo(element) {
    return !!element && !!element.displayName && (typeof element.displayName === 'string' || element.displayName instanceof String) && element.displayName.startsWith('Memo(');
}
/**
 * Wrap `cloneElement` to abort if the passed element is not a valid element and apply
 * all vnode normalizations.
 * @param {import('./internal').VNode} element The vnode to clone
 * @param {object} props Props to add when cloning
 * @param {Array<import('./internal').ComponentChildren>} rest Optional component children
 */ function cloneElement(element) {
    if (!isValidElement(element)) return element;
    return preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null, arguments);
}
/**
 * Remove a component tree from the DOM, including state and event handlers.
 * @param {import('./internal').PreactElement} container
 * @returns {boolean}
 */ function unmountComponentAtNode(container) {
    if (container.__k) {
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, container);
        return true;
    }
    return false;
}
/**
 * Get the matching DOM node for a component
 * @param {import('./internal').Component} component
 * @returns {import('./internal').PreactElement | null}
 */ function findDOMNode(component) {
    return component && (component.base || component.nodeType === 1 && component) || null;
}
/**
 * Deprecated way to control batched rendering inside the reconciler, but we
 * already schedule in batches inside our rendering code
 * @template Arg
 * @param {(arg: Arg) => void} callback function that triggers the updated
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 */ // eslint-disable-next-line camelcase
var unstable_batchedUpdates = function unstable_batchedUpdates(callback, arg) {
    return callback(arg);
};
/**
 * In React, `flushSync` flushes the entire tree and forces a rerender. It's
 * implmented here as a no-op.
 * @template Arg
 * @template Result
 * @param {(arg: Arg) => Result} callback function that runs before the flush
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 * @returns
 */ var flushSync = function flushSync(callback, arg) {
    return callback(arg);
};
/**
 * Strict Mode is not implemented in Preact, so we provide a stand-in for it
 * that just renders its children without imposing any restrictions.
 */ var StrictMode = preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function startTransition(cb) {
    cb();
}
function useDeferredValue(val) {
    return val;
}
function useTransition() {
    return [
        false,
        startTransition
    ];
}
// TODO: in theory this should be done after a VNode is diffed as we want to insert
// styles/... before it attaches
var useInsertionEffect = preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;
// compat to react-is
var isElement = isValidElement;
/**
 * This is taken from https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js#L84
 * on a high level this cuts out the warnings, ... and attempts a smaller implementation
 * @typedef {{ _value: any; _getSnapshot: () => any }} Store
 */ function useSyncExternalStore(subscribe, getSnapshot) {
    var value = getSnapshot();
    /**
   * @typedef {{ _instance: Store }} StoreRef
   * @type {[StoreRef, (store: StoreRef) => void]}
   */ var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
        _instance: {
            __: value,
            _getSnapshot: getSnapshot
        }
    }), _instance = _useState[0]._instance, forceUpdate = _useState[1];
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function() {
        _instance.__ = value;
        _instance._getSnapshot = getSnapshot;
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
    }, [
        subscribe,
        value,
        getSnapshot
    ]);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
        return subscribe(function() {
            if (didSnapshotChange(_instance)) forceUpdate({
                _instance: _instance
            });
        });
    }, [
        subscribe
    ]);
    return value;
}
/** @type {(inst: Store) => boolean} */ function didSnapshotChange(inst) {
    var latestGetSnapshot = inst._getSnapshot;
    var prevValue = inst.__;
    try {
        var nextValue = latestGetSnapshot();
        return !is(prevValue, nextValue);
    } catch (error) {
        return true;
    }
}
// React copies the named exports to the default one.
var index = {
    useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
    useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
    useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
    useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
    useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
    useInsertionEffect: useInsertionEffect,
    useTransition: useTransition,
    useDeferredValue: useDeferredValue,
    useSyncExternalStore: useSyncExternalStore,
    startTransition: startTransition,
    useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
    useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
    useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
    useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
    useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
    useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
    version: version,
    Children: Children,
    render: render,
    hydrate: hydrate,
    unmountComponentAtNode: unmountComponentAtNode,
    createPortal: createPortal,
    createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
    createContext: preact__WEBPACK_IMPORTED_MODULE_0__.createContext,
    createFactory: createFactory,
    cloneElement: cloneElement,
    createRef: preact__WEBPACK_IMPORTED_MODULE_0__.createRef,
    Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    isValidElement: isValidElement,
    isElement: isElement,
    isFragment: isFragment,
    isMemo: isMemo,
    findDOMNode: findDOMNode,
    Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component,
    PureComponent: PureComponent,
    memo: memo,
    forwardRef: forwardRef,
    flushSync: flushSync,
    unstable_batchedUpdates: unstable_batchedUpdates,
    StrictMode: StrictMode,
    Suspense: Suspense,
    SuspenseList: SuspenseList,
    lazy: lazy,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
};
 //# sourceMappingURL=compat.module.js.map


}),
"(react:background)/./node_modules/preact/dist/preact.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Component: () => (BaseComponent),
  Fragment: () => (Fragment),
  cloneElement: () => (cloneElement),
  createContext: () => (createContext),
  createElement: () => (createElement),
  createRef: () => (createRef),
  h: () => (createElement),
  hydrate: () => (hydrate),
  isValidElement: () => (isValidElement),
  options: () => (options),
  render: () => (render),
  toChildArray: () => (toChildArray)
});
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
/** Signifies this VNode suspended on the previous render */ var MODE_SUSPENDED = 128;
/** Indicates that this node needs to be inserted while patching children */ var INSERT_VNODE = 65536;
/** Indicates a VNode has been matched with another VNode in the diff */ var MATCHED = 131072;
/** Reset all mode flags */ var RESET_MODE = ~(MODE_HYDRATE | MODE_SUSPENDED);
var EMPTY_OBJ = /** @type {any} */ {};
var EMPTY_ARR = [];
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var isArray = Array.isArray;
/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    // @ts-expect-error We change the type of `obj` to be `O & P`
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Remove a child node from its parent if attached. This is a workaround for
 * IE11 which doesn't support `Element.prototype.remove()`. Using this function
 * is smaller than including a dedicated polyfill.
 * @param {preact.ContainerNode} node The node to remove
 */ function removeNode(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
}
var slice = EMPTY_ARR.slice;
/**
 * Find the closest error boundary to a thrown error and call it
 * @param {object} error The thrown value
 * @param {VNode} vnode The vnode that threw the error that was caught (except
 * for unmounting when this parameter is the highest parent that was being
 * unmounted)
 * @param {VNode} [oldVNode]
 * @param {ErrorInfo} [errorInfo]
 */ function _catchError(error, vnode, oldVNode, errorInfo) {
    /** @type {Component} */ var component, /** @type {ComponentType} */ ctor, /** @type {boolean} */ handled;
    for(; vnode = vnode.__;){
        if ((component = vnode.__c) && !component.__) try {
            ctor = component.constructor;
            if (ctor && ctor.getDerivedStateFromError != null) {
                component.setState(ctor.getDerivedStateFromError(error));
                handled = component.__d;
            }
            if (component.componentDidCatch != null) {
                component.componentDidCatch(error, errorInfo || {});
                handled = component.__d;
            }
            // This is an error boundary. Mark it as having bailed out, and whether it was mid-hydration.
            if (handled) return component.__E = component;
        } catch (e) {
            error = e;
        }
    }
    throw error;
}
/**
 * The `option` object can potentially contain callback functions
 * that are called during various stages of our renderer. This is the
 * foundation on which all our addons like `preact/debug`, `preact/compat`,
 * and `preact/hooks` are based on. See the `Options` type in `internal.d.ts`
 * for a full list of available option hooks (most editors/IDEs allow you to
 * ctrl+click or cmd+click on mac the type definition below).
 * @type {Options}
 */ var options = {
    __e: _catchError
};
var vnodeId = 0;
/**
 * Create an virtual node (used for JSX)
 * @param {VNode["type"]} type The node name or Component constructor for this
 * virtual node
 * @param {object | null | undefined} [props] The properties of the virtual node
 * @param {Array<import('.').ComponentChildren>} [children] The children of the
 * virtual node
 * @returns {VNode}
 */ function createElement(type, props, children) {
    var normalizedProps = {}, key, ref, i;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    // If a Component VNode, check for and apply defaultProps
    // Note: type may be undefined in development, must never error here.
    if (typeof type == 'function' && type.defaultProps != null) {
        for(i in type.defaultProps)if (normalizedProps[i] === undefined) normalizedProps[i] = type.defaultProps[i];
    }
    return createVNode(type, normalizedProps, key, ref, null);
}
/**
 * Create a VNode (used internally by Preact)
 * @param {VNode["type"]} type The node name or Component
 * Constructor for this virtual node
 * @param {object | string | number | null} props The properties of this virtual node.
 * If this virtual node represents a text node, this is the text of the node (string or number).
 * @param {string | number | null} key The key for this virtual node, used when
 * diffing it against its children
 * @param {VNode["ref"]} ref The ref property that will
 * receive a reference to its created child
 * @returns {VNode}
 */ function createVNode(type, props, key, ref, original) {
    // V8 seems to be better at detecting type shapes if the object is allocated from the same call site
    // Do not inline into createElement and coerceToVNode!
    /** @type {VNode} */ var vnode = {
        type: type,
        props: props,
        key: key,
        ref: ref,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        // _nextDom must be initialized to undefined b/c it will eventually
        // be set to dom.nextSibling which can return `null` and it is important
        // to be able to distinguish between an uninitialized _nextDom and
        // a _nextDom that has been set to `null`
        __d: undefined,
        __c: null,
        constructor: undefined,
        __v: original == null ? ++vnodeId : original,
        __i: -1,
        __u: 0
    };
    // Only invoke the vnode hook if this was *not* a direct copy:
    if (original == null && options.vnode != null) options.vnode(vnode);
    return vnode;
}
function createRef() {
    return {
        current: null
    };
}
function Fragment(props) {
    return props.children;
}
/**
 * Check if a the argument is a valid Preact VNode.
 * @param {*} vnode
 * @returns {vnode is VNode}
 */ var isValidElement = function isValidElement(vnode) {
    return vnode != null && vnode.constructor == undefined;
};
/**
 * Base Component class. Provides `setState()` and `forceUpdate()`, which
 * trigger rendering
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components'
 * getChildContext
 */ function BaseComponent(props, context) {
    this.props = props;
    this.context = context;
}
/**
 * Update component state and schedule a re-render.
 * @this {Component}
 * @param {object | ((s: object, p: object) => object)} update A hash of state
 * properties to update with new values or a function that given the current
 * state and props returns a new partial state
 * @param {() => void} [callback] A function to be called once component state is
 * updated
 */ BaseComponent.prototype.setState = function(update, callback) {
    // only clone state when copying to nextState the first time.
    var s;
    if (this.__s != null && this.__s !== this.state) s = this.__s;
    else s = this.__s = assign({}, this.state);
    if (typeof update == 'function') // preventing us from mutating it, so we need to clone it. See #2716
    update = update(assign({}, s), this.props);
    if (update) assign(s, update);
    // Skip update if updater function returned null
    if (update == null) return;
    if (this.__v) {
        if (callback) this._sb.push(callback);
        enqueueRender(this);
    }
};
/**
 * Immediately perform a synchronous re-render of the component
 * @this {Component}
 * @param {() => void} [callback] A function to be called after component is
 * re-rendered
 */ BaseComponent.prototype.forceUpdate = function(callback) {
    if (this.__v) {
        // Set render mode so that we can differentiate where the render request
        // is coming from. We need this because forceUpdate should never call
        // shouldComponentUpdate
        this.__e = true;
        if (callback) this.__h.push(callback);
        enqueueRender(this);
    }
};
/**
 * Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
 * Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
 * @param {object} props Props (eg: JSX attributes) received from parent
 * element/component
 * @param {object} state The component's current state
 * @param {object} context Context object, as returned by the nearest
 * ancestor's `getChildContext()`
 * @returns {ComponentChildren | void}
 */ BaseComponent.prototype.render = Fragment;
/**
 * @param {VNode} vnode
 * @param {number | null} [childIndex]
 */ function getDomSibling(vnode, childIndex) {
    if (childIndex == null) return vnode.__ ? getDomSibling(vnode.__, vnode.__i + 1) : null;
    var sibling;
    for(; childIndex < vnode.__k.length; childIndex++){
        sibling = vnode.__k[childIndex];
        if (sibling != null && sibling.__e != null) // we can rely on _dom to tell us if this subtree contains a
        // rendered DOM node, and what the first rendered DOM node is
        return sibling.__e;
    }
    // If we get here, we have not found a DOM node in this vnode's children.
    // We must resume from this vnode's sibling (in it's parent _children array)
    // Only climb up and search the parent if we aren't searching through a DOM
    // VNode (meaning we reached the DOM parent of the original vnode that began
    // the search)
    return typeof vnode.type == 'function' ? getDomSibling(vnode) : null;
}
/**
 * Trigger in-place re-rendering of a component.
 * @param {Component} component The component to rerender
 */ function renderComponent(component) {
    var oldVNode = component.__v, oldDom = oldVNode.__e, commitQueue = [], refQueue = [];
    if (component.__P) {
        var newVNode = assign({}, oldVNode);
        newVNode.__v = oldVNode.__v + 1;
        if (options.vnode) options.vnode(newVNode);
        diff(component.__P, newVNode, oldVNode, component.__n, component.__P.namespaceURI, oldVNode.__u & MODE_HYDRATE ? [
            oldDom
        ] : null, commitQueue, oldDom == null ? getDomSibling(oldVNode) : oldDom, !!(oldVNode.__u & MODE_HYDRATE), refQueue);
        newVNode.__v = oldVNode.__v;
        newVNode.__.__k[newVNode.__i] = newVNode;
        commitRoot(commitQueue, newVNode, refQueue);
        if (newVNode.__e != oldDom) updateParentDomPointers(newVNode);
    }
}
/**
 * @param {VNode} vnode
 */ function updateParentDomPointers(vnode) {
    if ((vnode = vnode.__) != null && vnode.__c != null) {
        vnode.__e = vnode.__c.base = null;
        for(var i = 0; i < vnode.__k.length; i++){
            var child = vnode.__k[i];
            if (child != null && child.__e != null) {
                vnode.__e = vnode.__c.base = child.__e;
                break;
            }
        }
        return updateParentDomPointers(vnode);
    }
}
/**
 * The render queue
 * @type {Array<Component>}
 */ var rerenderQueue = [];
/*
 * The value of `Component.debounce` must asynchronously invoke the passed in callback. It is
 * important that contributors to Preact can consistently reason about what calls to `setState`, etc.
 * do, and when their effects will be applied. See the links below for some further reading on designing
 * asynchronous APIs.
 * * [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony)
 * * [Callbacks synchronous and asynchronous](https://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/)
 */ var prevDebounce;
var defer = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
/**
 * Enqueue a rerender of a component
 * @param {Component} c The component to rerender
 */ function enqueueRender(c) {
    if (!c.__d && (c.__d = true) && rerenderQueue.push(c) && !process.__r++ || prevDebounce !== options.debounceRendering) {
        prevDebounce = options.debounceRendering;
        (prevDebounce || defer)(process);
    }
}
/**
 * @param {Component} a
 * @param {Component} b
 */ var depthSort = function depthSort(a, b) {
    return a.__v.__b - b.__v.__b;
};
/** Flush the render queue by rerendering all queued components */ function process() {
    var c;
    rerenderQueue.sort(depthSort);
    // Don't update `renderCount` yet. Keep its value non-zero to prevent unnecessary
    // process() calls from getting scheduled while `queue` is still being consumed.
    while(c = rerenderQueue.shift())if (c.__d) {
        var renderQueueLength = rerenderQueue.length;
        renderComponent(c);
        if (rerenderQueue.length > renderQueueLength) // keep the order from top to bottom with those new items so we can handle them in a
        // single pass
        rerenderQueue.sort(depthSort);
    }
    process.__r = 0;
}
process.__r = 0;
/**
 * Diff the children of a virtual node
 * @param {PreactElement} parentDom The DOM element whose children are being
 * diffed
 * @param {ComponentChildren[]} renderResult
 * @param {VNode} newParentVNode The new virtual node whose children should be
 * diff'ed against oldParentVNode
 * @param {VNode} oldParentVNode The old virtual node whose children should be
 * diff'ed against newParentVNode
 * @param {object} globalContext The current context object - modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    var i, /** @type {VNode} */ oldVNode, /** @type {VNode} */ childVNode, /** @type {PreactElement} */ newDom, /** @type {PreactElement} */ firstChildDom;
    // This is a compression of oldParentVNode!=null && oldParentVNode != EMPTY_OBJ && oldParentVNode._children || EMPTY_ARR
    // as EMPTY_OBJ._children should be `undefined`.
    /** @type {VNode[]} */ var oldChildren = oldParentVNode && oldParentVNode.__k || EMPTY_ARR;
    var newChildrenLength = renderResult.length;
    newParentVNode.__d = oldDom;
    constructNewChildrenArray(newParentVNode, renderResult, oldChildren);
    oldDom = newParentVNode.__d;
    for(i = 0; i < newChildrenLength; i++){
        childVNode = newParentVNode.__k[i];
        if (childVNode == null) continue;
        // At this point, constructNewChildrenArray has assigned _index to be the
        // matchingIndex for this VNode's oldVNode (or -1 if there is no oldVNode).
        if (childVNode.__i === -1) oldVNode = EMPTY_OBJ;
        else oldVNode = oldChildren[childVNode.__i] || EMPTY_OBJ;
        // Update childVNode._index to its final index
        childVNode.__i = i;
        // Morph the old element into the new one, but don't append it to the dom yet
        diff(parentDom, childVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        // Adjust DOM nodes
        newDom = childVNode.__e;
        if (childVNode.ref && oldVNode.ref != childVNode.ref) {
            if (oldVNode.ref) applyRef(oldVNode.ref, null, childVNode);
            refQueue.push(childVNode.ref, childVNode.__c || newDom, childVNode);
        }
        if (firstChildDom == null && newDom != null) firstChildDom = newDom;
        if (childVNode.__u & INSERT_VNODE || oldVNode.__k === childVNode.__k) oldDom = insert(childVNode, oldDom, parentDom);
        else if (typeof childVNode.type == 'function' && childVNode.__d !== undefined) // contain multiple DOM nodes as the same level, continue the diff from
        // the sibling of last DOM child of this child VNode
        oldDom = childVNode.__d;
        else if (newDom) oldDom = newDom.nextSibling;
        // Eagerly cleanup _nextDom. We don't need to persist the value because it
        // is only used by `diffChildren` to determine where to resume the diff
        // after diffing Components and Fragments. Once we store it the nextDOM
        // local var, we can clean up the property. Also prevents us hanging on to
        // DOM nodes that may have been unmounted.
        childVNode.__d = undefined;
        // Unset diffing flags
        childVNode.__u &= ~(INSERT_VNODE | MATCHED);
    }
    // TODO: With new child diffing algo, consider alt ways to diff Fragments.
    // Such as dropping oldDom and moving fragments in place
    //
    // Because the newParentVNode is Fragment-like, we need to set it's
    // _nextDom property to the nextSibling of its last child DOM node.
    //
    // `oldDom` contains the correct value here because if the last child
    // is a Fragment-like, then oldDom has already been set to that child's _nextDom.
    // If the last child is a DOM VNode, then oldDom will be set to that DOM
    // node's nextSibling.
    newParentVNode.__d = oldDom;
    newParentVNode.__e = firstChildDom;
}
/**
 * @param {VNode} newParentVNode
 * @param {ComponentChildren[]} renderResult
 * @param {VNode[]} oldChildren
 */ function constructNewChildrenArray(newParentVNode, renderResult, oldChildren) {
    /** @type {number} */ var i;
    /** @type {VNode} */ var childVNode;
    /** @type {VNode} */ var oldVNode;
    var newChildrenLength = renderResult.length;
    var oldChildrenLength = oldChildren.length, remainingOldChildren = oldChildrenLength;
    var skew = 0;
    newParentVNode.__k = [];
    for(i = 0; i < newChildrenLength; i++){
        // @ts-expect-error We are reusing the childVNode variable to hold both the
        // pre and post normalized childVNode
        childVNode = renderResult[i];
        if (childVNode == null || typeof childVNode == 'boolean' || typeof childVNode == 'function') {
            childVNode = newParentVNode.__k[i] = null;
            continue;
        } else if (typeof childVNode == 'string' || typeof childVNode == 'number' || // eslint-disable-next-line valid-typeof
        typeof childVNode == 'bigint' || childVNode.constructor == String) childVNode = newParentVNode.__k[i] = createVNode(null, childVNode, null, null, null);
        else if (isArray(childVNode)) childVNode = newParentVNode.__k[i] = createVNode(Fragment, {
            children: childVNode
        }, null, null, null);
        else if (childVNode.constructor === undefined && childVNode.__b > 0) // scenario:
        //   const reuse = <div />
        //   <div>{reuse}<span />{reuse}</div>
        childVNode = newParentVNode.__k[i] = createVNode(childVNode.type, childVNode.props, childVNode.key, childVNode.ref ? childVNode.ref : null, childVNode.__v);
        else childVNode = newParentVNode.__k[i] = childVNode;
        var skewedIndex = i + skew;
        childVNode.__ = newParentVNode;
        childVNode.__b = newParentVNode.__b + 1;
        // Temporarily store the matchingIndex on the _index property so we can pull
        // out the oldVNode in diffChildren. We'll override this to the VNode's
        // final index after using this property to get the oldVNode
        var matchingIndex = childVNode.__i = findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren);
        oldVNode = null;
        if (matchingIndex !== -1) {
            oldVNode = oldChildren[matchingIndex];
            remainingOldChildren--;
            if (oldVNode) oldVNode.__u |= MATCHED;
        }
        // Here, we define isMounting for the purposes of the skew diffing
        // algorithm. Nodes that are unsuspending are considered mounting and we detect
        // this by checking if oldVNode._original === null
        var isMounting = oldVNode == null || oldVNode.__v === null;
        if (isMounting) {
            if (matchingIndex == -1) skew--;
            // If we are mounting a DOM VNode, mark it for insertion
            if (typeof childVNode.type != 'function') childVNode.__u |= INSERT_VNODE;
        } else if (matchingIndex !== skewedIndex) {
            // When we move elements around i.e. [0, 1, 2] --> [1, 0, 2]
            // --> we diff 1, we find it at position 1 while our skewed index is 0 and our skew is 0
            //     we set the skew to 1 as we found an offset.
            // --> we diff 0, we find it at position 0 while our skewed index is at 2 and our skew is 1
            //     this makes us increase the skew again.
            // --> we diff 2, we find it at position 2 while our skewed index is at 4 and our skew is 2
            //
            // this becomes an optimization question where currently we see a 1 element offset as an insertion
            // or deletion i.e. we optimize for [0, 1, 2] --> [9, 0, 1, 2]
            // while a more than 1 offset we see as a swap.
            // We could probably build heuristics for having an optimized course of action here as well, but
            // might go at the cost of some bytes.
            //
            // If we wanted to optimize for i.e. only swaps we'd just do the last two code-branches and have
            // only the first item be a re-scouting and all the others fall in their skewed counter-part.
            // We could also further optimize for swaps
            if (matchingIndex == skewedIndex - 1) skew--;
            else if (matchingIndex == skewedIndex + 1) skew++;
            else {
                if (matchingIndex > skewedIndex) skew--;
                else skew++;
                // Move this VNode's DOM if the original index (matchingIndex) doesn't
                // match the new skew index (i + new skew)
                // In the former two branches we know that it matches after skewing
                childVNode.__u |= INSERT_VNODE;
            }
        }
    }
    // Remove remaining oldChildren if there are any. Loop forwards so that as we
    // unmount DOM from the beginning of the oldChildren, we can adjust oldDom to
    // point to the next child, which needs to be the first DOM node that won't be
    // unmounted.
    if (remainingOldChildren) for(i = 0; i < oldChildrenLength; i++){
        oldVNode = oldChildren[i];
        if (oldVNode != null && (oldVNode.__u & MATCHED) === 0) {
            if (oldVNode.__e == newParentVNode.__d) newParentVNode.__d = getDomSibling(oldVNode);
            unmount(oldVNode, oldVNode);
        }
    }
}
/**
 * @param {VNode} parentVNode
 * @param {PreactElement} oldDom
 * @param {PreactElement} parentDom
 * @returns {PreactElement}
 */ function insert(parentVNode, oldDom, parentDom) {
    // Note: VNodes in nested suspended trees may be missing _children.
    if (typeof parentVNode.type == 'function') {
        var children = parentVNode.__k;
        for(var i = 0; children && i < children.length; i++)if (children[i]) {
            // If we enter this code path on sCU bailout, where we copy
            // oldVNode._children to newVNode._children, we need to update the old
            // children's _parent pointer to point to the newVNode (parentVNode
            // here).
            children[i].__ = parentVNode;
            oldDom = insert(children[i], oldDom, parentDom);
        }
        return oldDom;
    } else if (parentVNode.__e != oldDom) {
        if (oldDom && parentVNode.type && !parentDom.contains(oldDom)) oldDom = getDomSibling(parentVNode);
        parentDom.insertBefore(parentVNode.__e, oldDom || null);
        oldDom = parentVNode.__e;
    }
    do oldDom = oldDom && oldDom.nextSibling;
    while (oldDom != null && oldDom.nodeType === 8)
    return oldDom;
}
/**
 * Flatten and loop through the children of a virtual node
 * @param {ComponentChildren} children The unflattened children of a virtual
 * node
 * @returns {VNode[]}
 */ function toChildArray(children, out) {
    out = out || [];
    if (children == null || typeof children == 'boolean') ;
    else if (isArray(children)) children.some(function(child) {
        toChildArray(child, out);
    });
    else out.push(children);
    return out;
}
/**
 * @param {VNode} childVNode
 * @param {VNode[]} oldChildren
 * @param {number} skewedIndex
 * @param {number} remainingOldChildren
 * @returns {number}
 */ function findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren) {
    var key = childVNode.key;
    var type = childVNode.type;
    var x = skewedIndex - 1;
    var y = skewedIndex + 1;
    var oldVNode = oldChildren[skewedIndex];
    // We only need to perform a search if there are more children
    // (remainingOldChildren) to search. However, if the oldVNode we just looked
    // at skewedIndex was not already used in this diff, then there must be at
    // least 1 other (so greater than 1) remainingOldChildren to attempt to match
    // against. So the following condition checks that ensuring
    // remainingOldChildren > 1 if the oldVNode is not already used/matched. Else
    // if the oldVNode was null or matched, then there could needs to be at least
    // 1 (aka `remainingOldChildren > 0`) children to find and compare against.
    var shouldSearch = remainingOldChildren > (oldVNode != null && (oldVNode.__u & MATCHED) === 0 ? 1 : 0);
    if (oldVNode === null || oldVNode && key == oldVNode.key && type === oldVNode.type && (oldVNode.__u & MATCHED) === 0) return skewedIndex;
    else if (shouldSearch) while(x >= 0 || y < oldChildren.length){
        if (x >= 0) {
            oldVNode = oldChildren[x];
            if (oldVNode && (oldVNode.__u & MATCHED) === 0 && key == oldVNode.key && type === oldVNode.type) return x;
            x--;
        }
        if (y < oldChildren.length) {
            oldVNode = oldChildren[y];
            if (oldVNode && (oldVNode.__u & MATCHED) === 0 && key == oldVNode.key && type === oldVNode.type) return y;
            y++;
        }
    }
    return -1;
}
function setStyle(style, key, value) {
    if (key[0] === '-') style.setProperty(key, value == null ? '' : value);
    else if (value == null) style[key] = '';
    else if (typeof value != 'number' || IS_NON_DIMENSIONAL.test(key)) style[key] = value;
    else style[key] = value + 'px';
}
// A logical clock to solve issues like https://github.com/preactjs/preact/issues/3927.
// When the DOM performs an event it leaves micro-ticks in between bubbling up which means that
// an event can trigger on a newly reated DOM-node while the event bubbles up.
//
// Originally inspired by Vue
// (https://github.com/vuejs/core/blob/caeb8a68811a1b0f79/packages/runtime-dom/src/modules/events.ts#L90-L101),
// but modified to use a logical clock instead of Date.now() in case event handlers get attached
// and events get dispatched during the same millisecond.
//
// The clock is incremented after each new event dispatch. This allows 1 000 000 new events
// per second for over 280 years before the value reaches Number.MAX_SAFE_INTEGER (2**53 - 1).
var eventClock = 0;
/**
 * Set a property value on a DOM node
 * @param {PreactElement} dom The DOM node to modify
 * @param {string} name The name of the property to set
 * @param {*} value The value to set the property to
 * @param {*} oldValue The old value the property had
 * @param {string} namespace Whether or not this DOM node is an SVG node or not
 */ function setProperty(dom, name, value, oldValue, namespace) {
    var useCapture;
    o: if (name === 'style') {
        if (typeof value == 'string') dom.style.cssText = value;
        else {
            if (typeof oldValue == 'string') dom.style.cssText = oldValue = '';
            if (oldValue) {
                for(name in oldValue)if (!(value && name in value)) setStyle(dom.style, name, '');
            }
            if (value) {
                for(name in value)if (!oldValue || value[name] !== oldValue[name]) setStyle(dom.style, name, value[name]);
            }
        }
    } else if (name[0] === 'o' && name[1] === 'n') {
        useCapture = name !== (name = name.replace(/(PointerCapture)$|Capture$/i, '$1'));
        // Infer correct casing for DOM built-in events:
        if (name.toLowerCase() in dom || name === 'onFocusOut' || name === 'onFocusIn') name = name.toLowerCase().slice(2);
        else name = name.slice(2);
        if (!dom.l) dom.l = {};
        dom.l[name + useCapture] = value;
        if (value) {
            if (!oldValue) {
                value._attached = eventClock;
                dom.addEventListener(name, useCapture ? eventProxyCapture : eventProxy, useCapture);
            } else value._attached = oldValue._attached;
        } else dom.removeEventListener(name, useCapture ? eventProxyCapture : eventProxy, useCapture);
    } else {
        if (namespace == 'http://www.w3.org/2000/svg') // - xlink:href / xlinkHref --> href (xlink:href was removed from SVG and isn't needed)
        // - className --> class
        name = name.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
        else if (name != 'width' && name != 'height' && name != 'href' && name != 'list' && name != 'form' && // Default value in browsers is `-1` and an empty string is
        // cast to `0` instead
        name != 'tabIndex' && name != 'download' && name != 'rowSpan' && name != 'colSpan' && name != 'role' && name != 'popover' && name in dom) try {
            dom[name] = value == null ? '' : value;
            break o;
        } catch (e) {}
        // aria- and data- attributes have no boolean representation.
        // A `false` value is different from the attribute not being
        // present, so we can't remove it. For non-boolean aria
        // attributes we could treat false as a removal, but the
        // amount of exceptions would cost too many bytes. On top of
        // that other frameworks generally stringify `false`.
        if (typeof value == 'function') ;
        else if (value != null && (value !== false || name[4] === '-')) dom.setAttribute(name, name == 'popover' && value == true ? '' : value);
        else dom.removeAttribute(name);
    }
}
/**
 * Create an event proxy function.
 * @param {boolean} useCapture Is the event handler for the capture phase.
 * @private
 */ function createEventProxy(useCapture) {
    /**
   * Proxy an event to hooked event handlers
   * @param {PreactEvent} e The event object from the browser
   * @private
   */ return function(e) {
        if (this.l) {
            var eventHandler = this.l[e.type + useCapture];
            if (e._dispatched == null) e._dispatched = eventClock++;
            else if (e._dispatched < eventHandler._attached) return;
            return eventHandler(options.event ? options.event(e) : e);
        }
    };
}
var eventProxy = createEventProxy(false);
var eventProxyCapture = createEventProxy(true);
/**
 * Diff two virtual nodes and apply proper changes to the DOM
 * @param {PreactElement} parentDom The parent of the DOM element
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object. Modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diff(parentDom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    /** @type {any} */ var tmp, newType = newVNode.type;
    // When passing through createElement it assigns the object
    // constructor as undefined. This to prevent JSON-injection.
    if (newVNode.constructor !== undefined) return null;
    // If the previous diff bailed out, resume creating/hydrating.
    if (oldVNode.__u & MODE_SUSPENDED) {
        isHydrating = !!(oldVNode.__u & MODE_HYDRATE);
        oldDom = newVNode.__e = oldVNode.__e;
        excessDomChildren = [
            oldDom
        ];
    }
    if (tmp = options.__b) tmp(newVNode);
    outer: if (typeof newType == 'function') try {
        var c, isNew, oldProps, oldState, snapshot, clearProcessingException;
        var newProps = newVNode.props;
        var isClassComponent = 'prototype' in newType && newType.prototype.render;
        // Necessary for createContext api. Setting this property will pass
        // the context value as `this.context` just for this component.
        tmp = newType.contextType;
        var provider = tmp && globalContext[tmp.__c];
        var componentContext = tmp ? provider ? provider.props.value : tmp.__ : globalContext;
        // Get component and set it to `c`
        if (oldVNode.__c) {
            c = newVNode.__c = oldVNode.__c;
            clearProcessingException = c.__ = c.__E;
        } else {
            // Instantiate the new component
            if (isClassComponent) newVNode.__c = c = new newType(newProps, componentContext); // eslint-disable-line new-cap
            else {
                // @ts-expect-error Trust me, Component implements the interface we want
                newVNode.__c = c = new BaseComponent(newProps, componentContext);
                c.constructor = newType;
                c.render = doRender;
            }
            if (provider) provider.sub(c);
            c.props = newProps;
            if (!c.state) c.state = {};
            c.context = componentContext;
            c.__n = globalContext;
            isNew = c.__d = true;
            c.__h = [];
            c._sb = [];
        }
        // Invoke getDerivedStateFromProps
        if (isClassComponent && c.__s == null) c.__s = c.state;
        if (isClassComponent && newType.getDerivedStateFromProps != null) {
            if (c.__s == c.state) c.__s = assign({}, c.__s);
            assign(c.__s, newType.getDerivedStateFromProps(newProps, c.__s));
        }
        oldProps = c.props;
        oldState = c.state;
        c.__v = newVNode;
        // Invoke pre-render lifecycle methods
        if (isNew) {
            if (isClassComponent && newType.getDerivedStateFromProps == null && c.componentWillMount != null) c.componentWillMount();
            if (isClassComponent && c.componentDidMount != null) c.__h.push(c.componentDidMount);
        } else {
            if (isClassComponent && newType.getDerivedStateFromProps == null && newProps !== oldProps && c.componentWillReceiveProps != null) c.componentWillReceiveProps(newProps, componentContext);
            if (!c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(newProps, c.__s, componentContext) === false || newVNode.__v === oldVNode.__v)) {
                // More info about this here: https://gist.github.com/JoviDeCroock/bec5f2ce93544d2e6070ef8e0036e4e8
                if (newVNode.__v !== oldVNode.__v) {
                    // When we are dealing with a bail because of sCU we have to update
                    // the props, state and dirty-state.
                    // when we are dealing with strict-equality we don't as the child could still
                    // be dirtied see #3883
                    c.props = newProps;
                    c.state = c.__s;
                    c.__d = false;
                }
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
                newVNode.__k.some(function(vnode) {
                    if (vnode) vnode.__ = newVNode;
                });
                for(var i = 0; i < c._sb.length; i++)c.__h.push(c._sb[i]);
                c._sb = [];
                if (c.__h.length) commitQueue.push(c);
                break outer;
            }
            if (c.componentWillUpdate != null) c.componentWillUpdate(newProps, c.__s, componentContext);
            if (isClassComponent && c.componentDidUpdate != null) c.__h.push(function() {
                c.componentDidUpdate(oldProps, oldState, snapshot);
            });
        }
        c.context = componentContext;
        c.props = newProps;
        c.__P = parentDom;
        c.__e = false;
        var renderHook = options.__r, count = 0;
        if (isClassComponent) {
            c.state = c.__s;
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            for(var _i = 0; _i < c._sb.length; _i++)c.__h.push(c._sb[_i]);
            c._sb = [];
        } else do {
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            // Handle setState called in render, see #2553
            c.state = c.__s;
        }while (c.__d && ++count < 25)
        // Handle setState called in render, see #2553
        c.state = c.__s;
        if (c.getChildContext != null) globalContext = assign(assign({}, globalContext), c.getChildContext());
        if (isClassComponent && !isNew && c.getSnapshotBeforeUpdate != null) snapshot = c.getSnapshotBeforeUpdate(oldProps, oldState);
        var isTopLevelFragment = tmp != null && tmp.type === Fragment && tmp.key == null;
        var renderResult = isTopLevelFragment ? tmp.props.children : tmp;
        diffChildren(parentDom, isArray(renderResult) ? renderResult : [
            renderResult
        ], newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        c.base = newVNode.__e;
        // We successfully rendered this VNode, unset any stored hydration/bailout state:
        newVNode.__u &= RESET_MODE;
        if (c.__h.length) commitQueue.push(c);
        if (clearProcessingException) c.__E = c.__ = null;
    } catch (e) {
        newVNode.__v = null;
        // if hydrating or creating initial tree, bailout preserves DOM:
        if (isHydrating || excessDomChildren != null) {
            newVNode.__u |= isHydrating ? MODE_HYDRATE | MODE_SUSPENDED : MODE_HYDRATE;
            while(oldDom && oldDom.nodeType === 8 && oldDom.nextSibling)oldDom = oldDom.nextSibling;
            excessDomChildren[excessDomChildren.indexOf(oldDom)] = null;
            newVNode.__e = oldDom;
        } else {
            newVNode.__e = oldVNode.__e;
            newVNode.__k = oldVNode.__k;
        }
        options.__e(e, newVNode, oldVNode);
    }
    else if (excessDomChildren == null && newVNode.__v === oldVNode.__v) {
        newVNode.__k = oldVNode.__k;
        newVNode.__e = oldVNode.__e;
    } else newVNode.__e = diffElementNodes(oldVNode.__e, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue);
    if (tmp = options.diffed) tmp(newVNode);
}
/**
 * @param {Array<Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {VNode} root
 */ function commitRoot(commitQueue, root, refQueue) {
    root.__d = undefined;
    for(var i = 0; i < refQueue.length; i++)applyRef(refQueue[i], refQueue[++i], refQueue[++i]);
    if (options.__c) options.__c(root, commitQueue);
    commitQueue.some(function(c) {
        try {
            // @ts-expect-error Reuse the commitQueue variable here so the type changes
            commitQueue = c.__h;
            c.__h = [];
            commitQueue.some(function(cb) {
                // @ts-expect-error See above comment on commitQueue
                cb.call(c);
            });
        } catch (e) {
            options.__e(e, c.__v);
        }
    });
}
/**
 * Diff two virtual nodes representing DOM element
 * @param {PreactElement} dom The DOM element representing the virtual nodes
 * being diffed
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 * @returns {PreactElement}
 */ function diffElementNodes(dom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue) {
    var oldProps = oldVNode.props;
    var newProps = newVNode.props;
    var nodeType = /** @type {string} */ newVNode.type;
    /** @type {any} */ var i;
    /** @type {{ __html?: string }} */ var newHtml;
    /** @type {{ __html?: string }} */ var oldHtml;
    /** @type {ComponentChildren} */ var newChildren;
    var value;
    var inputValue;
    var checked;
    // Tracks entering and exiting namespaces when descending through the tree.
    if (nodeType === 'svg') namespace = 'http://www.w3.org/2000/svg';
    else if (nodeType === 'math') namespace = 'http://www.w3.org/1998/Math/MathML';
    else if (!namespace) namespace = 'http://www.w3.org/1999/xhtml';
    if (excessDomChildren != null) for(i = 0; i < excessDomChildren.length; i++){
        value = excessDomChildren[i];
        // if newVNode matches an element in excessDomChildren or the `dom`
        // argument matches an element in excessDomChildren, remove it from
        // excessDomChildren so it isn't later removed in diffChildren
        if (value && 'setAttribute' in value === !!nodeType && (nodeType ? value.localName === nodeType : value.nodeType === 3)) {
            dom = value;
            excessDomChildren[i] = null;
            break;
        }
    }
    if (dom == null) {
        if (nodeType === null) return options.document.createTextNode(newProps);
        dom = options.document.createElementNS(namespace, nodeType, newProps.is && newProps);
        // we are creating a new node, so we can assume this is a new subtree (in
        // case we are hydrating), this deopts the hydrate
        if (isHydrating) {
            if (options.__m) options.__m(newVNode, excessDomChildren);
            isHydrating = false;
        }
        // we created a new parent, so none of the previously attached children can be reused:
        excessDomChildren = null;
    }
    if (nodeType === null) {
        if (oldProps !== newProps && (!isHydrating || dom.data !== newProps)) dom.data = newProps;
    } else {
        // If excessDomChildren was not null, repopulate it with the current element's children:
        excessDomChildren = excessDomChildren && slice.call(dom.childNodes);
        oldProps = oldVNode.props || EMPTY_OBJ;
        // If we are in a situation where we are not hydrating but are using
        // existing DOM (e.g. replaceNode) we should read the existing DOM
        // attributes to diff them
        if (!isHydrating && excessDomChildren != null) {
            oldProps = {};
            for(i = 0; i < dom.attributes.length; i++){
                value = dom.attributes[i];
                oldProps[value.name] = value.value;
            }
        }
        for(i in oldProps){
            value = oldProps[i];
            if (i == 'children') ;
            else if (i == 'dangerouslySetInnerHTML') oldHtml = value;
            else if (!(i in newProps)) {
                if (i == 'value' && 'defaultValue' in newProps || i == 'checked' && 'defaultChecked' in newProps) continue;
                setProperty(dom, i, null, value, namespace);
            }
        }
        // During hydration, props are not diffed at all (including dangerouslySetInnerHTML)
        // @TODO we should warn in debug mode when props don't match here.
        for(i in newProps){
            value = newProps[i];
            if (i == 'children') newChildren = value;
            else if (i == 'dangerouslySetInnerHTML') newHtml = value;
            else if (i == 'value') inputValue = value;
            else if (i == 'checked') checked = value;
            else if ((!isHydrating || typeof value == 'function') && oldProps[i] !== value) setProperty(dom, i, value, oldProps[i], namespace);
        }
        // If the new vnode didn't have dangerouslySetInnerHTML, diff its children
        if (newHtml) {
            // Avoid re-applying the same '__html' if it did not changed between re-render
            if (!isHydrating && (!oldHtml || newHtml.__html !== oldHtml.__html && newHtml.__html !== dom.innerHTML)) dom.innerHTML = newHtml.__html;
            newVNode.__k = [];
        } else {
            if (oldHtml) dom.innerHTML = '';
            diffChildren(dom, isArray(newChildren) ? newChildren : [
                newChildren
            ], newVNode, oldVNode, globalContext, nodeType === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : namespace, excessDomChildren, commitQueue, excessDomChildren ? excessDomChildren[0] : oldVNode.__k && getDomSibling(oldVNode, 0), isHydrating, refQueue);
            // Remove children that are not part of any vnode.
            if (excessDomChildren != null) for(i = excessDomChildren.length; i--;)removeNode(excessDomChildren[i]);
        }
        // As above, don't diff props during hydration
        if (!isHydrating) {
            i = 'value';
            if (nodeType === 'progress' && inputValue == null) dom.removeAttribute('value');
            else if (inputValue !== undefined && // despite the attribute not being present. When the attribute
            // is missing the progress bar is treated as indeterminate.
            // To fix that we'll always update it when it is 0 for progress elements
            (inputValue !== dom[i] || nodeType === 'progress' && !inputValue || // This is only for IE 11 to fix <select> value not being updated.
            // To avoid a stale select value we need to set the option.value
            // again, which triggers IE11 to re-evaluate the select value
            nodeType === 'option' && inputValue !== oldProps[i])) setProperty(dom, i, inputValue, oldProps[i], namespace);
            i = 'checked';
            if (checked !== undefined && checked !== dom[i]) setProperty(dom, i, checked, oldProps[i], namespace);
        }
    }
    return dom;
}
/**
 * Invoke or update a ref, depending on whether it is a function or object ref.
 * @param {Ref<any> & { _unmount?: unknown }} ref
 * @param {any} value
 * @param {VNode} vnode
 */ function applyRef(ref, value, vnode) {
    try {
        if (typeof ref == 'function') {
            var hasRefUnmount = typeof ref.__u == 'function';
            if (hasRefUnmount) ref.__u();
            if (!hasRefUnmount || value != null) // instance object itself to avoid shape
            // transitioning vnode
            ref.__u = ref(value);
        } else ref.current = value;
    } catch (e) {
        options.__e(e, vnode);
    }
}
/**
 * Unmount a virtual node from the tree and apply DOM changes
 * @param {VNode} vnode The virtual node to unmount
 * @param {VNode} parentVNode The parent of the VNode that initiated the unmount
 * @param {boolean} [skipRemove] Flag that indicates that a parent node of the
 * current element is already detached from the DOM.
 */ function unmount(vnode, parentVNode, skipRemove) {
    var r;
    if (options.unmount) options.unmount(vnode);
    if (r = vnode.ref) {
        if (!r.current || r.current === vnode.__e) applyRef(r, null, parentVNode);
    }
    if ((r = vnode.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (e) {
            options.__e(e, parentVNode);
        }
        r.base = r.__P = null;
    }
    if (r = vnode.__k) {
        for(var i = 0; i < r.length; i++)if (r[i]) unmount(r[i], parentVNode, skipRemove || typeof vnode.type != 'function');
    }
    if (!skipRemove) removeNode(vnode.__e);
    // Must be set to `undefined` to properly clean up `_nextDom`
    // for which `null` is a valid value. See comment in `create-element.js`
    vnode.__c = vnode.__ = vnode.__e = vnode.__d = undefined;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
/**
 * Render a Preact virtual node into a DOM element
 * @param {ComponentChild} vnode The virtual node to render
 * @param {PreactElement} parentDom The DOM element to render into
 * @param {PreactElement | object} [replaceNode] Optional: Attempt to re-use an
 * existing DOM tree rooted at `replaceNode`
 */ function render(vnode, parentDom, replaceNode) {
    if (options.__) options.__(vnode, parentDom);
    // We abuse the `replaceNode` parameter in `hydrate()` to signal if we are in
    // hydration mode or not by passing the `hydrate` function instead of a DOM
    // element..
    var isHydrating = typeof replaceNode == 'function';
    // To be able to support calling `render()` multiple times on the same
    // DOM node, we need to obtain a reference to the previous tree. We do
    // this by assigning a new `_children` property to DOM nodes which points
    // to the last rendered tree. By default this property is not present, which
    // means that we are mounting a new tree for the first time.
    var oldVNode = isHydrating ? null : replaceNode && replaceNode.__k || parentDom.__k;
    vnode = (!isHydrating && replaceNode || parentDom).__k = createElement(Fragment, null, [
        vnode
    ]);
    // List of effects that need to be called after diffing.
    var commitQueue = [], refQueue = [];
    diff(parentDom, // our custom `_children` property.
    vnode, oldVNode || EMPTY_OBJ, EMPTY_OBJ, parentDom.namespaceURI, !isHydrating && replaceNode ? [
        replaceNode
    ] : oldVNode ? null : parentDom.firstChild ? slice.call(parentDom.childNodes) : null, commitQueue, !isHydrating && replaceNode ? replaceNode : oldVNode ? oldVNode.__e : parentDom.firstChild, isHydrating, refQueue);
    // Flush all queued effects
    commitRoot(commitQueue, vnode, refQueue);
}
/**
 * Update an existing DOM element with data from a Preact virtual node
 * @param {ComponentChild} vnode The virtual node to render
 * @param {PreactElement} parentDom The DOM element to update
 */ function hydrate(vnode, parentDom) {
    render(vnode, parentDom, hydrate);
}
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its
 * children.
 * @param {VNode} vnode The virtual DOM element to clone
 * @param {object} props Attributes/props to add when cloning
 * @param {Array<ComponentChildren>} rest Any additional arguments will be used
 * as replacement children.
 * @returns {VNode}
 */ function cloneElement(vnode, props, children) {
    var normalizedProps = assign({}, vnode.props), key, ref, i;
    var defaultProps;
    if (vnode.type && vnode.type.defaultProps) defaultProps = vnode.type.defaultProps;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else if (props[i] === undefined && defaultProps !== undefined) normalizedProps[i] = defaultProps[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    return createVNode(vnode.type, normalizedProps, key || vnode.key, ref || vnode.ref, null);
}
var i = 0;
function createContext(defaultValue, contextId) {
    contextId = '__cC' + i++;
    var context = {
        __c: contextId,
        __: defaultValue,
        /** @type {FunctionComponent} */ Consumer: function Consumer(props, contextValue) {
            // return props.children(
            // 	context[contextId] ? context[contextId].props.value : defaultValue
            // );
            return props.children(contextValue);
        },
        /** @type {FunctionComponent} */ Provider: function Provider(props) {
            if (!this.getChildContext) {
                /** @type {Component[] | null} */ var subs = [];
                var ctx = {};
                ctx[contextId] = this;
                this.getChildContext = function() {
                    return ctx;
                };
                this.componentWillUnmount = function() {
                    subs = null;
                };
                this.shouldComponentUpdate = function(_props) {
                    if (this.props.value !== _props.value) subs.some(function(c) {
                        c.__e = true;
                        enqueueRender(c);
                    });
                };
                this.sub = function(c) {
                    subs.push(c);
                    var old = c.componentWillUnmount;
                    c.componentWillUnmount = function() {
                        if (subs) subs.splice(subs.indexOf(c), 1);
                        if (old) old.call(c);
                    };
                };
            }
            return props.children;
        }
    };
    // Devtools needs access to the context object when it
    // encounters a Provider. This is necessary to support
    // setting `displayName` on the context object instead
    // of on the component itself. See:
    // https://reactjs.org/docs/context.html#contextdisplayname
    return context.Provider.__ = context.Consumer.contextType = context;
}
 //# sourceMappingURL=preact.module.js.map


}),
"(react:background)/./node_modules/preact/hooks/dist/hooks.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useCallback: () => (useCallback),
  useContext: () => (useContext),
  useDebugValue: () => (useDebugValue),
  useEffect: () => (useEffect),
  useErrorBoundary: () => (useErrorBoundary),
  useId: () => (useId),
  useImperativeHandle: () => (useImperativeHandle),
  useLayoutEffect: () => (useLayoutEffect),
  useMemo: () => (useMemo),
  useReducer: () => (useReducer),
  useRef: () => (useRef),
  useState: () => (useState)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");

/** @type {number} */ var currentIndex;
/** @type {import('./internal').Component} */ var currentComponent;
/** @type {import('./internal').Component} */ var previousComponent;
/** @type {number} */ var currentHook = 0;
/** @type {Array<import('./internal').Component>} */ var afterPaintEffects = [];
// Cast to use internal Options type
var options = /** @type {import('./internal').Options} */ preact__WEBPACK_IMPORTED_MODULE_0__.options;
var oldBeforeDiff = options.__b;
var oldBeforeRender = options.__r;
var oldAfterDiff = options.diffed;
var oldCommit = options.__c;
var oldBeforeUnmount = options.unmount;
var oldRoot = options.__;
var RAF_TIMEOUT = 100;
var prevRaf;
/** @type {(vnode: import('./internal').VNode) => void} */ options.__b = function(vnode) {
    currentComponent = null;
    if (oldBeforeDiff) oldBeforeDiff(vnode);
};
options.__ = function(vnode, parentDom) {
    if (vnode && parentDom.__k && parentDom.__k.__m) vnode.__m = parentDom.__k.__m;
    if (oldRoot) oldRoot(vnode, parentDom);
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.__r = function(vnode) {
    if (oldBeforeRender) oldBeforeRender(vnode);
    currentComponent = vnode.__c;
    currentIndex = 0;
    var hooks = currentComponent.__H;
    if (hooks) {
        if (previousComponent === currentComponent) {
            hooks.__h = [];
            currentComponent.__h = [];
            hooks.__.forEach(function(hookItem) {
                if (hookItem.__N) hookItem.__ = hookItem.__N;
                hookItem._pendingArgs = hookItem.__N = undefined;
            });
        } else {
            hooks.__h.forEach(invokeCleanup);
            hooks.__h.forEach(invokeEffect);
            hooks.__h = [];
            currentIndex = 0;
        }
    }
    previousComponent = currentComponent;
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.diffed = function(vnode) {
    if (oldAfterDiff) oldAfterDiff(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        if (c.__H.__h.length) afterPaint(afterPaintEffects.push(c));
        c.__H.__.forEach(function(hookItem) {
            if (hookItem._pendingArgs) hookItem.__H = hookItem._pendingArgs;
            hookItem._pendingArgs = undefined;
        });
    }
    previousComponent = currentComponent = null;
};
// TODO: Improve typing of commitQueue parameter
/** @type {(vnode: import('./internal').VNode, commitQueue: any) => void} */ options.__c = function(vnode, commitQueue) {
    commitQueue.some(function(component) {
        try {
            component.__h.forEach(invokeCleanup);
            component.__h = component.__h.filter(function(cb) {
                return cb.__ ? invokeEffect(cb) : true;
            });
        } catch (e) {
            commitQueue.some(function(c) {
                if (c.__h) c.__h = [];
            });
            commitQueue = [];
            options.__e(e, component.__v);
        }
    });
    if (oldCommit) oldCommit(vnode, commitQueue);
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.unmount = function(vnode) {
    if (oldBeforeUnmount) oldBeforeUnmount(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        var hasErrored;
        c.__H.__.forEach(function(s) {
            try {
                invokeCleanup(s);
            } catch (e) {
                hasErrored = e;
            }
        });
        c.__H = undefined;
        if (hasErrored) options.__e(hasErrored, c.__v);
    }
};
/**
 * Get a hook's state from the currentComponent
 * @param {number} index The index of the hook to get
 * @param {number} type The index of the hook to get
 * @returns {any}
 */ function getHookState(index, type) {
    if (options.__h) options.__h(currentComponent, index, currentHook || type);
    currentHook = 0;
    // Largely inspired by:
    // * https://github.com/michael-klein/funcy.js/blob/f6be73468e6ec46b0ff5aa3cc4c9baf72a29025a/src/hooks/core_hooks.mjs
    // * https://github.com/michael-klein/funcy.js/blob/650beaa58c43c33a74820a3c98b3c7079cf2e333/src/renderer.mjs
    // Other implementations to look at:
    // * https://codesandbox.io/s/mnox05qp8
    var hooks = currentComponent.__H || (currentComponent.__H = {
        __: [],
        __h: []
    });
    if (index >= hooks.__.length) hooks.__.push({});
    return hooks.__[index];
}
/**
 * @template {unknown} S
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} [initialState]
 * @returns {[S, (state: S) => void]}
 */ function useState(initialState) {
    currentHook = 1;
    return useReducer(invokeOrReturn, initialState);
}
/**
 * @template {unknown} S
 * @template {unknown} A
 * @param {import('./index').Reducer<S, A>} reducer
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} initialState
 * @param {(initialState: any) => void} [init]
 * @returns {[ S, (state: S) => void ]}
 */ function useReducer(reducer, initialState, init) {
    /** @type {import('./internal').ReducerHookState} */ var hookState = getHookState(currentIndex++, 2);
    hookState._reducer = reducer;
    if (!hookState.__c) {
        hookState.__ = [
            !init ? invokeOrReturn(undefined, initialState) : init(initialState),
            function(action) {
                var currentValue = hookState.__N ? hookState.__N[0] : hookState.__[0];
                var nextValue = hookState._reducer(currentValue, action);
                if (currentValue !== nextValue) {
                    hookState.__N = [
                        nextValue,
                        hookState.__[1]
                    ];
                    hookState.__c.setState({});
                }
            }
        ];
        hookState.__c = currentComponent;
        if (!currentComponent._hasScuFromHooks) {
            // This SCU has the purpose of bailing out after repeated updates
            // to stateful hooks.
            // we store the next value in _nextValue[0] and keep doing that for all
            // state setters, if we have next states and
            // all next states within a component end up being equal to their original state
            // we are safe to bail out for this specific component.
            /**
       *
       * @type {import('./internal').Component["shouldComponentUpdate"]}
       */ // @ts-ignore - We don't use TS to downtranspile
            // eslint-disable-next-line no-inner-declarations
            var updateHookState = function updateHookState(p, s, c) {
                if (!hookState.__c.__H) return true;
                /** @type {(x: import('./internal').HookState) => x is import('./internal').ReducerHookState} */ var isStateHook = function isStateHook(x) {
                    return !!x.__c;
                };
                var stateHooks = hookState.__c.__H.__.filter(isStateHook);
                var allHooksEmpty = stateHooks.every(function(x) {
                    return !x.__N;
                });
                // When we have no updated hooks in the component we invoke the previous SCU or
                // traverse the VDOM tree further.
                if (allHooksEmpty) return prevScu ? prevScu.call(this, p, s, c) : true;
                // We check whether we have components with a nextValue set that
                // have values that aren't equal to one another this pushes
                // us to update further down the tree
                var shouldUpdate = false;
                stateHooks.forEach(function(hookItem) {
                    if (hookItem.__N) {
                        var currentValue = hookItem.__[0];
                        hookItem.__ = hookItem.__N;
                        hookItem.__N = undefined;
                        if (currentValue !== hookItem.__[0]) shouldUpdate = true;
                    }
                });
                return shouldUpdate || hookState.__c.props !== p ? prevScu ? prevScu.call(this, p, s, c) : true : false;
            };
            currentComponent._hasScuFromHooks = true;
            var prevScu = currentComponent.shouldComponentUpdate;
            var prevCWU = currentComponent.componentWillUpdate;
            // If we're dealing with a forced update `shouldComponentUpdate` will
            // not be called. But we use that to update the hook values, so we
            // need to call it.
            currentComponent.componentWillUpdate = function(p, s, c) {
                if (this.__e) {
                    var tmp = prevScu;
                    // Clear to avoid other sCU hooks from being called
                    prevScu = undefined;
                    updateHookState(p, s, c);
                    prevScu = tmp;
                }
                if (prevCWU) prevCWU.call(this, p, s, c);
            };
            currentComponent.shouldComponentUpdate = updateHookState;
        }
    }
    return hookState.__N || hookState.__;
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function useEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 3);
    if (!options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__H.__h.push(state);
    }
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function useLayoutEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 4);
    if (!options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__h.push(state);
    }
}
/** @type {(initialValue: unknown) => unknown} */ function useRef(initialValue) {
    currentHook = 5;
    return useMemo(function() {
        return {
            current: initialValue
        };
    }, []);
}
/**
 * @param {object} ref
 * @param {() => object} createHandle
 * @param {unknown[]} args
 * @returns {void}
 */ function useImperativeHandle(ref, createHandle, args) {
    currentHook = 6;
    useLayoutEffect(function() {
        if (typeof ref == 'function') {
            ref(createHandle());
            return function() {
                return ref(null);
            };
        } else if (ref) {
            ref.current = createHandle();
            return function() {
                return ref.current = null;
            };
        }
    }, args == null ? args : args.concat(ref));
}
/**
 * @template {unknown} T
 * @param {() => T} factory
 * @param {unknown[]} args
 * @returns {T}
 */ function useMemo(factory, args) {
    /** @type {import('./internal').MemoHookState<T>} */ var state = getHookState(currentIndex++, 7);
    if (argsChanged(state.__H, args)) {
        state.__ = factory();
        state.__H = args;
        state.__h = factory;
    }
    return state.__;
}
/**
 * @param {() => void} callback
 * @param {unknown[]} args
 * @returns {() => void}
 */ function useCallback(callback, args) {
    currentHook = 8;
    return useMemo(function() {
        return callback;
    }, args);
}
/**
 * @param {import('./internal').PreactContext} context
 */ function useContext(context) {
    var provider = currentComponent.context[context.__c];
    // We could skip this call here, but than we'd not call
    // `options._hook`. We need to do that in order to make
    // the devtools aware of this hook.
    /** @type {import('./internal').ContextHookState} */ var state = getHookState(currentIndex++, 9);
    // The devtools needs access to the context object to
    // be able to pull of the default value when no provider
    // is present in the tree.
    state.c = context;
    if (!provider) return context.__;
    // This is probably not safe to convert to "!"
    if (state.__ == null) {
        state.__ = true;
        provider.sub(currentComponent);
    }
    return provider.props.value;
}
/**
 * Display a custom label for a custom hook for the devtools panel
 * @type {<T>(value: T, cb?: (value: T) => string | number) => void}
 */ function useDebugValue(value, formatter) {
    if (options.useDebugValue) options.useDebugValue(formatter ? formatter(value) : /** @type {any}*/ value);
}
/**
 * @param {(error: unknown, errorInfo: import('preact').ErrorInfo) => void} cb
 * @returns {[unknown, () => void]}
 */ function useErrorBoundary(cb) {
    /** @type {import('./internal').ErrorBoundaryHookState} */ var state = getHookState(currentIndex++, 10);
    var errState = useState();
    state.__ = cb;
    if (!currentComponent.componentDidCatch) currentComponent.componentDidCatch = function(err, errorInfo) {
        if (state.__) state.__(err, errorInfo);
        errState[1](err);
    };
    return [
        errState[0],
        function() {
            errState[1](undefined);
        }
    ];
}
/** @type {() => string} */ function useId() {
    /** @type {import('./internal').IdHookState} */ var state = getHookState(currentIndex++, 11);
    if (!state.__) {
        // Grab either the root node or the nearest async boundary node.
        /** @type {import('./internal.d').VNode} */ var root = currentComponent.__v;
        while(root !== null && !root.__m && root.__ !== null)root = root.__;
        var mask = root.__m || (root.__m = [
            0,
            0
        ]);
        state.__ = 'P' + mask[0] + '-' + mask[1]++;
    }
    return state.__;
}
/**
 * After paint effects consumer.
 */ function flushAfterPaintEffects() {
    var component;
    while(component = afterPaintEffects.shift()){
        if (!component.__P || !component.__H) continue;
        try {
            component.__H.__h.forEach(invokeCleanup);
            component.__H.__h.forEach(invokeEffect);
            component.__H.__h = [];
        } catch (e) {
            component.__H.__h = [];
            options.__e(e, component.__v);
        }
    }
}
var HAS_RAF = typeof requestAnimationFrame == 'function';
/**
 * Schedule a callback to be invoked after the browser has a chance to paint a new frame.
 * Do this by combining requestAnimationFrame (rAF) + setTimeout to invoke a callback after
 * the next browser frame.
 *
 * Also, schedule a timeout in parallel to the the rAF to ensure the callback is invoked
 * even if RAF doesn't fire (for example if the browser tab is not visible)
 *
 * @param {() => void} callback
 */ function afterNextFrame(callback) {
    var done = function done() {
        clearTimeout(timeout);
        if (HAS_RAF) cancelAnimationFrame(raf);
        setTimeout(callback);
    };
    var timeout = setTimeout(done, RAF_TIMEOUT);
    var raf;
    if (HAS_RAF) raf = requestAnimationFrame(done);
}
// Note: if someone used options.debounceRendering = requestAnimationFrame,
// then effects will ALWAYS run on the NEXT frame instead of the current one, incurring a ~16ms delay.
// Perhaps this is not such a big deal.
/**
 * Schedule afterPaintEffects flush after the browser paints
 * @param {number} newQueueLength
 * @returns {void}
 */ function afterPaint(newQueueLength) {
    if (newQueueLength === 1 || prevRaf !== options.requestAnimationFrame) {
        prevRaf = options.requestAnimationFrame;
        (prevRaf || afterNextFrame)(flushAfterPaintEffects);
    }
}
/**
 * @param {import('./internal').HookState} hook
 * @returns {void}
 */ function invokeCleanup(hook) {
    // A hook cleanup can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    var cleanup = hook.__c;
    if (typeof cleanup == 'function') {
        hook.__c = undefined;
        cleanup();
    }
    currentComponent = comp;
}
/**
 * Invoke a Hook's effect
 * @param {import('./internal').EffectHookState} hook
 * @returns {void}
 */ function invokeEffect(hook) {
    // A hook call can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    hook.__c = hook.__();
    currentComponent = comp;
}
/**
 * @param {unknown[]} oldArgs
 * @param {unknown[]} newArgs
 * @returns {boolean}
 */ function argsChanged(oldArgs, newArgs) {
    return !oldArgs || oldArgs.length !== newArgs.length || newArgs.some(function(arg, index) {
        return arg !== oldArgs[index];
    });
}
/**
 * @template Arg
 * @param {Arg} arg
 * @param {(arg: Arg) => any} f
 * @returns {any}
 */ function invokeOrReturn(arg, f) {
    return typeof f == 'function' ? f(arg) : f;
}
 //# sourceMappingURL=hooks.module.js.map


}),
"(react:background)/./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
  jsx: () => (createVNode),
  jsxAttr: () => (jsxAttr),
  jsxDEV: () => (createVNode),
  jsxEscape: () => (jsxEscape),
  jsxTemplate: () => (jsxTemplate),
  jsxs: () => (createVNode)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/preact/dist/preact.mjs");


var ENCODED_ENTITIES = /["&<]/;
/** @param {string} str */ function encodeEntities(str) {
    // Skip all work for strings with no entities needing encoding:
    if (str.length === 0 || ENCODED_ENTITIES.test(str) === false) return str;
    var last = 0, i = 0, out = '', ch = '';
    // Seek forward in str until the next entity char:
    for(; i < str.length; i++){
        switch(str.charCodeAt(i)){
            case 34:
                ch = '&quot;';
                break;
            case 38:
                ch = '&amp;';
                break;
            case 60:
                ch = '&lt;';
                break;
            default:
                continue;
        }
        // Append skipped/buffered characters and the encoded entity:
        if (i !== last) out += str.slice(last, i);
        out += ch;
        // Start the next seek/buffer after the entity's offset:
        last = i + 1;
    }
    if (i !== last) out += str.slice(last, i);
    return out;
}
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var vnodeId = 0;
var isArray = Array.isArray;
/**
 * @fileoverview
 * This file exports various methods that implement Babel's "automatic" JSX runtime API:
 * - jsx(type, props, key)
 * - jsxs(type, props, key)
 * - jsxDEV(type, props, key, __source, __self)
 *
 * The implementation of createVNode here is optimized for performance.
 * Benchmarks: https://esbench.com/bench/5f6b54a0b4632100a7dcd2b3
 */ /**
 * JSX.Element factory used by Babel's {runtime:"automatic"} JSX transform
 * @param {VNode['type']} type
 * @param {VNode['props']} props
 * @param {VNode['key']} [key]
 * @param {unknown} [isStaticChildren]
 * @param {unknown} [__source]
 * @param {unknown} [__self]
 */ function createVNode(type, props, key, isStaticChildren, __source, __self) {
    if (!props) props = {};
    // We'll want to preserve `ref` in props to get rid of the need for
    // forwardRef components in the future, but that should happen via
    // a separate PR.
    var normalizedProps = props, ref, i;
    if ('ref' in normalizedProps) {
        normalizedProps = {};
        for(i in props)if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    /** @type {VNode & { __source: any; __self: any }} */ var vnode = {
        type: type,
        props: normalizedProps,
        key: key,
        ref: ref,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: undefined,
        __c: null,
        constructor: undefined,
        __v: --vnodeId,
        __i: -1,
        __u: 0,
        __source: __source,
        __self: __self
    };
    // If a Component VNode, check for and apply defaultProps.
    // Note: `type` is often a String, and can be `undefined` in development.
    if (typeof type === 'function' && (ref = type.defaultProps)) {
        for(i in ref)if (typeof normalizedProps[i] === 'undefined') normalizedProps[i] = ref[i];
    }
    if (preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode) preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(vnode);
    return vnode;
}
/**
 * Create a template vnode. This function is not expected to be
 * used directly, but rather through a precompile JSX transform
 * @param {string[]} templates
 * @param  {Array<string | null | VNode>} exprs
 * @returns {VNode}
 */ function jsxTemplate(templates) {
    var vnode = createVNode(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        tpl: templates,
        exprs: [].slice.call(arguments, 1)
    });
    // Bypass render to string top level Fragment optimization
    vnode.key = vnode.__v;
    return vnode;
}
var JS_TO_CSS = {};
var CSS_REGEX = /[A-Z]/g;
/**
 * Serialize an HTML attribute to a string. This function is not
 * expected to be used directly, but rather through a precompile
 * JSX transform
 * @param {string} name The attribute name
 * @param {*} value The attribute value
 * @returns {string}
 */ function jsxAttr(name, value) {
    if (preact__WEBPACK_IMPORTED_MODULE_0__.options.attr) {
        var result = preact__WEBPACK_IMPORTED_MODULE_0__.options.attr(name, value);
        if (typeof result === 'string') return result;
    }
    if (name === 'ref' || name === 'key') return '';
    if (name === 'style' && typeof value === 'object') {
        var str = '';
        for(var prop in value){
            var val = value[prop];
            if (val != null && val !== '') {
                var _name = prop[0] == '-' ? prop : JS_TO_CSS[prop] || (JS_TO_CSS[prop] = prop.replace(CSS_REGEX, '-$&').toLowerCase());
                var suffix = ';';
                if (typeof val === 'number' && // Exclude custom-attributes
                !_name.startsWith('--') && !IS_NON_DIMENSIONAL.test(_name)) suffix = 'px;';
                str = str + _name + ':' + val + suffix;
            }
        }
        return name + '="' + str + '"';
    }
    if (value == null || value === false || typeof value === 'function' || typeof value === 'object') return '';
    else if (value === true) return name;
    return name + '="' + encodeEntities(value) + '"';
}
/**
 * Escape a dynamic child passed to `jsxTemplate`. This function
 * is not expected to be used directly, but rather through a
 * precompile JSX transform
 * @param {*} value
 * @returns {string | null | VNode | Array<string | null | VNode>}
 */ function jsxEscape(value) {
    if (value == null || typeof value === 'boolean' || typeof value === 'function') return null;
    if (typeof value === 'object') {
        // Check for VNode
        if (value.constructor === undefined) return value;
        if (isArray(value)) {
            for(var i = 0; i < value.length; i++)value[i] = jsxEscape(value[i]);
            return value;
        }
    }
    return encodeEntities('' + value);
}
 //# sourceMappingURL=jsxRuntime.module.js.map


}),
"(react:background)/./node_modules/react-router/dist/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AbortedDeferredError: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError),
  Await: () => (Await),
  MemoryRouter: () => (MemoryRouter),
  Navigate: () => (Navigate),
  NavigationType: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action),
  Outlet: () => (Outlet),
  Route: () => (Route),
  Router: () => (Router),
  RouterProvider: () => (RouterProvider),
  Routes: () => (Routes),
  UNSAFE_DataRouterContext: () => (DataRouterContext),
  UNSAFE_DataRouterStateContext: () => (DataRouterStateContext),
  UNSAFE_LocationContext: () => (LocationContext),
  UNSAFE_NavigationContext: () => (NavigationContext),
  UNSAFE_RouteContext: () => (RouteContext),
  UNSAFE_logV6DeprecationWarnings: () => (logV6DeprecationWarnings),
  UNSAFE_mapRouteProperties: () => (mapRouteProperties),
  UNSAFE_useRouteId: () => (useRouteId),
  UNSAFE_useRoutesImpl: () => (useRoutesImpl),
  createMemoryRouter: () => (createMemoryRouter),
  createPath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createPath),
  createRoutesFromChildren: () => (createRoutesFromChildren),
  createRoutesFromElements: () => (createRoutesFromChildren),
  defer: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.defer),
  generatePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.generatePath),
  isRouteErrorResponse: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse),
  json: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.json),
  matchPath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath),
  matchRoutes: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes),
  parsePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath),
  redirect: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirect),
  redirectDocument: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirectDocument),
  renderMatches: () => (renderMatches),
  replace: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.replace),
  resolvePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath),
  useActionData: () => (useActionData),
  useAsyncError: () => (useAsyncError),
  useAsyncValue: () => (useAsyncValue),
  useBlocker: () => (useBlocker),
  useHref: () => (useHref),
  useInRouterContext: () => (useInRouterContext),
  useLoaderData: () => (useLoaderData),
  useLocation: () => (useLocation),
  useMatch: () => (useMatch),
  useMatches: () => (useMatches),
  useNavigate: () => (useNavigate),
  useNavigation: () => (useNavigation),
  useNavigationType: () => (useNavigationType),
  useOutlet: () => (useOutlet),
  useOutletContext: () => (useOutletContext),
  useParams: () => (useParams),
  useResolvedPath: () => (useResolvedPath),
  useRevalidator: () => (useRevalidator),
  useRouteError: () => (useRouteError),
  useRouteLoaderData: () => (useRouteLoaderData),
  useRoutes: () => (useRoutes)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@remix-run/router/dist/router.js");
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 


function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) DataRouterContext.displayName = "DataRouter";
const DataRouterStateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) DataRouterStateContext.displayName = "DataRouterState";
const AwaitContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) AwaitContext.displayName = "Await";
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */ const NavigationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) NavigationContext.displayName = "Navigation";
const LocationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) LocationContext.displayName = "Location";
const RouteContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
});
if (true) RouteContext.displayName = "Route";
const RouteErrorContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) RouteErrorContext.displayName = "RouteError";
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/v6/hooks/use-href
 */ function useHref(to, _temp) {
    let { relative } = _temp === void 0 ? {} : _temp;
    !useInRouterContext() && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useHref() may be used only in the context of a <Router> component.") : 0);
    let { basename, navigator } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, {
        relative
    });
    let joinedPathname = pathname;
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([
        basename,
        pathname
    ]);
    return navigator.createHref({
        pathname: joinedPathname,
        search,
        hash
    });
}
/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/v6/hooks/use-in-router-context
 */ function useInRouterContext() {
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/v6/hooks/use-location
 */ function useLocation() {
    !useInRouterContext() && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useLocation() may be used only in the context of a <Router> component.") : 0);
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/v6/hooks/use-navigation-type
 */ function useNavigationType() {
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/v6/hooks/use-match
 */ function useMatch(pattern) {
    !useInRouterContext() && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useMatch() may be used only in the context of a <Router> component.") : 0);
    let { pathname } = useLocation();
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath)(pattern, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_decodePath)(pathname)), [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
    let isStatic = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static;
    if (!isStatic) // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb);
}
/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/v6/hooks/use-navigate
 */ function useNavigate() {
    let { isDataRoute } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
    !useInRouterContext() && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useNavigate() may be used only in the context of a <Router> component.") : 0);
    let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
    let { basename, future, navigator } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
    let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(to, options) {
        if (options === void 0) options = {};
         true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning);
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history (but only if we're not in a data router,
        // otherwise it'll prepend the basename inside of the router).
        // If this is a root navigation, then we navigate to the raw basename
        // which allows the basename to have full control over the presence of a
        // trailing slash on root links
        if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([
            basename,
            path.pathname
        ]);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
    ]);
    return navigate;
}
const OutletContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/v6/hooks/use-outlet-context
 */ function useOutletContext() {
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/v6/hooks/use-outlet
 */ function useOutlet(context) {
    let outlet = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;
    if (outlet) return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, {
        value: context
    }, outlet);
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/v6/hooks/use-params
 */ function useParams() {
    let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/v6/hooks/use-resolved-path
 */ function useResolvedPath(to, _temp2) {
    let { relative } = _temp2 === void 0 ? {} : _temp2;
    let { future } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/v6/hooks/use-routes
 */ function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
}
// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
    !useInRouterContext() && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useRoutes() may be used only in the context of a <Router> component.") : 0);
    let { navigator } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    let { matches: parentMatches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (true) {
        // You won't get a warning about 2 different <Routes> under a <Route>
        // without a trailing *, but this is a best-effort warning anyway since we
        // cannot even give the warning unless they land at the parent route.
        //
        // Example:
        //
        // <Routes>
        //   {/* This route path MUST end with /* because otherwise
        //       it will never match /blog/post/123 */}
        //   <Route path="blog" element={<Blog />} />
        //   <Route path="blog/feed" element={<BlogFeed />} />
        // </Routes>
        //
        // function Blog() {
        //   return (
        //     <Routes>
        //       <Route path="post/:id" element={<Post />} />
        //     </Routes>
        //   );
        // }
        let parentPath = parentRoute && parentRoute.path || "";
        warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : 0);
        location = parsedLocationArg;
    } else location = locationFromContext;
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
        // Determine the remaining pathname by removing the # of URL segments the
        // parentPathnameBase has, instead of removing based on character count.
        // This is because we can't guarantee that incoming/outgoing encodings/
        // decodings will match exactly.
        // We decode paths before matching on a per-segment basis with
        // decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
        // match what `window.location.pathname` would reflect.  Those don't 100%
        // align when it comes to encoded URI characters such as % and &.
        //
        // So we may end up with:
        //   pathname:           "/descendant/a%25b/match"
        //   parentPathnameBase: "/descendant/a%b"
        //
        // And the direct substring removal approach won't work :/
        let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        let segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes)(routes, {
        pathname: remainingPathname
    });
    if (true) {
         true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ");
         true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined || matches[matches.length - 1].route.lazy !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.");
    }
    let renderedMatches = _renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        })), parentMatches, dataRouterState, future);
    // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
        value: {
            location: _extends({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, location),
            navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop
        }
    }, renderedMatches);
    return renderedMatches;
}
function DefaultErrorComponent() {
    let error = useRouteError();
    let message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    let codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    let devInfo = null;
    if (true) {
        console.error("Error handled by React Router default ErrorBoundary:", error);
        devInfo = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
            style: codeStyles
        }, "ErrorBoundary"), " or", " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
            style: codeStyles
        }, "errorElement"), " prop on your route."));
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    static getDerivedStateFromProps(props, state) {
        // When we get into an error state, the user will likely click "back" to the
        // previous page that didn't have an error. Because this wraps the entire
        // application, that will have no effect--the error page continues to display.
        // This gives us a mechanism to recover from the error when the location changes.
        //
        // Whether we're in an error state or not, we update the location in state
        // so that when we are in an error state, it gets reset when a new location
        // comes in and the user recovers from the error.
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
            error: props.error,
            location: props.location,
            revalidation: props.revalidation
        };
        // If we're not changing locations, preserve the location but still surface
        // any new errors that may come through. We retain the existing error, we do
        // this because the error provided from the app state may be cleared without
        // the location changing.
        return {
            error: props.error !== undefined ? props.error : state.error,
            location: state.location,
            revalidation: props.revalidation || state.revalidation
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
        return this.state.error !== undefined ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
            value: this.props.routeContext
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
    }
}
function RenderedRoute(_ref) {
    let { routeContext, match, children } = _ref;
    let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
    // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
        value: routeContext
    }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
    var _dataRouterState;
    if (parentMatches === void 0) parentMatches = [];
    if (dataRouterState === void 0) dataRouterState = null;
    if (future === void 0) future = null;
    if (matches == null) {
        var _future;
        if (!dataRouterState) return null;
        if (dataRouterState.errors) // boundary.  Use the pre-matched (or shimmed) matches
        matches = dataRouterState.matches;
        else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) // router matches.  That means we're actively running `patchRoutesOnNavigation`
        // so we should render down the partial matches to the appropriate
        // `HydrateFallback`.  We only do this if `parentMatches` is empty so it
        // only impacts the root matches for `RouterProvider` and no descendant
        // `<Routes>`
        matches = dataRouterState.matches;
        else return null;
    }
    let renderedMatches = matches;
    // If we have data errors, trim matches to the highest error boundary
    let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
    if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m)=>m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== undefined);
        !(errorIndex >= 0) && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : 0);
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    // If we're in a partial hydration mode, detect if we need to render down to
    // a given HydrateFallback while we load the rest of the hydration data
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState && future && future.v7_partialHydration) for(let i = 0; i < renderedMatches.length; i++){
        let match = renderedMatches[i];
        // Track the deepest fallback up until the first route without data
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) fallbackIndex = i;
        if (match.route.id) {
            let { loaderData, errors } = dataRouterState;
            let needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors || errors[match.route.id] === undefined);
            if (match.route.lazy || needsToRunLoader) {
                // We found the first route that's not ready to render (waiting on
                // lazy, or has a loader that hasn't run yet).  Flag that we need to
                // render a fallback and render up until the appropriate fallback
                renderFallback = true;
                if (fallbackIndex >= 0) renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
                else renderedMatches = [
                    renderedMatches[0]
                ];
                break;
            }
        }
    }
    return renderedMatches.reduceRight((outlet, match, index)=>{
        // Only data routers handle errors/fallbacks
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
            error = errors && match.route.id ? errors[match.route.id] : undefined;
            errorElement = match.route.errorElement || defaultErrorElement;
            if (renderFallback) {
                if (fallbackIndex < 0 && index === 0) {
                    warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = null;
                } else if (fallbackIndex === index) {
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                }
            }
        }
        let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = ()=>{
            let children;
            if (error) children = errorElement;
            else if (shouldRenderHydrateFallback) children = hydrateFallbackElement;
            else if (match.route.Component) // ReactElement since it's identity changes with each new
            // React.createElement call.  We keep this so folks can use
            // `<Route Component={...}>` in `<Routes>` but generally `Component`
            // usage is only advised in `RouterProvider` when we can convert it to
            // `element` ahead of time.
            children = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
            else if (match.route.element) children = match.route.element;
            else children = outlet;
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute, {
                match: match,
                routeContext: {
                    outlet,
                    matches,
                    isDataRoute: dataRouterState != null
                },
                children: children
            });
        };
        // Only wrap in an error boundary within data router usages when we have an
        // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
        // an ancestor ErrorBoundary/errorElement
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches,
                isDataRoute: true
            }
        }) : getChildren();
    }, null);
}
var DataRouterHook = /*#__PURE__*/ function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
    return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/ function(DataRouterStateHook) {
    DataRouterStateHook["UseBlocker"] = "useBlocker";
    DataRouterStateHook["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook["UseActionData"] = "useActionData";
    DataRouterStateHook["UseRouteError"] = "useRouteError";
    DataRouterStateHook["UseNavigation"] = "useNavigation";
    DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook["UseMatches"] = "useMatches";
    DataRouterStateHook["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook["UseRouteId"] = "useRouteId";
    return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
    !ctx && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0);
    return ctx;
}
function useDataRouterState(hookName) {
    let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
    !state && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0);
    return state;
}
function useRouteContext(hookName) {
    let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    !route && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0);
    return route;
}
// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : 0);
    return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */ function useRouteId() {
    return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function useNavigation() {
    let state = useDataRouterState(DataRouterStateHook.UseNavigation);
    return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function useRevalidator() {
    let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
    let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            revalidate: dataRouterContext.router.revalidate,
            state: state.revalidation
        }), [
        dataRouterContext.router.revalidate,
        state.revalidation
    ]);
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */ function useMatches() {
    let { matches, loaderData } = useDataRouterState(DataRouterStateHook.UseMatches);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>matches.map((m)=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData)), [
        matches,
        loaderData
    ]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function useLoaderData() {
    let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */ function useRouteLoaderData(routeId) {
    let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */ function useActionData() {
    let state = useDataRouterState(DataRouterStateHook.UseActionData);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    return state.actionData ? state.actionData[routeId] : undefined;
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function useRouteError() {
    var _state$errors;
    let error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
    let state = useDataRouterState(DataRouterStateHook.UseRouteError);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
    // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error !== undefined) return error;
    // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */ function useAsyncValue() {
    let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
    return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor `<Await />` value
 */ function useAsyncError() {
    let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
    return value == null ? void 0 : value._error;
}
let blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function useBlocker(shouldBlock) {
    let { router, basename } = useDataRouterContext(DataRouterHook.UseBlocker);
    let state = useDataRouterState(DataRouterStateHook.UseBlocker);
    let [blockerKey, setBlockerKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
    let blockerFunction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((arg)=>{
        if (typeof shouldBlock !== "function") return !!shouldBlock;
        if (basename === "/") return shouldBlock(arg);
        // If they provided us a function and we've got an active basename, strip
        // it from the locations we expose to the user to match the behavior of
        // useLocation
        let { currentLocation, nextLocation, historyAction } = arg;
        return shouldBlock({
            currentLocation: _extends({}, currentLocation, {
                pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
            }),
            nextLocation: _extends({}, nextLocation, {
                pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
            }),
            historyAction
        });
    }, [
        basename,
        shouldBlock
    ]);
    // This effect is in charge of blocker key assignment and deletion (which is
    // tightly coupled to the key)
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        let key = String(++blockerId);
        setBlockerKey(key);
        return ()=>router.deleteBlocker(key);
    }, [
        router
    ]);
    // This effect handles assigning the blockerFunction.  This is to handle
    // unstable blocker function identities, and happens only after the prior
    // effect so we don't get an orphaned blockerFunction in the router with a
    // key of "".  Until then we just have the IDLE_BLOCKER.
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (blockerKey !== "") router.getBlocker(blockerKey, blockerFunction);
    }, [
        router,
        blockerKey,
        blockerFunction
    ]);
    // Prefer the blocker from `state` not `router.state` since DataRouterContext
    // is memoized so this ensures we update on blocker state updates
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.IDLE_BLOCKER;
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function useNavigateStable() {
    let { router } = useDataRouterContext(DataRouterHook.UseNavigateStable);
    let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
    let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(to, options) {
        if (options === void 0) options = {};
         true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning);
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") router.navigate(to);
        else router.navigate(to, _extends({
            fromRouteId: id
        }, options));
    }, [
        router,
        id
    ]);
    return navigate;
}
const alreadyWarned$1 = {};
function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned$1[key]) {
        alreadyWarned$1[key] = true;
         true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, message);
    }
}
const alreadyWarned = {};
function warnOnce(key, message) {
    if ( true && !alreadyWarned[message]) {
        alreadyWarned[message] = true;
        console.warn(message);
    }
}
const logDeprecation = (flag, msg, link)=>warnOnce(flag, "\u26A0\uFE0F React Router Future Flag Warning: " + msg + ". " + ("You can use the `" + flag + "` future flag to opt-in early. ") + ("For more information, see " + link + "."));
function logV6DeprecationWarnings(renderFuture, routerFuture) {
    if ((renderFuture == null ? void 0 : renderFuture.v7_startTransition) === undefined) logDeprecation("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition");
    if ((renderFuture == null ? void 0 : renderFuture.v7_relativeSplatPath) === undefined && (!routerFuture || routerFuture.v7_relativeSplatPath === undefined)) logDeprecation("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
    if (routerFuture) {
        if (routerFuture.v7_fetcherPersist === undefined) logDeprecation("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist");
        if (routerFuture.v7_normalizeFormMethod === undefined) logDeprecation("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod");
        if (routerFuture.v7_partialHydration === undefined) logDeprecation("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration");
        if (routerFuture.v7_skipActionErrorRevalidation === undefined) logDeprecation("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation");
    }
}
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function RouterProvider(_ref) {
    let { fallbackElement, router, future } = _ref;
    let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
    let { v7_startTransition } = future || {};
    let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState)=>{
        if (v7_startTransition && startTransitionImpl) startTransitionImpl(()=>setStateImpl(newState));
        else setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
         true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using `v7_partialHydration`, use a `HydrateFallback` component instead");
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            router,
            navigator,
            static: false,
            basename
        }), [
        router,
        navigator,
        basename
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>logV6DeprecationWarnings(future, router.future), [
        router,
        future
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, {
        value: state
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
    let { routes, future, state } = _ref2;
    return useRoutesImpl(routes, undefined, state, future);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/v6/router-components/memory-router
 */ function MemoryRouter(_ref3) {
    let { basename, children, initialEntries, initialIndex, future } = _ref3;
    let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    if (historyRef.current == null) historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
        initialEntries,
        initialIndex,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition } = future || {};
    let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState)=>{
        v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>logV6DeprecationWarnings(future), [
        future
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/v6/components/navigate
 */ function Navigate(_ref4) {
    let { to, replace, state, relative } = _ref4;
    !useInRouterContext() && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "<Navigate> may be used only in the context of a <Router> component.") : 0);
    let { future, static: isStatic } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
     true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let navigate = useNavigate();
    // Resolve the path outside of the effect so that when effects run twice in
    // StrictMode they navigate to the same place
    let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
    let jsonPath = JSON.stringify(path);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>navigate(JSON.parse(jsonPath), {
            replace,
            state,
            relative
        }), [
        navigate,
        jsonPath,
        relative,
        replace,
        state
    ]);
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/v6/components/outlet
 */ function Outlet(props) {
    return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/v6/components/route
 */ function Route(_props) {
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : 0;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/v6/router-components/router
 */ function Router(_ref5) {
    let { basename: basenameProp = "/", children = null, location: locationProp, navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop, navigator, static: staticProp = false, future } = _ref5;
    !!useInRouterContext() && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : 0);
    // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            basename,
            navigator,
            static: staticProp,
            future: _extends({
                v7_relativeSplatPath: false
            }, future)
        }), [
        basename,
        future,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationProp);
    let { pathname = "/", search = "", hash = "", state = null, key = "default" } = locationProp;
    let locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{
        let trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(pathname, basename);
        if (trailingPathname == null) return null;
        return {
            location: {
                pathname: trailingPathname,
                search,
                hash,
                state,
                key
            },
            navigationType
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
     true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.");
    if (locationContext == null) return null;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
        children: children,
        value: locationContext
    }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/v6/components/routes
 */ function Routes(_ref6) {
    let { children, location } = _ref6;
    return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function Await(_ref7) {
    let { children, errorElement, resolve } = _ref7;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
    return AwaitRenderStatus;
}(AwaitRenderStatus || {});
const neverSettledPromise = new Promise(()=>{});
class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("<Await> caught the following error during render", error, errorInfo);
    }
    render() {
        let { children, errorElement, resolve } = this.props;
        let promise = null;
        let status = AwaitRenderStatus.pending;
        if (!(resolve instanceof Promise)) {
            // Didn't get a promise - provide as a resolved promise
            status = AwaitRenderStatus.success;
            promise = Promise.resolve();
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_data", {
                get: ()=>resolve
            });
        } else if (this.state.error) {
            // Caught a render error, provide it as a rejected promise
            status = AwaitRenderStatus.error;
            let renderError = this.state.error;
            promise = Promise.reject().catch(()=>{}); // Avoid unhandled rejection warnings
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_error", {
                get: ()=>renderError
            });
        } else if (resolve._tracked) {
            // Already tracked promise - check contents
            promise = resolve;
            status = "_error" in promise ? AwaitRenderStatus.error : "_data" in promise ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
        } else {
            // Raw (untracked) promise - track it
            status = AwaitRenderStatus.pending;
            Object.defineProperty(resolve, "_tracked", {
                get: ()=>true
            });
            promise = resolve.then((data)=>Object.defineProperty(resolve, "_data", {
                    get: ()=>data
                }), (error)=>Object.defineProperty(resolve, "_error", {
                    get: ()=>error
                }));
        }
        if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError) throw neverSettledPromise;
        if (status === AwaitRenderStatus.error && !errorElement) throw promise._error;
        if (status === AwaitRenderStatus.error) return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
            value: promise,
            children: errorElement
        });
        if (status === AwaitRenderStatus.success) return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
            value: promise,
            children: children
        });
        // Throw to the suspense boundary
        throw promise;
    }
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
    }
}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */ function ResolveAwait(_ref8) {
    let { children } = _ref8;
    let data = useAsyncValue();
    let toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, toRender);
}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/v6/utils/create-routes-from-children
 */ function createRoutesFromChildren(children, parentPath) {
    if (parentPath === void 0) parentPath = [];
    let routes = [];
    react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (element, index)=>{
        if (!/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) // conditionals in their route config.
        return;
        let treePath = [
            ...parentPath,
            index
        ];
        if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
            return;
        }
        !(element.type === Route) && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : 0);
        !(!element.props.index || !element.props.children) && ( true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "An index route cannot have child routes.") : 0);
        let route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) route.children = createRoutesFromChildren(element.props.children, treePath);
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function renderMatches(matches) {
    return _renderMatches(matches);
}
function mapRouteProperties(route) {
    let updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) {
        if (true) {
            if (route.element)  true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - `Component` will be used.");
        }
        Object.assign(updates, {
            element: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.Component),
            Component: undefined
        });
    }
    if (route.HydrateFallback) {
        if (true) {
            if (route.hydrateFallbackElement)  true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.");
        }
        Object.assign(updates, {
            hydrateFallbackElement: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.HydrateFallback),
            HydrateFallback: undefined
        });
    }
    if (route.ErrorBoundary) {
        if (true) {
            if (route.errorElement)  true && (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.");
        }
        Object.assign(updates, {
            errorElement: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.ErrorBoundary),
            ErrorBoundary: undefined
        });
    }
    return updates;
}
function createMemoryRouter(routes, opts) {
    return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes,
        mapRouteProperties,
        dataStrategy: opts == null ? void 0 : opts.dataStrategy,
        patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation
    }).initialize();
}
 //# sourceMappingURL=index.js.map


}),
"(react:background)/./src/services/auth.service.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthService: () => (AuthService),
  authService: () => (authService)
});
/* ESM import */var _base_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./src/services/base.service.ts");
/* ESM import */var _utils_stroage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./src/utils/stroage.ts");
// src/services/auth.service.ts
// นำเข้าเฉพาะที่จำเป็น


const AUTH_API_PATH = '/auth';
class AuthService extends _base_service_js__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    async getAccessToken() {
        return await _utils_stroage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(this.TOKEN_KEY);
    }
    async setAccessToken(token) {
        debugger;
        await _utils_stroage_js__WEBPACK_IMPORTED_MODULE_1__["default"].setItem(this.TOKEN_KEY, token);
    }
    async removeAccessToken() {
        await _utils_stroage_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeItem(this.TOKEN_KEY);
    }
    // เมธอด Login จะคืนค่าเป็น Promise<AuthResponse>
    async login(form) {
        const res = await this.fetchApi(`${AUTH_API_PATH}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        if (res && res.accessToken) await this.setAccessToken(res.accessToken);
        else console.warn("[AuthService] Login response did not contain accessToken:", res);
        return res;
    }
    // เมธอด Register จะคืนค่าเป็น Promise<User>
    async register(form) {
        return await this.fetchApi(`${AUTH_API_PATH}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
    }
    // เมธอด refreshToken จะคืนค่าเป็น Promise<AuthResponse>
    async refreshToken() {
        const res = await this.fetchApi(`${AUTH_API_PATH}/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res && res.accessToken) await this.setAccessToken(res.accessToken);
        return res;
    }
    // เมธอด Logout จะคืนค่าเป็น Promise<void>
    async logout() {
        await this.fetchApi(`${AUTH_API_PATH}/logout`, {
            method: 'POST'
        });
        await this.removeAccessToken(); // ลบ token หลัง logout สำเร็จ
    }
    async isLoggedIn() {
        const token = await this.getAccessToken();
        return !!token;
    }
}
const authService = new AuthService();


}),
"(react:background)/./src/services/base.service.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BaseService: () => (BaseService)
});
/* ESM import */var _utils_stroage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./src/utils/stroage.ts");
// src/services/base.service.ts

class BaseService {
    async fetchApi(path, options) {
        const url = `${this.API_BASE_URL}${path}`;
        let headers = (options === null || options === void 0 ? void 0 : options.headers) || {};
        const isAuthRequest = path.startsWith('/auth');
        // Attach Access Token
        if (!isAuthRequest || path === '/auth/refresh') {
            const accessToken = await _utils_stroage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getItem(this.TOKEN_KEY);
            debugger;
            if (accessToken) headers = {
                ...headers,
                'Authorization': `Bearer ${accessToken}`
            };
        }
        try {
            const response = await fetch(url, {
                ...options,
                headers: headers,
                credentials: 'include'
            });
            // --- DEBUG: ตรวจสอบสถานะและ Headers ที่ได้รับ ---
            console.log(`[fetchApi] Response for ${url}: status=${response.status}, ok=${response.ok}`);
            console.log(`[fetchApi] Response Headers for ${url}:`);
            response.headers.forEach((value, name)=>{
                console.log(`  ${name}: ${value}`);
            });
            // ตรวจสอบ Error Response
            if (!response.ok) {
                let errorData = {};
                try {
                    const errorText = await response.text();
                    console.error(`[fetchApi] Error Response Body (Text):`, errorText);
                    // พยายาม parse เป็น JSON ถ้าเป็นไปได้
                    if (errorText.startsWith('{') && errorText.endsWith('}')) errorData = JSON.parse(errorText);
                } catch (e) {
                    console.error(`[fetchApi] Error parsing error response body or not JSON:`, e);
                }
                const errorDetail = {
                    message: errorData.message || `HTTP error! Status: ${response.status} for ${url}`,
                    statusCode: response.status,
                    errors: errorData.errors || undefined
                };
                throw new Error(JSON.stringify(errorDetail));
            }
            // --- จัดการ Success Response Body ---
            const contentType = response.headers.get("content-type");
            console.log(`[fetchApi] Content-Type for ${url}: ${contentType}`);
            if (response.status === 204) return null;
            else if (contentType && contentType.includes("application/json")) return await response.json();
            else {
                // หาก Content-Type เป็น null หรือไม่ใช่ application/json
                // ให้พยายามอ่านเป็นข้อความก่อน แล้วลอง parse JSON ถ้าทำได้
                const textBody = await response.text();
                console.log(`[fetchApi] Attempting to parse non-JSON or null Content-Type body as JSON:`, textBody);
                try {
                    // ตรวจสอบว่า Body เป็น JSON ที่ถูกต้องหรือไม่
                    if (textBody.startsWith('{') && textBody.endsWith('}')) return JSON.parse(textBody);
                } catch (e) {
                    console.warn(`[fetchApi] Body is not valid JSON, returning as text for ${url}:`, e);
                }
                // ถ้าไม่ใช่ JSON หรือ parse ไม่ได้ ให้คืนค่าเป็น text (หรือ null ถ้า T เป็น void)
                return textBody;
            }
        } catch (error) {
            console.error(`[BaseService] Global Catch Error for ${url}:`, error);
            if (error instanceof Error && typeof error.message === 'string' && error.message.startsWith('{')) try {
                throw JSON.parse(error.message);
            } catch (parseError) {
                throw {
                    message: "An unexpected error occurred during error parsing.",
                    originalError: error
                };
            }
            throw {
                message: error.message || "Network error or unhandled fetch error.",
                originalError: error
            };
        }
    }
    constructor(){
        this.API_BASE_URL = 'http://localhost:48080/api';
        this.TOKEN_KEY = 'access_token';
    }
}


}),
"(react:background)/./src/services/user.service.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UserService: () => (UserService),
  userService: () => (userService)
});
/* ESM import */var _base_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./src/services/base.service.ts");
/* ESM import */var _utils_stroage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./src/utils/stroage.ts");
// src/services/user.service.ts
// นำเข้าเฉพาะที่จำเป็น


const USER_API_PATH = '/v1/users';
const USER_DATA_KEY = 'userData';
class UserService extends _base_service_js__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    async setUser(userData) {
        if (!userData) {
            await this.removeUser();
            return;
        }
        await _utils_stroage_js__WEBPACK_IMPORTED_MODULE_1__["default"].setItem(USER_DATA_KEY, JSON.stringify(userData));
    }
    async getUser() {
        const item = await _utils_stroage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(USER_DATA_KEY);
        if (!item) return null;
        try {
            return JSON.parse(item);
        } catch (e) {
            console.error('Error parsing user data from LynxStorage', e);
            await this.removeUser();
            return null;
        }
    }
    async removeUser() {
        await _utils_stroage_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeItem(USER_DATA_KEY);
    }
    // เมธอด fetchUser จะคืนค่าเป็น Promise<User | null>
    async fetchUser() {
        try {
            const user = await this.fetchApi(`${USER_API_PATH}/me`, {
                method: 'GET'
            });
            await this.setUser(user);
            return user;
        } catch (err) {
            console.error('Failed to fetch user:', err);
            await this.removeUser();
            // โยน error ออกไปเพื่อให้ Component ที่เรียกใช้จัดการ
            throw err;
        }
    }
}
const userService = new UserService();


}),
"(react:background)/./src/utils/stroage.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
// src/utils/storage.ts
// ** สิ่งสำคัญ: คุณต้องแน่ใจว่า NativeLocalStorageModule ถูก expose โดย Lynx **
// ** และมีเมธอด getStorageItem, setStorageItem, clearStorage ตามที่เรียกใช้ **
// ** การประกาศ NativeModules อาจจะขึ้นอยู่กับ global scope ของ Lynx **
const LynxStorage = {
    // getItem จะคืนค่า Promise<string | null>
    getItem: async (key)=>{
        return new Promise((resolve, reject)=>{
            try {
                // เรียกใช้ Native Module ที่เป็น Synchronous
                const value = NativeModules.NativeLocalStorageModule.getStorageItem(key);
                console.log(`[Storage] getItem('${key}'):`, value);
                debugger;
                resolve(value);
            } catch (error) {
                console.error(`[Storage] Failed to get item '${key}':`, error);
                reject(error);
            }
        });
    },
    // setItem จะคืนค่า Promise<void>
    setItem: async (key, value)=>{
        return new Promise((resolve, reject)=>{
            try {
                // เรียกใช้ Native Module ที่เป็น Synchronous
                debugger;
                NativeModules.NativeLocalStorageModule.setStorageItem(key, value);
                console.log(`[Storage] setItem('${key}'): '${value}'`);
                resolve();
            } catch (error) {
                console.error(`[Storage] Failed to set item '${key}':`, error);
                reject(error);
            }
        });
    },
    // removeItem จะคืนค่า Promise<void>
    removeItem: async (key)=>{
        return new Promise((resolve, reject)=>{
            try {
                // เรียกใช้ Native Module ที่เป็น Synchronous
                NativeModules.NativeLocalStorageModule.clearStorage(); // หรือ removeItem(key) ถ้ามี
                console.log(`[Storage] removeItem('${key}'): Cleared all storage (assuming clearStorage for now)`);
                // หาก NativeLocalStorageModule.clearStorage() ลบทั้งหมด
                // และคุณต้องการ removeItem แค่บางอัน
                // คุณอาจจะต้องเปลี่ยน Native Module ให้มีเมธอด removeItem(key) โดยเฉพาะ
                resolve();
            } catch (error) {
                console.error(`[Storage] Failed to remove item '${key}':`, error);
                reject(error);
            }
        });
    }
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LynxStorage);


}),
"(react:background)/./src/App.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  App: () => (App)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./node_modules/react-router/dist/index.js");
/* ESM import */var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/App.css");
/* ESM import */var _assets_lynx_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./src/assets/lynx-logo.png");
/* ESM import */var _assets_react_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./src/assets/react-logo.png");
/* ESM import */var _components_Button_button_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./src/components/Button/button.component.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");







const __snapshot_835da_a09d9_3 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_835da_a09d9_3", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetClasses(el, "Logo--react");
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[0], "src", ctx.__values[0]);
    }
], null, undefined, globDynamicComponentEntry);
const __snapshot_835da_a09d9_4 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_835da_a09d9_4", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetClasses(el, "Logo--lynx");
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[0], "src", ctx.__values[0]);
    }
], null, undefined, globDynamicComponentEntry);
const __snapshot_835da_a09d9_2 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_835da_a09d9_2", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "Logo");
    return [
        el
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_835da_a09d9_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_835da_a09d9_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "Background");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "App");
    __AppendElement(el, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "Banner");
    __AppendElement(el2, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el3, el4);
    const el5 = __CreateText(pageId);
    __SetClasses(el5, "Title");
    __AppendElement(el3, el5);
    const el6 = __CreateRawText("React");
    __AppendElement(el5, el6);
    const el7 = __CreateText(pageId);
    __SetClasses(el7, "Subtitle");
    __AppendElement(el3, el7);
    const el8 = __CreateRawText("on Lynx");
    __AppendElement(el7, el8);
    const el9 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el9);
    const el10 = __CreateView(pageId);
    __SetInlineStyles(el10, "flex:1");
    __AppendElement(el2, el10);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10
    ];
}, null, [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        9
    ]
], undefined, globDynamicComponentEntry);
function App(props) {
    const [alterLogo, setAlterLogo] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const nav = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var _props_onMounted;
        console.info('Hello, ReactLynx');
        (_props_onMounted = props.onMounted) === null || _props_onMounted === void 0 ? void 0 : _props_onMounted.call(props);
    }, []);
    const onTap = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setAlterLogo(!alterLogo);
    }, [
        alterLogo
    ]);
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_835da_a09d9_1, {
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_835da_a09d9_2, {
                values: [
                    onTap
                ],
                children: alterLogo ? /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_835da_a09d9_3, {
                    values: [
                        _assets_react_logo_png__WEBPACK_IMPORTED_MODULE_4__
                    ]
                }, void 0, false, {
                    fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/App.tsx",
                    lineNumber: 31,
                    columnNumber: 31
                }, this) : /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_835da_a09d9_4, {
                    values: [
                        _assets_lynx_logo_png__WEBPACK_IMPORTED_MODULE_3__
                    ]
                }, void 0, false, {
                    fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/App.tsx",
                    lineNumber: 32,
                    columnNumber: 31
                }, this)
            }, void 0, false, {
                fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/App.tsx",
                lineNumber: 29,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: [
                    /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_button_component_js__WEBPACK_IMPORTED_MODULE_5__.Button, {
                        onClick: ()=>nav('/home'),
                        children: "Navigate to Home"
                    }, void 0, false, {
                        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/App.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_button_component_js__WEBPACK_IMPORTED_MODULE_5__.Button, {
                        onClick: ()=>nav('/product'),
                        children: "Navigate to Product"
                    }, void 0, false, {
                        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/App.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_button_component_js__WEBPACK_IMPORTED_MODULE_5__.Button, {
                        onClick: ()=>nav('/counter'),
                        children: "Navigate to Counter"
                    }, void 0, false, {
                        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/App.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_button_component_js__WEBPACK_IMPORTED_MODULE_5__.Button, {
                        onClick: ()=>nav('/login'),
                        children: "Navigate to Login"
                    }, void 0, false, {
                        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/App.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, void 0, this)
        ]
    }, void 0, true, {
        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/App.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/components/Button/button.component.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Button: () => (Button)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./src/components/Button/button.component.scss");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");


const __snapshot_12971_efcbe_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_12971_efcbe_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "button-text");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry);
function Button({ onClick, children, className }) {
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_12971_efcbe_1, {
        values: [
            `button-component ${className || ''}`,
            onClick
        ],
        children: children
    }, void 0, false, {
        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/components/Button/button.component.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/components/Container/container.component.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./src/App.css");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");


const __snapshot_05c4b_48efc_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_05c4b_48efc_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "mt-50");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const Container = ({ children })=>{
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_05c4b_48efc_1, {
        children: children
    }, void 0, false, {
        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/components/Container/container.component.tsx",
        lineNumber: 4,
        columnNumber: 12
    }, undefined);
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/components/ToastMessage/toastMessage.component.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ToastProvider: () => (ToastProvider),
  useToast: () => (useToast)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _toastMessages_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/components/ToastMessage/toastMessages.component.scss");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");


 // สไตล์สำหรับ ToastMessages
const ToastContext = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
// Hook สำหรับใช้ใน Components อื่นๆ เพื่อส่งข้อความ Toast
const useToast = ()=>{
    const context = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ToastContext);
    if (context === undefined) throw new Error('useToast must be used within a ToastProvider');
    return context;
};
const __snapshot_c0a76_399e3_3 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_c0a76_399e3_3", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "toast-summary");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_c0a76_399e3_4 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_c0a76_399e3_4", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "toast-detail");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_c0a76_399e3_2 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_c0a76_399e3_2", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    }
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_c0a76_399e3_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_c0a76_399e3_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "toast-container");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
function ToastProvider({ children }) {
    const [toasts, setToasts] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Function สำหรับเพิ่ม Toast Message
    const addToast = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((message)=>{
        const newToast = {
            ...message,
            id: Math.random().toString(36).substring(2, 9),
            duration: message.duration || 3000
        };
        setToasts((prevToasts)=>[
                ...prevToasts,
                newToast
            ]);
    }, []);
    // Effect สำหรับจัดการการลบ Toast โดยอัตโนมัติ
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (toasts.length > 0) {
            const timer = setTimeout(()=>{
                // ลบ Toast ตัวแรกออกหลังจาก duration ที่กำหนด
                setToasts((prevToasts)=>prevToasts.slice(1));
            }, toasts[0].duration); // ใช้ duration ของ Toast ตัวแรกที่กำลังแสดง
            return ()=>clearTimeout(timer); // Clear timer เมื่อ Component unmount หรือ toasts เปลี่ยน
        }
    }, [
        toasts
    ]); // Re-run effect เมื่อ toasts array เปลี่ยน
    // Context Value
    const contextValue = {
        addToast
    };
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToastContext.Provider, {
        value: contextValue,
        children: [
            children,
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_c0a76_399e3_1, {
                children: toasts.map((toast)=>/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_c0a76_399e3_2, {
                        values: [
                            `toast-item toast-${toast.severity}`
                        ],
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_c0a76_399e3_3, {
                                children: toast.summary
                            }, void 0, false, {
                                fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/components/ToastMessage/toastMessage.component.tsx",
                                lineNumber: 67,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: toast.detail && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_c0a76_399e3_4, {
                                    children: toast.detail
                                }, void 0, false, {
                                    fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/components/ToastMessage/toastMessage.component.tsx",
                                    lineNumber: 68,
                                    columnNumber: 42
                                }, this)
                            }, void 0, false, void 0, this)
                        ]
                    }, toast.id, true, {
                        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/components/ToastMessage/toastMessage.component.tsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/components/ToastMessage/toastMessage.component.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/components/ToastMessage/toastMessage.component.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
}


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/components/Wrapper/wrapper.component.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./src/App.css");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");


const __snapshot_a9709_fcd20_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_a9709_fcd20_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "wrapper");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const Wrapper = ({ children })=>{
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_a9709_fcd20_1, {
        children: children
    }, void 0, false, {
        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/components/Wrapper/wrapper.component.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, undefined);
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/index.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:background)/./node_modules/react-router/dist/index.js");
/* ESM import */var _App_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/App.tsx");
/* ESM import */var _screens_home_home_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./src/screens/home/home.tsx");
/* ESM import */var _screens_product_product_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./src/screens/product/product.tsx");
/* ESM import */var _screens_counter_counter_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./src/screens/counter/counter.tsx");
/* ESM import */var _screens_login_login_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./src/screens/login/login.tsx");
/* ESM import */var _components_ToastMessage_toastMessage_component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./src/components/ToastMessage/toastMessage.component.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");









_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.root.render(/*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_8__.MemoryRouter, {
    children: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToastMessage_toastMessage_component_js__WEBPACK_IMPORTED_MODULE_7__.ToastProvider, {
        children: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_8__.Routes, {
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_8__.Route, {
                    path: "/",
                    element: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App_tsx__WEBPACK_IMPORTED_MODULE_2__.App, {}, void 0, false, {
                        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
                        lineNumber: 14,
                        columnNumber: 38
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
                    lineNumber: 14,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_8__.Route, {
                    path: "/home",
                    element: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_screens_home_home_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
                        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
                        lineNumber: 15,
                        columnNumber: 42
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
                    lineNumber: 15,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_8__.Route, {
                    path: "/product",
                    element: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_screens_product_product_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
                        lineNumber: 16,
                        columnNumber: 45
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
                    lineNumber: 16,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_8__.Route, {
                    path: "/counter",
                    element: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_screens_counter_counter_tsx__WEBPACK_IMPORTED_MODULE_5__.Counter, {}, void 0, false, {
                        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
                        lineNumber: 17,
                        columnNumber: 45
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
                    lineNumber: 17,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_8__.Route, {
                    path: "/login",
                    element: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_screens_login_login_js__WEBPACK_IMPORTED_MODULE_6__.LoginScreen, {}, void 0, false, {
                        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
                        lineNumber: 18,
                        columnNumber: 43
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
                    lineNumber: 18,
                    columnNumber: 13
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, undefined)
}, void 0, false, {
    fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/index.tsx",
    lineNumber: 11,
    columnNumber: 5
}, undefined));
if (true) module.hot.accept();


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/screens/counter/counter.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Counter: () => (Counter)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _counter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./src/screens/counter/counter.scss");
/* ESM import */var _components_Wrapper_wrapper_component_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/components/Wrapper/wrapper.component.tsx");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/react-router/dist/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _components_Button_button_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./src/components/Button/button.component.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");






const __snapshot_5e3cc_5167e_2 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5e3cc_5167e_2", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "counter");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "title");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Our counter app");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "content");
    __AppendElement(el, el3);
    const el4 = __CreateView(pageId);
    __SetClasses(el4, "counter-btn");
    __AppendElement(el3, el4);
    const el5 = __CreateText(pageId);
    __SetClasses(el5, "title");
    __AppendElement(el4, el5);
    const el6 = __CreateRawText("-");
    __AppendElement(el5, el6);
    const el7 = __CreateText(pageId);
    __SetClasses(el7, "cnt-value");
    __AppendElement(el3, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "counter-btn");
    __AppendElement(el3, el8);
    const el9 = __CreateText(pageId);
    __SetClasses(el9, "title");
    __AppendElement(el8, el9);
    const el10 = __CreateRawText("+");
    __AppendElement(el9, el10);
    const el11 = __CreateView(pageId);
    __SetClasses(el11, "reset-btn");
    __AppendElement(el, el11);
    const el12 = __CreateText(pageId);
    __AppendElement(el11, el12);
    const el13 = __CreateRawText("Reset Count");
    __AppendElement(el12, el13);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 4, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 8, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 12, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        7
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_5e3cc_5167e_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5e3cc_5167e_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "app");
    return [
        el
    ];
}, null, (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
function Counter() {
    const nav = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    const [count, setCount] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const addCnt = ()=>{
        setCount(count + 1);
    };
    const diffCnt = ()=>{
        console.log(count);
        if (count === 0) {
            setCount(0);
            return;
        }
        setCount(count - 1);
    };
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5e3cc_5167e_1, {
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper_wrapper_component_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
                children: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5e3cc_5167e_2, {
                    values: [
                        diffCnt,
                        addCnt,
                        ()=>setCount(0)
                    ],
                    children: count
                }, void 0, false, {
                    fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/counter/counter.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/counter/counter.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_button_component_js__WEBPACK_IMPORTED_MODULE_4__.Button, {
                onClick: ()=>nav('/'),
                children: "Back"
            }, void 0, false, {
                fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/counter/counter.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, false, {
        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/counter/counter.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/screens/home/home.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./node_modules/react-router/dist/index.js");
/* ESM import */var _components_Container_container_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./src/components/Container/container.component.tsx");
/* ESM import */var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/App.css");
/* ESM import */var _assets_close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./src/assets/close.png");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");






const __snapshot_348a2_70dbb_2 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_348a2_70dbb_2", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetClasses(el, "closeIcon");
    return [
        el
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[0], "src", ctx.__values[1]);
    }
], null, undefined, globDynamicComponentEntry);
const __snapshot_348a2_70dbb_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_348a2_70dbb_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "Title");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Home");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "inputView");
    __AppendElement(el, el3);
    const el4 = __CreateElement("input", pageId);
    __SetClasses(el4, "inputBox");
    __SetAttribute(el4, "placeholder", "Search products here...");
    __AppendElement(el3, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el3, el5);
    const el6 = __CreateText(pageId);
    __AppendElement(el, el6);
    const el7 = __CreateRawText("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae modi odit praesentium? Amet asperiores enim fugiat illo iusto optio quae quia quidem, repellat sit tenetur vel. Autem eius similique unde.");
    __AppendElement(el6, el7);
    const el8 = __CreateText(pageId);
    __SetClasses(el8, "Subtitle");
    __AppendElement(el, el8);
    const el9 = __CreateRawText("Back");
    __AppendElement(el8, el9);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 4, "bindEvent", "input", ''),
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[4], "value", ctx.__values[1]);
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 8, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        5
    ]
], undefined, globDynamicComponentEntry);
const Home = ()=>{
    const nav = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    const [search, setSearch] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const handleInput = (event)=>{
        setSearch(event.detail.value);
    };
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container_container_component_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_348a2_70dbb_1, {
            values: [
                handleInput,
                search,
                ()=>nav('/')
            ],
            children: search && /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_348a2_70dbb_2, {
                values: [
                    ()=>setSearch(""),
                    _assets_close_png__WEBPACK_IMPORTED_MODULE_3__
                ]
            }, void 0, false, {
                fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/home/home.tsx",
                lineNumber: 27,
                columnNumber: 25
            }, undefined)
        }, void 0, false, {
            fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/home/home.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/home/home.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, undefined);
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/screens/login/login.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LoginScreen: () => (LoginScreen)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var _lynx_js_react_runtime_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/components/lib/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _login_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./src/screens/login/login.scss");
/* ESM import */var _components_ToastMessage_toastMessage_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:background)/./src/components/ToastMessage/toastMessage.component.tsx");
/* ESM import */var _components_Button_button_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:background)/./src/components/Button/button.component.tsx");
/* ESM import */var _services_auth_service_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:background)/./src/services/auth.service.ts");
/* ESM import */var _services_user_service_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:background)/./src/services/user.service.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");








const __snapshot_e061f_043c1_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_e061f_043c1_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "login-container");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "login-title");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Welcome Back!");
    __AppendElement(el1, el2);
    const el3 = __CreateText(pageId);
    __SetClasses(el3, "login-subtitle");
    __AppendElement(el, el3);
    const el4 = __CreateRawText("Please log in to continue");
    __AppendElement(el3, el4);
    const el5 = __CreateView(pageId);
    __SetClasses(el5, "login-form");
    __AppendElement(el, el5);
    const el6 = __CreateElement("input", pageId);
    __SetClasses(el6, "login-input");
    __SetAttribute(el6, "placeholder", "Username");
    __AppendElement(el5, el6);
    const el7 = __CreateElement("input", pageId);
    __SetClasses(el7, "login-input");
    __SetAttribute(el7, "placeholder", "Password");
    __SetAttribute(el7, "type", "password");
    __AppendElement(el5, el7);
    const el8 = __CreateWrapperElement(pageId);
    __AppendElement(el5, el8);
    const el9 = __CreateView(pageId);
    __SetClasses(el9, "login-links");
    __AppendElement(el, el9);
    const el10 = __CreateText(pageId);
    __SetClasses(el10, "login-link-text");
    __AppendElement(el9, el10);
    const el11 = __CreateRawText("Forgot Password?");
    __AppendElement(el10, el11);
    const el12 = __CreateText(pageId);
    __SetClasses(el12, "login-link-text");
    __AppendElement(el9, el12);
    const el13 = __CreateRawText("Don't have an account? Sign Up");
    __AppendElement(el12, el13);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[6], "value", ctx.__values[0]);
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 6, "bindEvent", "input", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 7, "bindEvent", "input", ''),
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[7], "value", ctx.__values[3]);
    }
], [
    [
        (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        8
    ]
], undefined, globDynamicComponentEntry);
function LoginScreen() {
    const [formValues, setFormValues] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        email: '',
        password: ''
    });
    const [loading, setLoading] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // <<-- เรียกใช้ useToast Hook ที่นี่ -->>
    const { addToast } = (0,_components_ToastMessage_toastMessage_component_js__WEBPACK_IMPORTED_MODULE_4__.useToast)();
    /*const handleInputChange = useCallback((field: keyof LoginRequest, value: string) => {
        debugger;
        setFormValues((prev: any) => ({ ...prev, [field]: value }));
    }, []);*/ const handleInputUserName = (event)=>{
        formValues.email = event.detail.value;
        console.log(formValues.email);
        setFormValues(formValues);
    };
    const handleInputPassword = (event)=>{
        formValues.password = event.detail.value;
        console.log(formValues.password);
        setFormValues(formValues);
    };
    const handleLogin = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        setLoading(true);
        if (!formValues.email || !formValues.password) {
            addToast({
                severity: 'warn',
                summary: 'Input Required',
                detail: 'Please fill in all fields.'
            });
            setLoading(false);
            return;
        }
        try {
            // ใช้ await เพื่อรอ Promise จาก authService.login
            const authResponse = await _services_auth_service_js__WEBPACK_IMPORTED_MODULE_6__.authService.login(formValues);
            console.log('Login successful, AuthResponse:', authResponse);
            // เมื่อ Login สำเร็จ ให้ fetch ข้อมูลผู้ใช้
            debugger;
            const userData = await _services_user_service_js__WEBPACK_IMPORTED_MODULE_7__.userService.fetchUser();
            console.log('User data fetched:', userData);
            if (userData) addToast({
                severity: 'success',
                summary: 'Login Success',
                detail: `Welcome, ${userData.email || 'User'}!`
            });
            else addToast({
                severity: 'warn',
                summary: 'Login Success',
                detail: 'But user data could not be retrieved.'
            });
        } catch (err) {
            console.error('Login or fetchUser failed:', err);
            let errorMessage = 'An unexpected error occurred during login.';
            if (err && typeof err === 'object' && err.message) try {
                const parsedError = JSON.parse(err.message);
                errorMessage = parsedError.message || errorMessage;
            // สามารถใช้ parsedError.statusCode หรือ parsedError.errors ได้
            } catch (parseError) {
                errorMessage = err.message; // ถ้า parse ไม่ได้ ก็ใช้ message เดิม
            }
            addToast({
                severity: 'error',
                summary: 'Login Failed',
                detail: errorMessage
            });
        } finally{
            setLoading(false);
        }
    }, [
        formValues,
        addToast
    ]);
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lynx_js_react_runtime_components__WEBPACK_IMPORTED_MODULE_1__.Page, {
        children: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_e061f_043c1_1, {
            values: [
                formValues.email,
                handleInputUserName,
                handleInputPassword,
                formValues.password
            ],
            children: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_button_component_js__WEBPACK_IMPORTED_MODULE_5__.Button, {
                className: "login-submit-button",
                onClick: handleLogin,
                children: loading ? 'Logging in...' : 'Log In'
            }, void 0, false, {
                fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/login/login.tsx",
                lineNumber: 111,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/login/login.tsx",
            lineNumber: 89,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/login/login.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/screens/product/product.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var _lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/jsx-dev-runtime/index.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:background)/./node_modules/react-router/dist/index.js");
/* ESM import */var _components_Container_container_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:background)/./src/components/Container/container.component.tsx");
/* ESM import */var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:background)/./src/App.css");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var __prefresh_utils__ = __webpack_require__("(react:background)/./node_modules/@lynx-js/react-refresh-webpack-plugin/runtime/refresh.cjs");




const __snapshot_2b168_dddff_1 = /*#__PURE__*/ (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_2b168_dddff_1", function() {
    const pageId = (__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "Title");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Product");
    __AppendElement(el1, el2);
    const el3 = __CreateText(pageId);
    __AppendElement(el, el3);
    const el4 = __CreateRawText("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae modi odit praesentium? Amet asperiores enim fugiat illo iusto optio quae quia quidem, repellat sit tenetur vel. Autem eius similique unde.");
    __AppendElement(el3, el4);
    const el5 = __CreateText(pageId);
    __SetClasses(el5, "Subtitle");
    __AppendElement(el, el5);
    const el6 = __CreateRawText("Back");
    __AppendElement(el5, el6);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:background)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 5, "bindEvent", "tap", '')
], null, undefined, globDynamicComponentEntry);
const Product = ()=>{
    const nav = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    return /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container_container_component_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: /*#__PURE__*/ (0,_lynx_js_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_2b168_dddff_1, {
            values: [
                ()=>nav('/')
            ]
        }, void 0, false, {
            fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/product/product.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/admin/workspace/SELFDEV/petverse/petverse-front-lynx/src/screens/product/product.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, undefined);
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);


// @ts-nocheck
const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

const moduleHot = module.hot;

if (moduleHot) {
  const currentExports = __prefresh_utils__.getExports(module);
  const previousHotModuleExports = moduleHot.data
    && moduleHot.data.moduleExports;

  __prefresh_utils__.registerExports(currentExports, module.id);

  if (isPrefreshComponent) {
    if (previousHotModuleExports) {
      try {
        __prefresh_utils__.flush();
        if (
          typeof __prefresh_errors__ !== 'undefined'
          && __prefresh_errors__
          && __prefresh_errors__.clearRuntimeErrors
        ) {
          __prefresh_errors__.clearRuntimeErrors();
        }
      } catch (e) {
        // Only available in newer webpack versions.
        if (moduleHot.invalidate) {
          moduleHot.invalidate();
        } else {
          globalThis.location.reload();
        }
      }
    }

    moduleHot.dispose(data => {
      data.moduleExports = __prefresh_utils__.getExports(module);
    });

    moduleHot.accept(function errorRecovery() {
      if (
        typeof __prefresh_errors__ !== 'undefined'
        && __prefresh_errors__
        && __prefresh_errors__.handleRuntimeError
      ) {
        __prefresh_errors__.handleRuntimeError(error);
      }

      __webpack_require__.c[module.id].hot.accept(errorRecovery);
    });
  }
}


}),
"(react:background)/./src/components/Button/button.component.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

  if (true) {
    (function() {
      var localsJsonString = undefined;
      // 1748803320296
      var cssReload = __webpack_require__("(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs")(module.id, {}, "");
      // only invalidate when locals change
      if (
        module.hot.data &&
        module.hot.data.value &&
        module.hot.data.value !== localsJsonString
      ) {
        module.hot.invalidate();
      } else {
        module.hot.accept();
      }
      module.hot.dispose(function(data) {
        data.value = localsJsonString;
        cssReload();
      });
    })();
  }

}),
"(react:background)/./src/components/ToastMessage/toastMessages.component.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

  if (true) {
    (function() {
      var localsJsonString = undefined;
      // 1748803320297
      var cssReload = __webpack_require__("(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs")(module.id, {}, "");
      // only invalidate when locals change
      if (
        module.hot.data &&
        module.hot.data.value &&
        module.hot.data.value !== localsJsonString
      ) {
        module.hot.invalidate();
      } else {
        module.hot.accept();
      }
      module.hot.dispose(function(data) {
        data.value = localsJsonString;
        cssReload();
      });
    })();
  }

}),
"(react:background)/./src/screens/counter/counter.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

  if (true) {
    (function() {
      var localsJsonString = undefined;
      // 1748803320297
      var cssReload = __webpack_require__("(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs")(module.id, {}, "");
      // only invalidate when locals change
      if (
        module.hot.data &&
        module.hot.data.value &&
        module.hot.data.value !== localsJsonString
      ) {
        module.hot.invalidate();
      } else {
        module.hot.accept();
      }
      module.hot.dispose(function(data) {
        data.value = localsJsonString;
        cssReload();
      });
    })();
  }

}),
"(react:background)/./src/screens/login/login.scss": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

  if (true) {
    (function() {
      var localsJsonString = undefined;
      // 1748803320295
      var cssReload = __webpack_require__("(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs")(module.id, {}, "");
      // only invalidate when locals change
      if (
        module.hot.data &&
        module.hot.data.value &&
        module.hot.data.value !== localsJsonString
      ) {
        module.hot.invalidate();
      } else {
        module.hot.accept();
      }
      module.hot.dispose(function(data) {
        data.value = localsJsonString;
        cssReload();
      });
    })();
  }

}),
"(react:background)/./src/App.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

  if (true) {
    (function() {
      var localsJsonString = undefined;
      // 1748803320288
      var cssReload = __webpack_require__("(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs")(module.id, {}, "");
      // only invalidate when locals change
      if (
        module.hot.data &&
        module.hot.data.value &&
        module.hot.data.value !== localsJsonString
      ) {
        module.hot.invalidate();
      } else {
        module.hot.accept();
      }
      module.hot.dispose(function(data) {
        data.value = localsJsonString;
        cssReload();
      });
    })();
  }

}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
if (cachedModule.error !== undefined) throw cachedModule.error;
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
try {

var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
module = execOptions.module;
if (!execOptions.factory) {
  console.error("undefined factory", moduleId)
}
execOptions.factory.call(module.exports, module, module.exports, execOptions.require);

} catch (e) {
module.error = e;
throw e;
}
// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/esm_module_decorator
(() => {
__webpack_require__.hmd = (module) => {
  module = Object.create(module);
  if (!module.children) module.children = [];
  Object.defineProperty(module, 'exports', {
      enumerable: true,
      set: () => {
          throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
      }
  });
  return module;
};
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("f670898939d2d07f")
})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "main." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus; 
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	} 
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						}
						return setStatus("ready").then(function () {
							return updatedModules;
						});
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}
// @ts-nocheck
__webpack_require__.i.push(function(options) {
  if (
    // This means this is in main-thread
    !globalThis.__PREFRESH__
    // Loading a module of background layer in main-thread, we replace the layer with the main-thread.
    && options.id.includes('(react:background)')
  ) {
    // We may serialize the snapshot from background to main-thread.
    // The `(react:background)` layer in the module id cannot be found in the main-thread.
    // Thus we replace it here to make HMR work.
    //
    // Maybe it is better to run chunk loading on main thread.
    options.id = options.id.replace(
      `(react:background)`, // This is replaced by ReactRefreshWebpackPlugin
      '(react:main-thread)', // This is replaced by ReactRefreshWebpackPlugin
    );
    const factory = __webpack_modules__[options.id];
    if (factory) {
      options.factory = factory;
    }
    return;
  }
  var originalFactory = options.factory;
  options.factory = function(moduleObject, moduleExports, webpackRequire) {
    var prevRefreshReg = globalThis.$RefreshReg$;
    var prevRefreshSig = globalThis.$RefreshSig$;
    globalThis.$RefreshSig$ = function() {
      var status = 'begin';
      var savedType;

      return function(type, key, forceReset, getCustomHooks) {
        // `globalThis.__PREFRESH__` may not exist when requiring `react`:
        //   - require('react-refresh')
        //     - require('react').options
        //       - require('useSyncExternalStore')
        //         - __REFRESH__.sign // not a function
        // TODO(wangqingyu): Replace globalThis.__PREFRESH__ with lynx.__PREFRESH__
        if (!globalThis.__PREFRESH__) {
          return type;
        }
        if (!savedType) savedType = type;

        status = globalThis.__PREFRESH__.sign(
          type || savedType,
          key,
          forceReset,
          getCustomHooks,
          status,
        );
        return type;
      };
    };
    var reg = function(currentModuleId) {
      globalThis.$RefreshReg$ = function(type, id) {
        // `globalThis.__PREFRESH__` may not exist when requiring `react`:
        //   - require('react-refresh')
        //     - require('react').options
        //       - require('useSyncExternalStore')
        //         - __REFRESH__.sign // not a function
        if (globalThis.__PREFRESH__) {
          globalThis.__PREFRESH__.register(type, currentModuleId + ' ' + id);
        }
      };
    };
    reg();
    try {
      originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
    } finally {
      globalThis.$RefreshReg$ = prevRefreshReg;
      globalThis.$RefreshSig$ = prevRefreshSig;
    }
  };
});

// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
  globalThis.$RefreshReg$ = function () {};
  globalThis.$RefreshSig$ = function () {
    return function(type) {
      return type;
    };
  };
}
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main",".rspeedy/main/main.1e49cde4c96c74a2.css.hot-update.json"]];

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "http://192.168.50.43:3000/";
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.3.11")
})();
// webpack/runtime/Lynx async chunks
(() => {
// lynx async chunks ids
__webpack_require__.lynx_aci = {}
})();
// webpack/runtime/Lynx chunk loading
(() => {
// object to store loaded chunks
// "1" means "loaded", otherwise not loaded yet
var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
	"main": 1
};
// no on chunks loaded
// no chunk install function needed
// no chunk loading

    function loadUpdateChunk(chunkId, updatedModulesList) {
        return new Promise((resolve, reject) => {
            lynx.requireModuleAsync(__webpack_require__.p
                + __webpack_require__.hu(chunkId), (err, update) => {
                if (err) {
                    reject(err);
                    return;
                }
                var updatedModules = update.modules;
                var runtime = update.runtime;
                for (var moduleId in updatedModules) {
                    if (__webpack_require__.o(updatedModules, moduleId)) {
                        currentUpdate[moduleId] = updatedModules[moduleId];
                        if (updatedModulesList)
                            updatedModulesList.push(moduleId);
                    }
                }
                if (runtime)
                    currentUpdateRuntime.push(runtime);
                resolve();
            });
        });
    }

    var currentUpdateChunks;
    var currentUpdate;
    var currentUpdateRemovedChunks;
    var currentUpdateRuntime;
    function applyHandler(options) {
        if (__webpack_require__.f) {
            delete __webpack_require__.f.requireHmr;
        }
        currentUpdateChunks = undefined;
        function getAffectedModuleEffects(updateModuleId) {
            var outdatedModules = [updateModuleId];
            var outdatedDependencies = {};
            var queue = outdatedModules.map(function (id) {
                return {
                    chain: [id],
                    id: id,
                };
            });
            while (queue.length > 0) {
                var queueItem = queue.pop();
                var moduleId = queueItem.id;
                var chain = queueItem.chain;
                var module = __webpack_require__.c[moduleId];
                if (!module
                    || (module.hot._selfAccepted && !module.hot._selfInvalidated)) {
                    continue;
                }
                if (module.hot._selfDeclined) {
                    return {
                        type: 'self-declined',
                        chain: chain,
                        moduleId: moduleId,
                    };
                }
                if (module.hot._main) {
                    return {
                        type: 'unaccepted',
                        chain: chain,
                        moduleId: moduleId,
                    };
                }
                for (var i = 0; i < module.parents.length; i++) {
                    var parentId = module.parents[i];
                    var parent = __webpack_require__.c[parentId];
                    if (!parent)
                        continue;
                    if (parent.hot._declinedDependencies[moduleId]) {
                        return {
                            type: 'declined',
                            chain: chain.concat([parentId]),
                            moduleId: moduleId,
                            parentId: parentId,
                        };
                    }
                    if (outdatedModules.indexOf(parentId) !== -1)
                        continue;
                    if (parent.hot._acceptedDependencies[moduleId]) {
                        if (!outdatedDependencies[parentId]) {
                            outdatedDependencies[parentId] = [];
                        }
                        addAllToSet(outdatedDependencies[parentId], [moduleId]);
                        continue;
                    }
                    delete outdatedDependencies[parentId];
                    outdatedModules.push(parentId);
                    queue.push({
                        chain: chain.concat([parentId]),
                        id: parentId,
                    });
                }
            }
            return {
                type: 'accepted',
                moduleId: updateModuleId,
                outdatedModules: outdatedModules,
                outdatedDependencies: outdatedDependencies,
            };
        }
        function addAllToSet(a, b) {
            for (var i = 0; i < b.length; i++) {
                var item = b[i];
                if (a.indexOf(item) === -1)
                    a.push(item);
            }
        }
        // at begin all updates modules are outdated
        // the "outdated" status can propagate to parents if they don't accept the children
        var outdatedDependencies = {};
        var outdatedModules = [];
        var appliedUpdate = {};
        var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
            console.warn('[HMR] unexpected require(' + module.id + ') to disposed module');
        };
        for (var moduleId in currentUpdate) {
            if (__webpack_require__.o(currentUpdate, moduleId)) {
                var newModuleFactory = currentUpdate[moduleId];
                /** @type {TODO} */
                var result;
                if (newModuleFactory) {
                    result = getAffectedModuleEffects(moduleId);
                }
                else {
                    result = {
                        type: 'disposed',
                        moduleId: moduleId,
                    };
                }
                /** @type {Error|false} */
                var abortError = false;
                var doApply = false;
                var doDispose = false;
                var chainInfo = '';
                if (result.chain) {
                    chainInfo = '\nUpdate propagation: ' + result.chain.join(' -> ');
                }
                switch (result.type) {
                    case 'self-declined':
                        if (options.onDeclined)
                            options.onDeclined(result);
                        if (!options.ignoreDeclined) {
                            abortError = new Error('Aborted because of self decline: '
                                + result.moduleId
                                + chainInfo);
                        }
                        break;
                    case 'declined':
                        if (options.onDeclined)
                            options.onDeclined(result);
                        if (!options.ignoreDeclined) {
                            abortError = new Error('Aborted because of declined dependency: '
                                + result.moduleId
                                + ' in '
                                + result.parentId
                                + chainInfo);
                        }
                        break;
                    case 'unaccepted':
                        if (options.onUnaccepted)
                            options.onUnaccepted(result);
                        if (!options.ignoreUnaccepted) {
                            abortError = new Error('Aborted because ' + moduleId + ' is not accepted' + chainInfo);
                        }
                        break;
                    case 'accepted':
                        if (options.onAccepted)
                            options.onAccepted(result);
                        doApply = true;
                        break;
                    case 'disposed':
                        if (options.onDisposed)
                            options.onDisposed(result);
                        doDispose = true;
                        break;
                    default:
                        throw new Error('Un-exception type ' + result.type);
                }
                if (abortError) {
                    return {
                        error: abortError,
                    };
                }
                if (doApply) {
                    appliedUpdate[moduleId] = newModuleFactory;
                    addAllToSet(outdatedModules, result.outdatedModules);
                    for (moduleId in result.outdatedDependencies) {
                        if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
                            if (!outdatedDependencies[moduleId]) {
                                outdatedDependencies[moduleId] = [];
                            }
                            addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
                        }
                    }
                }
                if (doDispose) {
                    addAllToSet(outdatedModules, [result.moduleId]);
                    appliedUpdate[moduleId] = warnUnexpectedRequire;
                }
            }
        }
        currentUpdate = undefined;
        // Store self accepted outdated modules to require them later by the module system
        var outdatedSelfAcceptedModules = [];
        for (var j = 0; j < outdatedModules.length; j++) {
            var outdatedModuleId = outdatedModules[j];
            var module = __webpack_require__.c[outdatedModuleId];
            if (module
                && (module.hot._selfAccepted || module.hot._main)
                // removed self-accepted modules should not be required
                && appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire
                // when called invalidate self-accepting is not possible
                && !module.hot._selfInvalidated) {
                outdatedSelfAcceptedModules.push({
                    module: outdatedModuleId,
                    require: module.hot._requireSelf,
                    errorHandler: module.hot._selfAccepted,
                });
            }
        }
        var moduleOutdatedDependencies;
        return {
            dispose: function () {
                currentUpdateRemovedChunks.forEach(function (chunkId) {
                    delete installedChunks[chunkId];
                });
                currentUpdateRemovedChunks = undefined;
                var idx;
                var queue = outdatedModules.slice();
                while (queue.length > 0) {
                    var moduleId = queue.pop();
                    var module = __webpack_require__.c[moduleId];
                    if (!module)
                        continue;
                    var data = {};
                    // Call dispose handlers
                    var disposeHandlers = module.hot._disposeHandlers;
                    for (j = 0; j < disposeHandlers.length; j++) {
                        disposeHandlers[j].call(null, data);
                    }
                    __webpack_require__.hmrD[moduleId] = data;
                    // disable module (this disables requires from this module)
                    module.hot.active = false;
                    // remove module from cache
                    delete __webpack_require__.c[moduleId];
                    // when disposing there is no need to call dispose handler
                    delete outdatedDependencies[moduleId];
                    // remove "parents" references from all children
                    for (j = 0; j < module.children.length; j++) {
                        var child = __webpack_require__.c[module.children[j]];
                        if (!child)
                            continue;
                        idx = child.parents.indexOf(moduleId);
                        if (idx >= 0) {
                            child.parents.splice(idx, 1);
                        }
                    }
                }
                // remove outdated dependency from module children
                var dependency;
                for (var outdatedModuleId in outdatedDependencies) {
                    if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
                        module = __webpack_require__.c[outdatedModuleId];
                        if (module) {
                            moduleOutdatedDependencies =
                                outdatedDependencies[outdatedModuleId];
                            for (j = 0; j < moduleOutdatedDependencies.length; j++) {
                                dependency = moduleOutdatedDependencies[j];
                                idx = module.children.indexOf(dependency);
                                if (idx >= 0)
                                    module.children.splice(idx, 1);
                            }
                        }
                    }
                }
            },
            apply: function (reportError) {
                // insert new code
                for (var updateModuleId in appliedUpdate) {
                    if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
                        __webpack_require__.m[updateModuleId] =
                            appliedUpdate[updateModuleId];
                    }
                }
                // run new runtime modules
                for (var i = 0; i < currentUpdateRuntime.length; i++) {
                    currentUpdateRuntime[i](__webpack_require__);
                }
                // call accept handlers
                for (var outdatedModuleId in outdatedDependencies) {
                    if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
                        var module = __webpack_require__.c[outdatedModuleId];
                        if (module) {
                            moduleOutdatedDependencies =
                                outdatedDependencies[outdatedModuleId];
                            var callbacks = [];
                            var errorHandlers = [];
                            var dependenciesForCallbacks = [];
                            for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
                                var dependency = moduleOutdatedDependencies[j];
                                var acceptCallback = module.hot._acceptedDependencies[dependency];
                                var errorHandler = module.hot._acceptedErrorHandlers[dependency];
                                if (acceptCallback) {
                                    if (callbacks.indexOf(acceptCallback) !== -1)
                                        continue;
                                    callbacks.push(acceptCallback);
                                    errorHandlers.push(errorHandler);
                                    dependenciesForCallbacks.push(dependency);
                                }
                            }
                            for (var k = 0; k < callbacks.length; k++) {
                                try {
                                    callbacks[k].call(null, moduleOutdatedDependencies);
                                }
                                catch (err) {
                                    if (typeof errorHandlers[k] === 'function') {
                                        try {
                                            errorHandlers[k](err, {
                                                moduleId: outdatedModuleId,
                                                dependencyId: dependenciesForCallbacks[k],
                                            });
                                        }
                                        catch (err2) {
                                            if (options.onErrored) {
                                                options.onErrored({
                                                    type: 'accept-error-handler-errored',
                                                    moduleId: outdatedModuleId,
                                                    dependencyId: dependenciesForCallbacks[k],
                                                    error: err2,
                                                    originalError: err,
                                                });
                                            }
                                            if (!options.ignoreErrored) {
                                                reportError(err2);
                                                reportError(err);
                                            }
                                        }
                                    }
                                    else {
                                        if (options.onErrored) {
                                            options.onErrored({
                                                type: 'accept-errored',
                                                moduleId: outdatedModuleId,
                                                dependencyId: dependenciesForCallbacks[k],
                                                error: err,
                                            });
                                        }
                                        if (!options.ignoreErrored) {
                                            reportError(err);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // Load self accepted modules
                for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
                    var item = outdatedSelfAcceptedModules[o];
                    var moduleId = item.module;
                    try {
                        item.require(moduleId);
                    }
                    catch (err) {
                        if (typeof item.errorHandler === 'function') {
                            try {
                                item.errorHandler(err, {
                                    moduleId: moduleId,
                                    module: __webpack_require__.c[moduleId],
                                });
                            }
                            catch (err2) {
                                if (options.onErrored) {
                                    options.onErrored({
                                        type: 'self-accept-error-handler-errored',
                                        moduleId: moduleId,
                                        error: err2,
                                        originalError: err,
                                    });
                                }
                                if (!options.ignoreErrored) {
                                    reportError(err2);
                                    reportError(err);
                                }
                            }
                        }
                        else {
                            if (options.onErrored) {
                                options.onErrored({
                                    type: 'self-accept-errored',
                                    moduleId: moduleId,
                                    error: err,
                                });
                            }
                            if (!options.ignoreErrored) {
                                reportError(err);
                            }
                        }
                    }
                }
                return outdatedModules;
            },
        };
    }
    __webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
        if (!currentUpdate) {
            currentUpdate = {};
            currentUpdateRuntime = [];
            currentUpdateRemovedChunks = [];
            applyHandlers.push(applyHandler);
        }
        if (!__webpack_require__.o(currentUpdate, moduleId)) {
            currentUpdate[moduleId] = __webpack_require__.m[moduleId];
        }
    };
    __webpack_require__.hmrC.require = function (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
        applyHandlers.push(applyHandler);
        currentUpdateChunks = {};
        currentUpdateRemovedChunks = removedChunks;
        currentUpdate = removedModules.reduce(function (obj, key) {
            obj[key] = false;
            return obj;
        }, {});
        currentUpdateRuntime = [];
        chunkIds.forEach(function (chunkId) {
            if (__webpack_require__.o(installedChunks, chunkId)
                && installedChunks[chunkId] !== undefined) {
                promises.push(loadUpdateChunk(chunkId, updatedModulesList));
                currentUpdateChunks[chunkId] = true;
            }
            else {
                currentUpdateChunks[chunkId] = false;
            }
        });
        if (__webpack_require__.f) {
            __webpack_require__.f.requireHmr = function (chunkId, promises) {
                if (currentUpdateChunks
                    && __webpack_require__.o(currentUpdateChunks, chunkId)
                    && !currentUpdateChunks[chunkId]) {
                    promises.push(loadUpdateChunk(chunkId));
                    currentUpdateChunks[chunkId] = true;
                }
            };
        }
    };

    __webpack_require__.hmrM = function () {
        return new Promise((resolve, reject) => lynx.requireModuleAsync(__webpack_require__.p
            + __webpack_require__.hmrF(), (err, ret) => {
            if (err)
                return reject(err);
            resolve(ret);
        }))['catch'](function (err) {
            if (err.code !== 'MODULE_NOT_FOUND')
                throw err;
        });
    };
})();
/************************************************************************/
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
__webpack_require__("(react:background)/./node_modules/@lynx-js/react/refresh/dist/index.js");
__webpack_require__("(react:background)/./node_modules/@lynx-js/webpack-dev-transport/lib/client/index.js?hostname=192.168.50.43&port=3000&pathname=/rsbuild-hmr&hot=true&live-reload=true&protocol=ws");
__webpack_require__("(react:background)/./node_modules/@rspack/core/hot/dev-server.js");
var __webpack_exports__ = __webpack_require__("(react:background)/./src/index.tsx");


    });
    return tt.require("background.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://192.168.50.43:3000/.rspeedy/main/background.js.map