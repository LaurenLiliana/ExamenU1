import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useRole, useUpdateRole } from '../../hooks/useRole'
import { RoleForm } from '../../components/roles/RoleForm'
import { Box, Typography, CircularProgress } from '@mui/material'

export const EditRolePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: role, isLoading: isLoadingRole } = useRole(id || '')
  const { mutateAsync: updateRole, isLoading } = useUpdateRole()

  const handleSubmit = async (data: RoleFormValues) => {
    if (!id) return
    
    try {
      await updateRole({ id, data })
      navigate('/roles')
    } catch (error) {
      console.error('Error updating role:', error)
    }
  }

  if (isLoadingRole) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Editar Rol
      </Typography>
      <RoleForm 
        defaultValues={role} 
        onSubmit={handleSubmit} 
        isLoading={isLoading} 
      />
    </Box>
  )
}