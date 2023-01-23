let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
groceryList.push('Frango')
groceryList.unshift('Banana')

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}