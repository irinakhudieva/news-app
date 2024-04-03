import { Main } from "../../pages/main";
import { Header } from "../../widgets/header/ui";


function BaseLayout() {
  return (
    <>
      <Header />
      <div className='container'>
          <Main />
      </div>
    </>
  );
}

export default BaseLayout;
