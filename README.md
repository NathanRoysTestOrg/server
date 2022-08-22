# Server
reverse proxy gateway

## Usage
install with built in server
```
// 1. clone project
git clone https://github.com/ndiing/server.git

// 2. change directory
cd server

// 3. install packages
npm install

// 4. run server
npm start

// 5. when any update
npm update

// and then start over
```

for extended development
```
npm install @ndiinginc/{{packagename}}

// example
npm install @ndiinginc/sidompul
```

and then

```js
const {service} = require('@ndiinginc/sidompul')

const sidompul = new service()

// sidompul
```

or using as micro service route

```js
const sidompul = require('@ndiinginc/sidompul')

const app = sidompul()

app.listen(3000)
```

## Docs

-   [x] **[`sidompul` restful](./api/sidompul/v1/README.md)**
-   [x] **[`sidompul` service](./api/sidompul/v1/README.md)**
-   [ ] **[`digiposaja` restful](./api/digiposaja/v1/README.md)**
-   [ ] **[`digiposaja` service](./api/digiposaja/v1/README.md)**
-   [ ] **[`simpel` restful](./api/simpel/v1/README.md)**
-   [ ] **[`simpel` service](./api/simpel/v1/README.md)**
-   [ ] **[`rita` restful](./api/rita/v1/README.md)**
-   [ ] **[`rita` service](./api/rita/v1/README.md)**
-   [ ] **[`sris` restful](./api/sris/v1/README.md)**
-   [ ] **[`sris` service](./api/sris/v1/README.md)**
-   [ ] **[`mitratokopedia` restful](./api/mitratokopedia/v1/README.md)**
-   [ ] **[`mitratokopedia` service](./api/mitratokopedia/v1/README.md)**
-   [ ] **[`mitrabukalapak` restful](./api/mitrabukalapak/v1/README.md)**
-   [ ] **[`mitrabukalapak` service](./api/mitrabukalapak/v1/README.md)**
-   [ ] **[`mitrashopee` restful](./api/mitrashopee/v1/README.md)**
-   [ ] **[`mitrashopee` service](./api/mitrashopee/v1/README.md)**
-   [ ] **[`kiosgamer` restful](./api/kiosgamer/v1/README.md)**
-   [ ] **[`kiosgamer` service](./api/kiosgamer/v1/README.md)**
-   [ ] **[`griyabayar` restful](./api/griyabayar/v1/README.md)**
-   [ ] **[`griyabayar` service](./api/griyabayar/v1/README.md)**
-   [ ] **[`agenbni46` restful](./api/agenbni46/v1/README.md)**
-   [ ] **[`agenbni46` service](./api/agenbni46/v1/README.md)**
-   [ ] **[`whatsapp` restful](./api/whatsapp/v1/README.md)**
-   [ ] **[`whatsapp` service](./api/whatsapp/v1/README.md)**
-   [ ] **[`telegram` restful](./api/telegram/v1/README.md)**
-   [ ] **[`telegram` service](./api/telegram/v1/README.md)**
-   [ ] **[`xmpp` restful](./api/xmpp/v1/README.md)**
-   [ ] **[`xmpp` service](./api/xmpp/v1/README.md)**
