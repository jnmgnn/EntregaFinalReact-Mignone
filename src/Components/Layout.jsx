import Navbar from "./Navbar"

const Layout = ({children})=> {
 return (
    <>
        <Navbar />
        <div style={{padding:"20px 0px"}}>
            {children}
        </div>
    </>
 )
}

export default Layout