#include <stdio.h>

int main()
{
    int i = 0, valor1 = 0, valor2 = 1, sequencia = 0, numeroInformado = 0, controle = 0;
    


    printf("Informe um número inteiro: ");
    scanf("%i", &numeroInformado);
    
    for(i=0; i<=numeroInformado; i++) {
        valor1 = valor2;
        valor2 = sequencia;
        sequencia = valor1 + valor2;
        
        if(numeroInformado==sequencia) {
            printf("\n%i faz parte da sequenciade Fibonacci! ", numeroInformado);
            controle = 1;
            break;
        } 
    }
    
    if(controle==0) {
            printf("\n%i não faz parte da sequenciade Fibonacci! ", numeroInformado);
    } 

    return 0;
}