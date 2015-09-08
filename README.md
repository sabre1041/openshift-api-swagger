openshift-api-swagger
=================

Visualization of the OpenShift V3 Rest API using [Swagger](http://swagger.io)


# Overview

This application provides an interface to the OpenShift V3 Rest API. It can be run either on a local machine, deployed to an Application server or within Docker. 

The Swagger UI communicates to OpenShift via REST. 


# Authentication

The base endpoints and a selection of method invocations do not require any form of authentication. However, to take advantage of invoking additional methods, an authentication token for a user associated within OpenShift needs to be retrieved and configured in the Swagger UI

## Retrieving an Authentication Token

The OpenShift CLI can be used to obtain an authentication token that can used in the Swagger UI. If you do not have the CLI installed, go here to download the client for your particular platform

First, make sure your user is logged in

```oc login <server>```

Once your user has been logged in, you can obtain the authentication token from this session 

```oc whoami -t``

This will print out the authentication token which you can input into the Swagger UI in a subsequent step.

# Running

The easiest way to get started is to clone this repository to your local machine and launching the *index.html* page

At the top of the page, you are presented with a series of textbooks and dropdown. 

* **OpenShift Master URL** - HTTP endpoint for OpenShift Master. For example https://master.ose.example.com
* **API Type**: Chose the API that you would like to browse (OpenShift or Kubernetes)
* **API Version** - Choose the API version you would like to browse
* **User Token** - Enter the value of the token for the authenticated user obtained in the previous step

Hit the **Explore** to begin traversing the API. Consult the [Swagger Documentation](http://swagger.io/getting-started/)on how to use the Swagger UI. 


