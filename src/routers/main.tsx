import DashboardPage from "@/pages/Dashboard"
import SettingPage from '@/pages/Settings'

const routers = [
    {
        path: '/',
        element: <DashboardPage />
    },
    {
        path: '/client/:id/projects',
        element: <SettingPage.ProjectPage />
    },
    {
        path: '/clients',
        element: <SettingPage.ClientPage />
    }
]

export default routers