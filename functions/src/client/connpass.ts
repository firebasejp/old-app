import axios from 'axios'

export type connpassResponseEvent = {
  // https://api.atnd.org/
  event_id: number,
  title: string,
  catch: string,
  description: string,
  event_url: string,
  started_at: Date,
  ended_at: Date,
  url: string,
  hash_tag: string,
  limit: number,
  address: string,
  place: string,
  lat: number,
  lon: number,
  owner_id: number,
  owner_nickname: string,
  owner_twitter_id: string,
  accepted: number,
  waiting: number,
  updated_at: Date,
}

const groupSeriesId = {
  tokyo: 4070,
  osaka: 6629,
}

export class ConnpassClient {
  seriesId: number

  constructor (group: 'tokyo' | 'osaka') {
    this.seriesId = groupSeriesId[group]
  }

  async fetch(): Promise<connpassResponseEvent[]>  {
    const response = await axios.get('https://connpass.com/api/v1/event/', {
      params: {
        series_id: this.seriesId
      }
    })
    return response.data.events as connpassResponseEvent[]
  }
}