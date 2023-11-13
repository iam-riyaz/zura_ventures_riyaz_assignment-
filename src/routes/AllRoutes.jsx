import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Sidebar } from "../components/Sidebar"
import { Navbar } from "../components/Navbar"
import { Upload } from "../pages/Upload"
import { Transcript } from "../pages/Transcript"
import { ConfigPage } from "../pages/ConfigPage"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Upload/>}/>
            <Route path="transcript" element={<Transcript/>}/>
            <Route path="configPage" element={<ConfigPage/>}/>
        </Routes>
    )
}