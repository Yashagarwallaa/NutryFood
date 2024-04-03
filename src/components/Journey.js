import React from 'react'

function Journey() {
  return (
    <>
    <div className='journey-title' style={
        {
            color: '#000',
            fontFamily: 'Montserrat',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '600',
            display: 'flex',
            justifyContent:'center',
            lineHeight: 'normal',
            marginBottom: '20px',
          }
    }>
        Our Journey
    </div>
    <div className='journey-des' style={
        {
            color: 'rgba(0, 0, 0, 0.70)',
            fontFamily: 'Lato',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            // width:'1152px',
            textAlign:'justify',
            margin: "0 4rem 0 4rem",
          }
    }>
        At the heart of Nutryfood's success is our strong focus on making food better through lots of testing and improving. We've made cooking much quicker and easier, turning long tasks into short ones, so you can spend less time in the kitchen. At Nutryfood, we're all about making cooking effortless, where every dish is made with care and tastes amazing.
        <br></br> <br></br>
We're really proud of what we do. Every bite you take shows how much we care about making food taste great. Nutryfood is all about bringing together new ideas with old ones to make food that's both tasty and good for you.
<br></br> <br></br>
We want everyone to enjoy the flavors of Indian food, no matter where they are. And we promise that when you choose Nutryfood, you're getting food that's good for you and tastes great. Plus, our solutions won't break the bank, so everyone can enjoy delicious meals. Come join us on this journey of tasty food and new ideas!
    </div>
    </>
  )
}

export default Journey