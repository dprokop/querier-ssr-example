import 'isomorphic-fetch';
import * as Api from './model';

class ApiClient {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
    this.send = this.send.bind(this);
  }

  public async send<TResponse>(request: Api.Request<TResponse>): Promise<TResponse> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(request)
    });

    return response.json().then(
      (json) => {
        if (response.ok) {
          return json;
        } else {
          return Promise.reject({
            status: response.status,
            message: json.message || json
          });
        }
      },
      (err) => {
        // TODO: remove when 404 response is {message: string} compliant
        if (response.status === 404) {
          return Promise.reject({
            status: 404,
            message: 'Content not found'
          });
        }
        return Promise.reject({
          status: 500,
          message: err
        });
      }
    );
  }
}

export default ApiClient;
