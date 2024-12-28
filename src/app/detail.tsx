import React from "react"
import { DetailData } from "@/types/track";
import Subtitle from "@/components/ui/subtitle"
import Content from "@/components/ui/content";

interface DetailProps {
  detail: DetailData
}

const Detail: React.FC<DetailProps> = ({ detail }) => {
  return (
    <div>
      {/* <Subtitle title={"Detail"}/> */}
      <div className="grid grid-cols-2 border border-gray-600 rounded-xl">
        <div className="grid rows-2 sm:p-6 p-4 space-y-2">
          <Content title={"Asal"} description={detail.origin}/>
          <Content title={"Tujuan"} description={detail.destination}/>
        </div>
        <div className="grid rows-2 sm:p-6 p-4 space-y-2">
          <Content title={"Pengiriman"} description={detail.shipper}/>
          <Content title={"Penerima"} description={detail.receiver}/>
        </div>
      </div>
    </div>
  )
}

export default Detail;