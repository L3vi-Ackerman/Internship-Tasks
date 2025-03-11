"use client"
import React from 'react'
import {TableComponent} from '@/components/book-table.tsx'
import {BreadCrumbComponent} from '@/components/bread-crumb.tsx'
import {useBookQuery} from '@/shared/query/book-query'

const HomePage = () => {
  const { data, isLoading, error } = useBookQuery("books");
  const books: BookInterface[] = data || [];

  const columns = [
    { label: "S.No.", accessor: "title" },
    { label: "Book", accessor: "title" },
    { label: "Author", accessor: "author" },
    { label: "Category", accessor: "category" },
    { label: "Stock", accessor: "stock" },
    { label: "Price", accessor: "price" },
  ];
  return (
    <>
    <BreadCrumbComponent title="Books" />
    
   <TableComponent dataArray={books} columns = {columns} totalColumn = 'price'/>
    </>
  )
}

export default HomePage 
