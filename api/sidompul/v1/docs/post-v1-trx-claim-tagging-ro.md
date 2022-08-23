## postV1TrxClaimTaggingRo
Tagging HOT SP

### Target
```
GET /api/sidompul/v1/postV1TrxClaimTaggingRo
```

### Parameters
Name | Default | Description
--- | --- | ---
profileDirectory|{{profileDirectory}}|
inputValidation||
msisdn||
pin|{{pin}}|
programId||
programType|SP|



### Examples
Tagging HOT SP
```
GET http://localhost:3000/api/sidompul/v1/postV1TrxClaimTaggingRo?profileDirectory={{profileDirectory}}&inputValidation=&msisdn=&pin={{pin}}&programId=&programType=SP
```

Tagging HOT Voucher
```
GET http://localhost:3000/api/sidompul/v1/postV1TrxClaimTaggingRo?profileDirectory={{profileDirectory}}&inputValidation=&msisdn=&pin={{pin}}&programId=&programType=VOUCHER
```

Tagging HOT Bundling
```
GET http://localhost:3000/api/sidompul/v1/postV1TrxClaimTaggingRo?profileDirectory={{profileDirectory}}&inputValidation=&msisdn=&pin={{pin}}&programId=&programType=SPBUNDLING
```

