// Calculo da media de nota, com mensagem

Algoritmo "Média do Aluno"
   var
   // definicão das variáveis
   nota1, nota2, media: real;

Inicio
   // Solicita primeira nota
   Escreva ("primeira nota: ")
   Leia (nota1)

   // Solicita segunda nota
   Escreva ("segunda nota: ")
   Leia (nota2)
   Escreva ("segunda nota: ")

   // Calcula a média
   media <- (nota1+nota2) / 2
   escreval ("media do aluno é:", media)
      se (media >=6) entao
   escreva (" O aluno foi aprovado!")

   senao
      escreva (" O aluno foi reprovado!")
   fimse
fimalgoritmo