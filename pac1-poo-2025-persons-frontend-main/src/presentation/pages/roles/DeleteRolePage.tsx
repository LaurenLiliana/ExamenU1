import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useRole } from '../../hooks/useRole'
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CircularProgress
} from '@mui/material'

export const DeleteRolePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: role, isLoading: isLoadingRole } = useRole(id || '')
  const { mutateAsync: deleteRole, isLoading } = useDeleteRole()

  const handleDelete = async () => {
    if (!id) return
    
    try {
      await deleteRole(id)
      navigate('/roles')
    } catch (error) {
      console.error('Error deleting role:', error)
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
    <Box maxWidth="md" mx="auto">
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Confirmar Eliminación
          </Typography>
          
          <Typography variant="body1" paragraph>
            ¿Está seguro que desea eliminar el rol <strong>{role?.name}</strong>?
          </Typography>
          
          <Typography variant="body2" color="text.secondary" paragraph>
            Esta acción no puede deshacerse. Todos los permisos asociados a este rol serán removidos.
          </Typography>

          <Box display="flex" gap={2} mt={3}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? 'Eliminando...' : 'Confirmar Eliminación'}
            </Button>
            
            <Button
              variant="outlined"
              onClick={() => navigate('/roles')}
              disabled={isLoading}
            >
              Cancelar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}