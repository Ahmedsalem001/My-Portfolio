"use strict";
exports.__esModule = true;
var Approach_1 = require("@/components/Approach");
var Experience_1 = require("@/components/Experience");
var Footer_1 = require("@/components/Footer");
var Grid_1 = require("@/components/Grid");
var Hero_1 = require("@/components/Hero");
var RecentProjects_1 = require("@/components/RecentProjects");
var data_1 = require("@/components/data");
var floating_navbar_1 = require("@/components/ui/floating-navbar");
function Home() {
    return (React.createElement("main", { className: "relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5" },
        React.createElement("div", { className: "max-w-7xl w-full" },
            React.createElement(floating_navbar_1.FloatingNav, { navItems: data_1.navItems }),
            React.createElement(Hero_1["default"], null),
            React.createElement(Grid_1["default"], null),
            React.createElement(RecentProjects_1["default"], null),
            React.createElement(Experience_1["default"], null),
            React.createElement(Approach_1["default"], null),
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = Home;
