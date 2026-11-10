# 🏙️ Guild City System
*La città della tua gilda, pezzo per pezzo, dentro il territorio della Guild Territory Stone*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Come funziona](#come-funziona)
- [Il chest delle risorse](#il-chest-delle-risorse)
- [Il builder](#il-builder)
- [Piani](#piani)
- [Rimuovere i pezzi](#rimuovere-i-pezzi)
- [Limiti](#limiti)
- [Regole di costruzione](#regole-di-costruzione)
- [Porte e Lockdown](#porte-e-lockdown)
- [Modificare il territorio](#modificare-il-territorio)
- [Cosa succede se...](#cosa-succede-se)
- [FAQ](#faq)
- [Vedi anche](#vedi-anche)

---

## 📜 Panoramica

Il **Guild City System** è il modo in cui una gilda costruisce la propria città nel territorio della sua [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone). Non ci sono lotti o case prefabbricate: si costruisce **un pezzo alla volta**, con muri, porte, pavimenti, scale, tetti e arredi che i costruttori della gilda hanno prima craftato.

| Cosa | Dettaglio |
|------|-----------|
| **Dove** | Solo dentro il territorio della gilda |
| **Chi costruisce** | Il leader della gilda e i membri con permesso di building |
| **Con cosa** | Pezzi craftati al banco da lavoro e tenuti nel chest delle risorse della gilda |
| **Strumento** | Il Building Tool, azione **City Management** |
| **Piani** | Piano terra più 3 piani sopra, scelti dalla palette |

> 💡 Per craftare, riparare e attaccare i pezzi, e per i materiali, vedi [Building System](#sectionWiki/Guild%20System/Building%20System). Per un percorso passo-passo vedi [Guild City Guide](#sectionWiki/Guild%20System/Guild%20City%20Guide).

---

## 🧱 Come funziona

1. Un costruttore **crafta** i pezzi al banco da lavoro (skill Architecture più la skill del materiale).
2. I pezzi finiti vanno nel **chest delle risorse** della gilda.
3. Con il **Building Tool** (azione **City Management**) si apre il builder: una **palette** che elenca solo i pezzi presenti nel chest.
4. Scegli un pezzo, vedi un'anteprima sul terreno sotto il cursore e clicchi per piazzarlo. Il pezzo esce dal chest.
5. Per toglierlo, lo rimuovi con il builder: torna nel chest.

Il **server decide sempre**: la palette e l'anteprima sono un aiuto, ma ogni piazzamento e ogni rimozione vengono controllati dal server. Se qualcosa non va, ricevi un messaggio e non cambia nulla.

---

## 📦 Il chest delle risorse

Il chest delle risorse è un contenitore che il **leader** (o un GM) collega alla stone dalla pagina Building del pannello di gestione ("Link Resource Chest").

| Regola | Dettaglio |
|--------|-----------|
| **Dove sta** | A terra, dentro il territorio, non dentro uno zaino |
| **Chi lo apre** | Solo il leader e i membri con permesso di building |
| **Si sposta?** | No: una volta collegato non può essere spostato né sollevato (il leader può scollegarlo con "Unlink Resource Chest") |
| **Lockdown** | Non può essere bloccato come lockdown personale |
| **Cosa contiene** | I pezzi pronti da piazzare e quelli rimossi dal territorio |

Senza un chest collegato non si può piazzare nulla.

---

## 🎨 Il builder

Apri il Building Tool e scegli **City Management**: con il client UOCS si apre la **palette del builder**; un client senza palette non può costruire e riceve solo una riga che chiede di aggiornare il client.

### La palette

| Elemento | Cosa fa |
|----------|---------|
| **Schede** | Walls, Doors, Floors, Stairs, Roofs, Misc: i pezzi sono divisi per tipo |
| **Pagine** | Con i tasti `<` e `>` scorri le pagine di una scheda |
| **Solo i pezzi che hai** | La palette mostra solo i pezzi che sono nel chest delle risorse, con quanti ne restano. Un pezzo finito sparisce dalla lista |
| **Rotate** | Cambia l'orientamento del pezzo (fino a 4); alcuni pezzi hanno un solo orientamento |
| **Sample** | Clicca un pezzo già piazzato per sceglierne il tipo |
| **Remove** | Clicca un pezzo piazzato per toglierlo (vedi [Rimuovere i pezzi](#rimuovere-i-pezzi)) |
| **Floor** e **This floor only** | Scelgono il piano (vedi [Piani](#piani)) |
| **Placed** e **Range** | Quanti pezzi ci sono nel territorio su quanti ne ammette, e la distanza massima |
| **Close** | Chiude la palette (anche Esc smette di piazzare) |

La palette risponde subito: schede, pagine, selezione e rotazione non aspettano il server. Resta aperta mentre piazzi, e dopo ogni piazzamento il numero di pezzi nel chest si aggiorna.

### L'anteprima

Con un pezzo selezionato, sotto il cursore compare un'**anteprima semi-trasparente** nella posizione e con l'orientamento in cui verrebbe piazzato, al piano scelto. L'anteprima diventa **rossa** quando il pezzo non può andare lì:

- il tile è fuori dal territorio;
- il tile è oltre la distanza massima (12 tile da te);
- di quel pezzo non ne restano nel chest.

> ⚠️ L'anteprima è solo un suggerimento. Su un terreno in pendenza può differire di qualche unità di altezza da dove il server mette davvero il pezzo, e il server può rifiutare per altri motivi (un personaggio in mezzo, un limite raggiunto...).

---

## 🪜 Piani

Chi costruisce **resta a terra** (o su ciò che è già costruito) e **sceglie il piano nella palette**. Nessuno diventa invisibile e non si cammina in aria.

| Parametro | Valore |
|-----------|--------|
| **Altezza di un piano** | 20 |
| **Piani sopra il terreno** | 3 (piano 0 = terra, fino al piano 3) |
| **Quota massima** | 60 sopra il terreno |

- Il tasto **Floor** `-` / `+` cambia il piano su cui andrà il prossimo pezzo.
- La palette disegna una **griglia dei piani** sopra il territorio, all'altezza del piano scelto, per vedere dove piazzare.
- **This floor only** nasconde, sul tuo schermo, i pezzi dei piani sopra quello scelto, così vedi cosa c'è sotto. Gli altri giocatori non vedono cambiamenti.
- Non si può piazzare un pezzo sotto il livello del terreno.

---

## 🗑️ Rimuovere i pezzi

Con **Remove** (o con l'azione **Pick Up Static** del Building Tool) un pezzo piazzato torna nel **chest delle risorse**. Chi rimuove deve avere il permesso di building e stare entro 12 tile dal pezzo.

**Niente resta sospeso a mezz'aria.** Un pezzo non si può rimuovere finché sopra di lui c'è un altro pezzo piazzato, un lockdown personale o un personaggio: si toglie prima quello che sta sopra.

Un pezzo "sta sopra" un altro quando si trova sullo stesso tile, con la sua quota più in alto di quella del pezzo sotto e al massimo pari alla quota più l'altezza del pezzo sotto. A parità di quota, il pezzo più alto poggia su quello più basso (un muro sul suo pavimento); pezzi della stessa altezza non si sostengono. Contano solo i pezzi piazzati: un pezzo non ancora piazzato, lasciato a terra, non sostiene nulla.

Se un pezzo viene distrutto (da un attacco o dal decadimento), ciò che stava sopra **resta dov'è**.

---

## 📊 Limiti

| Limite | Valore | Note |
|--------|--------|------|
| **Pezzi per territorio** | tile del territorio x 3 | Cresce con il territorio acquistato |
| **Pezzi per tile e per piano** | 3 | Le porte contano come i muri |
| **Limite per giocatore** | nessuno | I pezzi vengono dal chest della gilda |
| **Distanza dal costruttore** | 12 tile | Per piazzare e per rimuovere |
| **Piani** | piano terra + 3 | Altezza di un piano: 20 |
| **Quota massima** | 60 sopra il terreno | |

Con 3 pezzi per tile e per piano si può costruire una colonna di muri alta quattro piani. Se il territorio si **restringe** sotto il numero di pezzi già piazzati, non viene cancellato nulla: semplicemente non si possono piazzare nuovi pezzi finché il conteggio non torna sotto il limite.

---

## ✅ Regole di costruzione

| Regola | Dettaglio |
|--------|-----------|
| **Il leader costruisce sempre** | Senza bisogno di essere in lista; gli altri membri servono del permesso concesso dal leader |
| **Staff** | Il Game Master e i livelli superiori costruiscono sempre |
| **Linea di vista** | Per piazzare o rimuovere devi avere linea di vista sul tile o sul pezzo |
| **Chi è morto non costruisce** | Un costruttore morto non può piazzare né rimuovere |
| **Permesso revocato** | Se perdi il permesso mentre la palette è aperta, la palette si chiude subito |
| **Personaggio in mezzo** | Un personaggio sul tile, anche nascosto, blocca il piazzamento. Il messaggio è sempre lo stesso ("That location is blocked."), quindi costruire non rivela chi è nascosto |
| **Sulla stone** | Nessun pezzo sul tile della Guild Territory Stone |
| **Sotto il terreno** | Nessun pezzo sotto il terreno del suo tile |
| **Attaccare** | Chiunque abbia un Building Tool può attaccare i pezzi costruiti, anche i membri della gilda; chi ha il permesso di building non attacca i pezzi del proprio territorio, li raccoglie |

---

## 🚪 Porte e Lockdown

### Chest delle risorse e lockdown personale

- Un contenitore si può bloccare in lockdown personale solo se il giocatore a cui viene assegnato può possederlo: non il chest delle risorse, né un contenitore lasciato a terra da un altro giocatore.
- L'azione **Lock Down & Grant** del Building Tool blocca un oggetto a terra nel territorio e lo assegna a un membro della gilda: solo lui (e chi mette nella sua lista di accesso) può usarlo.
- Solo il **proprietario** o il **leader** può rilasciare un lockdown personale (**Release Lockdown**). Il contenitore va nel **bank box del proprietario**; se il bank box è pieno il rilascio viene rifiutato e il contenitore resta bloccato.
- Se il proprietario non esiste più, il leader può rilasciare il lockdown e l'oggetto resta dov'è, sbloccato.
- Il numero di **bauli personali** per membro dipende dal suo credito nel conto tasse della gilda: **1 baule ogni 25.000 gold** di credito (vedi [Guild Accountant](#sectionWiki/Guild%20System/Guild%20Accountant)). Il controllo avviene solo al momento del lockdown: se il credito scende dopo, i bauli già bloccati restano. Tavoli, sedie e altri oggetti non contano.

### Porte

L'accesso del proprietario di una porta e le sue liste di accesso seguono l'appartenenza alla gilda: un membro che lascia la gilda li perde. La lista di accesso di una porta accetta solo membri della gilda che possiede la stone. Un proprietario che ha lasciato la gilda non può gestire la porta finché non rientra nella gilda. Con **Assign Door Owner** il Building Tool assegna una porta a un membro. Dopo una conquista del territorio, porte e pezzi appartengono alla nuova gilda.

---

## 🌈 Modificare il territorio

Mentre un giocatore modifica l'area del territorio dalla stone, solo il **suo** schermo colora il terreno già disegnato, senza mettere oggetti nel mondo e senza che gli altri vedano nulla:

| Colore | Significato |
|--------|-------------|
| **Verde** | Tile che restano nel territorio |
| **Giallo** | Tile che vengono aggiunti |
| **Rosso** | Tile che vengono tolti |

I colori sono scelti dal server e il colore sparisce quando smetti di modificare. Vedi [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) per la modifica dell'area.

---

## 🔄 Cosa succede se...

- **La stone viene distrutta**: i pezzi non vengono cancellati subito ma iniziano un decadimento lento; una nuova stone che copre quel territorio li recupera (vedi [Building System](#sectionWiki/Guild%20System/Building%20System)). I lockdown personali vengono sbloccati.
- **Il territorio viene conquistato**: porte e pezzi passano alla nuova gilda.
- **Un membro lascia la gilda**: perde l'accesso alle sue porte e alle sue liste.

---

## ❓ FAQ

**D: Posso costruire senza un chest delle risorse?**
R: No. Il chest va collegato alla stone dal leader e deve contenere i pezzi.

**D: Perché non vedo un pezzo nella palette?**
R: La palette mostra solo i pezzi che sono nel chest. Craftalo e mettilo nel chest.

**D: Posso costruire in alto senza volare?**
R: Sì: scegli il piano nella palette. Il personaggio resta a terra.

**D: Chi può toccare il chest delle risorse?**
R: Solo il leader e i membri con permesso di building.

**D: Posso annullare l'ultimo piazzamento?**
R: Non c'è un annulla: rimuovi il pezzo, che torna nel chest.

---

## 🔗 Vedi anche

- [Guild City Guide](#sectionWiki/Guild%20System/Guild%20City%20Guide)
- [Building System](#sectionWiki/Guild%20System/Building%20System)
- [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone)
- [Guild Accountant](#sectionWiki/Guild%20System/Guild%20Accountant)
