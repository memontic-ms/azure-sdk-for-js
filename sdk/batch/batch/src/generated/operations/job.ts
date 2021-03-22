/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClient } from "../generatedClient";
import {
  CloudJob,
  JobListNextOptionalParams,
  JobListOptionalParams,
  JobListFromJobScheduleNextOptionalParams,
  JobListFromJobScheduleOptionalParams,
  JobPreparationAndReleaseTaskExecutionInformation,
  JobListPreparationAndReleaseTaskStatusNextOptionalParams,
  JobListPreparationAndReleaseTaskStatusOptionalParams,
  JobGetAllLifetimeStatisticsOptionalParams,
  JobGetAllLifetimeStatisticsResponse,
  JobDeleteOptionalParams,
  JobDeleteResponse,
  JobGetOptionalParams,
  JobGetResponse,
  JobPatchParameter,
  JobPatchOptionalParams,
  JobPatchResponse,
  JobUpdateParameter,
  JobUpdateOptionalParams,
  JobUpdateResponse,
  JobDisableParameter,
  JobDisableOptionalParams,
  JobDisableResponse,
  JobEnableOptionalParams,
  JobEnableResponse,
  JobTerminateOptionalParams,
  JobTerminateResponse,
  JobAddParameter,
  JobAddOptionalParams,
  JobAddResponse,
  JobListResponse,
  JobListFromJobScheduleResponse,
  JobListPreparationAndReleaseTaskStatusResponse,
  JobGetTaskCountsOptionalParams,
  JobGetTaskCountsResponse,
  JobListNextResponse,
  JobListFromJobScheduleNextResponse,
  JobListPreparationAndReleaseTaskStatusNextResponse
} from "../models";

/** Class representing a Job. */
export class Job {
  private readonly client: GeneratedClient;

