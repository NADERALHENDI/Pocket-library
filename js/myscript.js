var fname;
var lname;
var age;
var goto;
fname = prompt ('WELCOME TO YOUR POCKET LIPRARY inter your first name, please')
lname = prompt (fname+' inter your last name, please')
age = prompt (fname+' inter your age, please')
if (age > 0 ) {
    if (age < 8 ){
        goto = '....go to pecture books list'
    } else if(age < 12 ){
        goto = '....go to middle-grade books list'
    } else if(age < 18 ) {
        goto = '....go to young adult books list'
    } else {
        goto = '....read what you like'
    }
} else { goto = '....it is a WRONG AGE !!!'}
var total = fname+' '+lname+'  '+goto
document.write('<h3><em>'+total+'</em></h3>');
