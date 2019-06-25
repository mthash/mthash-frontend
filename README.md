MT HASH Frontend

## Install dependencies

npm install

## Dev run

npm run dev

## Production run

npm run build
npm start

## Docker bundling

docker build --tag=mthash-front .
docker run -p 8080:8080 mthash-front
