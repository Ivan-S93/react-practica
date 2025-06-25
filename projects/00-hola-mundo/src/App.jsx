import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    return (
        <section className="App">
        <TwitterFollowCard  userName="midudev"  name="Miguel Angel Duran" />
        <TwitterFollowCard  userName="samudio93" name="Ivan Samudio" />
        <TwitterFollowCard  userName="elonmusk"  name="Elon Musk" />
        <TwitterFollowCard  userName="vxnder" name="Vanderhart" />
        </section>
    )
} 