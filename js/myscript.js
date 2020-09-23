var fname;
var age;
var goto;
function total(age) {
    fname = prompt ('WELCOME TO YOUR POCKET LIPRARY enter your first name, please');
    while (fname <= 0 || fname > 0) {
        fname = prompt (' enter your correct name, please');
    }
    age = prompt (fname+' enter your age, please');
    while (age <= 0 || age > 100) {
        age = prompt (fname+' enter your correct age, please');
    }
    var usernum = prompt('what is your favorite number in (1;2;3)?');
    while ( usernum < 1 || usernum >3 ) {
        usernum = prompt('Please; what is your favorite number in (1;2;3)?');
    }
    for (var i = 1; i <= usernum; i++) {
       if ( usernum == 1 ) {
        var numImage = '<img src="https://www.arrajol.com/sites/default/files/2018/04/23/275121-o-READING-A-BOOK-facebook.jpg" >';
       } else if ( usernum == 2 ) {
        var numImage = '<img src="https://www.arrajol.com/sites/default/files/2018/04/23/275121-o-READING-A-BOOK-facebook.jpg" >' + '<img src="https://media.sciencephoto.com/f0/25/39/67/f0253967-800px-wm.jpg" >';
       } else { var numImage = '<img src="https://www.arrajol.com/sites/default/files/2018/04/23/275121-o-READING-A-BOOK-facebook.jpg" >' + '<img src="https://media.sciencephoto.com/f0/25/39/67/f0253967-800px-wm.jpg" >' + '<img src="https://www.tyackhealth.com.au/media/1585/research-shows-importance-of-reading.jpg?mode=max&height=500&rnd=131307229100000000" >'};
    }
    if (age > 0 ) {
    if (age < 8 ){
        goto = 'Our advice to you: go to pecture books list'
    } else if(age < 12 ){
        goto = 'Our advice to you: go to middle-grade books list'
    } else if(age < 18 ) {
        goto = 'Our advice to you: go to young adult books list'
    } else {
        goto = '....read what you like'
    }
} else { goto = '....it is a WRONG AGE !!!'}
var total = fname+' '+goto
alert (total);
document.write('<h2><em> Another images </em></h2>');
document.write( numImage );
}
total(age)
