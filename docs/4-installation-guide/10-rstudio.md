---
sidebar_position: 10
---

:::warning
The rstudio container should not be exposed in production when sensitive data is in the data bases. 
Please use this possiblity only for test purposes. 
:::


# Activating R-Studio to test reports

The installation comes with an [rstudio docker container](https://hub.docker.com/r/rocker/rstudio). 
This container is a great way to test and develop the reports which are based on R.
This article describes how to activate this container. 

RStudio is not enabled by default. To enabled `rstudio` set the following values in your `.env` file.

```env
# To enable `rstudio` container uncomment the following line, that enables `rstudio` profile
#COMPOSE_PROFILES=rstudio

# uncomment the following line, and change the value after the equal sign to set the secret key and the username. 
#RSTUDIO_PASSWORD=rstudioPassword
#RSTUDIO_USER=mhira # needs to match the user that started docker
```

:::note
In some cases, the rstudio user does not have write access to the 'shiny_apps' folder because it cannot write to the volume 'shiny apps'. In this case, it might be required to set the user name of the rstudio user to a linux user who has access to the location where the volume 'shiny_apps' is stored on the server. This seems to be some unexpected behavior of the dockerised version of rstudio.
:::


After setting above values run

```bash
docker compose stop
docker compose up -d
```

Accessing R-studio container

    https://localhost:8787 
    or 
    https://localhost/rstudio
    or
    https://{{yourMHIRAurlHERE}}/rstudio



