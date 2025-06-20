import { Route, Routes } from "react-router"
import { Navbar } from "../presentation/components/layout/Navbar"
import { HomePage } from "../presentation/pages/home/HomePage"
import { CountriesPage } from "../presentation/pages/countries/CountriesPage"
import { PersonsPage } from "../presentation/pages/persons/PersonsPage"
import { CreateCountryPage } from "../presentation/pages/countries/CreateCountryPage"
import { EditCountryPage } from "../presentation/pages/countries/EditCountryPage"
import { DeleteCountryPage } from "../presentation/pages/countries/DeleteCountryPage"
import { RolesPage } from "../presentation/pages/roles/RolesPage"
import { CreateRolePage } from "../presentation/pages/roles/CreateRolePage"
import { EditRolePage } from "../presentation/pages/roles/EditRolePage"
import { DeleteRolePage } from "../presentation/pages/roles/DeleteRolePage"

export const AppRouter = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Routes>
                <Route element={<Navbar />}>
                    <Route path="/" element={<HomePage />} />
                    
                    {/* Rutas de Countries */}
                    <Route path="/countries" element={<CountriesPage />} />
                    <Route path="/countries/create" element={<CreateCountryPage />} />
                    <Route path="/countries/edit/:id" element={<EditCountryPage />} />
                    <Route path="/countries/delete/:id" element={<DeleteCountryPage />} />
                    
                    {/* Rutas de Roles */}
                    <Route path="/roles" element={<RolesPage />} />
                    <Route path="/roles/create" element={<CreateRolePage />} />
                    <Route path="/roles/edit/:id" element={<EditRolePage />} />
                    <Route path="/roles/delete/:id" element={<DeleteRolePage />} />
                    
                    {/* Ruta de Persons */}
                    <Route path="/persons" element={<PersonsPage />} />
                </Route>
            </Routes>
        </div>
    )
}