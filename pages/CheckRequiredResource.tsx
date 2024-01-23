import { useRouter } from "next/router";
import InjectRoute from "./InjectRoute";

// @ts-ignore
const CheckRequiredResource = ({ children }) => {
  const { pathname } = useRouter();

  console.log(pathname);

  switch (true) {
    case pathname === '/' || pathname === '/other':
      return <InjectRoute>{children}</InjectRoute>
  
    default:
      return children;
  }
};

export default CheckRequiredResource;
