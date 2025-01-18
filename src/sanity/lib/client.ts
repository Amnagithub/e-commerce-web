import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token:'sks7qIDu8lUbABjvnT6A7kWhE4nMVbjNAKnTBRuR4M3HrTOI0gMSymU9E36lTLyDEpbrO7FefKyc98Kq3FJA5UZ4eBrMBy8NfzzQaHTfgZVxjBYlHviQuHeohL8Rwy0TJJprShtORd97OPp65ZXiGMEm9cQNUeObg7nhz0OqbKXNWur8SVCD',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
