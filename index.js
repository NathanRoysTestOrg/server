// Ignore system error
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);

const sidompul = require("@ndiinginc/sidompul");
const Router = require("@ndiinginc/router");

const app = new Router();

// Whitelist
app.use((req, res, next) => {
    if (!["127.0.0.1"].includes(req.ip)) {
        res.status = 403;
        next({ message: "Forbidden" });
    }
    next();
});

// Modules
app.use("/api/sidompul/v1", sidompul({ key: process.env.SIDOMPUL_KEY }));

// Start server
app.listen(3000, () => {
    console.log(3000);
});
