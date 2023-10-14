import Sidebar from "../sidebar/Sidebar"
import { Outlet } from "react-router-dom"


const Applayout = () => {
  return (
    <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Applayout