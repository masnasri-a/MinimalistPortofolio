import { useEffect } from "react"
import { useRouter } from "next/router"
import Sidebar from "./components/sidebar"
import Headers from "./components/header"
const Index = () => {
    const router = useRouter()
    const handleLogin = () => {
        const name = localStorage.getItem('name')
        if (name == null){
            router.push('/notes/login')
        }else{
            console.log(name);
        }
        
    }

    useEffect(()=>{
        handleLogin()
    },[])

    const handleMenu = (name:string) =>{
        console.log(name);
        
    }
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                <Sidebar menu={handleMenu}/>
                </div>
                <div className="col-10">
                <Headers />

                </div>
            </div>
        </div>
        </>
    )
}
export default Index