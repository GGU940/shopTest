import { Link, Outlet } from "react-router-dom"
const Company = () => {
    return (
        <section className="mw">
            <h2>Company ourStroty</h2>
            <div style={{ height: "300px", backgroundColor: "lightcyan" }}>1depth IMG AREA
            </div>
            <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", padding: "2rem 0", }}>
                <Link to='/company/ceo'>
                    CEO 인사말
                </Link>
                <Link to='/company/organization'>
                    조직도 소개
                </Link>
                <Link to='/company/ci'>
                    CI 소개
                </Link>
            </nav>
            <Outlet>
                {/* 여기에  /company/ 하위 page 뜸*/}
            </Outlet>
        </section>
    )
}

export default Company