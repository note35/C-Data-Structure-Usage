/*
http://stackoverflow.com/questions/26325227/c-print-value-of-unsigned-short-variable-as-unicode-character/26325316#26325316
*/

#include <stdio.h>
#include <locale.h>
int main()
{
    if (!setlocale(LC_CTYPE, "")) 
    {
        fprintf(stderr, "Error:Please check LANG, LC_CTYPE, LC_ALL.\n");
        return 1;    
    }

    unsigned short unicodeChar = 0x0985;
    printf ("%lc\n",unicodeChar); 
    printf("%lc\n", 0x0985);  
}
