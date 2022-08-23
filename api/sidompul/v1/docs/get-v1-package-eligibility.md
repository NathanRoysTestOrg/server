## getV1PackageEligibility
Cek Transfer Kuota (Nomor Pengirim)

### Target
```
GET /api/sidompul/v1/getV1PackageEligibility
```

### Parameters
Name | Default | Description
--- | --- | ---
profileDirectory||
msisdn||
eligibility||



### Examples
Cek Transfer Kuota (Nomor Pengirim)
```
GET http://localhost:3000/api/sidompul/v1/getV1PackageEligibility?profileDirectory={{profileDirectory}}&msisdn=&eligibility=A
```

Cek Transfer Kuota (Nomor Penerima)
```
GET http://localhost:3000/api/sidompul/v1/getV1PackageEligibility?profileDirectory={{profileDirectory}}&msisdn=&eligibility=B
```

