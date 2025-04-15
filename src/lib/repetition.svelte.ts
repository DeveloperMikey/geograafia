import { debug } from "$lib/debugging"

enum State { Unknown, Hard, Medium, Easy }

class Card {
    name: string | string[]
    state: State = State.Unknown
    time: number = 0

    constructor(name: string | string[]) {
        this.name = name
    }

    rate = (wrong: boolean, misspelled: boolean) => {
        debug(`Rating card ${this.name}`)

        if (wrong) {
            debug(`Input was wrong, current state: ${State[this.state]}`)
            switch (this.state) {
                case State.Unknown:
                    this.state = State.Hard
                    break
                case State.Hard: // Stays hard
                    break
                case State.Medium:
                    this.state = State.Hard
                    break
                default:
                    break
            }

        } else { // not wrong
            debug(`Input was correct, current state: ${State[this.state]}`)
            switch (this.state) {
                case State.Unknown: // First try, probably knows, no need to repeat
                    this.state = State.Easy
                    break
                case State.Hard:
                    this.state = State.Medium
                    break
                case State.Medium:
                    if (!misspelled) { // if correct 2 times, promote to easy, unless it was misspelled
                        this.state = State.Easy
                    }
                    break
                default:
                    break
            }

        }

        switch (this.state) {
            case State.Hard:
                this.time = Date.now() + 60 * 1000 // to milliseconds
                break
            case State.Medium:
                this.time = Date.now() + 120 * 1000
                break
            default:
                break
        }

        debug(`Card ${this.name} time: ${this.time} (${this.time - Date.now()})`)
    }

    getPrimaryName(): string {
        return Array.isArray(this.name) ? this.name[0] : this.name;
    }

    getAllNames(): string[] {
        return Array.isArray(this.name) ? this.name : [this.name];
    }
}

class Deck {
    current: Card | undefined = $state(undefined)
    cards: Card[] = []

    addCard = (name: string | string[]) => {
        const card = new Card(name)
        this.cards.push(card)
        return card
    }

    getNextCard = () => {
        debug(this.cards)

        const expired = this.cards.filter(card => {
            return card.time <= Date.now() && card.state !== State.Unknown && card.state !== State.Easy
        })

        if (expired.length > 0) { // prioritize expired cards
            const card = expired[Math.floor(Math.random() * expired.length)]
            this.current = card
            debug(`Got card ${card.name} from expired list`)
            return card
        }

        const unknowns = this.cards.filter(card => card.state === State.Unknown)
        if (unknowns.length > 0) { // new cards if no cards are expired
            const card = unknowns[Math.floor(Math.random() * unknowns.length)]
            this.current = card
            debug(`Got card ${card.name} from unknown list`)
            return card
        }

        const cards = this.cards.filter(card => card.state !== State.Easy)
        if (cards.length > 0) { // if no new cards and no expired cards, take any card that isn't learned yet
            const card = cards[Math.floor(Math.random() * cards.length)]
            this.current = card
            debug(`Got card ${card.name} from all cards`)
            return card
        }

        debug(`Card pack empty, returning false`)
        this.current = undefined
        return false // signal that there are no more cards
    }
}

export { State, Deck, Card }
