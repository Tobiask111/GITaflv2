function Album(artist, album, totalTracks, rating, favorites) {
    this.artist=artist;
    this.album=album;
    this.totalTracks=totalTracks;
    this.rating=rating;
    this.favorites=favorites;
  } //Koden her definere functionen "Album" og den fungere som en konstruktør som bruges til at oprette nye objekter.  
  //Lige en side note tilføjet 5 stykker information i alt i stedet for 4 da jeg havde problemer da jeg sadte det 4 stykke information ind.

function addRowToTable(album){
  let tableBody=document.querySelector("#tableWithAlbums tbody")//finder den rigtige table body ved hjælp af #(id, som i dette tilfælde er tableWithAlbums).
  let række=document.createElement("tr"); //Opretter en ny tabel række(tr).
  række.innerHTML=`<td>${album.artist}</td>
  <td>${album.album}</td>
  <td>${album.totalTracks}</td>
  <td>${album.rating}</td>
  <td>${album.favorites}</td>`//koden her indsætter data ind i hver td og det gør den ved hjælp af ${}, som bruges når man skal bruge backticks(`). Som bruges når man skal arbejde med template literals. Som gør det nemmere at arbejde med strings.
  tableBody.appendChild(række) //Indsætter en ny række ved hjælp af det forrige "let række" og "række.innerhtml"
}
 

  fetchContent("albums.json").then((albums)=>{
    let albumObjects = [];
    for (let i = 0; i < albums.length; i++) {
      const album = new Album(
        albums[i].artistName,
        albums[i].albumName,
        albums[i].trackList.length,
        albums[i].rating,
        albums[i].favorites
      );
      albumObjects.push(album);
    } // henter dataen fra "albums.json" og behandler det hvor det så går igennem loopet hvor "i" skal være mindre end længden af "albums". Derefter opretter vi albumobjekter der indeholder alt fra "albums[i].artistName" til " albums[i].favorites".


   albumObjects.forEach(addRowToTable) //tilføjer en række i tabellen for hvert album i "albumObjects"
    });
    const sejKnap = document.getElementById("sejKnap");
    const tableWithAlbums = document.getElementById("tableWithAlbums")

  

    tableWithAlbums.style.display = "block" 
    sejKnap.textContent = "Hide"
    sejKnap.addEventListener("click", () => {
      if (tableWithAlbums.style.display === "none") {
    tableWithAlbums.style.display = "block"
    sejKnap.textContent = "Hide"
  } else {
    tableWithAlbums.style.display = "none"
    sejKnap.textContent = "Show"
  }
})

  
  async function fetchContent(url) {
    let request = await fetch(url);
    let json = await request.json();
    return json;
  }//Har ingen ide hvad det her egentlig gør, men det lød som om vi skulle bruge den udfra dit eksempel og koden virker ikke uden den. 