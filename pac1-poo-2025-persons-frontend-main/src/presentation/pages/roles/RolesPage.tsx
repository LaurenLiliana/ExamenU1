import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoles } from '../../hooks/useRoles';
import RoleTable from '../../components/roles/RoleTable';

const RolesPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading } = useRoles({
    page: page + 1,
    limit: rowsPerPage,
    search: searchTerm,
  });

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setPage(0);
  };

  const handleView = (id) => {
    navigate(`/roles/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/roles/${id}/edit`);
  };

  const handleDelete = (id) => {
    navigate(`/roles/${id}/delete`);
  };

  return (
    <div>
      <h1>Gestion de Roles</h1>
      <RoleTable
        roles={data?.data || []}
        loading={isLoading}
        page={page}
        rowsPerPage={rowsPerPage}
        totalItems={data?.total || 0}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        onSearchChange={handleSearchChange}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default RolesPage;