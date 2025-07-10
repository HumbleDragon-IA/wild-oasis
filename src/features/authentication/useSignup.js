import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function useSignup() {
  const navigate = useNavigate();
  const {
    mutate: signUp,
    isLoading: isSigninUp,
    error,
  } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signUpApi({ email, password, fullName }),
    onSuccess: (user) => {
      toast.success(
        `User ${user.user.user_metadata.fullName} was succesfully created`
      );
      navigate("/users", { replace: true });
    },
    onError: (err) => {
      toast.error(`Error Creating account: ${err.message} `);
    },
  });
  return { signUp, isSigninUp, error };
}
