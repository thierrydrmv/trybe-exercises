let peca = "BISPo";

switch (peca.toLowerCase()) {
    case "peão":
        console.log("pawn (peão) -> diagonals(para frente) (diagonais(forward)), forward (para frente), first move 2 x forward (primeiro movimento 2 vezes para frente")
    break
    case "bispo":
        console.log("bishop (bispo) -> diagonals (diagonais)")
    break
    case "torre":
        console.log("rook (torre) -> horizontal and verical (horizontal e vertical)")
    break
    case "cavalo":
        console.log("knight (cavalo) -> Move in L (Se move em l), 3 moves in a direction and 1 for the side forming an L(3 movimentos em uma direção e 1 para o lado formando um L")
    break
    case "rainha":
        console.log("queen (rainha) -> can move like hook and bishop combined (move como a torre e o bispo combinados)")
    break
    case "rei":
        console.log("king (rei) -> can move in any direction one square (pode se mover em qualquer direção um quadrado)")
    break
    default:
        console.log("Peça inválida")
}   