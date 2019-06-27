#!/bin/bash
rsync -avz --exclude "node_modules" --exclude ".git" --exclude ".next" ./ frontend@dev.mthash.com:/home/frontend/www/