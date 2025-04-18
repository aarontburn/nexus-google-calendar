// Sends information to the the process.
const sendToProcess = (eventType: string, ...data: any[]): Promise<void> => {
    return window.parent.ipc.send(window, eventType, data);
}

// Handle events from the process.
const handleEvent = (eventType: string, data: any[]) => {
    switch (eventType) {
        case "user-agent": {
            const { userAgent, partition } = data[0];
            const container: HTMLElement = document.getElementById("app");

            const html: string = `
                <webview 
                    src="https://calendar.google.com/calendar/u/0/r"
                    style="height: 100%;" 
                    allowpopups 
                    partition="${partition}" 
                    userAgent="${userAgent}">
                </webview>
            `
            container.insertAdjacentHTML('beforeend', html);

            break;
        }
        default: {
            console.warn("Uncaught message: " + eventType + " | " + data)
            break;
        }
    }
}

// Attach event handler.
window.parent.ipc.on(window, (eventType: string, data: any[]) => {
    handleEvent(eventType, data);
});


// Instruct the module process to initialize once the renderer is ready.
sendToProcess("init");

