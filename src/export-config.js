module.exports = {
    excluded: ["electron.ts"],
    included: [],
    build: {
        name: "Google Calendar",
        id: "aarontburn.Google_Calendar",
        process: "./process/main.js",
        replace: [
            {
                from: "{EXPORTED_MODULE_ID}",
                to: "%id%",
                at: ["./process/main.ts", "./renderer/index.html"]
            },
            {
                from: "{EXPORTED_MODULE_NAME}",
                to: "%name%",
                at: ["./process/main.ts", "./module-info.json"]
            }
        ]
    }
}