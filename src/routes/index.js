import Header from "../templates/Header";
import ClimaApp from "../pages/ClimaApp";
import Error404 from "../pages/Error404";


const routes = {
    '/': ClimaApp,
    '/about': 'About',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let render = routes[window.location.pathname];
    content.innerHTML = await render();
}

export default router;

