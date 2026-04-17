const PulsePhysics = (() => {

    const state = {
        mode: "ULTRA_GOD_MODE",
        frequency: 9.0,
        glyphDensity: 1.0,
        chromeReflectivity: 1.0
    };

    function setMode(mode) {
        state.mode = mode;

        const profiles = {
            FORM_V:        { f: 3.0, g: 0.3, c: 0.2 },
            FORM_9:        { f: 6.0, g: 0.7, c: 0.6 },
            FORM_R:        { f: 7.5, g: 0.9, c: 0.9 },
            ULTRA_GOD_MODE:{ f: 9.0, g: 1.0, c: 1.0 }
        };

        const p = profiles[mode] || profiles.ULTRA_GOD_MODE;

        state.frequency = p.f;
        state.glyphDensity = p.g;
        state.chromeReflectivity = p.c;
    }

    function getState() {
        return { ...state };
    }

    return { setMode, getState };

})();
