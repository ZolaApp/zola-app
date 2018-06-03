#!/bin/bash
npx svgo -f ./src/assets/icons \
  --pretty --indent=2 --enable=removeTitle --disable=removeViewBox
