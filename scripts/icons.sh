#!/bin/bash
npm run lint:svg
npx spritesh --input ./src/assets/images/icons --output ./src/static/icons.svg
