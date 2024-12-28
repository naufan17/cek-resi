import React from "react"
import { SummaryData } from "@/types/track";
// import Subtitle from "@/components/ui/subtitle";
import Content from "@/components/ui/content";

interface InformationProps {
  information: SummaryData
}

const Information: React.FC<InformationProps> = ({ information }) => {
  return (
    <div>
      {/* <Subtitle title={"Informasi"}/> */}
      <div className="grid grid-cols-2 border border-gray-600 rounded-xl">        
        <div className="grid rows-3 sm:p-6 p-4 space-y-2">
          <Content title={"No Resi"} description={information.awb}/>
          <Content title={"Kurir"} description={information.courier}/>
          <Content title={"Layanan"} description={information.service}/>
        </div>
        <div className="grid rows-3 sm:p-6 p-4 space-y-2">
          <Content title={"Status"} description={information.status}/>
          <Content title={"Tanggal"} description={information.date}/>
          <Content title={"Berat"} description={information.weight}/>
        </div>
      </div>
    </div>
  )
}

export default Information;