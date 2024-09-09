import React from "react"
import { DetailData } from "@/types/track";
import Subtitle from "@/components/ui/subtitle"
import Content from "@/components/ui/content";

interface DetailProps {
  detail: DetailData
}

const Detail: React.FC<DetailProps> = ({ detail }) => {
  return (
    <div className="px-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:p-10">
      <div className="grid row-gap-8 lg:grid-cols-4">
        <Subtitle title={"Detail"}/>
        <div className="grid border divide-y rounded-lg lg:col-span-2 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div className="flex flex-col justify-between sm:p-8 p-6 space-y-2">
            <Content title={"Asal"} description={detail.origin}/>
            <Content title={"Tujuan"} description={detail.destination}/>
          </div>
          <div className="flex flex-col justify-between sm:p-8 p-6 space-y-2">
            <Content title={"Pengiriman"} description={detail.shipper}/>
            <Content title={"Penerima"} description={detail.receiver}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;