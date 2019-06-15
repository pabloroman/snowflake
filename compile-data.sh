#!/bin/bash

rm -rf target
mkdir target
cat data/*.yaml | \
  python3 -c 'import sys, yaml, json; json.dump(yaml.load(sys.stdin), sys.stdout, indent=4)' \
  > target/data.json

echo "export const compiledTracks = " > data.js
cat target/data.json >> data.js
