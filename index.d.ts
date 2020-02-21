import { Request, RequestInfo, RequestInit, Response } from 'node-fetch'

export class AwsClient {
  constructor(config: { accessKeyId: string; secretAccessKey: string })

  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>

  sign(input: RequestInfo, init?: RequestInit): Promise<Request>
}
