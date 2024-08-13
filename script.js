/*
    Milyen típusú nyelv a JavaScript 
        * programozási nyelv
        * gyengén tipusos
        * kliensoldali nyelv, de mi erre majd rá fogunk cáfolni, mert pont az a lényege a Node.js-nek 
            hogy a kliens oldal helyett ez a szerver oldalon müködik 
        * interpreteres

Az interpreter meg a fordító az két különböző dolog 
1. Az interpreter az fog egy fájlt, beolvassa a benne található szöveges adatokat és utána értelmezi, színtaktikailag meg szemantikailag elemzi 
utána meg lefutatja a memoriában 
Ez sokkal inkább ilyen közvetett dolog, mert az interpretert egy másik programozási nyelven fogjuk megírni 
pl. a c++-ban tudunk interpretert írni a JavaScriptnek 

2. a fordítás az ilyen szempontból más, mert van egy köteg valamilyen programzási nyelven megírt fájlunk és abból keletkezik egy futtatható 
állomány ez meg egy alacsonyabb szintű programozási nyelvre fordul le vagy valami olyan kód lesz benne, amit megért a programozási rendszerünk 
és tudja továbbítani processzori parancsokként és a végén az lesz, hogy a processzorunknak az utasítási készleteit használjuk 

A CSS meg a HTML nem programozási nyelvek, mert nem tartalmaznak olyan funkciókat, mint a programozási nyelvek 
Olyan nyelvi elemekkel nem rendelkeznek, hogy ciklusok, vezérlési szerkezetek meg elágazások, nincsenek függvények meg osztályok sem 
Nem lehet bennük algoritmusokat írni, a legnagyobb különbség a programozási és a leíró nyelvek között, hogy algoritmusokat lehet-e 
bennük írni vagy sem

Kliensoldali nyelv, de van egy olyan runtime-ja, egy futattó környezete, ami meg szerveroldali 
****************************************************************************************************************
*/

/*
Mire használjuk a változókat
    * A változókban adatokat tárolunk méghozzá a memóriában 
        mert ennek az a lényege, hogy ezek az adatok, amik változók képviselnek, ideglenesen férhetőek hozzá és jó, hogyha a memórában 
        tároljuk őket és nem háttértárolón, memoria -> RAM 

Mi a különbség a változó deklarálása és a definiciója között 
*/
//deklaráció -> változó létrehozása 
var valtozo;
//definició -> értékadása
valtozo = 55;
//de ezt egyben is meg tudjuk csinálni, a deklaráció és a definició egyben!! 
var valtozo2 = 55;
/************************************************************************************/
/*
Milyen típusú változók léteznek a JavaScriptben
    * string 
    * number 
    * boolean 
    * undefined
    * null 
    * object 
        * array (tömb)
        * object (objektum)
        * date
    * bigint, de ezeket legtöbbször nem használjuk
    * symbol 
*/
var str = "Géza kék az ég";
/*
Mi csak itt azt mondjuk, hogy var és ami meghatározza a típusát a változónak az az értékadás!! 
Amilyen értéket adunk a változónak, olyan típusú lesz!! 
A változó típusa futási időben módosulhat!!! 
->
*/
//boolean volt 
var bo = true;
//number lett 
bo = 654;
/*
ettől lesz valami gyengén típusos, hogy egyfelöl ami meghatározza a változó típusát az az értékadás és futási időben megváltozhat 
a változó típusa 
********************************************************************************************************************************
*/

/*
Mik azok az operátorok 
    * Olyan szimbolunok, amelyekkel müveleteket végzünk el!!! 

    * értékadó operátor 
        =
    * aritmetikai operátorok 
        +,-,*,/,%, ++, --
    * relációs operátorok (összehasonlítanak két értéket)
        <,>,<=, >=, ==, ===, !=, !==
    * logikai operátorok (és, vagy, negáció)
        &&,||,!
*/

var bo2 = 5 < 6;//true
var bo3 = 5 < 6 && 5 > 125;//false 
//és-nél mindegyik logikai állításnak igaznak kell lennie
var bo4 = 5 < 6 || 5 > 125;//true lesz, mert az egyik igaz 
//vagynál pedig csak az egy igaz 
/*
teljes logikai kifejezés, összekapcsolva az összes logikai állítás 
*/

