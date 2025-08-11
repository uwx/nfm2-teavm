interface TeaVMInst {
    exports: {
        main(args: unknown[]): unknown;
    }
}

declare var TeaVM: {
    wasmGC: {
        load(path: string, options?: {
            stackDeobfuscator?: {
                enabled?: boolean
            }
        }): PromiseLike<TeaVMInst>;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    let teavm = await TeaVM.wasmGC.load("teavm/classes.wasm", {
        stackDeobfuscator: {
            // set to true during development phase, as well as `debugInformationGenerated`
            // option in pom.xml to get clear stack traces. Don't forget
            // to disable for production.
            enabled: false
        }
    });
    teavm.exports.main([]);
});