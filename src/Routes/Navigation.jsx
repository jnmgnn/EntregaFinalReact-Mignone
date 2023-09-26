import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { HomePage, ItemDetailPage, ContactoPage, AyudaPage, NovedadesPage} from '../Pages'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/product/:idProduct',
        element: <ItemDetailPage />
    },
    {
        path: '/contacto',
        element: <ContactoPage />
    },
    {
        path: '/ayuda',
        element: <AyudaPage />
    },
    {
        path:'/novedades',
        element: <NovedadesPage />
    }
])

const Navigation = () => {
    return (
        <RouterProvider router={routes}/>
    )
}

export default Navigation