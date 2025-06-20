import * as Yup from 'yup';
import { RoleModel } from "../../core/models/role.model";

export const roleInitialValues: RoleModel = {
    name: "",
    description: "",
};

export const roleValidationSchema: Yup.ObjectSchema<RoleModel> =
    Yup.object({
        name: Yup.string()
            .required("El nombre es requerido.")
            .min(3, "El nombre debe tener al menos 3 caracteres.")
            .max(100, "El nombre debe tener menos de 100 caracteres."),
        description: Yup.string()
            .required("La descripcion es requerida.")
            .min(10, "La descripcion debe tener al menos 10 caracteres.")
            .max(500, "La descripcion debe tener menos de 500 caracteres."),
    });
