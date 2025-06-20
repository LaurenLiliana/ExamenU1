import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useRoles } from '../../hooks/useRole'
import { RoleTable } from '../../components/roles/RoleTable'
import { Box, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export const RolesPage: React.FC = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')

  const { data, isLoading } = useRoles({
    page: page + 1,
    limit: rowsPerPage,
    search: searchTerm
  })

  const handleCreate = () => navigate('/roles/create')
  const handleView = (id: string) => navigate(`/roles/${id}`)
  const handleEdit = (id: string) => navigate(`/roles/${id}/edit`)
  const handleDelete = (id: string) => navigate(`/roles/${id}/delete`)

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography variant="h4">Gestión de Roles</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreate}
        >
          Nuevo Rol
        </Button>
      </Box>

      <RoleTable
        data={data?.data || []}
        isLoading={isLoading}
        page={page}
        rowsPerPage={rowsPerPage}
        totalItems={data?.total || 0}
        onPageChange={setPage}
        onRowsPerPageChange={setRowsPerPage}
        onSearch={setSearchTerm}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Box>
  )
}