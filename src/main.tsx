import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './App/AppRouter'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(<RouterProvider router={AppRouter} fallbackElement={<>Загрузка...</>} />)
