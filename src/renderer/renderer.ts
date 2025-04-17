// Sends information to the the process.
const sendToProcess = (eventType: string, ...data: any[]): Promise<void> => {
    return window.parent.ipc.send(window, eventType, data);
}

// Handle events from the process.
const handleEvent = (eventType: string, data: any[]) => {
    switch (eventType) {
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

