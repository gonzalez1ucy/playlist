/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Cinema", "Miedo","Wokeuplikethis*","Everyone Nose (all the girls standing in the line for the bathroom)", "Runner", "She lives in my lap"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var link=["https://www.youtube.com/watch?v=bx1xdUJcEoA","https://www.youtube.com/watch?v=TcvnS69SxKs","https://www.youtube.com/watch?v=REmZhFKmOmo","https://www.youtube.com/watch?v=N2wqmGu1EY8","https://www.youtube.com/watch?v=6AHYl3dXeN4", "https://www.youtube.com/watch?v=c15QgtYqknA"];
var artist=["Kero Kero Bonito","Beach Goons","PlayboiCarti(ft lil uzi vert", "N.E.R.D","Kevin Abstract","Outkast"]
var image=["https://consequenceofsound.files.wordpress.com/2018/10/kero-kero-bonito-time-n-place-album-art.jpg?quality=80","https://images-na.ssl-images-amazon.com/images/I/51yeAVJVgPL._SS500.jpg","https://i.redd.it/fu2wul4d18sy.jpg","https://images-na.ssl-images-amazon.com/images/I/51Dotze0lvL._SS500.jpg", "https://images.genius.com/b5167f25c3f5b224b73ea09a611add77.1000x1000x1.jpg","https://images-na.ssl-images-amazon.com/images/I/61T3AEFkPPL._SS500.jpg"];
var length=[120,117,260,205,177,];
function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
