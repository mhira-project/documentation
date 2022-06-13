---
sidebar_position: 10
---

# Activating R-Studio to test reports

The installation comes with an `rstudio` docker container. 
This container is a great way to test and develop the reports which are based on R.
This article describes how to activate this container. 

RStudio this is not enabled by default. To enabled `rstudio` set the following values in your `.env` file.

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
    or
    https://{{yourMHIRAurlHERE}}/rstudio

