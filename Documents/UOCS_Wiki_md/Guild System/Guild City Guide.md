# 📖 Guild City — Guida passo-passo
*Costruisci la tua prima citta' di gilda in 10 passi, dal zero al primo baule locked*

---

## 📋 Indice

- [Cosa serve prima di iniziare](#cosa-serve-prima-di-iniziare)
- [Step 1 — Entra in una gilda con territorio](#step-1--entra-in-una-gilda-con-territorio)
- [Step 2 — Ottieni il permesso di building](#step-2--ottieni-il-permesso-di-building)
- [Step 3 — Verifica la treasury della stone](#step-3--verifica-la-treasury-della-stone)
- [Step 4 — Procurati il Building Tool](#step-4--procurati-il-building-tool)
- [Step 5 — Apri il menu City Management](#step-5--apri-il-menu-city-management)
- [Step 6 — Piazza la tua prima Foundation](#step-6--piazza-la-tua-prima-foundation)
- [Step 7 — Entra in Design Mode](#step-7--entra-in-design-mode)
- [Step 8 — Disegna la tua casa tile per tile](#step-8--disegna-la-tua-casa-tile-per-tile)
- [Step 9 — Committa il design e ispeziona il risultato](#step-9--committa-il-design-e-ispeziona-il-risultato)
- [Step 10 — Lockdown del tuo primo baule personale](#step-10--lockdown-del-tuo-primo-baule-personale)
- [Gestione access list](#gestione-access-list)
- [Errori comuni e troubleshooting](#errori-comuni-e-troubleshooting)
- [Next steps](#next-steps)

---

## ✅ Cosa serve prima di iniziare

Prima di poter costruire una guild city assicurati di avere:

- [x] **Gilda attiva** con una [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) piazzata e confermata
- [x] **Building permission** sulla stone (concesso dal Leader della gilda)
- [x] **Gold nella treasury** della stone (almeno ~40-100k gold per iniziare con una foundation piccola)
- [x] **Building Tool** nel backpack
- [x] **Tempo libero** — il design editor richiede attenzione

Se manca qualcosa, continua a leggere — i primi step ti spiegano come ottenerli.

---

## 🛡️ Step 1 — Entra in una gilda con territorio

Il Guild City System funziona **solo dentro un territorio di gilda**. Se non sei in una gilda:

1. Unisciti a una gilda esistente (parlando con il Leader) oppure creane una nuova
2. Verifica che la gilda abbia una **Guild Territory Stone** piazzata e confermata
3. Se non ce l'ha: il Leader deve piazzare una stone e configurarla. Vedi la wiki dedicata [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone)

**Come verifico il territorio?**  
Cammina nell'area — dovresti vedere un messaggio di "welcome" se il territorio ha `AnnounceEnterExit = true`. Altrimenti chiedi al Leader di mostrarti i confini via il management gump → tab Expand.

---

## 🔑 Step 2 — Ottieni il permesso di building

I **member regolari** della gilda **NON** hanno automaticamente il permesso di usare il City System. Solo il **Leader** e chi e' stato esplicitamente aggiunto alla lista `BuildPermissions` puo':

1. Chiedi al Leader di aprire il **Guild Territory Management Gump** (doppio click sulla stone)
2. Il Leader va alla **tab "Building"** del management gump
3. Clicca **"Grant Build Permission"**
4. Il Leader targetta te → vieni aggiunto alla lista

Dopo il grant, avrai i permessi per:
- Piazzare foundation
- Demolire foundation
- Customizzare il design
- Lockare personal items per altri membri
- Releasare lockdown di personal items

> Il **Leader** non deve chiedere il permesso a nessuno — ha automaticamente tutti i diritti.

### Come verifico di avere il permesso?

Prova ad aprire il Building Tool → azione #7 "City Management". Se apre il `Guild City Gump`, hai il permesso. Se vedi *"You do not have build permission in this territory"*, no.

---

## 💰 Step 3 — Verifica la treasury della stone

Ogni foundation costa gold, e l'oro viene **dedotto dalla treasury della stone**, non dal tuo bank. La gilda finanzia la citta'.

**Per verificare la treasury**:
1. Apri il Building Tool → azione #7 "City Management"
2. Nel `Guild City Gump` in alto vedi la riga "Treasury: X gold"

**Costi approssimativi del catalogo MVP**:

| Foundation | Dimensione | Costo |
|-----------|-----------|-------|
| Small Plot | 7 x 7 | 30.500 gold |
| Compact Plot | 8 x 8 | 39.000 gold |
| Standard Plot | 9 x 9 | 48.500 gold |
| Large Plot | 10 x 10 | 59.000 gold |
| Grand Plot | 12 x 12 | 83.000 gold |

> Se la treasury non basta, chiedi al Leader o al Guild Accountant di rifornirla. Puoi anche tu contribuire depositando gold tramite il flow di tasse/donazioni (vedi [Guild Accountant](#sectionWiki/Guild%20System/Guild%20Accountant)).

---

## 🔨 Step 4 — Procurati il Building Tool

Il **Building Tool** e' uno strumento craftable (o acquistabile da vendor) che ha la forma di un martello. Vedi la wiki [Building System](#sectionWiki/Guild%20System/Building%20System) per i dettagli sul craft.

Una volta ottenuto, **tienilo nel backpack**.

**Verifica veloce**: doubleclick sul tool nel backpack → deve aprirsi un menu con **9 azioni** (Place Static, Pick Up Static, Rotate Static, Repair Static, Info/Status, Attack Static, **City Management**, **Lock Down & Grant**, **Release Lockdown**).

Se il menu mostra solo 6 azioni, il tuo server/client ha una versione vecchia del tool — contatta un admin.

---

## 🏛️ Step 5 — Apri il menu City Management

Ora sei pronto per aprire il Guild City System:

1. **Entra fisicamente nel territorio** della tua gilda (cammina dentro i bounds)
2. Doubleclick sul **Building Tool** nel backpack
3. Nel menu clicca **azione #7 "City Management"**

Se tutto e' OK, si apre il **Guild City Gump** (grande gump 560x460 pixel).

### Cosa vedi nel Guild City Gump

- **Titolo**: "Guild City Management — [Nome Guild]"
- **Info panel**: Treasury corrente + Foundations count (es. "0/300")
- **Bottone grande**: **"Place New Foundation"**
- **Lista placed foundations**: vuota all'inizio (ancora nessuna piazzata), poi popolata man mano che costruisci
- **Bottone close** in alto a destra (X)

### Errori comuni in questo step

- *"You must be inside a guild territory to manage city buildings"* → non sei dentro il territorio, cammina nei bounds
- *"This territory has no owning guild"* → la stone non e' assegnata a una gilda, contatta un admin
- *"You do not have build permission in this territory"* → non sei in `BuildPermissions`, torna allo step 2

---

## 🏗️ Step 6 — Piazza la tua prima Foundation

Dal Guild City Gump:

1. Clicca **"Place New Foundation"** → si apre il `Guild City List Gump` (catalogo)
2. Scorri le 5 entries disponibili. Guarda costo, size, descrizione
3. Le entries **greyed out** sono troppo costose per la treasury attuale — scegli una che puoi permetterti
4. Clicca il bottone a sinistra dell'entry che vuoi (es. Small Plot 7x7)

Il tuo cursore diventa un **targeting cursor** e vedi **l'outline multi-tile** della foundation che seguira' il puntatore sul terreno (questo e' il MultiTarget nativo di UO — mostra in tempo reale dove la foundation verra' piazzata).

5. Muovi il cursore fino a trovare una **zona piatta e libera** dentro il territorio
6. **Clicca** per confermare il target

### Cosa succede in questo momento

Il server esegue una pipeline di check:
- Tutte le tile del footprint dentro il territorio? (check esatto del multi shape)
- La treasury copre il costo?
- Conta foundations < limite massimo?
- Terreno passabile sotto la foundation?
- Nessun static bloccante sopra il footprint?
- Borderelance clear (1 tile intorno libero)?

Se un check fallisce, vedi un messaggio di errore specifico. Se passa tutto:
- La **foundation viene spawnata** al centro del target
- La **treasury viene decrementata** del costo
- Messaggio: *"Foundation placed. Treasury: X gold remaining. Say 'I wish to customize this house' while standing on the foundation to enter design mode."*

Ora hai una **piattaforma vuota** nel territorio. Cammina verso di essa per il prossimo step.

### Errori comuni nel placement

- *"The foundation would extend outside the territory boundary"* → parte del footprint esce dal territorio. Centra meglio il target o scegli una foundation piu' piccola
- *"The terrain is impassable here"* → c'e' acqua/roccia/fosso sotto il target
- *"A static obstacle blocks the placement"* → un muro/albero/altro static blocca. Scegli un altro posto
- *"The territory has reached its maximum number of foundations"* → limite raggiunto (TerritoryTiles × 3). Espandi il territorio o demolisci altre foundation
- *"The guild treasury cannot cover the cost"* → treasury insufficiente, deposita gold

---

## 🎨 Step 7 — Entra in Design Mode

La foundation e' ora nel mondo ma e' **vuota** (solo piattaforma base). Per costruire la struttura:

1. **Cammina sulla foundation** (stai sopra la piattaforma)
2. Nota il **Sign** che appare al bordo della foundation — e' una house sign auto-generata
3. **Doubleclick** sul Sign → si apre il **HouseGumpAOS** (il gump standard di gestione house di UO)
4. Clicca **"Customize This House"** nel menu

Il sistema verifica che tu sia "owner" della foundation (per le guild city, questo significa che sei in `BuildPermissions`). Se OK:
- Eventuali player/pet sulla foundation vengono **temporaneamente spostati** (relocate)
- Il **design editor nativo del client UO si apre**

### Se il design editor non si apre

Possibili cause:
- Il tuo client non supporta il design editor (raro — MondainGate lo supporta out-of-box via packets 0xD7/0xD8)
- Non sei il "owner" tecnicamente (non in BuildPermissions o non in guild)
- Sei in combattimento (UO blocca la customizzazione durante il combat)

Se hai problemi, chiedi a un GM di verificare i permessi.

---

## 🖌️ Step 8 — Disegna la tua casa tile per tile

Il **Design Editor UO** e' un'interfaccia potente ma intuitiva. Se hai mai giocato a UO con le custom house, ti trovi subito a casa.

### Layout dell'editor

- **Vista dall'alto** della foundation con griglia di celle (una cella = un tile)
- **Palette di tile** su un lato, divisa per categorie:
  - **Walls** (muri) — centinaia di stili
  - **Doors** (porte) — metal, wood, barred, rattan
  - **Floors** (pavimenti) — legno, pietra, marmo, tappeti
  - **Roofs** (tetti) — tegole, ardesia, forme varie
  - **Stairs** (scale) — per collegare piani
  - **Windows** (finestre)
  - **Fixtures** (signpost, teleporter)
- **Bottoni di azione**:
  - **Commit** — applica il design come Current (visibile nel mondo)
  - **Revert** — scarta il design e torna al Current precedente
  - **Backup** — salva il design attuale come snapshot
  - **Restore Backup** — carica l'ultimo backup

### Workflow base

1. **Scegli una categoria** dalla palette (es. Walls)
2. **Seleziona un tile specifico** (es. un muro di pietra)
3. **Clicca una cella** della griglia → il muro viene piazzato in quella posizione
4. Per **rimuovere un tile**, usa lo strumento "remove" (di solito un bottone dedicato nell'editor)
5. Ripeti per floors, doors, roofs, ecc.

### Consigli pratici

- **Parti dal pavimento** — disegna prima il layout completo dei pavimenti (piano terra)
- **Poi le mura** — disegna i muri perimetrali, poi le divisioni interne
- **Le porte** dove servono accessi
- **Il tetto** per ultimo — copri le stanze con pezzi di tetto a pendenza
- **Finestre** dove vuoi i punti luce
- **Stairs** se vuoi piani multipli (necessario per foundations multi-story)

### Backup frequenti

**Importante**: usa spesso il bottone **Backup**. Se fai errori o il design non ti piace, puoi tornare all'ultimo backup senza perdere tutto il lavoro. I backup si possono usare come "save slots" intermedi durante il design.

### Tempo necessario

- **Foundation piccola (7x7)**: 10-30 minuti per un design semplice
- **Foundation media (9x9-10x10)**: 30-60 minuti
- **Foundation grande (12x12)**: 1-2 ore o piu' per design complessi multi-piano

Non preoccuparti se esci dall'editor prima di committare — il Design state resta salvato e puoi rientrare a finirlo piu' tardi. Solo il Commit rende il design permanente.

---

## ✅ Step 9 — Committa il design e ispeziona il risultato

Quando sei soddisfatto del design:

1. Clicca **Commit** nell'editor
2. L'editor si chiude, il tuo character torna sulla foundation
3. **La struttura e' ora visibile nel mondo**: muri solidi, porte che si aprono/chiudono, pavimento, tetto
4. Gli eventuali entity che erano stati spostati vengono **ripristinati** alla loro posizione originale

### Verifica il risultato

- **Cammina** nella tua nuova struttura
- **Apri/chiudi** le porte cliccandole
- **Testa i pavimenti** sul piano superiore (se hai messo scale)
- **Ispeziona la foundation** dal Guild City Gump → Info button → mostra il foundation info gump (multiID, cost, placedBy, placedAt, customizer, ecc.)

### Se vuoi modificare il design

Puoi **rientrare in design mode** quante volte vuoi:
1. Doubleclick sul Sign
2. HouseGumpAOS → "Customize This House"
3. Modifica il Design state
4. Commit quando vuoi

Il Design state precedente e' gia' caricato, quindi parti dal punto dove hai lasciato.

---

## 📦 Step 10 — Lockdown del tuo primo baule personale

Ora che hai la casa, vuoi mettere un **baule personale** al suo interno che solo tu (o i tuoi friends) possano aprire. Ecco come:

### Preparazione

1. **Crafta un WoodenBox** al Carpenter (skill Carpentry) oppure compra un baule da un vendor UO standard (blacksmith per MetalChest, ecc.)
2. Assicurati che il baule sia **nel tuo backpack**
3. Cammina dentro la tua foundation (o ovunque dentro il territorio della gilda)
4. **Droppa il baule a terra** (drag-and-drop dal backpack al ground)

### Richiedi il Lock Down al Builder

Per lockare il baule e assegnarlo a te, serve un **builder** (player con `BuildPermissions`) — puoi essere tu stesso se hai i permessi, oppure devi chiedere a un altro builder della gilda.

Se sei tu il builder:
1. Apri Building Tool → azione #8 **"Lock Down & Grant"**
2. Primo prompt: *"Target the item on the ground to lock down."* → clicca il tuo WoodenBox
3. Secondo prompt: *"Target the guild member to grant ownership of this item."* → clicca te stesso
4. Il sistema verifica:
   - L'item e' nel territorio? ✅
   - Il target e' un guild member? ✅
   - Hai abbastanza slot (25k tax credit per slot)? **Verifica questo** — se non hai credito in TaxAccount, il sistema rifiuta con *"X has reached their chest slot limit (25k tax credit per slot)."*

### Cosa succede al baule

Se il check passa:
- Il baule diventa **non movable** (`Movable = false`)
- Ha il flag `IsLockedDown = true`
- Un record viene aggiunto a `stone.PersonalItems` con te come OwnerSerial
- Messaggio: *"Item locked down and granted to [il tuo nome]."*
- Se eri offline quando qualcuno fa il grant: al login vedi *"You have been granted ownership of a locked-down item in [guild name]'s territory."*

### Testa l'accesso

- **Tu doubleclick sul baule** → apre OK (sei l'owner)
- **Un altro player non-membro** doubleclick → apre OK se non c'e' record (non locked) oppure **denied** se il baule e' locked con te come owner
- **Un altro guild member NON nella tua access list** → denied
- **Tu metti dentro oggetti** (drag & drop) → funziona normalmente
- **Un altro player prova a prendere oggetti dal box** → denied (CheckAccessibility intercetta)

### Non hai tax credit?

Il limite di bauli per membro e' **dinamico**: ogni 25.000 gold di credito che hai nel tuo [GuildTaxAccount](#sectionWiki/Guild%20System/Guild%20Accountant) = +1 slot baule. Se non hai credito:

1. **Paga piu' tasse** alla gilda (credito aumenta con i pagamenti)
2. Oppure aspetta che il Leader ti accrediti qualcosa
3. Il Leader puo' verificare il tuo credito nel management gump → tab "Taxes"

**Esempio**:
- 0 credit → 0 slot (non puoi avere bauli personali locked)
- 25.000 credit → 1 slot
- 100.000 credit → 4 slot
- 250.000 credit → 10 slot

> **Ricorda**: il check e' un **watermark**. Una volta raggiunto il credit e locked i bauli, quelli restano anche se il credit scende dopo. Per aggiungere un nuovo baule devi riarrivare alla nuova soglia.

---

## 👥 Gestione access list

Puoi condividere l'accesso al tuo baule con altri guild member:

### Aggiungere un friend

1. Sei il proprietario del baule
2. Apri Building Tool → azione #5 **"Info / Status"**
3. Targetta il tuo baule locked
4. Si apre il **Guild Personal Item Gump** (solo tu lo vedi — gli altri vedono solo un label read-only)
5. Nel gump vedi:
   - Info del baule (nome, location, owner=tu, tempo locked)
   - **Lista access members** (inizialmente vuota)
6. Clicca **"Add Access Member"**
7. Targetta il guild member che vuoi aggiungere
8. Il sistema verifica che sia un player, nella tua guild, non gia' nella lista
9. Se OK, viene aggiunto → il gump si aggiorna mostrando il nuovo nome

Da questo momento, il nuovo friend puo' **aprire il tuo baule** e interagirci.

### Rimuovere un friend

Nel gump, clicca il **bottone rosso (X)** accanto al nome del member → viene rimosso.

### Quanti friends posso avere?

Non c'e' un limite hard sulla access list (a differenza del watermark slot che limita i bauli stessi). Puoi aggiungere tanti friends quanti vuoi, entro limiti di ragionevolezza (il gump mostra i primi 10 nella lista).

### Cosa succede se un friend lascia la gilda?

Il friend perde automaticamente l'accesso (il check verifica che sia `in OwnerGuild` al momento dell'access). Il suo nome rimane nella lista finche' non lo rimuovi tu, ma l'access e' revocato automaticamente.

---

## ⚠️ Errori comuni e troubleshooting

### "You do not have build permission in this territory"
- Non sei in `BuildPermissions` della stone
- Chiedi al Leader di aggiungerti tramite management gump → tab Building

### "The guild treasury cannot cover the cost"
- La treasury della stone non ha gold sufficienti
- Deposita gold (paga tasse, donazioni) o chiedi al Leader di rifornirla

### "The foundation would extend outside the territory boundary"
- Parte del footprint e' fuori dai TerritoryRects
- Scegli una posizione piu' al centro, o una foundation piu' piccola
- Oppure espandi il territorio (Expand tab del management gump) se hai budget

### "A static obstacle blocks the placement"
- Un muro di roccia, albero, altro foundation, o BuildableStatic impassable e' nel footprint
- Scegli un altro posto o rimuovi gli ostacoli prima

### "The territory has reached its maximum number of foundations"
- Max foundations = `TerritoryTiles × 3`
- Espandi il territorio o demolisci altre foundation

### "This item is already locked down"
- Stai cercando di lockare un baule che e' gia' nel registro personal items
- Usa Release Lockdown prima, poi rilock

### "X has reached their chest slot limit (25k tax credit per slot)"
- Il target player non ha abbastanza credito TaxAccount per un altro slot baule
- Aspetta che accumuli credit, o scegli un altro target player

### "Item not in guild territory"
- L'item che vuoi lockare non e' dentro i TerritoryRects della stone
- Muovi l'item dentro il territorio prima di lockare

### Non riesci a entrare nel design editor
- Verifica di essere sopra la foundation
- Verifica di essere in `BuildPermissions` (il sistema considera te come "owner")
- Non essere in combattimento (UO blocca la customizzazione in combat)

### Il design editor non mostra la palette di tiles
- Possibile issue del client — riavvialo
- Se il problema persiste, contatta un admin (potrebbe essere un mismatch di file MUL)

### Dopo aver committato, il design non appare
- Il design dovrebbe essere visibile immediatamente al commit
- Se non si vede: doubleclick il sign e prova "Restore Backup" per caricare l'ultimo state valido
- Se tutto fallisce, contatta un admin per fix manuale

---

## 🚀 Next steps

Ora che hai imparato le basi, puoi:

- **Espandere la tua citta'**: piazza piu' foundation per diversi edifici (guild hall, barracks, workshop, case dei membri)
- **Collaborare con altri builder**: altri player con `BuildPermissions` possono aggiungere foundation e personal items in parallelo
- **Usare anche il [Building System](#sectionWiki/Guild%20System/Building%20System)**: piazza BuildableStatic per decor, mura di connessione, giardini, dettagli fini tra una foundation e l'altra
- **Seguire il credito TaxAccount**: paga tasse regolarmente per sbloccare piu' slot baule
- **Pianificare il layout della citta'**: discuti con gli altri builder dove mettere ogni edificio prima di piazzare

### Risorse aggiuntive

- [Guild City System](#sectionWiki/Guild%20System/Guild%20City%20System) — reference tecnica completa del sistema
- [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) — gestione della stone e del territorio
- [Building System](#sectionWiki/Guild%20System/Building%20System) — sistema tile-per-tile per decor
- [Guild Accountant](#sectionWiki/Guild%20System/Guild%20Accountant) — gestione tasse e TaxAccount credit

**Buona costruzione! 🏰**
