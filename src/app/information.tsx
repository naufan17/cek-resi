import React from "react"
import { SummaryData } from "@/types/track";
import Subtitle from "@/components/ui/subtitle";
import Content from "@/components/ui/content";

interface InformationProps {
  information: SummaryData
}

const Information: React.FC<InformationProps> = ({ information }) => {
  return (
    <div className="px-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:p-10">
      <div className="grid row-gap-8 lg:grid-cols-4">
        <Subtitle title={"Informasi"}/>
        <div className="grid border divide-y rounded-lg lg:col-span-2 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div className="flex flex-col justify-between sm:p-8 p-6 space-y-2">
            <Content title={"No Resi"} description={information.awb}/>
            <Content title={"Kurir"} description={information.courier}/>
            <Content title={"Layanan"} description={information.service}/>
          </div>
          <div className="flex flex-col justify-between sm:p-8 p-6 space-y-2">
            <Content title={"Status"} description={information.status}/>
            <Content title={"Tanggal"} description={information.date}/>
            <Content title={"Berat"} description={information.weight}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information;