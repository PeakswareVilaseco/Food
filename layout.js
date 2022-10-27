import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <br></br>
          <li>
            <Link to="/mealplans">Meal Plans</Link>
          </li>
          <br></br>
          <li>
            <Link to="/foods">Foods</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;