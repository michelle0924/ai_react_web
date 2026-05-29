// Example service — replace with your actual domain resources.
// import { apiClient } from './apiClient';

// export interface ExampleItem {
//   id: number;
//   name: string;
// }

// export const exampleService = {
//   getAll: () => apiClient.get<ExampleItem[]>('/examples'),
//   getById: (id: number) => apiClient.get<ExampleItem>(`/examples/${id}`),
//   create: (payload: Omit<ExampleItem, 'id'>) =>
//     apiClient.post<ExampleItem>('/examples', payload),
//   update: (id: number, payload: Partial<ExampleItem>) =>
//     apiClient.put<ExampleItem>(`/examples/${id}`, payload),
//   remove: (id: number) => apiClient.delete<void>(`/examples/${id}`),
// };
