import React from 'react'
import { useNavigate } from 'react-router'
import { useCreateRole } from '../../hooks/useRole'
import { RoleForm } from '../../components/roles/RoleForm'
import { Box, Typography } from '@mui/material'

export const CreateRolePage: React.FC = () => {
  const navigate = useNavigate()
  const { mutateAsync: createRole, isLoading } = useCreateRole()

  const handleSubmit = async (data: RoleFormValues) => {
    try {
      await createRole(data)
      navigate('/roles')
    } catch (error) {
      console.error('Error creating role:', error)
    }
  }

  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Crear Nuevo Rol
      </Typography>
      <RoleForm onSubmit={handleSubmit} isLoading={isLoading} />
    </Box>
  )
}