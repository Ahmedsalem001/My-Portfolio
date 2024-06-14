"use client";
"use strict";
exports.__esModule = true;
exports.PinPerspective = exports.PinContainer = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var cn_1 = require("@/utils/cn");
exports.PinContainer = function (_a) {
    var children = _a.children, title = _a.title, href = _a.href, className = _a.className, containerClassName = _a.containerClassName;
    var _b = react_1.useState("translate(-50%,-50%) rotateX(0deg)"), transform = _b[0], setTransform = _b[1];
    var onMouseEnter = function () {
        setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    };
    var onMouseLeave = function () {
        setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    };
    return (react_1["default"].createElement("div", { className: cn_1.cn("relative group/pin z-50  cursor-pointer", containerClassName), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        react_1["default"].createElement("div", { style: {
                perspective: "1000px",
                transform: "rotateX(70deg) translateZ(0deg)"
            }, className: "absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2" },
            react_1["default"].createElement("div", { style: {
                    transform: transform
                }, className: "absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)]  border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden" },
                react_1["default"].createElement("div", { className: cn_1.cn(" relative z-50 ", className) }, children))),
        react_1["default"].createElement(exports.PinPerspective, { title: title, href: href })));
};
exports.PinPerspective = function (_a) {
    var title = _a.title, href = _a.href;
    return (react_1["default"].createElement(framer_motion_1.motion.div, { className: "pointer-events-none  w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500" },
        react_1["default"].createElement("div", { className: " w-full h-full -mt-7 flex-none  inset-0" },
            react_1["default"].createElement("div", { className: "absolute top-0 inset-x-0  flex justify-center" },
                react_1["default"].createElement("a", { href: href, target: "_blank", className: "absolute flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 w-[80%] sm:w-[50%] text-center  ring-white/10 " },
                    react_1["default"].createElement("span", { className: "relative z-20 text-white text-xs font-bold inline-block py-0.5 line-clamp-1  " }, title),
                    react_1["default"].createElement("span", { className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40" }))),
            react_1["default"].createElement("div", { style: {
                    perspective: "1000px",
                    transform: "rotateX(70deg) translateZ(0)"
                }, className: "absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2" },
                react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
                            opacity: 0,
                            scale: 0,
                            x: "-50%",
                            y: "-50%"
                        }, animate: {
                            opacity: [0, 1, 0.5, 0],
                            scale: 1,
                            z: 0
                        }, transition: {
                            duration: 6,
                            repeat: Infinity,
                            delay: 0
                        }, className: "absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" }),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
                            opacity: 0,
                            scale: 0,
                            x: "-50%",
                            y: "-50%"
                        }, animate: {
                            opacity: [0, 1, 0.5, 0],
                            scale: 1,
                            z: 0
                        }, transition: {
                            duration: 6,
                            repeat: Infinity,
                            delay: 2
                        }, className: "absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" }),
                    react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
                            opacity: 0,
                            scale: 0,
                            x: "-50%",
                            y: "-50%"
                        }, animate: {
                            opacity: [0, 1, 0.5, 0],
                            scale: 1,
                            z: 0
                        }, transition: {
                            duration: 6,
                            repeat: Infinity,
                            delay: 4
                        }, className: "absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" }))),
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(framer_motion_1.motion.div, { className: "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" }),
                react_1["default"].createElement(framer_motion_1.motion.div, { className: "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " }),
                react_1["default"].createElement(framer_motion_1.motion.div, { className: "absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" }),
                react_1["default"].createElement(framer_motion_1.motion.div, { className: "absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " })))));
};
