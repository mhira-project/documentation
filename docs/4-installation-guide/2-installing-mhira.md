---
sidebar_position: 2
---


#  Installing MHIRA 

MHIRA can be installed from docker containers using docker-compose. 
The following page will walk you through the installation process.
[Here](https://github.com/mhira-project/mhira-docker) you fill find the github repository containing the docker-compose setup. 

## Pre-requisites

You will need to install docker and docker-compose:

### Docker

* Docker installation instruction can be found [here](https://docs.docker.com/engine/install/)

* Consider executing the [post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/) e.g., adding your user to a docker group and setting docker to re-start automatically. 

### Docker-compose

You can check whether you already have docker compose with:

    docker compose version

In case docker compose is not installed, [installation instructions can be found here](https://docs.docker.com/compose/install/)

:::tip

To avoid issues, check whether your docker and docker-compose versions are up to date. 

:::

## Installation of MHIRA

### Cloning the docker setup from github

Clone [this](https://github.com/mhira-project/mhira-docker) repository to your machine

    git clone https://github.com/mhira-project/mhira-docker.git

### Creating the environment (.env) file 


Navigate into the `mhira-docker` folder

    cd mhira-docker

Copy example `environment` file to create your own config

    cp env-example .env

### Setting the JWT Secret in the .env file

Change the line `JWT_SECRET=changeMe` after the equal sign to set the secret key, which is a 32 character string. Run this line in order to change it into a randomly generated key.

    sed -i "s|changeMe|$(openssl rand -base64 32)|" .env

### Data Storage Location

The location where mhira-docker installation will store data (i.e., the location of the mongodb and postgres databases) is controlled by the environment variable `DATA_SAVE_PATH` in the .env file.

```dotenv
# Default location under current user home directory
DATA_SAVE_PATH=~/.mhira-docker/data
```
This is where all stateful containers (containers which persist data) will store their configuration and data.

In a typical installation, the folder contents will be as listed below.

![Data-Directory](./img/data-directory.png "Data Directory")


:::warning Important note on MHIRA running user context
As the default data directory is a relative path to the current user's home directory, the user under which `MHIRA` is running is of importance.
For example: 'docker compose' is run as root user, the data save path will be under the root user's home directory, i.e: `/root/.mhira-docker/data`.
Switching a running instance of mhira to another user can result in apparent data loss, as the new user context will create a new data directory under their home directory, which will not include data from the old data directory.
To avoid this, you can replace the `DATA_SAVE_PATH` with an absolute path pointing to a directory of your choice for persisting data.
:::

### Settings passwords for the databases

For mongodb

    ```dockerfile
    ### MONGODB ############################################################################################################

    MONGODB_PORT=27017
    MONGODB_CONNECTION_STRING=mongodb://mongo:27017/questionnaireDB
    ```

For postgres (contains patient identifying information and user information)

    ```dockerfile
    ### POSTGRES ###########################################################################################################

    POSTGRES_HOST=postgres
    POSTGRES_DB=default
    POSTGRES_USER=default
    POSTGRES_PASSWORD=secret
    POSTGRES_PORT=5432
    ```

:::caution

Not setting the database passwords can compromise the security of the application. Please use strong passwords. 

:::

:::warning

Losing these database passwords means losing your data. Make sure to save them (in a secure and permanent location you have access to).

:::


### Setting access of MHIRA and HTTPS Certificates in the .env file

To access MHIRA software from outside of the server, set `SITE_DOMAIN` in your environment file to the externally accessible domain name or IP address of the server.

    # Site domain as domain name
    SITE_DOMAIN=mhira.myorganization.com

    # Or Site domain as server's external IP address
    SITE_DOMAIN=192.168.10.2

    # Also supports multiple domain names or combination of IP address and domains, with comma separation
    SITE_DOMAIN=mhira.myorganization.com, 10.0.0.2

:::note
- If using a publicly accessible domain name as `SITE_DOMAIN`, the bundled in [Caddy](https://caddyserver.com/) webserver will automatically provision a trusted HTTPS certificate for the domain.

- If using an internal domain name or IP address as `SITE_DOMAIN`, the webserver will provision a self-signed certificate. Users will be faced with a security warning when accessing the site using self-signed certificate, and will need to accept/trust the certificate to access the site.
:::

### Initialising MHIRA

After setting up the .env file, start docker compose to initialize MHIRA

    docker compose pull
    docker compose up --build -d

If the above steps ran successfully, you should now be able to access the mhira application under the url(s) set as `SITE_DOMAIN`.

    e.g., https://localhost, https://mhira.myorganization.com or https://192.168.10.2

:::note

Later changes to the .env file come into effect by restarting the containers 

   docker compose stop
   docker compose up -d

:::


## Updating your installation


To update your existing installation to a newer version of MHIRA software, execute following commands (you need to be in the folder with the docker compose .yml file)
   
    # Pull latest docker config
    git pull


:::tip

The .env example file might have changed with the update, potentially leading to missing or superflous environment variables.
If a variable is missing, docker compose will output the corresponding error.
Please compare your old and the new environment variables for discrepancies.
Make sure to take a copy of your old .env settings. 

:::

    # Pull latest docker images
    docker compose pull  

    # It is recommended to first stop the containers
    docker compose stop 

    # Restart containers with updated images and config   
    docker compose up -d --build --remove-orphan

:::tip

Old docker images and containers can take quite some space on your system. If this is a concern, you can prune unrequired elements.

    docker system prune -a

:::

