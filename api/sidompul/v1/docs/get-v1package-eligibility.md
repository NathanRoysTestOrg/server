# /getV1PackageEligibility
Cek Transfer Kuota eligibility&#x3D;A,B A&#x3D;Pengirim B&#x3D;Penerima


## Target
```
GET /getV1PackageEligibility
```

### Parameters
Name | Default | Description
--- | --- | ---
profileDirectory | {{profileDirectory}} | 
msisdn | undefined | 
eligibility | A | 





## Examples
Cek Transfer Kuota eligibility&#x3D;A,B A&#x3D;Pengirim B&#x3D;Penerima

```
GET http://localhost:3000/api/sidompul/v1/getV1PackageEligibility?profileDirectory={{profileDirectory}}&msisdn=&eligibility=A


```

Cek Transfer Kuota eligibility&#x3D;A,B A&#x3D;Pengirim B&#x3D;Penerima

```
GET http://localhost:3000/api/sidompul/v1/getV1PackageEligibility?profileDirectory={{profileDirectory}}&msisdn=&eligibility=B


```

