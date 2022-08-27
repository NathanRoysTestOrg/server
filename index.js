// Avoid system crash during production.
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);

// Certificate registration
process.env.CERTIFICATE = `-----BEGIN CERTIFICATE-----
eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJjZTk0YjZkYy00OWRmLTQ0NWQ
tYTIyZi0xOTI3NmFlYmExNmYiOiJsOXEyNnBqaiIsIjRmNGQxMDMzLTZhZWQtNDg
4OC1iNzQyLWNjOWNkZDE4ZWU0NSI6Imw5cTI3enU5IiwiMzgxODJkMjctNTkxYy0
0YTBlLThmMWYtYWI5M2E0Y2U0MzViIjoibDlxMjlhNHgiLCI1Njc5MTg3Ni0zYjA
xLTRlNmItOWQwNS1kOTA0YmJiNDk0ZDYiOiJsOXEyYWtmbCIsImM1ZjViMzQ1LTI
3YzEtNGVkOC05ZTE4LTFjMTg0NjdlMDFiNiI6Imw5cTJidXE5IiwiMTYwODIyOTg
tMDRkOS00MzM2LWJhNjktNTVlNDI4NjlkMjkwIjoibDlxMmQ1MHgiLCI2M2QxYjQ
wMy1hZWEwLTQ2NTgtYmRmMy0yNzAyMjA1ZDU3YTYiOiJsOXEyZWZibCIsIjViZjc
4NGQwLTlmMjYtNDA1My05MTE0LTA3ZjdhMDQxMmI5MSI6Imw5cTJmcG05IiwiYjY
zNTZmZTUtYWUyMC00ZjhmLTg1N2ItN2YyZDU3MDk5NzhiIjoibDlxMmd6d3giLCI
wMWE5YWZlNC05ODZmLTRjNGYtOGEzYS00Mzk4NDI5OGQwNzMiOiJsOXEyaWE3bCI
sImQ1NzVlYzVmLWEwZWEtNDg5Mi05YjA2LTY4OTA1ZTViNGJlYyI6Imw5cTJqa2l
hIiwiY2Q0NTM0MTMtZTU0Ny00ZGU4LWE0OWEtOWQ0NWJjNzA2MzMyIjoibDlxMmt
1c3kiLCI4OTc5MTg3Zi1jMDg2LTQ4YjQtYTc0NS0xNzFjYTQ5NDA5YzIiOiJsOXE
ybTUzbSIsImQ2M2ZlMDRjLTNkNWYtNDFmOS05NzlkLTY3MDU0NmJjM2MwZiI6Imw
5cTJuZmVhIn0.XfRr1P7AIWnsscVvqfwND24aS8vk880_jeuU1RClmQQmKD_M48x
QazSrGdFGZjv-aYdDuLOm5tRNw_HTvoOA80JbZswYAoDfY9jJIkHEKByzrUcpj1l
3QIdhqdWWeFitNpz1dWu8l9qT5DGTxSYmJz9aw5zMZDqEXMUs854Mslta2gHIdGV
SqSrL2tZtyWvoDb4kqH_DtyFZlOBbIxVEfJPlWri4qqXE1uShnoxi6nKDYcDy43w
tZ4WHtGPTEpBDLEKrLpuLamSCZkMVza0Bd3iqKdTOroa7Gg2DBAktTS7hPiQ7ZDj
bVNtOE45hVa-6x3k47qDhlEYf-BhXMw_egyKiPlV6h9fDgRPM2BqJpH089-S2ZwM
DtmQRZujeQu79LZ8VIWjds3ukozmejU4l3v2vKhW5hbhZTbLOl07YFbE7eBUVgJ6
yB2BfYxsV3AO0UwdzY7vku-j82QFU9IaPND3yaFA3EZuXavzM9YeBXJkQRLaYwSX
rZBvQ8ZEc7a5E98hZmuHPH4pR3V3BO2NrJ-FaMk2XzP1Si5C2Hhc1DLxk5Dmtj2l
3_mcbh14HKJeJpsYJJJ2lrBQeibh9aztLdxG-J7m56UrkpGf1V7jkoDH6dxd2n73
4wFdI4mkvZ1pA82a_y0CLskXKRuSX6JWcZ4D3suZDdCih4gX5gUES6HQ
-----END CERTIFICATE-----`;

// Load module
const Router = require("@ndiinginc/router");
const sidompul = require("@ndiinginc/sidompul");

// Create low level security app
// used for micro services
const app = Router({
    security: null,
    cache: null,
    cookie: null,
    limiter: null,
});

// IP Address restriction middleware
app.use((req, res, next) => {
    if (
        ![
            // Add allowed IP here...
            "127.0.0.1",
        ].includes(req.ip)
    ) {
        res.status = 403;
        next({ message: "Forbidden" });
    }
    next();
});

// Routes
app.use("/api/sidompul/v1", sidompul);
// app.use("/api/mitrashopee/v1", mitrashopee);

// Start app
const server = app.listen(3000, () => {
    console.log("Server running on", server.address().port);
});
