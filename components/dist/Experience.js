"use strict";
exports.__esModule = true;
var react_1 = require("react");
var data_1 = require("./data");
var MovingBorder_1 = require("./ui/MovingBorder");
var Experience = function () {
    return (react_1["default"].createElement("div", { className: "pb-20" },
        react_1["default"].createElement("h1", { className: "heading" },
            "My",
            " ",
            react_1["default"].createElement("span", { className: "text-purple" }, " Work Experience")),
        react_1["default"].createElement("div", { className: "w-full mt-12 grid sm:grid-cols-4 grid-cols-1 gap-10" }, data_1.workExperience.map(function (card) { return (react_1["default"].createElement(MovingBorder_1.Button, { key: Math.random(), borderRadius: "1.75rem", className: "flex-1 text-white border-neutral-200 dark:border-slate-800", duration: Math.floor(Math.random() * 10000) + 10000 },
            react_1["default"].createElement("div", { className: "flex lg:flex-row flex-col items-center  p-3 py-6 md:p-5 lg:p-10 gap-2" },
                react_1["default"].createElement("img", { src: card.thumbnail, alt: card.thumbnail, className: "lg:w-32 md:w-20 w-16 mb-2" }),
                react_1["default"].createElement("div", { className: "lg:ms-5" },
                    react_1["default"].createElement("h1", { className: "sm:text-start text-xl md:text-2xl font-bold " }, card.title),
                    react_1["default"].createElement("p", { className: "sm:text-start text-center text-white-100 mt-3 font=semibold " }, card.desc))))); }))));
};
exports["default"] = Experience;
