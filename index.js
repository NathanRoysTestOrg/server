process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);

const Router = require("@ndiinginc/router");

const sidompul = require("@ndiinginc/sidompul");

// WhiteList Alamat IP
const whitelist = ["127.0.0.1"];

const app = Router({
    // body: null,
    security: null,
    // compression: null,
    cache: null,
    cookie: null,
    limiter: null,
});
app.use((req, res, next) => {
    if (!whitelist.includes(req.ip)) {
        res.status = 403;
        next({ message: "Forbidden" });
    }
    next();
});

app.use("/api/sidompul/v1", sidompul);

// Mulai Server
const server = app.listen(3000, () => {
    console.log(server.address());
});
