import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    return (
        <section className="App">
        <TwitterFollowCard  userName="midudev" >
            "Miguel Angel Duran" 
        </TwitterFollowCard>

        <TwitterFollowCard  userName="samudio93" > 
            "Ivan Samudio" 
        </TwitterFollowCard>

        <TwitterFollowCard  userName="elonmusk"  >
            "Elon Musk"
        </TwitterFollowCard>
        
        <TwitterFollowCard  userName="vxnder" >
            "Vanderhart" 
        </TwitterFollowCard>
        
        </section>
    )
} 