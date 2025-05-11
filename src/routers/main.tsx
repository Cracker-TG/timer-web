import DashboardPage from "@/pages/Dashboard"
import SettingPage from '@/pages/Settings'

const routers = [
    {
        path: '/',
        element: <DashboardPage />
    },
    {
        path: '/settings/projects',
        element: <SettingPage.ProjectPage />
    },
    {
        path: '/settings/projects/:id/client',
        element: <SettingPage.ClientPage />
    }
]

export default routers