import React from "react";


function Article ({title, date, preview, minutes}) {

    function emojis(minutes) {
        const emoji = "🍱";
         const emojiCount = Math.floor(minutes/10);

         console.log(emojiCount);
         for (let i=0; i < emojiCount; i++) {
            emoji += "🍱";
         }

         return emoji + minutes + "minutes to read";

    };

    const minutesToRead = emojis(minutes);
    
    
    return ( <article>
        <h3>{title}</h3>
        <small>{date ? date : "January 1, 1970"}</small>
        {/* ^^^Ternary - if there is a date, pass in the date OR pass in the default (January 1 ...) */}
        <p>{preview}</p>
    </article>
    );
};

export default Article;