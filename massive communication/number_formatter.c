#include <stdio.h>
#include <stdlib.h>

int main() {
  int c = fgetc(stdin);

  while(c != EOF){
     fprintf(stdout, "%c", c);
     c = fgetc(stdin);
  }


  exit(0);

}
