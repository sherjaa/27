var elTemplate = document.querySelector('template').content;
var fragment = document.createDocumentFragment();
var sarlavha = document.createElement('h1')
sarlavha.textContent = 'kinolar'
sarlavha.classList.add('sarlavha')
for(i=0; i < kinolar.length; i++){
    var elTemplateClone = elTemplate.cloneNode(true);
    elTemplateClone.querySelector('.kino').textContent = kinolar[i].title;
    elTemplateClone.querySelector('.kino__yili').textContent = kinolar[i].year;
    for (var q = 0; q < kinolar[i].cast.length; q++) {
        var li = document.createElement('li')
        li.textContent = kinolar[i].cast[q];
        elTemplateClone.querySelector('.kino__aktyor_').appendChild(li);
    }
    fragment.appendChild(elTemplateClone);
};
document.body.appendChild(sarlavha)
document.body.appendChild(fragment)