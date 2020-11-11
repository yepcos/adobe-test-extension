#!/bin/bash

sudo mkdir -p "/Library/Application Support/Adobe/CEP/extensions/adobe-test-extension"
sudo cp -R "./." "/Library/Application Support/Adobe/CEP/extensions/adobe-test-extension"
sudo cp "./.debug" "/Library/Application Support/Adobe/CEP/extensions/adobe-test-extension/.debug"
