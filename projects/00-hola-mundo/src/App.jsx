import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    const format = (userName) => `@${userName}`
    return(
        <section className='App'>

            <TwitterFollowCard 
                formatUserName={format} 
                userName="elsabiojuan" 
                name = "Juan Bermúdez"
                initialIsFollowing = {true}
            />

            <TwitterFollowCard 
                formatUserName={format} 
                userName="juanandresbermudezgomez6176" 
                name = "Juan Bermúdez"
            />

            <TwitterFollowCard 
                formatUserName={format} 
                userName="LelePons" 
                name = "Lele Pons"
            />

            <TwitterFollowCard 
                formatUserName={format} 
                userName="pedrocapo_oficial" 
                name = "Pedro Capó"
            />

            <TwitterFollowCard 
                formatUserName={format} 
                userName="beckyg" 
                name = "Becky G"
            />

        </section>
    )
}