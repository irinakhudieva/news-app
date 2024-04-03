import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header/ui";


function BaseLayout() {
  return (
    <>
      <Header />
      <div className='container'>
          <Outlet />
      </div>
    </>
  );
}

export default BaseLayout;
