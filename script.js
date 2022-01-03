
/*function displayImage(data){
    $('<img>',{
        src : data.data.memes[2].url,
        height : '100%',
        width : '100%'
    }).appendTo('#image-container');
}

$.ajax({
    url : 'https://api.imgflip.com/get_memes',
    method : 'GET',
    success : displayImage
});*/

function displayImage(data){
    // console.log(data.data.memes.length);
    const randomNu = Math.floor(Math.random() * 100);
    $('<img>',{
        src : data.data.memes[randomNu].url,
        height : '100%',
        width : '100%'
    }).appendTo('#image-container');
}

$.ajax({
    url : 'https://api.imgflip.com/get_memes',
    method : 'GET',
    success : displayImage
});