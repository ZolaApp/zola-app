#!/bin/bash
npx svgo -f src/assets/images/icons \
  --pretty --indent=2 --enable=removeTitle --disable=removeViewBox
