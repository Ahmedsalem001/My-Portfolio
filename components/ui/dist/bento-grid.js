"use client";
"use strict";
exports.__esModule = true;
exports.BentoGridItem = exports.BentoGrid = void 0;
var react_1 = require("react");
var io5_1 = require("react-icons/io5");
// Also install this npm i --save-dev @types/react-lottie
var react_lottie_1 = require("react-lottie");
var cn_1 = require("@/utils/cn");
var GridGlobe_1 = require("./GridGlobe");
var confetti_json_1 = require("@/components/data/confetti.json");
var MagicButton_1 = require("./MagicButton");
var GradiantBg_1 = require("./GradiantBg");
exports.BentoGrid = function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement("div", { className: cn_1.cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className) }, children));
};
exports.BentoGridItem = function (_a) {
    var className = _a.className, id = _a.id, title = _a.title, description = _a.description, 
    //   remove unecessary things here
    img = _a.img, imgClassName = _a.imgClassName, titleClassName = _a.titleClassName, spareImg = _a.spareImg;
    var leftLists = ["ReactJS", "NextJS", "Typescript"];
    var rightLists = ["Tailwind", "Redux", "SQL"];
    var _b = react_1.useState(false), copied = _b[0], setCopied = _b[1];
    var defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: confetti_json_1["default"],
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    var handleCopy = function () {
        var text = "ahmedsalem7dev@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
        var reset = function () { return setCopied(false); };
        setTimeout(reset, 5000);
    };
    return (React.createElement("div", { className: cn_1.cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4", className), style: {
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "#0B0B0D",
            backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
        } },
        React.createElement("div", { className: (id === 6 && "flex justify-center") + " h-full" },
            React.createElement("div", { className: "w-full h-full absolute" }, img && (React.createElement("img", { src: img, alt: img, className: cn_1.cn(imgClassName, "object-cover object-center ") }))),
            React.createElement("div", { className: "absolute right-0 -bottom-5 " + (id === 5 && "w-full opacity-80") + " " }, spareImg && (React.createElement("img", { src: spareImg, alt: spareImg, 
                //   width={220}
                className: "object-cover object-center w-full h-full" }))),
            id === 6 && (
            // add background animation , remove the p tag
            React.createElement(GradiantBg_1.BackgroundGradientAnimation, null,
                React.createElement("div", { className: "absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" }))),
            React.createElement("div", { className: cn_1.cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10") },
                React.createElement("div", { className: "font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10" }, description),
                React.createElement("div", { className: "font-sans text-md lg:text-2xl max-w-96 font-bold z-10" }, title),
                id === 2 && React.createElement(GridGlobe_1["default"], null),
                id === 3 && (React.createElement("div", { className: "flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2" },
                    React.createElement("div", { className: "flex flex-col gap-3 md:gap-3 lg:gap-8" },
                        leftLists.map(function (item, i) { return (React.createElement("span", { key: i, className: "lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 \r\n                    lg:opacity-100 rounded-lg text-center bg-[#10132E]" }, item)); }),
                        React.createElement("span", { className: "lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]" })),
                    React.createElement("div", { className: "flex flex-col gap-3 md:gap-3 lg:gap-8" },
                        React.createElement("span", { className: "lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]" }),
                        rightLists.map(function (item, i) { return (React.createElement("span", { key: i, className: "lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 \r\n                    lg:opacity-100 rounded-lg text-center bg-[#10132E]" }, item)); })))),
                id === 6 && (React.createElement("div", { className: "mt-5 relative" },
                    React.createElement("div", { className: "absolute -bottom-5 right-0 " + (copied ? "block" : "block") },
                        React.createElement(react_lottie_1["default"], { options: defaultOptions, height: 200, width: 400 })),
                    React.createElement(MagicButton_1["default"], { title: copied ? "Email is Copied!" : "Copy my email address", icon: React.createElement(io5_1.IoCopyOutline, null), position: "left", handleClick: handleCopy, otherClasses: "!bg-[#161A31]" })))))));
};
