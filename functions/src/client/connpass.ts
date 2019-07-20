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

export class ConnpassClient {
  async fetch(): Promise<connpassResponseEvent[]>  {
    const response = await axios.get('https://connpass.com/api/v1/event/', {
      params: {
        series_id: 4070
      }
    })
    return response.data.events as connpassResponseEvent[]
  }
}