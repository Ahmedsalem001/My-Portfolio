"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Spotlight_1 = require("./ui/Spotlight");
var text_generate_effect_1 = require("./ui/text-generate-effect");
var MagicButton_1 = require("./ui/MagicButton");
var fa_1 = require("react-icons/fa");
var Hero = function () {
    return (react_1["default"].createElement("div", { className: 'pb-20 pt-36 md:h-screen' },
        react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement(Spotlight_1.Spotlight, { className: '-top-40 -left-10 md:-top-20 md:-left-20 h-screen', fill: 'white' }),
            react_1["default"].createElement(Spotlight_1.Spotlight, { className: 'top-10 left-full h-[80vh] w-[50vw]', fill: 'purple' }),
            react_1["default"].createElement(Spotlight_1.Spotlight, { className: 'top-28 left-80 h-[80vh] w-[50vw]', fill: 'blue' })),
        react_1["default"].createElement("div", { className: "h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.09] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0" },
            react_1["default"].createElement("div", { className: "absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" })),
        react_1["default"].createElement("div", { className: "flex justify-center relative my-20 z-10 " },
            react_1["default"].createElement("div", { className: "max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center" },
                react_1["default"].createElement("h2", { className: 'uppercase tracking-widest text-xs text-center text-blue-100 max-w-80' }, "Dynamic Web Magic with Next.js"),
                react_1["default"].createElement(text_generate_effect_1.TextGenerateEffect, { words: 'Transforming concepts into Seamless User Experiences', className: 'text-center text-[40px] md:text-5xl lg:text-6xl' }),
                react_1["default"].createElement("p", { className: 'text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl' }, "Hi, I'm Ahmed Salem, a Next.js Developer"),
                react_1["default"].createElement("a", { href: "#about", className: 'my-4' },
                    react_1["default"].createElement(MagicButton_1["default"], { icon: react_1["default"].createElement(fa_1.FaLocationArrow, null), position: 'left', title: "show my work" }))))));
};
exports["default"] = Hero;
