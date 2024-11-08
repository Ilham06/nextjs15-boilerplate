'use client'

import React from "react";
import { useSelector } from "react-redux";

export default function ComponentHasPermission({ children, permission }) {
  const { authentication } = useSelector((state) => state.user);
  const { permissions } = authentication;
  // const permissions = userPermission
  const hasPermission = permissions.includes(permission);
  if (!hasPermission) {
    return null;
  }
  return <>{children}</>;
}
