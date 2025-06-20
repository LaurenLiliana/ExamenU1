import React from 'react'
import { useForm } from 'react-hook-form'
import {TextField, Button, Stack, FormControl, FormLabel, FormHelperText} from '@mui/material'

interface RoleFormProps {
  defaultValues?: RoleFormValues
  onSubmit: (data: RoleFormValues) => void
  isLoading?: boolean
}

export const RoleForm: React.FC<RoleFormProps> = ({ 
  defaultValues, 
  onSubmit, 
  isLoading = false 
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RoleFormValues>({ defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl fullWidth error={!!errors.name}>
          <FormLabel>Nombre del Rol</FormLabel>
          <TextField
            {...register('name', { required: 'Este campo es requerido' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </FormControl>

        <FormControl fullWidth error={!!errors.description}>
          <FormLabel>Descripción</FormLabel>
          <TextField
            multiline
            rows={4}
            {...register('description', { required: 'Este campo es requerido' })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        </FormControl>

        <Button 
          type="submit" 
          variant="contained" 
          size="large"
          disabled={isLoading}
        >
          {isLoading ? 'Procesando...' : 'Guardar'}
        </Button>
      </Stack>
    </form>
  )
}