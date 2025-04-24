import { Process } from "@nexus/nexus-module-builder"
import { session } from "electron";
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
            }
        });

    }

    public async initialize(): Promise<void> {
        this.sendToRenderer("user-agent", {
            userAgent: session.fromPartition(`persist:${MODULE_ID}`).getUserAgent().replace(/Electron\/*/, ''),
            partition: `persist:${MODULE_ID}`
        })

    }


    public async handleEvent(eventType: string, data: any[]): Promise<any> {
        switch (eventType) {
            case "init": {
                this.initialize()
                break;
            }
            default: {
                console.warn(`[${MODULE_NAME}] Uncaught message: ${eventType} | ${data}`)
                break;
            }
        }
    }


}