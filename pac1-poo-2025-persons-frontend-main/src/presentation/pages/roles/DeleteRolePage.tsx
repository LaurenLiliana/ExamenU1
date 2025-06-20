import { Title } from "../../components/shared/Title"
import { useRoles } from "../../hooks/useRoles"
import { Link, useParams } from "react-router";

export const DeleteRolePage = () => {

  const { roleId } = useParams();
  const { deleteRoleMutation, oneRoleQuery } = useRoles(roleId);

  const handleDelete = () => {
    deleteRoleMutation.mutate();
  };

  if (oneRoleQuery.isLoading) {
    return <div>Cargando...</div>;
  }

  if (oneRoleQuery.isError) {
    return <div>Error al cargar el rol</div>;
  }

  return (
    <div className="w-full flex flex-col">
      <Title text="Eliminar Rol" />

      {deleteRoleMutation.isError && (
        <div className="bg-red-200 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <span>{deleteRoleMutation.error.message}</span>
        </div>
      )}

      <div className="bg-white p-6 rounded-md shadow-md">
        <p className="text-lg mb-4">¿Esta seguro que desea eliminar el siguiente rol?</p>
        
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p><strong>Nombre:</strong> {oneRoleQuery.data?.data.name}</p>
          <p><strong>DescripciOn:</strong> {oneRoleQuery.data?.data.description}</p>
        </div>

        <p className="text-red-600 mb-6">Esta acciOn no se puede deshacer.</p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleDelete}
            disabled={deleteRoleMutation.isPending}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none disabled:bg-gray-400"
          >
            {deleteRoleMutation.isPending ? "Eliminando..." : "Sí, Eliminar"}
          </button>

          <Link 
            to="/roles"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Cancelar
          </Link>
        </div>
      </div>

    </div>
  )
}