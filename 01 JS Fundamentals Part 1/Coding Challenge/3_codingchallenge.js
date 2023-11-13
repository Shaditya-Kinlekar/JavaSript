const avgDolphins = (97 + 112 + 101) / 3;
const avgkoalas = (109 + 95 + 106) / 3;
const minScore = 100;

console.log(avgDolphins, avgkoalas);

if (avgDolphins > avgkoalas && avgDolphins >= minScore) {
    console.log('Doplhins beat Koalas');
} else if (avgkoalas > avgDolphins && avgkoalas >= minScore) {
    console.log('Koalas beat Dolphins');
} else if (avgDolphins === avgkoalas && avgDolphins >= minScore && avgkoalas >= minScore) {
    console.log(`It's a Draw`);
} else {
    console.log('No Team wins the trophy');
}
