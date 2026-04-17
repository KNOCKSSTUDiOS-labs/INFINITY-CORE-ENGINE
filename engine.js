export const Engine = {
    state: {},
    modules: {},
    init() {
        console.log("INFINITY-CORE-ENGINE: ONLINE");
    },
    register(name, module) {
        this.modules[name] = module;
        console.log(`Module registered: ${name}`);
    },
    run() {
        console.log("ENGINE RUNNING");
    }
};
