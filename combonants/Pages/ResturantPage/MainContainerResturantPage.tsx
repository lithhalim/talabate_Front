import React from 'react';
import { ItemSelectProvider } from './contextApi/SelectItemInResturant';
import ResturantPage from './ResturantPage';


function MainContainerResturantPage() {
  return (
      <ItemSelectProvider>
          <ResturantPage/>
      </ItemSelectProvider>
  )
}

export default MainContainerResturantPage
