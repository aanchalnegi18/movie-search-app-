
let input=document.querySelector('input');
let button=document.querySelector('button');
let movieSuggestion=document.querySelector('.movieS')
console.log(movieSuggestion)



const APIURL =    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";


const SEARCHAPI =  `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=`;




const getMovie=async(api)=>{
movieSuggestion.innerHTML=''
try {
  const response=await fetch(api);
  const data=await response.json();
  console.log(data)
    result=data.results;
    
  const showmovie=(data)=>{

      
    result.forEach(item => {
      
      let div=document.createElement('div');
      div.classList.add('movie-card');
      div.innerHTML+=`
      
      <img src=" ${IMGPATH + item.poster_path}" alt="movie">
<div class="rating">
<h2>Title = ${ item.title}</h2>

<p> Overview=${item.overview}</p>

</div>      
    </div>
      `
      movieSuggestion.appendChild(div)
          })}
    
showmovie()
      



        
  }





 

  
 catch (error) {
  
  console.error(error)
}

}
let debounceTimer;

input.addEventListener('keyup',(event)=>{

clearTimeout(debounceTimer)//clear time 
 if(event.target.value !==''){
  console.log(event.target.value)
  debounceTimer=setTimeout(()=>{
    const queary=event.target.value.trim();
    getMovie(SEARCHAPI+ queary);
    console.log('hello')
  },1000)
 
  
 }
  else{
    debounceTimer=setTimeout(()=>{
      getMovie(APIURL)
    },200)
  }
})

