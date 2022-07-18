---
sidebar_position: 3
---

# GraphQL API 

The reporting app will need to request data via MHIRA's API.
This API uses the [GraphQL query language](https://graphql.org/). 
We recommend to look into the materials and examples on the this websit for a deeper understaning of the query language. 
Sofware packages to handle the GraphQL server side and client side are available. 
The reporting tool in MHIRA is a client while the server side is part of MHIRA. 

For our R implementation, we used [this](https://gist.github.com/rentrop/83cb1d8fc8593726a808032e55314019) R function. 

# Access token

To get access to MHIRA's API, you will need a valid JWT access token. This token is obtained when logging into MHIRA with valid credentials (username and password). The token is saved in the session of the browser and is available for all websites running on the same domain. 
As the reporting app is served from the same domain, it can use the access token in the browswer session.   

# Accessing the API from other contaiers

Via the docker container network, the graphQL API can be accessed with the URL 'mhira-backend:3000/graphql'

# Playground

In the .env file the graphQL playground can be activated by setting


    GRAPHQL_PLAYGROUND_ENABLED=true






