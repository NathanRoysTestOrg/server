## getV3TrxHistory
Riwayat &gt; Riwayat Transaksi

### Target
```
GET /api/sidompul/v1/getV3TrxHistory
```

### Parameters
Name | Default | Description
--- | --- | ---
servicetype|w2p-fulfillment-w2w-other-payro|Input servicetype
startdate||Input startdate
enddate||Input enddate
q||Input q
startamount|100|Input startamount
endamount|1000000000|Input endamount



### Examples
Riwayat &gt; Riwayat Transaksi
```
GET http://localhost:3000/api/sidompul/v1/getV3TrxHistory?profileDirectory={{profileDirectory}}&servicetype=w2p-fulfillment-w2w-other-payro&startdate=2022-08-13&enddate=2022-08-19&q=&startamount=100&endamount=1000000000
```

