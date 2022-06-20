hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = (destination.concat(native, hero)).reverse();

rainbow.splice(0, 1, 'Richard');
rainbow.splice(3, 0, 'Gave', 'Battle');
rainbow[6] = 'Vain';

color= ['red', 'orange', 'yellow', 'green', 'blue', 'DarkBlue', 'purple'];
finalPrint = []

for(i = 0; i < rainbow.length; i++) {
    finalPrint.push(`
    <div>
        <div class="circle" style="background-color: ${color[i]}"></div>
        <div>${rainbow[i]}</div>
    </div>
`)
}

document.write(`<div class="container">${finalPrint.join('')}</div>`);