
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
AUTHOR:            hail0hydra
DESCRIPTION:       simple rot cypher or modern caesar cipher in python
DATE:              02 Feb 2024
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>


char* caesar(char* pt, int s);
char* decaesar(char* pt, int s);

int main(int argc, char *argv[])
{


    printf("\033[0;34m");
    printf("\n\n\t--==[[ MODERN CAESAR CIPHER || ROT (n) CIPHER ]]==--\n\n");
    printf("\033[0m");

    if (argc < 2){
        printf("\n\nUsage ./%s {mode} [e - encrypt, d - decrypt]\n\n",argv[0]);
        return 1;
    };


    if (strcmp(argv[1],"e") == 0){

        char pt[100];
        int s = 0;
        printf("\nenter plaintext: ");
        gets(pt);
        printf("\nenter shift value: ");
        scanf_s("%d",&s);
        char* res = caesar(pt,s);
        printf("\n\nCipher text is %s",res);
        free(res);
    }
    else if (strcmp(argv[1], "d") == 0){

        char ct[100];
        int s = 0;
        printf("\nenter cipher-text: ");
        gets(ct);
        printf("\nenter shift value: ");
        scanf_s("%d",&s);
        char* res = decaesar(ct,s);
        printf("\n\nCipher text is %s",res);
        free(res);
    };


    return 0;
}

char* caesar(char* pt, int s){

    int l = strlen(pt);
    char* e = (char*)malloc((l + 1) * sizeof(char));


    for (int i=0; i<strlen(pt); i++){

        
        if (pt[i] == ' '){
            e[i] = ' ';
        }
        if (islower(pt[i])){
            e[i] = (((pt[i] - 'a') + s) % 26 ) + 'a';
        }
        else if (isupper(pt[i])){
            e[i] = (((pt[i] - 'A') + s) % 26 ) + 'A';
        }
        
    }

    e[l] = '\0';
    return e;
}

char* decaesar(char* pt, int s){

    int l = strlen(pt);
    char* e = (char*)malloc((l + 1) * sizeof(char));


    for (int i=0; i<strlen(pt); i++){

        if (pt[i] == ' '){
            e[i] = ' ';
        }
        else if (islower(pt[i])){
            e[i] = (((pt[i] - 'a') - s + 26) % 26 ) + 'a';
        }
        else if (isupper(pt[i])){
            e[i] = (((pt[i] - 'A') - s + 26) % 26 ) + 'A';
        };
    };

    e[l] = '\0';
    return e;
}
