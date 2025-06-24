import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    return (
        <section className="App">
        <TwitterFollowCard isFollowing userName="midudev"  name="Miguel Angel Duran" />
        <TwitterFollowCard isFollowing userName="samudio93" name="Ivan Samudio" />
        <TwitterFollowCard isFollowing userName="elonmusk"  name="Elon Musk" />
        <TwitterFollowCard isFollowing userName="vxnder" name="Vanderhart" />
        </section>
    )
} 