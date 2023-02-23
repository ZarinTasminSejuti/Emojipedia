import React from 'react'; 
import Emoji from './Emoji.js';
import Details from "./Details";




function App() {
  return (
    <div>
      <h1>
          <span>Emojipedia</span>
      </h1>
      <dl className="dictionary"> {Details.map(emojiTerm => (
        <Emoji
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description= {emojiTerm.meaning}
        />
      ))}
  </dl>    

    </div>
  );
}

export default App;
