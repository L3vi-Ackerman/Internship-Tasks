import React from 'react'
import {TableComponent} from '@/components/table-component.tsx';
import {BreadCrumbComponent} from '@/components/bread-crumb.tsx' 
const InventoryPage = () => {
  return (
    <>
<BreadCrumbComponent title = "Inventory"/>
<TableComponent />
    </>
  )
}

export default InventoryPage
