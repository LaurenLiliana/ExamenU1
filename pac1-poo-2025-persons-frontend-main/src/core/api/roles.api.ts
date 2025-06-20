import axios from 'axios'

const API_BASE_URL = '/api/roles'

export const fetchRoles = async (params?: RolesQueryParams): Promise<PaginatedRoles> => {
  const response = await axios.get(API_BASE_URL, { params })
  return response.data
}

export const fetchRoleById = async (id: string): Promise<Role> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`)
  return response.data
}

export const createNewRole = async (roleData: RoleFormValues): Promise<Role> => {
  const response = await axios.post(API_BASE_URL, roleData)
  return response.data
}

export const updateExistingRole = async (id: string, roleData: RoleFormValues): Promise<Role> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, roleData)
  return response.data
}

export const deleteRoleById = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`)
}