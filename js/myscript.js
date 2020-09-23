var fname;
var lname;
var age;
var goto;

fname = prompt ('WELCOME TO YOUR POCKET LIPRARY enter your first name, please')
lname = prompt (fname+' enter your last name, please')
age = prompt (fname+' enter your age, please')
function total(age) {
    while (age <= 0 || age > 100) {
        age = prompt (fname+' enter your correct age, please')
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
var total = fname+' '+lname+'  '+goto
alert (goto);
document.write('<h3><em>'+total+'</em></h3>');
}
total(age)
