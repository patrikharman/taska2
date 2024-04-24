export function nevRendez(lista, irany) {
    lista.sort(function (t1, t2) {
        let eredmeny = 1;
        if (t1.termek < t2.termek) {
            eredmeny = -1;
        }
        return eredmeny * irany;
    });
    return lista;
}

export function arRendez(lista, irany) {
    lista.sort(function (t1, t2) {
        let eredmeny = 1;
        if (t1.ar < t2.ar) {
        }
        return eredmeny * irany;
    });
    return lista;
}