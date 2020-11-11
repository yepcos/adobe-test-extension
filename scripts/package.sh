#!/bin/bash

TIMESTAMP=`date +%Y%m%d_%H%M%S`
./scripts/ZXPSignCmd -sign ./ package/yepco-test-extension.$TIMESTAMP.zxp package/yepco.p12 autolog
