import { useRouter } from "next/router";
import InjectRoute from "../pages/InjectRoute";

// @ts-ignore
const CheckRequiredResource = ({ children }) => {
  const { pathname } = useRouter();

  switch (true) {
    case pathname === '/' || pathname === '/other':
      return <InjectRoute>{children}</InjectRoute>
  
    default:
      return children;
  }
};

export default CheckRequiredResource;
