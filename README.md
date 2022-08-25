# Server

Koleksi service pihak ketiga, untuk kebutuhan riset atau komersial, singkatnya API Gateway atau reverse proxy server

## Instalasi

Ikuti langkah pemasangan dibawah ini, pastikan [`nodejs`](https://nodejs.org/en/download/) dan [`git`](https://git-scm.com/downloads) sudah terpasang pada perangkat anda.

```console
Ndiing@DESKTOP-GNTG2JS MINGW64 ~/Downloads
$ git clone https://github.com/ndiing/server.git
Cloning into 'server'...
remote: Enumerating objects: 671, done.
remote: Counting objects: 100% (272/272), done.
remote: Compressing objects: 100% (148/148), done.
remote: Total 671 (delta 184), reused 184 (delta 104), pack-reused 399 eceiving
objects:  82% (551/671), 372.01 KiB | 351.00
Receiving objects: 100% (671/671), 623.15 KiB | 443.00 KiB/s, done.
Resolving deltas: 100% (401/401), done.
```

```console
Ndiing@DESKTOP-GNTG2JS MINGW64 ~/Downloads
$ cd server
```

```console
Ndiing@DESKTOP-GNTG2JS MINGW64 ~/Downloads/server (main)
$ npm install
npm WARN config global `--global`, `--local` are deprecated. Use `--location=glo
bal` instead.

added 6 packages, and audited 7 packages in 1s

found 0 vulnerabilities
```

```console
Ndiing@DESKTOP-GNTG2JS MINGW64 ~/Downloads/server (main)
$ npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=glo
bal` instead.

> @ndiinginc/server@1.0.0 start
> node index.js

{ address: '127.0.0.1', family: 'IPv4', port: 3000 }
```

## Pembaruan

```console
Ndiing@DESKTOP-GNTG2JS MINGW64 ~/Downloads/server (main)
$ npm update
npm WARN config global `--global`, `--local` are deprecated. Use `--location=glo
bal` instead.

up to date, audited 7 packages in 7s

found 0 vulnerabilities
```

## Dokumentasi

Dokumentasi penguna API

<dl>
<dt><a href="./api/sidompul/v1/README.md"><code>SiDOMPUL 4.4.0</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/digiposaja/v1/README.md"><code>digiposaja</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/simpel/v1/README.md"><code>simpel</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/rita/v1/README.md"><code>rita</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/sris/v1/README.md"><code>sris</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/mitratokopedia/v1/README.md"><code>mitratokopedia</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/mitrabukalapak/v1/README.md"><code>mitrabukalapak</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/mitrashopee/v1/README.md"><code>Mitra Shopee: Jual Pulsa, PPOB 1.46.0</code></a></dt>
<dd>Dibutuhkan login dengan penanganan khusus, download unofficial APK untuk <a href="./docs/"><code>Android 4.4+</code></a> atau <a href="./docs/"><code>Android 11+</code></a></dd>
</dl>
<dl>
<dt><a href="./api/kiosgamer/v1/README.md"><code>kiosgamer</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/griyabayar/v1/README.md"><code>griyabayar</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/agenbni46/v1/README.md"><code>agenbni46</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/whatsapp/v1/README.md"><code>whatsapp</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/telegram/v1/README.md"><code>telegram</code></a></dt>
<dd>Keterangan...</dd>
</dl>
<dl>
<dt><a href="./api/xmpp/v1/README.md"><code>xmpp</code></a></dt>
<dd>Keterangan...</dd>
</dl>

## Informasi

> Service ini dirancang dengan `Low Level Security`, seperti layaknya micro service pada umumnya, di desain untuk membatu server utama sebagai transport data, tentunya juga mengabaikan `XSS` untuk mensupport aplikasi lama dengan keterbatasan request dan callback response. dan juga fokus pada kecepatan dan ketepatan data.

> Keamanan data kredensial seperti session dan cookies ditanggung oleh pengguna, kami tidak menyimpan data tersebut, dan disimpan pada drive lokal, lokasi sementara `./data/{api-name}/{session-name}.json`

> Beberapa service mungkin dibutuhkan penanganan khusus, seperti resolve puzzle captcha, mempertimbangkan efisiensi kerja, fitur seperti automation tidak kami gunakan karna akan memperberat system dan juga kurang efektif untuk kinerja level ini.
