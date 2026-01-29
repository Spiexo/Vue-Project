export type User = {
  id: number
  prenom: string
  nom: string
  age: number
}

export const users: User[] = [
  { id: 1, prenom: 'Jhon', nom: 'Doe', age: 20 },
  { id: 2, prenom: 'Jane', nom: 'Doe', age: 30 },
  { id: 3, prenom: 'Jean', nom: 'Doe', age: 40 },
]
