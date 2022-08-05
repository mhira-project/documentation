---
sidebar_position: 1
---

# Requirements

## An IT professional

Please consult an IT professional to make sure that your system is setup securly and in line with the relevant regulations.

## Server

We recommend a server with 4 GB of random access memroy (RAM).
For MHIRA and its data 10 GB of free disk space are recommended. Addtionally, you will need to calculate the space for the backups. MHIRA comes with daily backups activated and each daily backup can use up to 0.5 GB.

We have tested running MHIRA on machines with 1 GB of RAM and 2 vCPU (e.g., AWS t3.micro) or 1 GB RAM and 1 vCPU (e.g., basic digital ocean droplet).
This minimal setup is possible, however [SWAP memory](https://linuxize.com/post/how-to-add-swap-space-on-ubuntu-20-04/) (e.g., 1GB) for managing RAM overflow is recommended. 

The requirements will depend on the number of parallel users of your use case.

## Client

The client should run an up to date version of an internet browser. 
We have tested MHIRA with google chrome and recommend the usage of this browser. 

## Network 

:::warning
We recommend setting up MHIRA in a private network without the possiblity to access the software from the internet. 
This will provide an additional layer of data protection for the private health information. 
:::

A stable network connection is required for running MHIRA.
MHIRA does not cache data on the client device.
Addtionally, a domain and an active SSL certificate is required as MHIRA should run using Hypertext Transfer Protocol Secure (https).

# Backup

An external backup is recommended. 