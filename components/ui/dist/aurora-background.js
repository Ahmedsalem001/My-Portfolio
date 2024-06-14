"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.AuroraBackground = void 0;
var cn_1 = require("@/utils/cn");
var react_1 = require("react");
exports.AuroraBackground = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.showRadialGradient, showRadialGradient = _b === void 0 ? true : _b, props = __rest(_a, ["className", "children", "showRadialGradient"]);
    return (react_1["default"].createElement("main", null,
        react_1["default"].createElement("div", __assign({ className: cn_1.cn("absolute z-10 w-screen top-0 left-[50%] translate-x-[-50%] flex flex-col h-[100vh] items-center justify-center transition-bg opacity-50", className) }, props),
            react_1["default"].createElement("div", { className: "absolute inset-0 " },
                react_1["default"].createElement("div", { 
                    //   I'm sorry but this is what peak developer performance looks like // trigger warning
                    className: cn_1.cn("\n            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]\n            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]\n            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]\n            [background-image:var(--white-gradient),var(--aurora)]\n            dark:[background-image:var(--dark-gradient),var(--aurora)]\n            [background-size:300%,_200%]\n            [background-position:50%_50%,50%_50%]\n            filter blur-[10px] invert dark:invert-0\n            after:content-[\"\"] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] \n            after:dark:[background-image:var(--dark-gradient),var(--aurora)]\n            after:[background-size:200%,_100%] \n            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference\n            pointer-events-none\n            absolute -inset-[10px] opacity-50 will-change-transform", showRadialGradient &&
                        "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]") })),
            children)));
};
