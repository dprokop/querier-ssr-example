import ApiClient from 'data/client';

const apiUrl = process.env.API_URL || 'http://localhost:5000';
const endpointUrl = `${apiUrl}/api/endpoint`;

let apiClient = new ApiClient(endpointUrl);

export default apiClient;
