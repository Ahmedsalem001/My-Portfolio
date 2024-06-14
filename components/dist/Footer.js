"use strict";
exports.__esModule = true;
var react_1 = require("react");
var data_1 = require("./data");
var MagicButton_1 = require("./ui/MagicButton");
var fa_1 = require("react-icons/fa");
var Footer = function () {
    return (react_1["default"].createElement("footer", { className: "w-full pt-20 pb-10", id: "contact" },
        react_1["default"].createElement("div", { className: "w-full absolute left-0 bottom-0 min-h-96 overflow-hidden pointer-events-none" },
            react_1["default"].createElement("img", { src: "/footergrid.svg", alt: "grid", className: "w-full h-full opacity-50" })),
        react_1["default"].createElement("div", { className: "flex flex-col items-center" },
            react_1["default"].createElement("h1", { className: "heading lg:max-w-[45vw]" },
                "Ready to take ",
                react_1["default"].createElement("span", { className: "text-purple" }, "your"),
                " digital presence to the next level?"),
            react_1["default"].createElement("p", { className: "text-white-200 text-center mt-10 lg:max-w-[45vw]" }, "Reach out to me today and let's discuss how I can help you achieve your goals."),
            react_1["default"].createElement("a", { href: "mailto:ahmedsalem7dev@gmail.coom", className: "mt-7" },
                react_1["default"].createElement(MagicButton_1["default"], { icon: react_1["default"].createElement(fa_1.FaLocationArrow, null), position: "right", title: "Let's get in touch" }))),
        react_1["default"].createElement("div", { className: "flex mt-16 md:flex-row flex-col justify-between items-center gap-3" },
            react_1["default"].createElement("p", { className: "md:text-base text-sm md:font-normal font-light text-gray-200" }, "Copyright \u00A9 2024 Demo"),
            react_1["default"].createElement("p", { className: "md:text-base text-sm md:font-normal font-light text-gray-200" }, "mail : ahemdsalem7dev@gmail.com"),
            react_1["default"].createElement("p", { className: "md:text-base text-sm md:font-normal font-light text-gray-200" }, "phone : +201018988020"),
            react_1["default"].createElement("div", { className: "flex items-center md:gap-3 gap-6 mt-3" }, data_1.socialMedia.map(function (profile) { return (react_1["default"].createElement("a", { target: "_blank", href: profile.link, key: profile.id },
                react_1["default"].createElement("div", { className: "w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-300 rounded-lg border border-black-300 -z" },
                    react_1["default"].createElement("img", { src: profile.img, alt: profile.img, width: 20, height: 20 })))); })))));
};
exports["default"] = Footer;
