import React from 'react'
import { Routes, Route } from 'react-router'
import { RolesPage } from "../presentation/pages/roles/RolesPage"
import { CreateRolePage } from "../presentation/pages/roles/RolesPage"
import { EditRolePage } from "../presentation/pages/roles/RolesPage"
import { DeleteRolePage } from "../presentation/pages/roles/RolesPage"

export const RolesRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<RolesPage />} />
      <Route path="create" element={<CreateRolePage />} />
      <Route path=":id/edit" element={<EditRolePage />} />
      <Route path=":id/delete" element={<DeleteRolePage />} />
    </Routes>
  )
}