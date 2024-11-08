import DashboardLayout from '@/components/layouts/DashboardLayout'
import React from 'react'

export default function Layout({children}) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}
