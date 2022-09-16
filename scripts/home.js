let authorsList = [
    {
      name: "Thomas Harris",
      photoUrl: "./images/Thomas-Harris.jpg",
      genre: ["Crime", "Horror", "Suspense"],
      description:
        "He is an American author best known for a series of suspense novels about his most famous character, Hannibal Lecter. The majority of his works have been adapted into films and television, the most notable being The Silence of the Lambs.",
    },
    {
      name: "Stephen King",
      photoUrl: "./images/Stephen-King.jpg",
      genre: ["Horror","Supernatural", "Suspense", "Crime", "Fantasy"],
      description: "Described as the King of Horror, he is an American author with 64 published novels which most of them were adapted into films and series and over 200 short stories.",
    },
    {
      name: "Elif Shafak",
      photoUrl: "./images/Elif-Shafak.jpg",
      genre: ["Literary fiction"],
      description: "She is a turkish-british author who writes in both english and turkish. Described by the Financial Times as 'Turkey's leading female novelist', she has 19",
    },
    {
      name: "Haruki Murakami",
      photoUrl: "./images/Haruki-Murakami.jpg",
      genre: ["Fiction", "Surrealism", "Postmodernism", "Bildungsroman"],
      description: "He is a Japaanese writer whose novels, essays, and short stories have been bestsellers in Japan as well as internationally. With his work translated into 50 languages, he has sold millions of copies outside Japan.",
    },
    {
      name: "Colleen Hoover",
      photoUrl: "./images/Colleen-Hoover.jpg",
      genre: ["Young adult fiction", "New-adult fiction", "Romance", "Thriller"],
      description: "She is an American author best known for her 2016 romance novel It Ends with Us. Many of her novels ended up being a New York times best seller. Many of her works were self-published before being picked up by a publishing house.",
    },
    {
      name: "Salley Rooney",
      photoUrl: "./images/Salley-Rooney.jpg",
      genre: ["Fiction", "Coming of Age", "Literary", "Psychological"],
      description: " She is an Irish author and screenwriter. She has published three novels. One of them titled 'Normal People' was adapted into a 2020 television series. She is regarded as one of the foremost millennial writers.",
    },
  ];
  
  function createAuthorCard(authorObj){
    const author = document.createElement('div'); 
    author.classList.add('flex-container');
    author.classList.add('author');
  
    const authorPhoto = document.createElement('div'); 
    authorPhoto.classList.add('author-photo-container'); 
    const photo = document.createElement("img"); 
    photo.classList.add('author-photo'); 
    photo.src = authorObj.photoUrl; 
    photo.alt = "A photo of " + authorObj.name;
  
    authorPhoto.append(photo); 
  
    const authorInfo = document.createElement('div');
    authorInfo.classList.add('flex-container');
    authorInfo.classList.add('author-description');
    
    const authorName = document.createElement('h3');
    authorName.append(document.createTextNode(authorObj.name)); 
    
    const genres = document.createElement('p'); 
    genres.classList.add('genre'); 
    genres.append(document.createTextNode(authorObj.genre.join(', ')))
    const lineBreak = document.createElement('div');
    lineBreak.classList.add('line-break');
  
    
    const authorDesc = document.createElement('p');
    authorDesc.append(document.createTextNode(authorObj.description)); 
  
    authorInfo.append(authorName, genres, lineBreak, authorDesc)
    
    author.append(authorPhoto, authorInfo);
  
    return author;
  
  }
  
  const authorsContainer = document.querySelector('.authors'); 
  for(let i = 0; i<authorsList.length; i++){
    const card = createAuthorCard(authorsList[i]);
    if (i >= 2){
      card.setAttribute('data-hide', 'true');
      if(window.screen.width < 768){
        card.classList.add('hidden');
      }
    }
    authorsContainer.append(card);
  }
  
  //implementing the more button functionality 
  
  const seeMoreBtn = document.querySelector('.see-more');
  const authorsCards = document.querySelectorAll('.author'); 
  const arrow = seeMoreBtn.querySelector('img');
  function changeSeeMoreBtn(){
    if (seeMoreBtn.getAttribute('data-toggled') === 'false'){
      seeMoreBtn.setAttribute('data-toggled', 'true');
      arrow.src = "./images/up-arrow-orange.png";
      let span = document.createElement('span'); 
      span.append(document.createTextNode('HIDE'));
      seeMoreBtn.replaceChild(span, seeMoreBtn.children.item(0));
    } else {
      seeMoreBtn.setAttribute('data-toggled', 'false');
      arrow.src = "./images/down-arrow-orange.png";
      let span = document.createElement('span'); 
      span.append(document.createTextNode('MORE'));
      seeMoreBtn.replaceChild(span, seeMoreBtn.children.item(0));
    }
  }
  
  seeMoreBtn.addEventListener('click', () => {
    authorsCards.forEach((c) => {
      if (c.hasAttribute('data-hide')){
        c.classList.toggle('hidden');
      }
    });
    changeSeeMoreBtn(); 
  });
  
  window.addEventListener(
    "resize",
    () => {
      const query = window.matchMedia("(min-width: 768px)");
      if (query.matches) {
        authorsCards.forEach((c) => {
          if (c.hasAttribute('data-hide')){
            c.classList.remove('hidden');
          }
        });
      seeMoreBtn.setAttribute('data-toggled', 'true');
      arrow.src = "./images/up-arrow-orange.png";
      let span = document.createElement('span'); 
      span.append(document.createTextNode('HIDE'));
      seeMoreBtn.replaceChild(span, seeMoreBtn.children.item(0));
      }
    },
    true
  );