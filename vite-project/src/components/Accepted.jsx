import React from 'react'
import { assets } from '../assets/assests'
const Accepted = () => {
  return (
    <div className='bg-black min-h-screen mx-auto pt-12 '>
        <img className='w-32 mx-auto' src={assets.sheHacks_logo} />

<div className="p-6 text-green-600  max-w-[600px] sm:max-w-[800px] mx-auto mt-5">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
    Cras venenatis euismod malesuada. Curabitur sit amet sem vitae urna tincidunt tincidunt. 
    Mauris ut metus eget sapien posuere sollicitudin. Nulla facilisi. 
  </p>
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
  </p>

    <p className='text-pink-700 underline text-center p-5'>Discord Link</p>
  <p>
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 🎀
  </p>
      <p className='text-pink-700  text-center p-5'> The SheHacks Team</p>

</div>
<div className='flex justify-center pb-5'>
  <img className='w-20' src={assets.shellmates_logo}  alt='/'/>
  <div className='h-20 w-1 bg-pink-700 mx-4'></div>
  <img className='w-20 ' src={assets.shellmates_logo}  alt='/'/>

</div>


    </div>
  )
}

export default Accepted