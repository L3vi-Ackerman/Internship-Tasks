import React from 'react'
import {TableComponent} from '@/components/table-component.tsx'
import {BreadCrumbComponent} from '@/components/bread-crumb.tsx' 
const HomePage = () => {
  return (
    <>
    <BreadCrumbComponent title="Books" />
    
   <TableComponent />
    </>
  )
}

export default HomePage 
