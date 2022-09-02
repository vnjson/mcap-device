import controller from "./controller";
export default function (){

}
        /**
         * events
         */
        vnjs.on("postload", () => {
            controller.load( vnjs.package.publish.token )
        });

        vnjs.on("data-set", (params) => controller.set(params));
        vnjs.on("data-clear", () => controller.clear());
        vnjs.on("data-save", () => {
            controller. save(vnjs.state.data)
        });

        /**
         * deprecated
         */
        vnjs.on("set-data", (params) => {
            console.warn("[set-data] is deprecated. Use [data-set]");
            controller.set(params)
        });
        vnjs.on("clear-data", () => {
            console.warn("[clear-data] is deprecated. Use [data-clear]");
            controller.clear()
        });
