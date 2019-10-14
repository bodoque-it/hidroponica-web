# docker

luego de tener las dependencias se debe crear un build de la app 
```bash
npm run build
``` 
para luego construir la imagen y correarla
```bash
docker build -t hidro-react .

docker run -p 8000:80 hidro-react
```