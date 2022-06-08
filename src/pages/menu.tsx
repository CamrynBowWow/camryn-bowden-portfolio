import React from 'react'

const Menu = () => {
  return (
    <>
      <div className="h-full p-8 grid grid-cols-1 md:grid-cols-2 gap-14 bg-neutral-50">
        <div className="flex flex-col flex-end gap-16">
          <div>
            <h1 className="menu-header">Mint Condition Peen</h1>
            <p className="menu-header-list">Gets stuff done</p>

            <p className="pro-con-style">Pros</p>
            <div className="li-tags">
              <li>Speed on the keyboard</li>
              <li>Quick learner</li>
              <li>Gets to work earlier</li>
              <li>Works hard on tasks</li>
              <li>Enthusiastic about work</li>
              <li>Looks neat for work</li>
              <li>Well groomed</li>
              <li>Always active</li>
              <li>Gentleman to his desktop/laptop</li>
              <li>Doesn't cause any work problems with other employees</li>
            </div>

            <p className="pro-con-style">Cons</p>
            <div className="li-tags">
              <li>Doesn't know how to do a Pros list</li>
            </div>
          </div>
          
          <div>
          <h1 className="menu-header">Normal Peen</h1>
            <p className="menu-header-list">He comes with some basic accessories, like fists and 4 eyes.</p>
    
            <p className="pro-con-style">Pros</p>
            <div className="li-tags">
              <li>Always communicates with people</li>
              <li>Sometimes hits the keyboard</li>
              <li>Sits down on a chair</li>
              <li>Doesn't break stuff</li>
              <li>Showers often</li>
              <li>Enjoys pizza</li>
            </div>
            
            <p className="pro-con-style">Cons</p>
            <div className="li-tags">
              <li>Doesn't like anything with the word teamwork in it</li>
              <li>Hates laptops</li>
              <li>Uses the toilet frequently for appropriate use</li>
              <li>Comes to work on time and leaves on time</li>
              <li>Ravenous if not well feed</li>
              <li>Not well groomed</li>
              <li>Dresses like like everyday is relax at home day</li>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-end gap-16">
          <div>
            <h1 className="menu-header">Chill Peen</h1>
            <p className="menu-header-list">Comes with own pillow and reusable underwear</p>

            <p className="pro-con-style">Pros</p>
            <div className="li-tags">
              <li>Brings good vibs</li>
              <li>Wares funny shirts</li>
              <li>Wears the same colour socks</li>
              <li>Has good eyesight</li>
            </div>

            <p className="pro-con-style">Cons</p>
            <div className="li-tags">
              <li>Naps often</li>             
              <li>Says hectic and based a lot</li>             
              <li>Says funny things - not actually funny</li>             
              <li>Moans and grunts often</li>             
              <li>Wears hoodie all the time</li>             
              <li>Hectic</li>             
              <li>Doesn't enjoy inspirational speeches</li>   
              <li>Often falls over for no reason</li>          
              <li>Can't read or write</li>          
              <li>Often gets off his leash</li>          
              <li>Not very accurate in the toilet</li>
              <li>Based</li>          
              <li>Walks into things</li>
              <li>Enjoys the sun to much - will probably get cancer</li>     
              <li>Life expectancy 2 to 5 years max</li>     
            </div>
          </div>
          
          <div>
            <h1 className="menu-header">Professor-P</h1>
            <p className="menu-header-list">Comes with hair extensions and attachable legs. Batteries not included</p>

            <p className="pro-con-style">Pros</p>
            <div className="li-tags">
              <li>Works effectively remotely</li>
            </div>

            <p className="pro-con-style">Cons</p>
            <div className="li-tags">
              <li>Not able to walk</li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu