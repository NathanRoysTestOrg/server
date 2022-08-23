## getV2CommonVoucherSa
Cek Status Voucher &gt; Voucher Xl

### Target
```
GET /api/sidompul/v1/getV2CommonVoucherSa
```

### Parameters
Name | Default | Description
--- | --- | ---
profileDirectory|{{profileDirectory}}|
type|HYBRID,AIGO|
voucherCode|1234567891234567|



### Examples
Cek Status Voucher &gt; Voucher Xl
```
GET http://localhost:3000/api/sidompul/v1/getV2CommonVoucherSa?profileDirectory={{profileDirectory}}&type=SA&voucherCode=1234567891234567
```

Cek Status Voucher &gt; SPWL Hybrid
```
GET http://localhost:3000/api/sidompul/v1/getV2CommonVoucherSa?profileDirectory={{profileDirectory}}&type=HYBRID&voucherCode=1234567891234567
```

Cek Status Voucher &gt; AIGO
```
GET http://localhost:3000/api/sidompul/v1/getV2CommonVoucherSa?profileDirectory={{profileDirectory}}&type=AIGO&voucherCode=1234567891234567
```

