/**@Author: Rodrigo Vega
 * @Description: Este componente genera dos constantes: la primera almacena en
 * un objeto los permisos que tiene un rol de Admin. La segunda constante almacena
 * los permisos que tiene un rol de Creador de Contenido.
 */

export const PERMISSIONS_ADMIN = {
	Registers: 'Ver Registros',
	AddUsers: 'Añadir Usuarios',
	DeleteUser: 'Eliminar Usuarios',
	EditUser: 'Editar Usuario',
};

export const PERMISSIONS_CONTENTCREATOR = {
	AddNews: 'Añadir Noticias',
	DeleteNews: 'Eliminar Noticias',
	EditNews: 'Editar Noticia',
	SeeNews: 'Ver Noticias',
};
