## Quick link to visit here: https://jalbane.github.io/g-website/

Rebuilding the website in my 'web-app' repository into a react app

Changelog: 

  - I've learned to stop using the HTML table element and replace it with [div elements](https://stackoverflow.com/questions/83073/why-not-use-tables-for-layout-in-html), so why am I still displaying the roster content as a table when thats no longer a limitation?
    - To change that I'm going to work on altering the display to resemble a card-like template, maybe resembling a baseball card or something similar.
    - [View before change was made](https://gifyu.com/image/vko0)
    
  - Planning on changing a player card to show their character class instead of character role, ie. 'Fire Mage' instead of 'Fire Damage'.
    I do like the idea of having their role displayed so you can see the team composition, but I'd like to replace it with an icon that
    stands out much more. **Update: Blizzard API overhaul has not reintroduced character class specialization in the API endpoint that I'm using.**
    - [View before changes](https://gifyu.com/image/vvD1)
    
  - Added functionality to sort and re-display the guild roster by different parameters
    
  - Fixed an issue with file name extensions that were preventing people who cloned this repository from being able to run it on localhost. 
  
  - Fixed an issue after Blizzards overhaul of their API was causing difficulties with individual character avatar image renders.
