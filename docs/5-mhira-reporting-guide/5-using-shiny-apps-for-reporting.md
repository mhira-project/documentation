---
sidebar_position: 5
---

# Integrating Shiny Apps for Reporting with MHIRA

MHIRA supports interactive reporting through Shiny apps. Here's how to set up and manage Shiny apps within your MHIRA environment.

## Deploying Shiny Apps

### Setting the Shiny Apps Directory

To host your Shiny apps, place them in the directory indicated by the `SHINY_APPS_PATH` variable in your `.env` file. By default, this is set to:

```bash
~/shiny_apps
```

The tilde (~) symbol represents your user's home directory. For example, if your username is `john`, the path `~/shiny_apps` would translate to `/home/john/shiny_apps` on most Unix-based systems.

### Cloning a Shiny App Repository

You can easily clone existing Shiny apps into this directory. For example, to clone the MHIRA data export app, navigate to your Shiny apps directory and run:

```bash
git clone https://github.com/mhira-project/data-export.git
```

This will create a `data-export` folder within your `~/shiny_apps` directory containing all the files from the repository.

### Accessing Your Shiny App

After deployment, your Shiny app can be accessed via the following URL format:

```bash
https://yourMHIRAdomain/shiny/nameOFyourSHINYapp
```

## Dashboard Integration

To link your Shiny app within the MHIRA dashboard, consult the admin reports guide or refer to the following section:

### Adding a button in MHIRA to connect to your app

Please consult [this section](../3-guide-for-admins/10-reports.md).

## R Package Management

If your Shiny apps require additional R packages, append them to the Dockerfile used for building the Shiny server container or refer to the following section:

### Adding R packages to the shiny server

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

## Access to GraphQL API

For accessing the GraphQL API from within shiny server and RStudio server, please refer to the section about the [GraphQL API](3-graphql_api.md).

## Troubleshooting

For troubleshooting Shiny app issues, there are a few strategies you can use:

### Using Docker Logs

If you want to see output from the shiny app, you can attach the container to your terminal using Docker logs. For instructions on how to use Docker logs, you can refer to the official documentation [here](https://docs.docker.com/engine/reference/commandline/logs/).

### RStudio Container

Else, we recommend to run the app via the RStudio container and use debugging and breakpoints. Detailed logs and debugging tools are available in RStudio to help diagnose and fix problems.

This streamlined process ensures your Shiny apps are effectively incorporated into MHIRA's reporting capabilities.


