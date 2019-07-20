import { connpassResponseEvent } from "../client/connpass";

export interface Event {
  id: string // firestore用の全サービス横断でユニークなid生成
  service: string, // イベント募集サービス名
  eventId: number, // 各サービス内でのevent_id
  title: string, // イベント名
  catch: string, // キャッチ
  description: string, // 概要
  eventUrl: string, // イベントurl
  hashtag?: string, // ハッシュタグ
  startedAt: Date, // 開始時間
  endedAt: Date, // 終了時間
  address: string, // 開催場所住所
  place: string, // 開催会場
  lat: number, // 緯度
  lon: number, // 軽度
  owner: string, // 主催者
  limit: number, // 定員
  accepted: number, // 参加者
  waiting: number, // 補欠者
  updatedAt: Date, // 更新日時
}

export class ConnpassEvent implements Event {
  id: string
  service: string
  eventId: number
  title: string
  catch: string
  description: string
  eventUrl: string
  hashtag?: string
  startedAt: Date
  endedAt: Date
  address: string
  place: string
  lat: number
  lon: number
  owner: string
  limit: number
  accepted: number
  waiting: number
  updatedAt: Date

  constructor(res: connpassResponseEvent) {
    this.id = `connpass_${res.event_id}`
    this.service = 'connpass'

    this.eventId = res.event_id
    this.title = res.title
    this.catch = res.catch
    this.description = res.description
    this.eventUrl = res.event_url
    this.hashtag = res.hash_tag || undefined
    this.startedAt = res.started_at
    this.endedAt = res.ended_at
    this.address = res.address
    this.place = res.place
    this.lat = res.lat
    this.lon = res.lon
    this.owner = res.owner_nickname
    this.limit = res.limit
    this.accepted = res.accepted
    this.waiting = res.waiting
    this.updatedAt = res.updated_at
  }
}