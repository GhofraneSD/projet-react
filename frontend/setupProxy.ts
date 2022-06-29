export const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app: any) {
    app.use(
        "/sign_up",
        createProxyMiddleware({
            // target: "http://backend1:3002",
            //target: "/",
            target: "http://back-end:3002",
            changeOrigin: true,
            secure: false,
            logLevel: "info",
            timeout: 40000,
        })
    )
};
