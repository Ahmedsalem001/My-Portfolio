"use strict";
exports.__esModule = true;
var react_1 = require("react");
var data_1 = require("./data");
var _3d_pin_1 = require("./ui/3d-pin");
var fa_1 = require("react-icons/fa");
var image_1 = require("next/image");
var RecentProjects = function () {
    return (react_1["default"].createElement("div", { className: "py-20", id: "projects" },
        react_1["default"].createElement("h1", { className: "heading" },
            "A small Selection of",
            " ",
            react_1["default"].createElement("span", { className: "text-purple" }, " Recent Projects")),
        react_1["default"].createElement("div", { className: "flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-10 mt-20 sm:mt-32" }, data_1.projects.map(function (_a) {
            var id = _a.id, title = _a.title, des = _a.des, img = _a.img, iconLists = _a.iconLists, link = _a.link;
            return (react_1["default"].createElement("div", { key: id, className: " h-[32rem] felx items-center justify-center sm:w-[570px] w-[80vw]" },
                react_1["default"].createElement(_3d_pin_1.PinContainer, { title: link, href: link },
                    react_1["default"].createElement("div", { className: "relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]" },
                        react_1["default"].createElement("div", { className: "relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]" },
                            react_1["default"].createElement("img", { src: "/bg.png", alt: "" })),
                        react_1["default"].createElement(image_1["default"], { src: img, alt: title, width: 432, height: 432, className: "z-10 absolute -bottom-4 w-[27rem]" })),
                    react_1["default"].createElement("h1", { className: "font-bold  md:text-xl text-base line-clamp-1 mt-6" }, title),
                    react_1["default"].createElement("p", { className: "lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-4" }, des),
                    react_1["default"].createElement("div", { className: "flex items-center justify-between mt-7 mb-3" },
                        react_1["default"].createElement("div", { className: "flex items-center" }, iconLists.map(function (icon, index) { return (react_1["default"].createElement("div", { key: icon, className: "border border-white/[0.2] rounded-full bg-black lg:w-10  lg:h-10 w-8 h-8 flex justify-center items-center", style: {
                                transform: "translateX(-" + 5 * index * 2 + "px)"
                            } },
                            react_1["default"].createElement("img", { src: icon, alt: icon, className: "p-2" }))); })),
                        react_1["default"].createElement("div", { className: "flex justify-center items-center" },
                            react_1["default"].createElement("p", { className: "flex lg:text-xl md:text-xs text-sm text-purple" }, "Check Live Site"),
                            react_1["default"].createElement(fa_1.FaLocationArrow, { className: "ms-3", color: "#CBACF9" }))))));
        }))));
};
exports["default"] = RecentProjects;
