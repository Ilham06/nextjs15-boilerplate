'use client'

import { useRouter } from "next/navigation";
import { store } from "@/store";
import { useParams, usePathname } from "next/navigation";
import { permissionsPaths } from "@/config/permission";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const authentication = null
  // const { authentication, profile } = store.getState().user; 

  const params = useParams();
  let pathname = usePathname();

 //  If params exist, replace them in the pathname
  if (Object.keys(params).length > 0) {
    Object.keys(params).forEach((key) => {
      pathname = pathname.replace(params[key], `:${key}`);
    });
  }

  // Check authentication
  if (authentication.access_token) {
    const requiredPermission = permissionsPaths[pathname];
    // const isInactiveUser = InActiveStatus.includes(profile.status); // check is user not active?

    // Check if the user has the required permission
    if (!authentication.permissions.includes(requiredPermission)) {
      // return <NotFound />;  // uncomment to use permission
    }
  } else {
    return router.replace("/login");
  }

  return <>{children}</>;
}
