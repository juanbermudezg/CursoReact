import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
const format = (userName) => `@${userName}`
const users = [
    {
        formatUserName: format,
        userName: "elsabiojuan",
        name: "Juan Bermúdez Gómez",
        isFollowing: true
    },
    {
        formatUserName: format,
        userName: "juanandresbermudezgomez6176",
        name: "Juan Bermúdez",
        isFollowing: false
    },
    {
        formatUserName: format,
        userName: "LelePons",
        name: "Lele Pons",
        isFollowing: false
    }, 
    {
        formatUserName: format,
        userName: "beckyg",
        name: "Becky G",
        isFollowing: false
    },
    {
        formatUserName: format,
        userName: "NattiNatasha",
        name: "NATTI NATASHA",
        isFollowing: true
    }
]

export function App (){
    
    return(
        <section className='App'>
            {
                users.map(({formatUserName, userName, name, isFollowing})=>(

                    <TwitterFollowCard
                        key = {userName}
                        formatUserName = {formatUserName}
                        userName = {userName}
                        name = {name}
                        initialIsFollowing = {isFollowing}
                    />
                ))
            }
        </section>
    )
}