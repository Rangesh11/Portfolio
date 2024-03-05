import React from 'react';
import Card1 from './Home_Component/card1';
import Card2 from './Home_Component/card2';
import Card3 from './Home_Component/card3';// Assuming 'card1' is the correct file name and path
import Card4 from './Home_Component/card4';
import Card5 from './Home_Component/card5';
import Card6 from './Home_Component/Card6';
import Card7 from './Home_Component/card7';
import Card8 from './Home_Component/card8';
import Card9 from './Home_Component/card9';
const Body = () => {

  return (
    <div className="grid grid-rows-8 grid-cols-4  w-10/12 gap-4 p-2 max-first:grid-cols-3  max-first:gap-4 bg-red-500 max-second:grid-cols-2 max-second:grid-row-12 max-third:grid-cols-1 max-third:grid-row-11">
      <Card1 /> {/* Use the correct component name with capital letter */}

      {/* card 2 */}
      <Card2/>
      {/* card3 */}
      <Card3/>
      {/*Card3 */}
      <Card4/>
      <Card5/>
      <Card6/>
      <Card7/>
      <Card8/>
      <Card9/>
    </div>
  );
};

export default Body;
