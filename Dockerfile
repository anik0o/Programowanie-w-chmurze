#Podanie obrazu bazowego
FROM node:16
# Stworzenie katalogu zrodlowego
WORKDIR /usr/src/app
# Zainstalowanie zaleznosci aplikacji opisanych w pliku package.json i package-lock.json
COPY package*.json ./

RUN npm install

# Kopiowanie zawartosci ze sciezki zrodlowej
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]