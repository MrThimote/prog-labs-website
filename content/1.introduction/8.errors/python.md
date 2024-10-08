---
title: 'Erreurs fréquentes'
description: 'Trouvez les problèmes dans le code donné.'

code:
  default: |
    for i in range(10)
        nombre_actuel = "On est au nombre : " + i

    print(nombre_actuel)
  corrected: |
    '''
    Il y a deux erreurs de compilation, et une erreur dans la conception du programme.

    En Python on ne peut concaténer des chaines de caractères qu'avec d’autres chaines de 
    caractères et non comme dans le code donné des chaines de caractères et un entier. 
    Pour corriger cette erreur il faut modifier la ligne comme suit : 

    `nombre_actuel = "On est au nombre : " + str(i)` ici l’instruction `str()` transforme 
    l’entier stocké dans la variable i en chaine de charactère. Par exemple, si `i` vaut `1` 
    alors `str(i)` sera `“1”`. On peut donc à présent concaténer les deux chaines. Si vous ne 
    comprenez pas bien comment `str()` peut fonctionner ne vous inquiétez pas vous verrez cela 
    plus en détail durant le semestre.

    La seconde erreur est du au que l’on a oublié les `:` dans la déclaration de la boucle for.

    La troisième erreur fait que le programme affiche uniquement “On est au nombre : 9”. 
    Alors qu’il devrait afficher cette phrase pour tous les nombres entre 0 et 9. 
    Cette erreur est due à une mauvaise indentation ! En effet, `print(nombre_actuel)` n’est 
    pas indentée, Python ne considère donc pas que cette ligne doit être exécutée à chaque 
    itération de la boucle et considère cette instruction comme devant être exécutée après 
    la boucle for. C’est pour cela que le texte est uniquement affiché une fois : cela arrive 
    quand la boucle for est terminée. Pour corriger cette erreur il suffit d’indenter cette 
    ligne.
    '''

    for i in range(10):
        nombre_actuel = "On est au nombre : " + str(i)
        
        print(nombre_actuel)

tests:
  - input: ''
    expectedOutput: |-
      On est au nombre : 0
      On est au nombre : 1
      On est au nombre : 2
      On est au nombre : 3
      On est au nombre : 4
      On est au nombre : 5
      On est au nombre : 6
      On est au nombre : 7
      On est au nombre : 8
      On est au nombre : 9
---

### Objectif

L’objectif est maintenant de vous apprendre à identifier et à corriger des erreurs de syntaxe. Votre réussite en BA1 pour programmation repose principalement sur votre capacité à identifier les problèmes et à les résoudre par vous-mêmes.

### Consigne

Considérez le code suivant, dont le but est d’afficher `On est au nombre : 0` puis `On est au nombre : 1` , etc. pour tous les nombres de 0 à 9.

```python
for i in range(10)
    nombre_actuel = "On est au nombre : " + i
print(nombre_actuel)
```

Le code fourni compile-t-il ? Si oui, qu’affiche-t-il ? Est-ce le comportement attendu ? Où se trouve alors l’erreur ?

Réglez-les.

**Attention : il y a au moins 3 erreurs :)**

Aide : chaque variable a un type. Une des erreurs pourrait (hehe) être due à une addition de deux types différents... pour la régler, sachez qu'il existe une fonction pour transformer un type en un autre.
Par exemple, si vous avez un entier `i`, vous pouvez le transformer en chaine de caractères avec `str(i)`.