var num2 = 11%5; //maradékos osztás, az 5 meg van pontosan kétszer a 11-ben és maradék az egy, ezért -> 1 
num2++; //ilyenkor pedig növeltük egyel a num2 értékét ami 1 volt -> 2 
/*********************************************************************************************************************************************/

/*
    Vezérlési szerkezetek 
        * elágazások 
        * ciklus 

Elágazások 
*/
//if -> egy logikai értéket vár a zárójelpárba 
var pontszam = 50; 

if(pontszam >= 50) {
    console.log("Nem bukott meg!");
}
//itt egy elágazás van, vagy bemegyünk ide vagy nem

if(pontszam >= 50) {
    console.log("Nem bukott meg!");
} else {
    console.log("Megbukott!");
}
/*
az elözőhez csatolunk egy másik ágat ez lesz az else ág!!
Tehát ha igaz az if-ben meghatározott logikai állítás, akkor bemegyünk az if-be, hogyha nem igaz, akkor meg az else-be 
*/
if(pontszam < 50) {
    console.log("elégtelen");
} else if(pontszam >= 50 && pontszam < 60) {
    console.log("elégséges");
} else if(pontszam >= 60 && pontszam < 70) {
    console.log("közepes");
} else if(pontszam >= 70 && pontszam < 80) {
    console.log("jó");
} else {
    console.log("jeles");
}

//switch -> egy bármilyen értéket 
//egyetlen változónak az értékét vizsgálja és pontos egyezést keres!! 

var kedvencSzin = "kék";

switch(kedvencSzin) {
    case "piros":
        console.log("A felhasználó kedvenc színe a piros");
    break;
    case "zöld":
        console.log("A felhasználó kedvenc színe a zöld");
    break;
    case "sárga":
        console.log("A felhasználó kedvenc színe a sárga");
    break;
    case "kék":
        console.log("A felhasználó kedvenc színe a kék");
    break;
    default: //hogyha nincs ilyen case-ünk, akkor lehet egy default ág, de ez nem közelező 
        console.log("Nem ismerem ezt a színt");
    break;
}
//ezt le is tudjuk node segítségével futattni -> node script.js 
//Ez a kettő elágazás látezik a JavaScriptben 
/***********************************************************************************************************************************************/
/*
Ciklusok 
    * elöltesztelő ciklus 
    * hátultesztelő ciklus 
    * számlálós ciklus
    
Milyen részekkel rendelkezik egy ciklus 
    * ciklusfej -> itt ellenőrizzük az úgynevezett futási feltételt 
        A futási feltétel egy olyan logikai feltétel, ami amig teljesül, addig a ciklus újabb és újabb iterációkat hajt végre 
        Amig igaz a futási feltétel, addig a ciklus fut, utána már nem 
    * ciklusmag 
        A ciklus utasításai vagy müveletei 
        Amig igaz a futási feltétel, addig végrehajtodnak a ciklusmagban definiált müveletek

Mindegyik ciklus rendelkezik ezekkel a részekkel 
*/
//elölteszelős 
let counter = 0;

//amig a counter-nek az értéke kisebb mint 15, addig minden körben hozzáadunk egyet a counter-hez 
while(counter < 15) {
    counter++;
    console.log("while-counter " + counter);
}
//15 lesz a legnagyobb érték, mert 14-nél még bemegy és hozzáadunk egyet -> 15
/*
fontos, hogy nem mindegy, hogy hol van a console.log a hozzáadás elött vagy után 
while(counter < 15) {
    console.log("while-counter " + counter);
    counter++;
}
mert ilyenkor elöbb írjuk ki, minthogy megcsináltuk volna a müveletet, ezért 14-t ír ki majd és utána hajtja végre a müveletet

De ebből azt érdemes megtudni, hogy a counter-nek a legmagasabb értéke mindig egyel nagyobb, mint amit ide írunk feltételnek -> counter < 15
****
*/
//hátultesztelős -> do while 
counter = 0; //fontos, hogy le legyen nullázva, mert az elöbb már kapott egy olyan értéket a while-ban, hogy 15!! 

