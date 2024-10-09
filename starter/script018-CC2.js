/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

const match1John = 89;
const match2John = 120;
const match3John = 103;

const match1Mike = 116;
const match2Mike = 94;
const match3Mike = 123;

const match1Mary = 97;
const match2Mary = 134;
const match3Mary = 105;

let moyenJohn = (match1John + match2John + match3John)/3;
let moyenMike = (match1Mike + match2Mike + match3Mike)/3;
let moyenMary = (match1Mary + match2Mary + match3Mary)/3;
moyenJohn = 101;
moyenMike = 101;
moyenMary = 101;

if (moyenJohn > moyenMike && moyenJohn > moyenMary){
    console.log("L'équipe de John à la plus grosse moyenne, qui de " + moyenJohn);
} else if (moyenJohn < moyenMike && moyenMike > moyenMary) {
    console.log("L'équipe de Mike à la plus grosse moyenne, qui de " + moyenMike);
} else if (moyenMary > moyenJohn && moyenMary > moyenMike) {
    console.log("L'équipe de Mary à la plus grosse moyenne, qui de " + moyenMary)
} else {
    console.log("Les deux equipes sont à égaliter avec une moyenne de " + moyenMike) ;
}

// sans bonus

// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.
