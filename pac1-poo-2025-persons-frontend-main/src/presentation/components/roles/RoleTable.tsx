import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField, Box, CircularProgress, Typography, IconButton, Tooltip} from '@mui/material'
import { Edit, Delete, Visibility } from '@mui/icons-material'

interface RoleTableProps {
  data: Role[]
  isLoading: boolean
  page: number
  rowsPerPage: number
  totalItems: number
  onPageChange: (page: number) => void
  onRowsPerPageChange: (rowsPerPage: number) => void
  onSearch: (searchTerm: string) => void
  onView: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export const RoleTable: React.FC<RoleTableProps> = ({
  data,
  isLoading,
  page,
  rowsPerPage,
  totalItems,
  onPageChange,
  onRowsPerPageChange,
  onSearch,
  onView,
  onEdit,
  onDelete
}) => {
  const handleChangePage = (_: unknown, newPage: number) => {
    onPageChange(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRowsPerPageChange(parseInt(event.target.value, 10))
  }

  return (
    <Paper elevation={3}>
      <Box p={3}>
        <TextField
          label="Buscar roles"
          variant="outlined"
          fullWidth
          onChange={(e) => onSearch(e.target.value)}
          sx={{ mb: 3 }}
        />

        <TableContainer>
          {isLoading ? (
            <Box display="flex" justifyContent="center" p={4}>
              <CircularProgress />
            </Box>
          ) : data.length === 0 ? (
            <Box p={4} textAlign="center">
              <Typography>No se encontraron roles</Typography>
            </Box>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>DescripciOn</TableCell>
                  <TableCell align="right">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((role) => (
                  <TableRow key={role.id}>
                    <TableCell>{role.name}</TableCell>
                    <TableCell>{role.description}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Ver detalles">
                        <IconButton onClick={() => onView(role.id)}>
                          <Visibility color="info" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar">
                        <IconButton onClick={() => onEdit(role.id)}>
                          <Edit color="primary" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Eliminar">
                        <IconButton onClick={() => onDelete(role.id)}>
                          <Delete color="error" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalItems}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Paper>
  )
}