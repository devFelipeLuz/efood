class Prato {
  id: number
  image: string
  infos: string[]
  title: string
  score: string
  description: string

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    score: string,
    description: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.score = score
    this.description = description
  }
}

export default Prato
