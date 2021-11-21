
Programowanie w chmurze

# 3.
a.Zbudowanie obrazu kontenera wykonuję poleceniem: ``` docker build . -t serwer_1```

b.Uruchamiam kontener na podstawie zbudowanego obrazu poleceniem: ```docker run -p 4754:8080 -d --name kontener_1 serwer_1```

c.Uzyskuję informacje, ktore wygenerował serwer w trakcie uruchamiana kontenera, poleceniem:``` docker logs kontener_1```

d.Sprwadzenie, ile warstw posiada zbudowany obraz wykonuję poleceniem: ```docker inspect serwer_1```


# 4.
Istnieje możliwość zbudowania obrazu na podstawie bezpośredniego linku do Dockerfile'a z repozytorium GitHub, w tym celu należy użyć polecenia:``` docker build (kod URL do repozytorium Github)```

Stworzony obraz możemy przenieć na własne konto na DockerHub przy użyciu poleceń: ```docker tag (nazwa_obrazu):(nazwa_tagu) (nazwa_repozytorium):(nazwa_tagu) ```
                                                                                  ```docker push (nazwa_repozytorium):(NazwaTagu)```.