  /**
   * Initialize a new instance of the class Job class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClient) {
    this.client = client;
  }

  /**
   * Lists all of the Jobs in the specified Account.
   * @param options The options parameters.
   */
  public list(
    options?: JobListOptionalParams
  ): PagedAsyncIterableIterator<CloudJob> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: JobListOptionalParams
  ): AsyncIterableIterator<CloudJob[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: JobListOptionalParams
  ): AsyncIterableIterator<CloudJob> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the Jobs that have been created under the specified Job Schedule.
   * @param jobScheduleId The ID of the Job Schedule from which you want to get a list of Jobs.
   * @param options The options parameters.
   */
  public listFromJobSchedule(
    jobScheduleId: string,
    options?: JobListFromJobScheduleOptionalParams
  ): PagedAsyncIterableIterator<CloudJob> {
    const iter = this.listFromJobSchedulePagingAll(jobScheduleId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listFromJobSchedulePagingPage(jobScheduleId, options);
      }
    };
  }

  private async *listFromJobSchedulePagingPage(
    jobScheduleId: string,
    options?: JobListFromJobScheduleOptionalParams
  ): AsyncIterableIterator<CloudJob[]> {
    let result = await this._listFromJobSchedule(jobScheduleId, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listFromJobScheduleNext(
        jobScheduleId,
        continuationToken,
        options
      );
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listFromJobSchedulePagingAll(
    jobScheduleId: string,
    options?: JobListFromJobScheduleOptionalParams
  ): AsyncIterableIterator<CloudJob> {
    for await (const page of this.listFromJobSchedulePagingPage(
      jobScheduleId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * This API returns the Job Preparation and Job Release Task status on all Compute Nodes that have run
   * the Job Preparation or Job Release Task. This includes Compute Nodes which have since been removed
   * from the Pool. If this API is invoked on a Job which has no Job Preparation or Job Release Task, the
   * Batch service returns HTTP status code 409 (Conflict) with an error code of
   * JobPreparationTaskNotSpecified.
   * @param jobId The ID of the Job.
   * @param options The options parameters.
   */
  public listPreparationAndReleaseTaskStatus(
    jobId: string,
    options?: JobListPreparationAndReleaseTaskStatusOptionalParams
  ): PagedAsyncIterableIterator<
    JobPreparationAndReleaseTaskExecutionInformation
  > {
    const iter = this.listPreparationAndReleaseTaskStatusPagingAll(
      jobId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPreparationAndReleaseTaskStatusPagingPage(
          jobId,
          options
        );
      }
    };
  }

  private async *listPreparationAndReleaseTaskStatusPagingPage(
    jobId: string,
    options?: JobListPreparationAndReleaseTaskStatusOptionalParams
  ): AsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation[]> {
    let result = await this._listPreparationAndReleaseTaskStatus(
      jobId,
      options
    );
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listPreparationAndReleaseTaskStatusNext(
        jobId,
        continuationToken,
        options
      );
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listPreparationAndReleaseTaskStatusPagingAll(
    jobId: string,
    options?: JobListPreparationAndReleaseTaskStatusOptionalParams
  ): AsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation> {
    for await (const page of this.listPreparationAndReleaseTaskStatusPagingPage(
      jobId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Statistics are aggregated across all Jobs that have ever existed in the Account, from Account
   * creation to the last update time of the statistics. The statistics may not be immediately available.
   * The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes.
   * @param options The options parameters.
   */
  getAllLifetimeStatistics(
    options?: JobGetAllLifetimeStatisticsOptionalParams
  ): Promise<JobGetAllLifetimeStatisticsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getAllLifetimeStatisticsOperationSpec
    ) as Promise<JobGetAllLifetimeStatisticsResponse>;
  }

  /**
   * Deleting a Job also deletes all Tasks that are part of that Job, and all Job statistics. This also
   * overrides the retention period for Task data; that is, if the Job contains Tasks which are still
   * retained on Compute Nodes, the Batch services deletes those Tasks' working directories and all their
   * contents.  When a Delete Job request is received, the Batch service sets the Job to the deleting
   * state. All update operations on a Job that is in deleting state will fail with status code 409
   * (Conflict), with additional information indicating that the Job is being deleted.
   * @param jobId The ID of the Job to delete.
   * @param options The options parameters.
   */
  delete(
    jobId: string,
    options?: JobDeleteOptionalParams
  ): Promise<JobDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<JobDeleteResponse>;
  }

  /**
   * Gets information about the specified Job.
   * @param jobId The ID of the Job.
   * @param options The options parameters.
   */
  get(jobId: string, options?: JobGetOptionalParams): Promise<JobGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<JobGetResponse>;
  }

  /**
   * This replaces only the Job properties specified in the request. For example, if the Job has
   * constraints, and a request does not specify the constraints element, then the Job keeps the existing
   * constraints.
   * @param jobId The ID of the Job whose properties you want to update.
   * @param jobPatchParameter The parameters for the request.
   * @param options The options parameters.
   */
  patch(
    jobId: string,
    jobPatchParameter: JobPatchParameter,
    options?: JobPatchOptionalParams
  ): Promise<JobPatchResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobId,
      jobPatchParameter,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      patchOperationSpec
    ) as Promise<JobPatchResponse>;
  }

  /**
   * This fully replaces all the updatable properties of the Job. For example, if the Job has constraints
   * associated with it and if constraints is not specified with this request, then the Batch service
   * will remove the existing constraints.
   * @param jobId The ID of the Job whose properties you want to update.
   * @param jobUpdateParameter The parameters for the request.
   * @param options The options parameters.
   */
  update(
    jobId: string,
    jobUpdateParameter: JobUpdateParameter,
    options?: JobUpdateOptionalParams
  ): Promise<JobUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobId,
      jobUpdateParameter,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateOperationSpec
    ) as Promise<JobUpdateResponse>;
  }

  /**
   * The Batch Service immediately moves the Job to the disabling state. Batch then uses the disableTasks
   * parameter to determine what to do with the currently running Tasks of the Job. The Job remains in
   * the disabling state until the disable operation is completed and all Tasks have been dealt with
   * according to the disableTasks option; the Job then moves to the disabled state. No new Tasks are
   * started under the Job until it moves back to active state. If you try to disable a Job that is in
   * any state other than active, disabling, or disabled, the request fails with status code 409.
   * @param jobId The ID of the Job to disable.
   * @param jobDisableParameter The parameters for the request.
   * @param options The options parameters.
   */
  disable(
    jobId: string,
    jobDisableParameter: JobDisableParameter,
    options?: JobDisableOptionalParams
  ): Promise<JobDisableResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobId,
      jobDisableParameter,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      disableOperationSpec
    ) as Promise<JobDisableResponse>;
  }

  /**
   * When you call this API, the Batch service sets a disabled Job to the enabling state. After the this
   * operation is completed, the Job moves to the active state, and scheduling of new Tasks under the Job
   * resumes. The Batch service does not allow a Task to remain in the active state for more than 180
   * days. Therefore, if you enable a Job containing active Tasks which were added more than 180 days
   * ago, those Tasks will not run.
   * @param jobId The ID of the Job to enable.
   * @param options The options parameters.
   */
  enable(
    jobId: string,
    options?: JobEnableOptionalParams
  ): Promise<JobEnableResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      enableOperationSpec
    ) as Promise<JobEnableResponse>;
  }

  /**
   * When a Terminate Job request is received, the Batch service sets the Job to the terminating state.
   * The Batch service then terminates any running Tasks associated with the Job and runs any required
   * Job release Tasks. Then the Job moves into the completed state. If there are any Tasks in the Job in
   * the active state, they will remain in the active state. Once a Job is terminated, new Tasks cannot
   * be added and any remaining active Tasks will not be scheduled.
   * @param jobId The ID of the Job to terminate.
   * @param options The options parameters.
   */
  terminate(
    jobId: string,
    options?: JobTerminateOptionalParams
  ): Promise<JobTerminateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      terminateOperationSpec
    ) as Promise<JobTerminateResponse>;
  }

  /**
   * The Batch service supports two ways to control the work done as part of a Job. In the first
   * approach, the user specifies a Job Manager Task. The Batch service launches this Task when it is
   * ready to start the Job. The Job Manager Task controls all other Tasks that run under this Job, by
   * using the Task APIs. In the second approach, the user directly controls the execution of Tasks under
   * an active Job, by using the Task APIs. Also note: when naming Jobs, avoid including sensitive
   * information such as user names or secret project names. This information may appear in telemetry
   * logs accessible to Microsoft Support engineers.
   * @param job The Job to be added.
   * @param options The options parameters.
   */
  add(
    job: JobAddParameter,
    options?: JobAddOptionalParams
  ): Promise<JobAddResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      job,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      addOperationSpec
    ) as Promise<JobAddResponse>;
  }

  /**
   * Lists all of the Jobs in the specified Account.
   * @param options The options parameters.
   */
  private _list(options?: JobListOptionalParams): Promise<JobListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<JobListResponse>;
  }

  /**
   * Lists the Jobs that have been created under the specified Job Schedule.
   * @param jobScheduleId The ID of the Job Schedule from which you want to get a list of Jobs.
   * @param options The options parameters.
   */
  private _listFromJobSchedule(
    jobScheduleId: string,
    options?: JobListFromJobScheduleOptionalParams
  ): Promise<JobListFromJobScheduleResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobScheduleId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listFromJobScheduleOperationSpec
    ) as Promise<JobListFromJobScheduleResponse>;
  }

  /**
   * This API returns the Job Preparation and Job Release Task status on all Compute Nodes that have run
   * the Job Preparation or Job Release Task. This includes Compute Nodes which have since been removed
   * from the Pool. If this API is invoked on a Job which has no Job Preparation or Job Release Task, the
   * Batch service returns HTTP status code 409 (Conflict) with an error code of
   * JobPreparationTaskNotSpecified.
   * @param jobId The ID of the Job.
   * @param options The options parameters.
   */
  private _listPreparationAndReleaseTaskStatus(
    jobId: string,
    options?: JobListPreparationAndReleaseTaskStatusOptionalParams
  ): Promise<JobListPreparationAndReleaseTaskStatusResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listPreparationAndReleaseTaskStatusOperationSpec
    ) as Promise<JobListPreparationAndReleaseTaskStatusResponse>;
  }

  /**
   * Task counts provide a count of the Tasks by active, running or completed Task state, and a count of
   * Tasks which succeeded or failed. Tasks in the preparing state are counted as running. Note that the
   * numbers returned may not always be up to date. If you need exact task counts, use a list query.
   * @param jobId The ID of the Job.
   * @param options The options parameters.
   */
  getTaskCounts(
    jobId: string,
    options?: JobGetTaskCountsOptionalParams
  ): Promise<JobGetTaskCountsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getTaskCountsOperationSpec
    ) as Promise<JobGetTaskCountsResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: JobListNextOptionalParams
  ): Promise<JobListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<JobListNextResponse>;
  }

  /**
   * ListFromJobScheduleNext
   * @param jobScheduleId The ID of the Job Schedule from which you want to get a list of Jobs.
   * @param nextLink The nextLink from the previous successful call to the ListFromJobSchedule method.
   * @param options The options parameters.
   */
  private _listFromJobScheduleNext(
    jobScheduleId: string,
    nextLink: string,
    options?: JobListFromJobScheduleNextOptionalParams
  ): Promise<JobListFromJobScheduleNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobScheduleId,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listFromJobScheduleNextOperationSpec
    ) as Promise<JobListFromJobScheduleNextResponse>;
  }

  /**
   * ListPreparationAndReleaseTaskStatusNext
   * @param jobId The ID of the Job.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListPreparationAndReleaseTaskStatus method.
   * @param options The options parameters.
   */
  private _listPreparationAndReleaseTaskStatusNext(
    jobId: string,
    nextLink: string,
    options?: JobListPreparationAndReleaseTaskStatusNextOptionalParams
  ): Promise<JobListPreparationAndReleaseTaskStatusNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      jobId,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listPreparationAndReleaseTaskStatusNextOperationSpec
    ) as Promise<JobListPreparationAndReleaseTaskStatusNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getAllLifetimeStatisticsOperationSpec: coreHttp.OperationSpec = {
  path: "/lifetimejobstats",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStatistics,
      headersMapper: Mappers.JobGetAllLifetimeStatisticsHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.timeout19],
  urlParameters: [Parameters.batchUrl],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId19,
    Parameters.returnClientRequestId19,
    Parameters.ocpDate19
  ],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs/{jobId}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.JobDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.timeout20],
  urlParameters: [Parameters.batchUrl, Parameters.jobId],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId20,
    Parameters.returnClientRequestId20,
    Parameters.ocpDate20,
    Parameters.ifMatch8,
    Parameters.ifNoneMatch8,
    Parameters.ifModifiedSince8,
    Parameters.ifUnmodifiedSince8
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs/{jobId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudJob,
      headersMapper: Mappers.JobGetHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.select2,
    Parameters.expand2,
    Parameters.timeout21
  ],
  urlParameters: [Parameters.batchUrl, Parameters.jobId],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId21,
    Parameters.returnClientRequestId21,
    Parameters.ocpDate21,
    Parameters.ifMatch9,
    Parameters.ifNoneMatch9,
    Parameters.ifModifiedSince9,
    Parameters.ifUnmodifiedSince9
  ],
  serializer
};
const patchOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs/{jobId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      headersMapper: Mappers.JobPatchHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  requestBody: Parameters.jobPatchParameter,
  queryParameters: [Parameters.apiVersion, Parameters.timeout22],
  urlParameters: [Parameters.batchUrl, Parameters.jobId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.clientRequestId22,
    Parameters.returnClientRequestId22,
    Parameters.ocpDate22,
    Parameters.ifMatch10,
    Parameters.ifNoneMatch10,
    Parameters.ifModifiedSince10,
    Parameters.ifUnmodifiedSince10
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs/{jobId}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.JobUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  requestBody: Parameters.jobUpdateParameter,
  queryParameters: [Parameters.apiVersion, Parameters.timeout23],
  urlParameters: [Parameters.batchUrl, Parameters.jobId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.clientRequestId23,
    Parameters.returnClientRequestId23,
    Parameters.ocpDate23,
    Parameters.ifMatch11,
    Parameters.ifNoneMatch11,
    Parameters.ifModifiedSince11,
    Parameters.ifUnmodifiedSince11
  ],
  mediaType: "json",
  serializer
};
const disableOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs/{jobId}/disable",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.JobDisableHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  requestBody: Parameters.jobDisableParameter,
  queryParameters: [Parameters.apiVersion, Parameters.timeout24],
  urlParameters: [Parameters.batchUrl, Parameters.jobId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.clientRequestId24,
    Parameters.returnClientRequestId24,
    Parameters.ocpDate24,
    Parameters.ifMatch12,
    Parameters.ifNoneMatch12,
    Parameters.ifModifiedSince12,
    Parameters.ifUnmodifiedSince12
  ],
  mediaType: "json",
  serializer
};
const enableOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs/{jobId}/enable",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.JobEnableHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.timeout25],
  urlParameters: [Parameters.batchUrl, Parameters.jobId],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId25,
    Parameters.returnClientRequestId25,
    Parameters.ocpDate25,
    Parameters.ifMatch13,
    Parameters.ifNoneMatch13,
    Parameters.ifModifiedSince13,
    Parameters.ifUnmodifiedSince13
  ],
  serializer
};
const terminateOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs/{jobId}/terminate",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.JobTerminateHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  requestBody: Parameters.jobTerminateParameter,
  queryParameters: [Parameters.apiVersion, Parameters.timeout26],
  urlParameters: [Parameters.batchUrl, Parameters.jobId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.clientRequestId26,
    Parameters.returnClientRequestId26,
    Parameters.ocpDate26,
    Parameters.ifMatch14,
    Parameters.ifNoneMatch14,
    Parameters.ifModifiedSince14,
    Parameters.ifUnmodifiedSince14
  ],
  mediaType: "json",
  serializer
};
const addOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs",
  httpMethod: "POST",
  responses: {
    201: {
      headersMapper: Mappers.JobAddHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  requestBody: Parameters.job,
  queryParameters: [Parameters.apiVersion, Parameters.timeout27],
  urlParameters: [Parameters.batchUrl],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.clientRequestId27,
    Parameters.returnClientRequestId27,
    Parameters.ocpDate27
  ],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListResult,
      headersMapper: Mappers.JobListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter4,
    Parameters.select3,
    Parameters.expand3,
    Parameters.maxResults5,
    Parameters.timeout28
  ],
  urlParameters: [Parameters.batchUrl],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId28,
    Parameters.returnClientRequestId28,
    Parameters.ocpDate28
  ],
  serializer
};
const listFromJobScheduleOperationSpec: coreHttp.OperationSpec = {
  path: "/jobschedules/{jobScheduleId}/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListResult,
      headersMapper: Mappers.JobListFromJobScheduleHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter5,
    Parameters.select4,
    Parameters.expand4,
    Parameters.maxResults6,
    Parameters.timeout29
  ],
  urlParameters: [Parameters.batchUrl, Parameters.jobScheduleId],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId29,
    Parameters.returnClientRequestId29,
    Parameters.ocpDate29
  ],
  serializer
};
const listPreparationAndReleaseTaskStatusOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs/{jobId}/jobpreparationandreleasetaskstatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListPreparationAndReleaseTaskStatusResult,
      headersMapper: Mappers.JobListPreparationAndReleaseTaskStatusHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter6,
    Parameters.select5,
    Parameters.maxResults7,
    Parameters.timeout30
  ],
  urlParameters: [Parameters.batchUrl, Parameters.jobId],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId30,
    Parameters.returnClientRequestId30,
    Parameters.ocpDate30
  ],
  serializer
};
const getTaskCountsOperationSpec: coreHttp.OperationSpec = {
  path: "/jobs/{jobId}/taskcounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TaskCountsResult,
      headersMapper: Mappers.JobGetTaskCountsHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.timeout31],
  urlParameters: [Parameters.batchUrl, Parameters.jobId],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId31,
    Parameters.returnClientRequestId31,
    Parameters.ocpDate31
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListResult,
      headersMapper: Mappers.JobListNextHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter4,
    Parameters.select3,
    Parameters.expand3,
    Parameters.maxResults5,
    Parameters.timeout28
  ],
  urlParameters: [Parameters.batchUrl, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId28,
    Parameters.returnClientRequestId28,
    Parameters.ocpDate28
  ],
  serializer
};
const listFromJobScheduleNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListResult,
      headersMapper: Mappers.JobListFromJobScheduleNextHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter5,
    Parameters.select4,
    Parameters.expand4,
    Parameters.maxResults6,
    Parameters.timeout29
  ],
  urlParameters: [
    Parameters.batchUrl,
    Parameters.nextLink,
    Parameters.jobScheduleId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId29,
    Parameters.returnClientRequestId29,
    Parameters.ocpDate29
  ],
  serializer
};
const listPreparationAndReleaseTaskStatusNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListPreparationAndReleaseTaskStatusResult,
      headersMapper: Mappers.JobListPreparationAndReleaseTaskStatusNextHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter6,
    Parameters.select5,
    Parameters.maxResults7,
    Parameters.timeout30
  ],
  urlParameters: [Parameters.batchUrl, Parameters.nextLink, Parameters.jobId],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId30,
    Parameters.returnClientRequestId30,
    Parameters.ocpDate30
  ],
  serializer
};