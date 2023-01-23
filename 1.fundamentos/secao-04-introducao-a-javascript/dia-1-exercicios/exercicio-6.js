let chessPiece = 'REi';

switch (chessPiece.toLowerCase()) {
    case 'bispo':
        console.log('Bispo -> Diagonal');
        break;
    case 'rei':
        console.log('Rei -> Uma casa apenas para qualquer direção');
        break;
    case 'rainha':
        console.log('Rainha -> Diagonal, horizontal e vertical');
        break;
    default:
        console.log('Erro peça invalida');
        break;
}