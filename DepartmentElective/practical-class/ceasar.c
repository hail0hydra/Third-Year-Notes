#include <stdio.h>
# include <string.h>


int main(int argc, char *argv[])
{

    if (argc < 2){
        printf("\n\nUsage ./a.exe {number of shifts}\n\n");
    };

    int shift = atoi(argv[1]);
    char s[100];
    printf("Enter a string: ");
    scanf("%s",&s);

    printf("\n\nthe string user entred is : %s\n", s);

    char e[100];

    for (int i=0; i<strlen(s); i++){
        e[i] = s[i] + shift;
    };

    printf("The value of encrypted text is: %s", e);

    return 0;
}



