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

const formarray = 
    [ //létrehozunk egy fejléc arrayt objektumokkal
    { //elso objektumunk
        label: "Szerző neve:", //adunk egy labelt és egy értéket hozzá amit majd használunk a form generálásnál
        id: "szerzo_nev", //adunk egy idt és egy értéket hozzá amit majd használunk a form generálásnál
        for:"szerzo_nev" //adunk egy for-t és egy értéket hozzá amit majd használunk a form generálásnál
    },
    { //második objektumunk
        label: "Csapat:", //adunk egy és egy értéket hozzá amit majd használunk a form generálásnál
        id: "group", //adunk egy idt és egy értéket hozzá amit majd használunk a form generálásnál
        for:"group" //adunk egy for-t és egy értéket hozzá amit majd használunk a form generálásnál
    },
    { //harmadik objektumunk
        label: "Első mű:", //adunk egy labelt és egy értéket hozzá amit majd használunk a form generálásnál
        id: "mu1", //adunk egy id-t és egy értéket hozzá amit majd használunk a form generálásnál
        for:"mu1" //adunk egy for-t és egy értéket hozzá amit majd használunk a form generálásnál
    },
    { //negyedik objektumunk
        label: "Szeretnél megadni második művet is?", //adunk egy labelt és egy értéket hozzá amit majd használunk a form generálásnál
        id: "masodik", //adunk egy id-t és egy értéket hozzá amit majd használunk a form generálásnál
        for:"masodik" //adunk egy for-t és egy értéket hozzá amit majd használunk a form generálásnál
    },
    { //ötödik objektumunk
        label: "Második mű:", //adunk egy labelt és egy értéket hozzá amit majd használunk a form generálásnál
        id: "mu2", //adunk egy id-t és egy értéket hozzá amit majd használunk a form generálásnál
        for:"mu2" //adunk egy for-t és egy értéket hozzá amit majd használunk a form generálásnál
    },
   
]

const tablazat = document.createElement('table')

const tbody = document.createElement('tbody')

const thead = document.createElement('thead')

document.body.appendChild(tablazat)

tablazat.appendChild(thead)

tablazat.appendChild(tbody)

const tr = document.createElement('tr')

thead.appendChild(tr)

generateheader(fejlec, tr)
rendertable(array,tbody)
formgen(formarray)  

const form = document.getElementById('form') // megszerezzük az id alapján a formot

form.addEventListener('submit', function(e) {

    e.preventDefault(); //az alapértelmezett böngészű lefusson megakadályozza
    const szerzo = document.getElementById("szerzo_nev") //elkerem a fizika idt és beteszem az itt létrehozott változóba
    const csapat = document.getElementById("group") //elkerem a ido idt és beteszem az itt létrehozott változóba
    const muvei1 = document.getElementById("mu1") //elkerem a tudos1 idt és beteszem az itt létrehozott változóba
    const masodik = document.getElementById("masodik")
    const muvei2 = document.getElementById("mu2") //elkerem a tudos2 idt és beteszem az itt létrehozott változóba

    const szerzoertek = szerzo.value //itt egy másik változóba belerakom az elöbb elkért terulet változó értékét

    const csapatertek = csapat.value //itt egy másik változóba belerakom az elöbb elkért idoszak változó értékét

    let muveiertek1 = muvei1.value //itt egy másik változóba belerakom az elöbb elkért tudos1 változó értékét

    const masodikertek = masodik.checked

    let muveiertek2 = muvei2.value//itt egy másik változóba belerakom az elöbb elkért tudos2 változó értékét

    const form = e.currentTarget  
    const errorhtml = form.querySelectorAll('.error') //a formon belül mindenet aminek error classal rendelkezik beletesszük egy változoba
    for(const errorelement of errorhtml){  //minden egyes element ami ebben az errorhtml-ben van 
        errorelement.innerHTML = '' //annak legyen az innerhtml-je üres string. (igy eltűnik majd a validácios szöveg ha tényleg irunk valamit)
    }   
 

    const valid1 = check1(muvei1,muvei2,masodikertek,"Ha nincs bepipálva NE irj be másik művet.")
    const valid2 =check2(muvei2, masodikertek, "Hogy ha van checkbox pipa akkor adjál értéket is")
    const valid3 =checkalap(szerzo, "Irj be szerzot")
    const valid4 =checkalap(csapat, "Irj be csapatot")
    const valid5 =checkalap(muvei1, "Irj be legalább egy muvet")


    form.reset()

    if(valid1 &&valid2 && valid3 && valid4 && valid5 ) {
        const ujadat = { // egy uj objektumot hozunk létre 
            szerzonev: szerzoertek, // az uj fizikateruletnek a teruletertek lesz az értéke
            csapat : csapatertek, // az idoszaknak az idoszakerteke lesz az értéke
            Művei1 : muveiertek1, // a tudos1-nek a tudos1ertek lesz az új értéke
            Művei2 : muveiertek2 // a tudos2-nek a tudos2ertek lesz az új értéke
    
        }
    
    
        array.push(ujadat) //belerakjuk az arrayben ami ugye már létezik ezt az új létrehozott adatobjektumunkat.
    
        tbody.innerHTML = "" //kitörlöm a táblázatot azért a tbodyt mert abban van igazából az egész táblázat a headerrel nem kell foglalkozni.
    
        rendertable(array,tbody) // és az ujonnan belerakott dologgal ujragenerálom a táblát.
    }

 
})