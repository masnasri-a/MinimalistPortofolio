const Header = (props: any) => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="header">
                    <p onClick={()=> props.onClick('home')}>Home</p>
                    <p onClick={()=> props.onClick('project')}>Project</p>
                    <p onClick={()=> props.onClick('about')}>About</p>
                    <p onClick={()=> props.onClick('contact')}>Contact</p>
                </div>
            </div>
        </>
    )
}

export default Header;