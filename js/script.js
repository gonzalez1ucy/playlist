/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Cinema", "Miedo","Wokeuplikethis*","Everyone Nose (all the girls standing in the line for the bathroom)", "Runner", "She lives in my lap"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var link=["https://www.youtube.com/watch?v=bx1xdUJcEoA","https://www.youtube.com/watch?v=TcvnS69SxKs","https://www.youtube.com/watch?v=REmZhFKmOmo","https://www.youtube.com/watch?v=N2wqmGu1EY8","https://www.youtube.com/watch?v=6AHYl3dXeN4", "https://www.youtube.com/watch?v=c15QgtYqknA"];
var artists=["Kero Kero Bonito","Beach Goons","PlayboiCarti(ft lil uzi vert)", "N.E.R.D","Kevin Abstract","Outkast"];
var image_links=["https://consequenceofsound.files.wordpress.com/2018/10/kero-kero-bonito-time-n-place-album-art.jpg?quality=80","https://images-na.ssl-images-amazon.com/images/I/51yeAVJVgPL._SS500.jpg","https://i.redd.it/fu2wul4d18sy.jpg","https://images-na.ssl-images-amazon.com/images/I/51Dotze0lvL._SS500.jpg", "https://images.genius.com/b5167f25c3f5b224b73ea09a611add77.1000x1000x1.jpg","https://images-na.ssl-images-amazon.com/images/I/61T3AEFkPPL._SS500.jpg"];
var song_lengths =[120,117,260,205,177];

function displaySongInfo(){
    songs.forEach(function(song) {
         $("#songs").append(" <p> " + song +  "</p>");  
    });
    
    link.forEach(function(videolink){
         $("#links").append( "<a href=" + videolink + ">" + "Preview" + "</a>");    
    });
    
    image_links.forEach(function(image){
        $("#images").append( "<img src=" + image +  ">");     
    });
    
    song_lengths.forEach(function(length){
        $("#lengths").append(" <p> " + length +  " </p> ");     
    });
    artists.forEach(function(artist) {
         $("#artists").append(" <p> " + artist +  "</p>");  
    });
}

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var newSong = $("#song").val();
         songs.push(newSong);
    var newArtist = $("#artisit").val();
        artists.push(newArtist);
    var newLength = $("#length").val();
       song_lengths.push(newLength);
    var newImage = $("#image").val();
       image_links.push(newImage);
    var newLink = $("#link").val();
       link.push(newLink);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
