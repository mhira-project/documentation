---
sidebar_position: 1
---

# Requirements

## Server

We recommend a server with 4 GB of random access memroy (RAM).
For MHIRA and its data 10 GB of free disk space are recommended. (depending of the number of users)

We have tested running MHIRA on machines with 1 GB of RAM and 2 vCPU (e.g., AWS t3.micro) or 1 GB RAM and 1 vCPU (e.g., basic digital ocean droplet).
This works fine for MHIRA. However, occasionally, using RStudio and shiny might lead to overloading the RAM.
This can be mitigated by installing a (e.g., 1GB) [SWAP](https://linuxize.com/post/how-to-add-swap-space-on-ubuntu-20-04/) for managing overflow. 

The requirements will depend on the number of parallel users of your use case.

## Client

The client should run an up to date version of an internet browser. 
While MHIRA should work with most avaiable browsers, we have tested with google chrome and recommend the usage of this browser. 

## Network 

A stable network with required for running MHIRA storing data requires an active connection. 
MHIRA does not cache data on the client device.
Addtionally, a domain and an active SSL certificate is required as MHIRA should run using Hypertext Transfer Protocol Secure (https).

# Backup

An external backup location is recommended. 