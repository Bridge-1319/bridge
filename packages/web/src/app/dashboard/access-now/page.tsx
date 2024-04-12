"use client"
import EvidenceListingPage from '@/components/listings/access-now/evidences'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'

const EvidencePage = () => {
  return (

    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <EvidenceListingPage />
      </div>
    </ScrollArea>
  )
}

export default EvidencePage