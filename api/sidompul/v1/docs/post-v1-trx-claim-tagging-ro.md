## /postV1TrxClaimTaggingRo
Tagging HOT programType&#x3D;(SP),VOUCHER,SPBUNDLING

### Target
```
GET /api/sidompul/v1/postV1TrxClaimTaggingRo
```

### Parameters
Name | Value
--- | ---
profileDirectory|{{profileDirectory}}
inputValidation|
msisdn|
pin|{{pin}}
programId|
programType|SP,VOUCHER,SPBUNDLING



### Examples
Tagging HOT programType&#x3D;(SP),VOUCHER,SPBUNDLING
```
GEThttp://localhost:3000/api/sidompul/v1/postV1TrxClaimTaggingRo?profileDirectory={{profileDirectory}}&inputValidation=&msisdn=&pin={{pin}}&programId=&programType=SP


```

Tagging HOT programType&#x3D;SP,(VOUCHER),SPBUNDLING
```
GEThttp://localhost:3000/api/sidompul/v1/postV1TrxClaimTaggingRo?profileDirectory={{profileDirectory}}&inputValidation=&msisdn=&pin={{pin}}&programId=&programType=VOUCHER


```

Tagging HOT programType&#x3D;SP,VOUCHER,(SPBUNDLING)
```
GEThttp://localhost:3000/api/sidompul/v1/postV1TrxClaimTaggingRo?profileDirectory={{profileDirectory}}&inputValidation=&msisdn=&pin={{pin}}&programId=&programType=SPBUNDLING


```

