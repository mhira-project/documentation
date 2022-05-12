# Shiny patient reporting tool

:::tip
This documenation refers to [this repository](https://github.com/mhira-project/patient-report)
:::


This is a shiny app which serves as a patient data reporting tool for the Mental Health Information Reporting Assisitant (MHIRA).  
MHIRA allows for the connection of external apps for reporting by adding these apps to the [docker setup](https://www.docker.com/) in which MHIRA is shipped.
In this case, reporting is done with [shiny](https://www.rstudio.com/products/shiny/shiny-server/).

## How it works

The [MHIRA docker installation](https://github.com/mhira-project/mhira-docker) comes with a shiny server in a [docker container](https://hub.docker.com/r/rocker/shiny-verse).

When installing MHIRA, settings can be modified in the .env file (see [MHIRA installation reporitory](https://github.com/mhira-project/mhira-docker)).
The .env file contains the setting for the data save path. 

After installation of MHIRA, you will find a folder called 'shiny' under the data save path. Under the default settings, this will be: '.mhira-docker/data/shiny' in your home directory. 
For the app in the current repository to work, you need to copy it to the 'apps' folder inside this folder.

It should then look like this: 

'.mhira-docker/data/shiny/apps/patient-report'

A good way to achive this is to navigate to '.mhira-docker/data/shiny/apps/' and then to clone the current repository

For example 
'git clone https://github.com/mhira-project/patient-report.git'

Now the shiny app should be available under the url 'localhost/shiny' which you can enter to your local browser. 

The app will not yet work, because it expects addtional parameters in the url. 

You can start the shiny app from within MHIRA pressing the connected reporting button. This will redirect you to the shiny app you just installed. 


## Troubleshooting of the shiny app in the shiny container

If you want to see output from the shiny app you can attach the container to your terminal using 

Intructions can be found [here](https://docs.docker.com/engine/reference/commandline/logs/)