export interface SummaryData {
  awb?:string;
  courier?:string;
  service?:string;
  status?:string;
  date?:string;
  description?:string;
  amount?:string;
  weight?:string;
}

export interface DetailData {
  origin?:string;
  destination?:string;
  shipper?:string;
  receiver?:string;
}

export interface HistoryData {
  date?:string;
  desc?:string;
  location?:string;
}

export interface TrackData {
  summary: SummaryData;
  detail: DetailData;
  history: HistoryData[];
}