import Data from './Data.js'

export default function () {
    const data = new Data()

    this.on("postload", () => {
        data.load( this.package.publish.token )
    });

    /**
     * events
     */
    this.on("data-set", (params) => data.set(params));
    this.on("data-clear", () => data.clear());

    /**
     * deprecated
     */
    this.on("set-data", (params) => {
        console.warn("[set-data] is deprecated. Use [data-set]");
        data.set(params)
    });
    this.on("clear-data", () => {
        console.warn("[clear-data] is deprecated. Use [data-clear]");
        data.clear()
    });
}
