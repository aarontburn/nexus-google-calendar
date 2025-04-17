import { Process } from "@nexus/nexus-module-builder"
import * as path from "path";

// These is replaced to the ID specified in export-config.js during export. DO NOT MODIFY.
const MODULE_ID: string = "{EXPORTED_MODULE_ID}";
const MODULE_NAME: string = "{EXPORTED_MODULE_NAME}";
// ---------------------------------------------------

export default class GoogleCalendarProcess extends Process {

    public constructor() {
        super({
            moduleID: MODULE_ID,
            moduleName: MODULE_NAME,
            paths: {
                iconPath: path.normalize(__dirname + "/google-calendar-icon.png"),
                htmlPath: path.join(__dirname, "../renderer/index.html"),
            },
            httpOptions: {
                partition: `persist:${MODULE_ID}`,
                userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.179 Safari/537.36`
            }
        });
    }


    public async handleEvent(eventType: string, data: any[]): Promise<any> {
        switch (eventType) {
            case "init": {
                // do something?
                break;
            }
        }
    }


}