import { connpassResponseEvent } from "../client/connpass";

export interface Event {
  id: string // firestore用の全サービス横断でユニークなid生成
  service: string, // イベント募集サービス名
  title: string, // イベント名
  description: string, // 概要
  eventUrl: string, // イベントurl
  hashtag?: string, // ハッシュタグ
  started: Date, // 開始時間
  ended: Date, // 終了時間
  address: string, // 開催場所住所
  place: string, // 開催会場
  lat: number, // 緯度
  lon: number, // 軽度
  owner: string, // 主催者
  limit: number, // 定員
  accepted: number, // 参加者
  waiting: number, // 補欠者
  updated: Date, // 更新日時
}

export class ConnpassEvent implements Event {
  id: string
  service: string
  title: string
  description: string
  eventUrl: string
  hashtag?: string
  started: Date
  ended: Date
  address: string
  place: string
  lat: number
  lon: number
  owner: string
  limit: number
  accepted: number
  waiting: number
  updated: Date

  constructor(res: connpassResponseEvent) {
    this.id = `connpass_${res.event_id}`
    this.service = 'connpass'

    this.title = res.title
    this.description = res.description
    this.eventUrl = res.event_url
    this.hashtag = res.hash_tag || undefined
    this.started = res.started_at
    this.ended = res.ended_at
    this.address = res.address
    this.place = res.place
    this.lat = res.lat
    this.lon = res.lon
    this.owner = res.owner_nickname
    this.limit = res.limit
    this.accepted = res.accepted
    this.waiting = res.waiting
    this.updated = res.updated_at
  }
}