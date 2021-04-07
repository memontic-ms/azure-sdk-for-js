// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 *  Demonstrates the operations of the Azure Communication Services Resource Provider
 */

import { DefaultAzureCredential } from "@azure/identity";
import { ResourceManagementClient } from "@azure/arm-resources";
import { NotificationHubsManagementClient } from "@azure/arm-notificationhubs";
import {
  CommunicationServiceManagementClient,
  CommunicationServiceManagementModels,
  CommunicationServiceManagementMappers
} from "@azure/arm-communication";

// Load the .env file if it exists
import dotenv from "dotenv";
dotenv.config();

const randSuffix = Math.random().toString(16).substr(2, 8);

// Envrionment variables required to authenticate with a service principle and secret
// These values will be processed by DefaultAzureCredential for authentication
// AZURE_CLIENT_ID
// AZURE_CLIENT_SECRET
// AZURE_TENANT_ID
// AZURE_SUBSCRIPTION_ID

const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

const resourceGroupName = "rg-test-js-" + randSuffix;
const resourceGroupLocation = "westus";
const location = "global";
const dataLocation = "UnitedStates";

async function main() {
  // Authenticate with Azure Identity library using DefaultAzureCredential 
  const credential = new DefaultAzureCredential();

  // Create resource group that will contain the Communication resources that we will create later
  const resourceClient = new ResourceManagementClient(credential, subscriptionId);
  console.log("The result of resource group creation is...");
  const result = await resourceClient.resourceGroups.createOrUpdate(resourceGroupName, { "location": resourceGroupLocation });
  console.log(result);

  await runSample().catch((error) => {
    console.error("Unexpected error during runSample");
    console.error(error);
  });

  // Clean up everything
  // This may take a while to finish
  console.log("Starting clean up");
  await resourceClient.resourceGroups.deleteMethod(resourceGroupName);
  console.log("Clean up complete");
}

async function getNotificationHubParameters() {
  const credential = new DefaultAzureCredential();

  const namespaceName = "test-namespace-for-comm-" + randSuffix;
  const notificationHubName = "test-notification-hub-for-comm-" + randSuffix;
  const notificationHubsClient = new NotificationHubsManagementClient(credential, subscriptionId);

  // Create Namespace
  var result = await notificationHubsClient.namespaces.createOrUpdate(resourceGroupName, namespaceName, { "location": resourceGroupLocation });

  // Create Notification Hub
  const notificationHub = await notificationHubsClient.notificationHubs.createOrUpdate(resourceGroupName, namespaceName, notificationHubName, { "location": resourceGroupLocation });

  // Create Authorization Rule
  var authorizationRule = { "rights": ["Listen"] };
  var authorizationRuleName = "MgmtCommunicationLinkNotificationHub";
  result = await notificationHubsClient.notificationHubs.createOrUpdateAuthorizationRule(
    resourceGroupName,
    namespaceName,
    notificationHubName,
    authorizationRuleName,
    { "properties": authorizationRule }
  )

  // Obtain connection string
  const keys = await notificationHubsClient.notificationHubs.listKeys(
    resourceGroupName,
    namespaceName,
    notificationHubName,
    authorizationRuleName
  )

  return { "resourceId": notificationHub.id, "connectionString": keys.primaryConnectionString };
}

async function runSample() {
  console.log("\n== Communication Management Javascript Sample ==\n");

  const credential = new DefaultAzureCredential();

  // Create client
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);

  // List client operations
  console.log("The result of list operations is:");
  var result = await client.operations.list();
  console.log(result);

  // Create Communication resource
  const communicationServiceName = "test-js-" + randSuffix;
  console.log("The result of createOrUpdate is...");
  result = await client.communicationService.createOrUpdate(resourceGroupName, communicationServiceName, { "parameters": { "location": location, "dataLocation": dataLocation } });
  console.log(result);

  // Get Communication resource
  console.log("The result of get is...");
  result = await client.communicationService.get(resourceGroupName, communicationServiceName);
  console.log(result);

  // Update Communication resource
  const tags = { "tags": { "tag1": "tag1val", "tag2": "tag2val" } };
  console.log("The result of update is...");
  result = await client.communicationService.update(resourceGroupName, communicationServiceName, { "parameters": tags });
  console.log(result);

  // List by Subscription
  console.log("The result of listBySubscription is...");
  result = await client.communicationService.listBySubscription();
  console.log(result);

  // List by Resource Group
  console.log("The result of listByResourceGroup is...");
  result = await client.communicationService.listByResourceGroup(resourceGroupName);
  console.log(result);

  // List Keys
  console.log("The result of listKeys is...");
  result = await client.communicationService.listKeys(resourceGroupName, communicationServiceName);
  console.log(result);

  // Regenerate Keys
  console.log("The result of regenerateKey (Primary) is...");
  result = await client.communicationService.regenerateKey({ "keyType": "Primary" }, resourceGroupName, communicationServiceName);
  console.log(result);

  console.log("The result of regenerateKey (Secondary) is...");
  result = await client.communicationService.regenerateKey({ "keyType": "Secondary" }, resourceGroupName, communicationServiceName);
  console.log(result);

  // Link Notification Hub
  console.log("The result of linkNotificationHub is...");
  const linkNotificationHubParameters = await getNotificationHubParameters();
  result = await client.communicationService.linkNotificationHub(resourceGroupName, communicationServiceName, { "linkNotificationHubParameters": linkNotificationHubParameters });
  console.log(result);

  // Delete Communication resource
  // This may take a while to finish
  console.log("The result of deleteMethod is...");
  result = await client.communicationService.deleteMethod(resourceGroupName, communicationServiceName);
  console.log(result);
}

main().catch((error) => {
  console.error("Unexpected error");
  console.error(error);
});
