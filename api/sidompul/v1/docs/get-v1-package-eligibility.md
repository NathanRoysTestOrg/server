## getV1PackageEligibility
Cek Transfer Kuota eligibility&#x3D;(A),B A&#x3D;Pengirim B&#x3D;Penerima

### Target
```
GET /api/sidompul/v1/getV1PackageEligibility
```

### Parameters
Name | Value
--- | ---
profileDirectory|{{profileDirectory}}
msisdn|
eligibility|A,B



### Examples
Cek Transfer Kuota eligibility&#x3D;(A),B A&#x3D;Pengirim B&#x3D;Penerima
```
GET http://localhost:3000/api/sidompul/v1/getV1PackageEligibility?profileDirectory={{profileDirectory}}&msisdn=&eligibility=A
```

Cek Transfer Kuota eligibility&#x3D;A,(B) A&#x3D;Pengirim B&#x3D;Penerima
```
GET http://localhost:3000/api/sidompul/v1/getV1PackageEligibility?profileDirectory={{profileDirectory}}&msisdn=&eligibility=B
```

