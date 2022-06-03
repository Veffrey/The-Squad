let data = [
    {
        name: 'Veffrey',
        age: '23'
    },
    {
        name: 'Zubie',
        age: '25'
    },
    {
        name: 'Diana',
        age: '25'
    },
    {
        name: 'Vanessa',
        age: '24'
    },{
        name: 'Priscilla',
        age: '24'
    },
    {
        name: 'Lebari',
        age: '26'
    }

];

const info = document.querySelector('#info')
let details = data.map(function(Item){
    return(
        '<div>' + Item.name + ' ' + 'is' + ' ' +Item.age + ' ' + 'years old' + '</div>'
    )
})

info.innerHTML = details.join('\n');