do {
    counter++;
    console.log("do-while-counter " + counter);
} while(counter < 15)
/*
Elösször cselekszik, aztán pedig gondolkodik 
Kódunk fentről lefele fut le (meg általában véve balról jobbra)
És mivel fentről lefele fut le, azért a do elöbb fog végrehajtódni, mint a while 
    A ciklusmag elöbb fog lefutni, mint a ciklusfej!!! 
    Így elöször végrehajtjuk a ciklusmagot és csak utána ellenőrizzük a futási feltételt

A do-while pontosan ugyanúgy fog ebben az esetben müködni, mint a while 
while-counter 1
...
while-counter 15
do-while-counter 1
...
do-while-counter 15
Viszont egyetlen egy esetben nem, amikor nem teljesül az elején már a futási feltétel!!!!! 
-> 
Akkor a do-while az lefut, de a while nem és ennek az az oka, hogy a do elörébb van, mint a while (fizikailag feljebb található)
és utána már a do-while is rájön, hogy miről van szó, csak késöbb 
-> 
counter = 15;

do {
    counter++;
    console.log("do-while-counter " + counter);
} while(counter < 15)

do-while-counter 16
**********************************************************************************************************************************************
*/
/*
Számlálós ciklus -> for 
    Azért számlálós ciklus, mert ciklusfejben definiálunk egy számlálót 
    erre megfogalmazunk egy futási feltételt és egy aritmetikai müveletet végzünk vele!!! 

for(let i = 0; i < 15; i++)

* számláló -> let i = 0
* futási feltétel -> i < 15 -> ugye nem fog megjelení 14-nél nagyobb érték a for-ban, mert kisebb mint 15 és addig fog menni a for
* aritmetikai müvelet -> i++
    ez minden egyes iterációban megnőveli a számláló értékát egyel (de megis tudjuk vele duplázni, elosztani kettővel stb, amit szeretnénk!!!)
*/

for(let i = 0; i < 15; i++) {
    console.log("i:" + i);
}
/*
És akkor ez menni fog 14-ig és ilyen szempontból igazabb a futási feltétel itt, mert a while-nál az bemehetett 15-re itt meg maradt 14 
*/

/*
Végtelen ciklus
    Egy olyan ciklus, amelynék a futási feltétel a végtelenségég igaz, végtelenségig fog futni (ameddig lefut a gépünk vagy az interpreter)
*/
while(true) {

}

console.log("dffgn");
/*
És amit ide írunk a végtelen ciklus után, annak més színe is lett, az sosem fog lefutni, mert elötte van egy végtelen ciklus!! 
while és a do-while valamint az if között létezik egy azonosság, hogy a zárójelpárban mindegyik logikai kifejezést vár 

Ha azt írjuk, hogy if(true), akkor az egyetlen egyszer bemegy az elágazásba!!! 
a while(true) meg az fogja jelenteni, hogy a végtelenségig fog futni, mert kap itt egy értéket, ami a végtelenségig igaz!!!! 

while(true) -> és ez a true az literál, ez mindig true marad 
literál -> változóba be nem vezetett érték 
Szóval, ha venünk itt egy true vagy egy 5-ös 
while(5) {

}
5-nél be fog ide menni, mert nem null az értéke 
de ez egy szándékos végtelen ciklus 
Vannak olyan szándéktalan végtelen ciklusok is 
->
for(let = 15; i >= 0; i++) {

}
*/
for(let i = 15; i >= 0; i++) {

}
/*
soha nem fogjuk elérni a futási feltételt, tehát a nullát és azért nem fogjuk elérni, mert itt azt mondtuk, hogy felfelé számolunk -> i++
let i = 15; i >= 0;
Van egy alapból nagyobb értékünk, mint a határunk és még fele is megyünk, tehát sosem fogjuk elérni azt, hogy a futási feltétel ne legyen igaz 
!!!!!!!!!!!!!!!!!!!!!

De ezt ki tudjuk javítani, ha azt mondjuk, hogy az i--
->
*/
for(let i = 15; i >= 0; i--) {
    console.log("i: " + i);
}
/*******************************************************************************************************************************************/
/*
    var 
    let 
    const 

Ezzekkel létrehozott változóknak a tulajdonságaik között mi a különbség 
const értéket kell kapni és nem tudunk neki ezek után új értéket adni, ezért const 

var - let között 
scope (hatókör) a különbség a kettő között 
Amig a var egy globális addig a let egy lokális változó!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/ 
if(true) {
    var asdf = "asdf";
}

console.log(asdf);
/*
És akkor ez kivülről elérhető hiába deklaráltuk és definiáltuk egy blokkban!!
*/
if(true) {
    let asdf2 = "asdf";
}

