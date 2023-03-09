import NavBar from '../components/Admin/NavBar';
import useAuth from '../Hooks/useAuth';

function AdminView() {
	const { email } = useAuth();
	return (
		<>
			<NavBar />
			<div className="text-red ml-[25%] flex items-center justify-center">
				<h1 className="mt-60 text-center font-monserrat text-3xl font-semibold text-gris opacity-60">
					Bienvenido {email} a la vista de administrador!
				</h1>
			</div>
		</>
	);
}

export default AdminView;
