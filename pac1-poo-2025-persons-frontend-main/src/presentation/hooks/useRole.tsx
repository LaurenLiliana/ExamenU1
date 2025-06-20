import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  fetchRoles,
  fetchRoleById,
  createNewRole,
  updateExistingRole,
  deleteRoleById
} from '../api/roles'

export const useRoles = (params: RolesQueryParams = {}) => {
  return useQuery({
    queryKey: ['roles', params],
    queryFn: () => fetchRoles(params),
    keepPreviousData: true
  })
}

export const useRole = (id: string) => {
  return useQuery({
    queryKey: ['role', id],
    queryFn: () => fetchRoleById(id),
    enabled: !!id
  })
}

export const useCreateRole = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: createNewRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] })
    }
  })
}

export const useUpdateRole = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: RoleFormValues }) => 
      updateExistingRole(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] })
    }
  })
}

export const useDeleteRole = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: deleteRoleById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] })
    }
  })
}