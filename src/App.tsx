import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/home/components/home"
import { MonthStatistics } from "./pages/monthStatistics/components/monthStatistics"
import { Header } from "./shared/header/header"
import { Popup } from "./shared/popup/popup"
import "./styles/index.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/month-statistics",
    element: <MonthStatistics />,
  },
])

function App() {
  return (
    <div className="global-container">
      <Popup />
      <div className="container">
        <Header />
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
