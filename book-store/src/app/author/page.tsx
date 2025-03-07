import React from 'react'
import {TableComponent} from '@/components/table-component'
import {BreadCrumbComponent} from '@/components/bread-crumb.tsx' 
const AuthorPage = () => {
  return (

    <>
    <BreadCrumbComponent title ="Author"/>

    <TableComponent />
    </>
  )
}

export default AuthorPage
