import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  //1 Load the authenticated user
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useUser();

  //2 if there is not authenticated redirect to login page

  if (!isAuthenticated && !isLoading) navigate("/login");

  //3 while loading show spiner
  if (isLoading)
    return (
      <FullPage>
        <Spinner></Spinner>
      </FullPage>
    );
  //4 if there is an user render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
