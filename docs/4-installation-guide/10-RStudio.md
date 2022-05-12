---
sidebar_position: 10
---

# R-Studio to test reports

The installation comes with bundled in `rstudio` container.

The RStudio container may be useful for purposes of creating/editing custom reporting scripts using R.

RStudio this is not enabled by default. To enabled `rstudio` set following values in your `env` file.

```env
# To enable `rstudio` container uncomment the following line, that enables `rstudio` profile
#COMPOSE_PROFILES=rstudio

# uncomment the following line, and change the value after the equal sign to set the secret key. 
#RSTUDIO_PASSWORD=rstudioPassword
```

After setting above values run

```bash
docker-compose up -d
```


Accessing R-studio container

    https://localhost:8787 
    or 
    https://localhost/rstudio