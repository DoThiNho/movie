import { useNavigate } from "react-router-dom";

export default function useRedirect() {
  const navigate = useNavigate();

  const redirect = (path: string) => navigate(path);

  return {
    redirect,
  };
}
