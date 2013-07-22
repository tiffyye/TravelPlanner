function createfooter(){
    var txt = document.createElement('p');
    txt.appendChild(document.createTextNode(
	"Works by Shing Huei and Pingxiao @ Chambana, 2013"
    ));

    document.getElementById('footer').appendChild(txt);
}


/*Note that to it is not necessary to implement this in js file. But it is better to enfore the same standard across different pages
 The footer should be redesigned in the future stage of the development*/
