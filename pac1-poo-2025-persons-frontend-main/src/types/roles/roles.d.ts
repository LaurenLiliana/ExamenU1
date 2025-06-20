interface Role {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

interface PaginatedRoles {
  data: Role[]
  total: number
  page: number
  limit: number
}

interface RoleFormValues {
  name: string
  description: string
}

interface RolesQueryParams {
  page?: number
  limit?: number
  search?: string
}