console.log(asdf2);
/*
Akkor a let-es már nem lesz elérhető és mondani is fogja, hogy asdf2 is not designed
Mert ő csak ebben a blokkban létetik 
->
if(true) {
    let asdf2 = "asdf";
}
*/

var a = "a";
var a = "a";
/*
Ez is differencia a kettő között, hogy hiába csináltunk kettő ugyanolyan változót a var-val nem érdekli
Akármennyi ugyanolyan változót létre lehet hozni a var-val viszont a let-vel már nem!!!! 
*/

/*
A const-nak kell kezdeti érték, ami nem módosulhat 
*/
const pi = 3.14;
//és akkor ezt nem lehet módosítani 
pi = 2.78; //assigment to a constant variable!!! csak egy értéke lehet a kezdeti, amit definiáláskor megadtunk neki

/*
Alprogramok 
    a program egyes részfunkcióit valósítják meg 
    * függvény -> van visszatérési értéke (return)
    * eljárás  -> nincs visszatérési értéke 

Mi a különbség a függvény és az eljárás között 
A függvénynek van visszatérés értéke, az eljárásnak meg nincsen!!!! 
*/

function greet(name, partOfTheDay) {
    console.log(`Jó ${partOfTheDay} ${name}!`);
}

//Kód újrafelhasználhatóság 
greet("Sanyi", "reggelt");
greet("Gabi", "estét");
/*
Pont ez a lényege az alprogramoknak, hogy különböző paramétereket behelyetsítve más és más eredményt kapunk, de ugyanazzal a mögöttes logikával!
És így nem kell másolnunk a kódot -> kód újrafelhasználhatóság 

És azt is tudjuk időzyteni, hogy milyen sorrendben futnak le ezek a kódok 
Ez a kettő előnye létezik a függvényeknek
1. kód újrafelhasználhatóság 
2. futási sorrend meghatározása 
*********************************************************************************************************************************************
*/
/*
faktoriális pl. 4*3*2*1 vagy 8 faktoriális 8*7*6*5*4..
*/
function factorial(n) {
    let result = 1;
    //fontos, hogy itt nem nullát írunk, mert ha azt kezdjük majd el szorozgatni, akkor 0 lesz

    for(let i = 2; i <= n; i++) {
        /*
        az egyes ki is hagytuk, mert minek szorozzuk meg egyel, mert önmaga lesz és megyünk majd n-ig 
        pl. ha meghívásnál 9-et írunk akkor addig, minden egyes körben növeljük az i értékét egyel 
        result-ot meg megszorozzuk minden egyes körben az adott i-vel ahol éppen tart a for 
        result = result * i;
        */
        result = result * i;
        /*
        megnézzük az iterációkat, hogy 4 esetében, hogy müködik a result 1 
        megszorozzuk 2-vel utána result 2, megszorozzuk 3-val, result 6 megszorozzuk 4-vel -> 24 
        */
    }

    /*
    és itt meg nagyon fontos, hogy return-vel visszaadjuk a result-ot, hogy meghívásnál ha 4 adunk meg paraméternek, akkor 
    megkapja ezt a 24-et, ami itt kijött!!!!!
    */
    return result;
}
/*
és amit ez visszaad a returnben akkor azt tudjuk valamilyen formában kezelni pl. kiírjuk a konzolra vagy lemetjük egy változóba és 
azt írjuk ki majd a konzolra!!! 
*/
console.log(factorial(4));
const r = factorial(5);
//és akkor itt a változót írjuk ki a konzolra!!! 
console.log(r);//120

/*
Ami még nagyon fontos, hogy minden függvényben elkészített változó úgynevezett lokális változó, tehát csak a függvényen belül 
létezik 
Ez azt jelenti, hogy csak a függvényben léteznek, hogy ezek külön világot élnek és amikor 
->
meghívjuk a függvényt, akkor ezekből a változókból újabbak és újabbak keletkeznek 
mert ennek factorial(4) biztosan más értékünek kell lennie factorial(5)
Tehát ezek nem írhatják felül egymást, mert akkor hiba keletkezne, hibás értéket kapnának!!! 
->
Kénytelen az interpreter annyi változót létrehozni pl. a result-ból vagy az i-ből vagy az n-ből is amit kivülről paraméterként kapott meg 
ahányszor meg van hívva a függvény!!!!!!!  mert ezek lokális változók

function factorial(n) {
    let result = 1;

    for(let i = 2; i <= n; i++) {

        result = result * i;
    }

    return result;
}
*/