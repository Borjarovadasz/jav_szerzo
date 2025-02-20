const fejlec  = //létrehozunk egy fejléc arrayt objektumokkal
    [
        {
            szoveg: "Szerző neve	" //elso objektomunk amiben eltároljuk a szöveget
        },
        {
            szoveg: "Csapat" //második objektomunk amiben eltároljuk a szöveget
        },
        {
            szoveg: "Művei", colSpan: 2 //harmadik objektomunk amiben eltároljuk a szöveget és adunk neki colspan-2 is
        }
    ]


const array = [
    {
        szerzonev : "Vörösmarty Mihály	",
        csapat : "romantikus triász	",
        Művei1 : "Zalán futása	",
        Művei2 : "Szózat",

    },
    {
        szerzonev : "Móricz Zsigmond		",
        csapat : "Nyugat I.	",
        Művei1 : "Hét krajcár",


    },
    {
        szerzonev : "Illyés Gyula	",
        csapat : "Nyugat II.	",
        Művei1 : "Egy mondat a zsarnokságról	",
        Művei2 : "Puszták népe",

    },
    {
        szerzonev : "Radnóti Miklós",
        csapat : "Nyugat III.",
        Művei1 : "Pogány köszöntő",
        Művei2 : "Járkálj csak, halálraítélt",

    }
    
]


const tablazat = document.createElement('table')

const tbody = document.createElement('tbody')

const thead = document.createElement('thead')

document.body.appendChild(tablazat)

tablazat.appendChild(thead)

tablazat.appendChild(tbody)

const tr = document.createElement('tr')

thead.appendChild(tr)


for(let adat of fejlec) {

    const th = document.createElement('th')
    th.innerHTML = adat.szoveg

    tr.appendChild(th)

    if(adat.szoveg == "Művei") {
        th.colSpan = 2
    }
}


function rendertable() {
    for(let i = 0; i < array.length; i++ ) { //végigiterálok egy for ciklussal az array-en
        const mostanielement = array[i]  //az i-dik element a mostanielement lesz
        const sor = document.createElement('tr') // csinálok egy sort

        tbody.appendChild(sor) //a fő táblázathoz hozzácsatolom a sort

        const elsosor = document.createElement('td') //elsosor létrehozása
        elsosor.innerHTML = mostanielement.szerzonev //elsosor innerHTML-je a az array-ben a mostanielement (i)-nek a sor1.je
        sor.appendChild(elsosor) //hozzátesszük a sorhoz az elso oszlop elso elemjét 

        const masodiksor = document.createElement('td') //masodiksor létrehozása
        masodiksor.innerHTML = mostanielement.csapat //masodiksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor2.je
        sor.appendChild(masodiksor) //hozzátesszük a sorhoz az elso oszlop masodik elemjét 

        const harmadiksor = document.createElement('td') //harmadiksor létrehozása
        harmadiksor.innerHTML = mostanielement.Művei1 //harmadiksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor3.je
        sor.appendChild(harmadiksor) //hozzátesszük a sorhoz az elso oszlop harmadik elemjét 

        if (!mostanielement.Művei2) {
            harmadiksor.colSpan = 2 // ha nincs tudos2 akkor colspan 2
        }else {
            const negyediksor = document.createElement('td') //negyediksor létrehozása
            negyediksor.innerHTML = mostanielement.Művei2 //negyediksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor4.je
              sor.appendChild(negyediksor) //hozzátesszük a sorhoz az elso oszlop negyedik elemjét 

        tbody.appendChild(sor)

    }
}
}

rendertable()

const form = document.getElementById('form') // megszerezzük az id alapján a formot

form.addEventListener('submit', function(e) {

    e.preventDefault(); //az alapértelmezett böngészű lefusson megakadályozza
    const szerzo = document.getElementById("szerzo_nev") //elkerem a fizika idt és beteszem az itt létrehozott változóba
    const csapat = document.getElementById("group") //elkerem a ido idt és beteszem az itt létrehozott változóba
    const muvei1 = document.getElementById("mu1") //elkerem a tudos1 idt és beteszem az itt létrehozott változóba
    const masodik = document.getElementById("masodik").checked
    const muvei2 = document.getElementById("mu2") //elkerem a tudos2 idt és beteszem az itt létrehozott változóba

    const szerzoertek = szerzo.value //itt egy másik változóba belerakom az elöbb elkért terulet változó értékét

    const csapatertek = csapat.value //itt egy másik változóba belerakom az elöbb elkért idoszak változó értékét

    let muveiertek1 = muvei1.value //itt egy másik változóba belerakom az elöbb elkért tudos1 változó értékét

    const masodikertek = masodik.value

    let muveiertek2 = muvei2.value//itt egy másik változóba belerakom az elöbb elkért tudos2 változó értékét

    let valid  = true

    if(!szerzoertek || !csapatertek || !muveiertek1) {
        valid = false
    }


    
    if(masodik == false) {
        muveiertek1.colSpan = 2
        muveiertek2 = ""
    }

    if(valid ) {
        const ujadat = { // egy uj objektumot hozunk létre 
            szerzonev: szerzoertek, // az uj fizikateruletnek a teruletertek lesz az értéke
            csapat : csapatertek, // az idoszaknak az idoszakerteke lesz az értéke
            Művei1 : muveiertek1, // a tudos1-nek a tudos1ertek lesz az új értéke
            Művei2 : muveiertek2 // a tudos2-nek a tudos2ertek lesz az új értéke
    
        }
    
    
        array.push(ujadat) //belerakjuk az arrayben ami ugye már létezik ezt az új létrehozott adatobjektumunkat.
    
        tbody.innerHTML = "" //kitörlöm a táblázatot azért a tbodyt mert abban van igazából az egész táblázat a headerrel nem kell foglalkozni.
    
        rendertable() // és az ujonnan belerakott dologgal ujragenerálom a táblát.
    }

 
})