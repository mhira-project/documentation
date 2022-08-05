---
sidebar_position: 5
---

# Using shiny apps for reporting

[As discussed](/docs/mhira-reporting-guide/overview), MHIRA allows for the connection of external apps for reporting.

By default, MHIRA comes with a [shiny server](https://www.rstudio.com/products/shiny/shiny-server/) in form of a [docker container containing the shiny server](https://hub.docker.com/r/rocker/shiny). The docker setup also comes with an rstudio server to facilitate setting up the shiny apps. The rstudio container is disabled by default and needs to be activated [as discribed in here](/docs/installation-guide/rstudio). To reduce attack surface, it is recommended to disable rstudio during production. 

## Adding a shiny app to the shiny server in the MHIRA setup.

Shiny apps need to be added to the folder '/srv/shiny-server/' inside the shiny docker container ([see rocker/shiny documentation](https://hub.docker.com/r/rocker/shiny)).
In our MHIRA setup, they need to be added to '/srv/shiny-server/shiny' (this is related to serving the url of the server via the caddy server). 
We have connected this location to a [mounted docker volume](https://docs.docker.com/storage/volumes/), meaning that a folder on the host (server) is synced with this folder. You can change the corresponding variable in the .env file to adjust the path: 

    
  ### SHINY ############################################################

  SHINY_APPS_PATH=~/shiny_apps
    
Addtionally, the rstudio container will have access to the same volume. Thus, using the rstudio server, you can modify the shiny app directly in this folder. The app will then be shared with the shiny server via the docker volume. 

## Access the shiny app via URL

The shiny app can now be accessed under this url: 

  https://yourMHIRAdomain/shiny/nameOFyourSHINYapp 

## Adding a button in MHIRA to connect to your app

Please consult [this section](../3-guide-for-admins/10-reports.md).

## Access to graphQL API from within shiny server and rstudio server

Please refer to the section about the [graphql API](3-graphql_api.md)

## Adding R packages to the shiny server

Packages can be added via the [shiny server docker file](https://github.com/mhira-project/mhira-docker/blob/main/shiny/Dockerfile) with the [install2.R command](https://rocker-project.org/use/extending#install2.r).  

 
  ```dockerfile
  RUN install2.r --error \
    --deps FALSE \
    data.table \
    RColorBrewer \
    httr \
    shinydashboard \
    tidyjson \
    jsonlite \
    htmlwidgets \
    DT \
    crosstalk
  ```

## Troubleshooting of the shiny app in the shiny container

If you want to see output from the shiny app you can attach the container to your terminal using the
intructions found [here](https://docs.docker.com/engine/reference/commandline/logs/). 
Else, we recommend to run the app via the rstudio container and use debugging and break points. 


