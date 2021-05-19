module.exports = {
    preset: "jest-playwright-preset",
    transform: {
        "^.+\\.(ts)$": "ts-jest",
    },
    "reporters": [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./html-report",
            "filename": "report.html",
            "expand": true,
            "openReport": true
        }]
    ],
}