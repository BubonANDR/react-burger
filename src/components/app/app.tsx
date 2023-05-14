import React from "react";
import {} from "@ya.praktikum/react-developer-burger-ui-components";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import {
  Layout,
  Login,
  Mainpage,
  FogotPassword,
  Register,
  ResetPassword,
  Profile,
  ProtectedRoute,
  Feed,
  IngredientPage,
  FeedComponent,
  OrderPage,
  OrderPrivatePage,
  Page404,
} from "../../pages";
import IngredientDetails from "../ingridients-detail/ingridients-detail";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { deteteIngridientDetail } from "../../services/actions/ingridients-detail";
import { getStateFromApi } from "../../services/actions/burger-ingridients";
import { useTypedDispatch } from "../../hooks/Hooks";
import { OrderList } from "../order-list/order-list";
import { ProfileForm } from "../profile-form/profile-form";

function App() {
  const dispatch = useTypedDispatch();

  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getStateFromApi());
  }, []);

  const location = useLocation();

  const background = location.state?.background;

  const onModalClose = () => {
    navigate("/", { replace: true, state: null });
    dispatch(deteteIngridientDetail());
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <Routes location={background || location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Mainpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<FogotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/ingredients" element={<IngredientPage />}>
              <Route path=":id" element={<IngredientDetails />} />
            </Route>
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed/:id" element={<OrderPage />} />

            <Route
              path="/profile"
              element={<ProtectedRoute element={<Profile />} />}
            >
              <Route
                index
                element={<ProtectedRoute element={<ProfileForm />} />}
              />
              <Route
                path="/profile/orders"
                element={
                  <ProtectedRoute element={<OrderList statusShow={true} />} />
                }
              />
            </Route>
            <Route
              path="/profile/orders/:id"
              element={<ProtectedRoute element={<OrderPrivatePage />} />}
            />

            <Route path="*" element={<Page404/>}/> 
          </Route>
        </Routes>

        {background && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/ingredients/:id"
                element={
                  <Modal
                    onClose={onModalClose}
                    children={<IngredientDetails />}
                  />
                }
              />
              <Route
                path="/feed/:id"
                element={
                  <Modal
                    onClose={() =>
                      navigate("/feed", { replace: true, state: null })
                    }
                    children={<FeedComponent />}
                  />
                }
              />
              <Route
                path="/profile/orders/:id"
                element={
                  <Modal
                    onClose={() =>
                      navigate("/profile/orders", {
                        replace: true,
                        state: null,
                      })
                    }
                    children={<FeedComponent />}
                  />
                }
              />
              <Route
                path="/order"
                element={
                  <ProtectedRoute
                    element={
                      <Modal
                        onClose={onModalClose}
                        children={<OrderDetails />}
                      />
                    }
                  />
                }
              />
            </Route>
          </Routes>
        )}
      </>
    </DndProvider>
  );
}

export default App;
