#!/bin/bash

yum install -y git-lfs
git lfs install
git lfs pull
npm run build
