import { Outlet, useNavigation } from "react-router-dom";

function MainPersonal() {
  const navigation = useNavigation();
  return (
    <>
      <main>
        {navigation.state === "loading" && <p>=== LOADING ===</p>}
        <Outlet />
      </main>
    </>
  );
}

export default MainPersonal;
