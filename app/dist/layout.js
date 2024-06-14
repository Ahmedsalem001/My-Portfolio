"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var provider_1 = require("./provider");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Demo",
    description: "Ahmed salem protfolio",
    icons: {
        icon: "/exp1.svg"
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement(provider_1.ThemeProvider, { attribute: "class", defaultTheme: "dark", enableSystem: true, disableTransitionOnChange: true }, children))));
}
exports["default"] = RootLayout;
