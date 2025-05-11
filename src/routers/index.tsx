import MainRouter from '@/routers/main'
import Layouts from '@/layoutes'
import { createBrowserRouter } from 'react-router'

const mainRouter = [
    {
        path: '/',
        element: <Layouts />,
        children: MainRouter
    }
]

const createRouter = createBrowserRouter([...mainRouter])

export default createRouter