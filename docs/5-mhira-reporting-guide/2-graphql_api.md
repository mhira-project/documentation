---
sidebar_position: 2
---

# GraphQL API 

The reporting app will need to request data via MHIRA's API.
This API uses the [GraphQL query language](https://graphql.org/). 
We recommend to look into the materials and examples on the this websit for a deeper understaning of the query language. 
Sofware packages to handle the GraphQL server side and client side are available. 
The reporting tool in MHIRA is a client while the server side is part of MHIRA. 

For our R implementation, we used [this](https://gist.github.com/rentrop/83cb1d8fc8593726a808032e55314019) R function. 

The authentitation token needed to access MHIRA via this API needs to be retrieved from the browser session of the user requesting a report. 

## Playground







