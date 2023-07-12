openshift-api-swagger
=================

Visualization of the OpenShift V4 Rest API using [Swagger](http://swagger.io)


# Overview

This application provides an interface to the OpenShift V3 Rest API. It can be run either on a local machine, deployed to an Application server or within Docker. 

The Swagger UI communicates to OpenShift via REST. 


# Authentication

The base endpoints and a selection of method invocations do not require any form of authentication. However, to take advantage of invoking additional methods, an authentication token for a user associated within OpenShift needs to be retrieved and configured in the Swagger UI

## Retrieving an Authentication Token

The OpenShift CLI can be used to obtain an authentication token that can used in the Swagger UI. If you do not have the CLI installed, go here to download the client for your particular platform

First, make sure your user is logged in

```
oc login <server>
```

Once your user has been logged in, you can obtain the authentication token from this session 

```
oc whoami -t
```

This will print out the authentication token which you can input into the Swagger UI in a subsequent step.

# Running

The easiest way to get started is to clone this repository to your local machine and launching the *index.html* page within the `swagger-dist` directory.

At the top of the page, you are presented with two input fields: 

* **OpenShift OpenAPI  URL** - HTTP endpoint for OpenShift OpenShift OpenAPI endpoint. For example https://api.openshift.example.com/openapi/v2
* **OAuth Token** - Enter the value of the token for the authenticated user obtained in the previous step

Hit the **Explore** to begin traversing the API. Consult the [Swagger Documentation](http://swagger.io/getting-started/)on how to use the Swagger UI. 

If the Swagger spec fails to load, you may need to configure OpenShift to support [cross-origin](http://www.w3.org/TR/cors/) requests. Additional steps are found in the OpenShift [documentation](https://docs.openshift.com/container-platform/4.13/security/allowing-javascript-access-api-server.html).

# Deployment to OpenShift

A [template](https://docs.openshift.com/container-platform/4.13/openshift_images/using-templates.html) is available for a streamlined deployment to OpenShift. Use the following steps to deploy the application:

Login to a cluster and create a new project:

```
oc new-project <project-name>
```

Instantiate the [openshift-api-swagger](openshift-api-swagger-template.yml) template:

```
oc process -f openshift-api-swagger-template.yml | oc apply -f-
```

Navigate to _host_ specified in the route that has been created:

```
oc get routes openshift-api-swagger
```