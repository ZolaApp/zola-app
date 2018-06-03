#!/bin/bash
npm run lint:svg
npx spritesh \
  --input ./src/assets/icons \
  --output ./src/static/icons.svg \
  --prefix icon-
