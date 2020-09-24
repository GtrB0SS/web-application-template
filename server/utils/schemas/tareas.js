const joi = require('@hapi/joi')
                .extend(require('@hapi/joi-date'));

const tareaIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const tareaTareaSchema = joi.string().min(3).max(50);
const tareaPrioridadSchema = joi.string().valid('alta', 'media', 'baja');
// const tareaFechaSchema = joi.date().format('DD-MM-YYYY').utc();
const tareaFechaSchema = joi.string().regex(/[0-9]{2}-[0-9]{2}-202[0-9]/);
const tareaCompletadoSchema = joi.boolean();


const crearTareaSchema = {
    tarea: tareaTareaSchema.required(),
    prioridad: tareaPrioridadSchema,
    fecha_tope: tareaFechaSchema,
    completado: tareaCompletadoSchema
}

const actualizarTareaSchema = {
    completado: tareaCompletadoSchema
}

module.exports = {
    tareaIdSchema,
    crearTareaSchema,
    actualizarTareaSchema
}