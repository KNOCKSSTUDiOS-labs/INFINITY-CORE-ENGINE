export const BufferSystem = {
    incoming: [],
    outgoing: [],
    push(data) {
        this.incoming.push(data);
        console.log("Buffered:", data.type);
    },
    pull() {
        return this.incoming.shift();
    }
};
