import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { ConnpassClient } from '../client/connpass'
import { FirestoreSimple } from 'firestore-simple'
import { ConnpassEvent, Event } from '../model/event'

const firestore = admin.firestore()
const firestoreSimple = new FirestoreSimple(firestore)


export const getConnpassEvents = functions.https.onRequest(async (request, response) => {
  const eventsCollection = firestoreSimple.collection<Event>({ path: 'events' })
  await eventsCollection.fetchAll()

  const client = new ConnpassClient()
  const apiResponse = await client.fetch()
  const events = apiResponse.map((responseEvent) => new ConnpassEvent(responseEvent))

  await eventsCollection.bulkSet(events)
})