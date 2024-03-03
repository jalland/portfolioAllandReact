import Project from "../components/Project"

//This is the PortfolioPage component that will be used to display the projects on the portfolio page. It calls a Project component for each project in the array of objects.
export default function PortfolioPage(){

    const array = [
        {
            name: "Roommate Finder",
            class: 'roomeo',
            deployedLink: 'https://roomeo-54bd0cc57e2b.herokuapp.com/',
            githubLink: 'https://github.com/TroyMena/roomeo'

        },
        {
            name: "Recipe App",
            class: 'recipe-app', 
            deployedLink: 'https://maxmruiz.github.io/recipe-app/',
            githubLink: 'https://github.com/maxmruiz/recipe-app'
        },
        {
            name: "Temperature Forecast",
            class: 'temp-dashboard', 
            deployedLink: 'https://jalland.github.io/module_6_challenge',
            githubLink: 'https://github.com/jalland/module_6_challenge'
        },
        {
            name: "Daily Planner",
            class: 'daily-planner', 
            deployedLink: 'https://jalland.github.io/module_5_challenge/',
            githubLink: 'https://github.com/jalland/module_5_challenge'
        },
        {
            name: "Note Taker",
            class: 'note-taker', 
            deployedLink: 'https://calm-escarpment-87979-71000dcf37e1.herokuapp.com/',
            githubLink: 'https://github.com/jalland/noteTaker'
        },
        {
            name: "Coding Quiz",
            class: 'coding-quiz', 
            deployedLink: 'https://jalland.github.io/module_4_challenge/',
            githubLink: 'https://github.com/jalland/module_4_challenge'
        },
    ]
return(
<div className="container pt-4">
<h2>Portfolio</h2>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
{array.map((item)=> (
  <Project item={item} />
))}
</div>
</div>
)
}