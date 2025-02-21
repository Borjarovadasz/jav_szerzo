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

    const form = e.currentTarget  
    const errorhtml = form.querySelectorAll('.error') //a formon belül mindenet aminek error classal rendelkezik beletesszük egy változoba
    for(const errorelement of errorhtml){  //minden egyes element ami ebben az errorhtml-ben van 
        errorelement.innerHTML = '' //annak legyen az innerhtml-je üres string. (igy eltűnik majd a validácios szöveg ha tényleg irunk valamit)
    }   


    function szerzokor(ertek,ertek2,checkbox, uzenet) { // teridocheck függvény aminek a bemeneti paraméteri ertek és uzenet
        if (ertek.value && ertek2.value && checkbox == false) { // ha az érték nek a tulajdonsága undefined vagy "" 
            const parentElement = ertek2.parentElement; //akkor létrehozunk egy parentelement változot és eltároljuk a bejővő értéknek a parentelementjét
            const errormsg = parentElement.querySelector('.error'); //majd egy errormsg változóban a bejövő értéknek parentelementjében megkeressük az első error classal rendekező dolgot.
            if (errormsg) { //ha az errormsg van akkor 
                errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
            }
            ertek.colSpan = 2
            ertek2.value = ""
            valid = false
        }

    }
    
    szerzokor(muvei1,muvei2,masodik,"Ha nincs bepipálva NE irj be másik művet.")

    if(!szerzoertek || !csapatertek || !muveiertek1) {
        valid = false
    }
  

    form.reset()

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