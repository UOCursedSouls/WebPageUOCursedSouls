# 🏰 Guild Territory Stone
*La pietra fondamentale per reclamare e gestire un territorio di gilda*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Come Piazzare la Stone](#come-piazzare-la-stone)
- [Cattura del Territorio](#cattura-del-territorio)
- [Gestione del Territorio](#gestione-del-territorio)
- [Sistema di Sicurezza](#sistema-di-sicurezza)
- [Espansione del Territorio](#espansione-del-territorio)
- [Vendor e NPC](#vendor-e-npc)
- [Barriere Magiche](#barriere-magiche)
- [Tasse Giornaliere](#tasse-giornaliere)
- [Comandi e Interazioni](#comandi-e-interazioni)
- [FAQ](#faq)

---

## 📜 Panoramica

La **Guild Territory Stone** e un oggetto speciale che permette alle gilde di reclamare, proteggere e gestire un territorio nel mondo di gioco. Una volta piazzata e conquistata, la stone diventa il cuore del tuo insediamento di gilda.

> **Peso**: 500 stones
> **Tipo**: Item unico per gilda
> **Accesso gestione**: Solo il leader della gilda (o GM)

### Cosa puoi fare con un territorio:
- Proteggere un'area con guardie armate
- Piazzare vendor NPC (banchiere, fabbro, mago, ecc.)
- Controllare chi puo entrare e cosa puo fare
- Espandere i confini comprando nuovi tile
- Attivare barriere magiche (anti-recall, anti-gate, anti-field)
- Riscuotere tasse giornaliere dai membri della gilda

---

## 🗺️ Come Piazzare la Stone

Per piazzare una Guild Territory Stone, devi trovare un luogo adatto. La stone analizzera automaticamente i dintorni quando la usi.

### Requisiti del luogo:

| Requisito | Dettaglio |
|-----------|----------|
| **Mappa valida** | Deve essere su una mappa di gioco (non interna) |
| **Lontano da citta** | Almeno 15 tile da qualsiasi regione (dungeon, città, aree guardate), vedi [Regioni del mondo](#sectionWiki/Meccaniche/Regioni%20del%20mondo) |
| **Lontano da case** | Non sovrapposta a case di giocatori o le loro regioni |
| **Lontano da altre stone** | Distanza minima = tuo raggio + altro raggio + 10 tile margine |
| **A terra** | Non dentro un container |

### Feedback di piazzamento

Quando fai doppio click sulla stone, il tuo personaggio esamina il luogo e ti dice:

- *"This is a good spot..."* — Il luogo e valido
- *"There are protected lands too close..."* — Troppo vicino a una regione
- *"I can see another guild's claim..."* — Troppo vicino a un'altra stone (con direzione da seguire)
- *"This place feels wrong..."* — Sei dentro una regione protetta

> 💡 Il messaggio indica anche in quale **direzione cardinale** spostarti per trovare una posizione valida.

---

## ⚔️ Cattura del Territorio

Una volta piazzata la stone in un luogo valido, la cattura inizia automaticamente.

### Come funziona:

1. La stone deve essere **a terra** e in un **luogo valido**
2. Uno o piu membri della gilda devono restare vicini alla stone (entro il raggio di cattura)
3. La barra di progresso avanza ogni tick (configurabile, default 2 secondi)
4. Se nessuno e presente, il progresso diminuisce lentamente
5. Se membri di **gilde diverse** sono vicini, la stone diventa **contestata** e il progresso si ferma
6. Quando il progresso raggiunge il 100%, il territorio e conquistato!

### Parametri:

| Parametro | Default | Descrizione |
|-----------|---------|-------------|
| **Tempo cattura** | 10 secondi | Tempo totale per completare la cattura |
| **Tick rate** | 2 secondi | Frequenza di aggiornamento del progresso |
| **Raggio cattura** | 5 tile | Distanza massima dalla stone per contribuire |

---

## 🏛️ Gestione del Territorio

Dopo la cattura, fai doppio click sulla stone per aprire il **pannello di gestione**. Il pannello ha 7 pagine navigate dai bottoni in basso.

### Pagina Principale (Main)

- **Territory Status**: Mostra la dimensione del territorio e i giocatori attivi nell'area
- **Allow Housing**: Abilita/disabilita la costruzione di case nel territorio
- **Anti-Magic Field**: Attiva un campo anti-magia nell'area
- **Daily Tax**: Imposta la tassa giornaliera per i membri (0-10,000 gold)
- **Guild Accountant**: Piazza o sposta l'NPC esattore delle tasse
- **Treasury**: Ritira gold dalla cassa del territorio
- **Destroy Stone**: Distrugge la stone (restituisce il gold al leader)

> ⚠️ **Attenzione**: Distruggere la stone rimuove tutto — guardie, vendor, barriere, regione.

---

## 🛡️ Sistema di Sicurezza

La pagina **Security** controlla le guardie e le regole di combattimento.

### Guardie

Le guardie sono creature vere (guerriero, arciere, mago) con un **posto di guardia** (home): vedono i nemici da sole, camminano verso di loro e combattono dentro il territorio.

**Chi attaccano** (solo dentro il territorio):

- **Criminali e murderer** (rossi) che si trovano nel territorio
- **Chi attacca per primo un membro della gilda proprietaria o di una gilda alleata**, animali domestici compresi: colpire il pet di un membro conta come colpire il membro
- **Chi colpisce una guardia** del territorio (anche un non membro, con arco, magie o pet): la guardia colpita lo combatte; vedi *Attaccare una guardia*
- Chiunque puo chiamare le guardie gridando **"Guards!"** nel territorio: le guardie nel raggio di percezione attaccano chi ha aggredito il chiamante, se la regola dice di combattere

**Chi non attaccano mai**: i membri della gilda proprietaria e delle gilde alleate, qualunque sia la loro notorieta. Uno scontro tra due di loro non attira nessuna guardia.

**Confine**: le guardie non escono mai dal territorio. Se il bersaglio esce, non lo seguono e tornano al loro posto. Solo arcieri e maghi possono colpire un aggressore che sta fuori dal confine, sparando da dentro; i guerrieri restano dentro. Vale anche per chi, da fuori, ha colpito una guardia: non si possono uccidere le guardie dal confine senza rischio.

**Fuga**: le guardie **scappano** dai mostri e dai membri di gilde in guerra con la gilda proprietaria (anche se sono criminali o stanno attaccando un membro), gridando avvisi in inglese, al massimo uno ogni 30 secondi per guardia:

- *"Beware, flee!"*, *"Get to safety!"*, *"Monsters have invaded the territory!"*, *"We are at war, barricade yourselves!"*, *"We are being invaded!"*

Mentre scappano le guardie sono in **war mode**; tornano in pace una volta al loro posto. Scappano finche la minaccia non e piu nel loro raggio di percezione, poi tornano al posto. I mostri aggressivi attaccano le guardie come attaccherebbero un giocatore. Un mostro e una creatura non controllata e non evocata che attacca da sola; animali pacifici, vendor e creature che attaccano solo il male (unicorni, pixie) non contano. I pet e le evocazioni sono giudicati come il loro padrone. Le gilde di tipo Order e Chaos contano come in guerra.

**Membro contro innocente**: se un membro (della gilda proprietaria o di una alleata) attacca per primo un innocente che si difende, le guardie **restano fuori dallo scontro** e, quando vedono quel membro, dicono parole di disgusto (in inglese, al massimo una ogni 60 secondi per guardia e per membro), per esempio *"Shame on thee, striking an innocent!"* o *"Thou disgracest thy guild, coward."*

**Innocente che chiama le guardie**: se un innocente attaccato per primo da un membro o da un alleato grida **"Guards!"**, le guardie non combattono comunque, ma una guardia nel raggio risponde con una frase di scuse in inglese (al massimo una ogni 30 secondi per guardia), per esempio *"We are sorry, but we cannot raise arms against our own."*, *"Forgive us, stranger, we serve this guild."* o *"Our oath binds us; we cannot help thee."* Le scuse vanno solo all'innocente, mai a un compagno di gilda o a un murderer attaccato dal membro.

**Attaccare una guardia**: un membro o un alleato puo attaccare le guardie del proprio territorio. La guardia attaccata si difende solo da quell'attaccante (le altre non intervengono) e smette quando l'attaccante smette o esce dal territorio. Anche una guardia colpita da un mostro o da un membro di una gilda in guerra combatte contro quell'attaccante (le altre continuano a scappare da lui): guerrieri, arcieri e maghi allo stesso modo, e arcieri e maghi sparano da dentro se l'attaccante esce dal confine. Ucciderla costa il normale karma negativo di ModernUO (circa -65, meno se il karma e gia basso), ma non da murder count; la guardia lascia cadere il suo equipaggiamento e rinasce.

**Guard Strength**: il fattore e `0,5 + 0,1 x Guard Strength`: 1 = 0,6x, 5 = valori base, 10 = 1,5x. Moltiplica stats, hit points e skill di ogni tipo di guardia (guerriero, arciere e mago restano diversi); le skill non superano 120. Cambiare Guard Strength aggiorna subito le guardie presenti e quelle nuove.

| Opzione | Descrizione |
|---------|-------------|
| **Spawn Guards** | Abilita/disabilita il sistema guardie |
| **Guard Count** | Numero massimo di guardie (0-15) |
| **Guard Strength** | Potenza delle guardie (1-10, fattore 0,5 + 0,1 x valore su stats e skill) |

### Tipi di guardie:

| Tipo | Stile | Specialita |
|------|-------|-----------|
| **Warrior Guard** | Melee | Combattimento corpo a corpo con Halberd |
| **Archer Guard** | Ranged | Arciere a cavallo con arco |
| **Mage Guard** | Caster | Lancia Lightning, Paralyze, FlameStrike |

Valori base a Guard Strength 5 (Str/Dex/Int, hit points, skill):

| Tipo | Str/Dex/Int | Hit points | Skill |
|------|-------------|-----------|-------|
| **Warrior Guard** | 100/100/25 | 150 | Swords, Tactics, Anatomy, Resisting Spells 80 |
| **Archer Guard** | 90/110/25 | 120 | Archery, Tactics, Anatomy, Resisting Spells 80 |
| **Mage Guard** | 70/50/120 | 100 | Magery, Evaluating Intelligence, Meditation, Resisting Spells 80 |

### Regole del territorio:

| Regola | Descrizione |
|--------|-------------|
| **Allow Non-Guild Members** | Permetti l'ingresso ai non membri |
| **Allow Combat** | Permetti il combattimento nel territorio |
| **Allow Spellcasting** | Permetti l'uso di magie |

---

## 📐 Espansione del Territorio

La pagina **Expand** ti permette di modificare la forma del tuo territorio tile per tile.

### Territorio iniziale

Quando viene conquistata, la stone crea un territorio di **11x11 tile** centrato sulla stone (raggio 5 in ogni direzione).

### Come espandere:

1. Clicca **"Start editing"** per entrare in modalita edit
2. Solo sul **tuo** schermo il terreno si colora (nessun oggetto nel mondo, gli altri giocatori non vedono nulla):
   - 🟢 **Verde**: tile del territorio attuale (invariati)
   - 🟡 **Giallo**: tile nuovi che stai aggiungendo
   - 🔴 **Rosso**: tile che stai rimuovendo
3. Usa **"Add tile"** per selezionare nuovi tile adiacenti
4. Usa **"Remove tile"** per rimuovere tile (non dalla core area)
5. Clicca **"Apply Draft"** per confermare le modifiche (costa gold!)
6. Oppure **"Pause edit"** per mettere in pausa senza perdere le modifiche

### Pausa e ripresa:

- **Pause Edit**: Toglie il colore dal terreno ma conserva le modifiche. Puoi tornare e riprendere quando vuoi.
- Il colore sparisce anche quando l'editing finisce.
- **Cancel Edit**: Scarta TUTTE le modifiche e torna al territorio originale.
- Se ti allontani troppo (10+ tile dal confine), l'editing va automaticamente in pausa.

### Costo espansione:

Ogni tile ha un costo crescente:

```
Costo per tile = Costo base + (tile gia posseduti * Costo incrementale)
```

| Parametro | Default |
|-----------|---------|
| **Costo base** | 7,000 gold per tile |
| **Costo incrementale** | +50 gold per ogni tile gia posseduto |
| **Max tile** | 800 |
| **Max raggio** | 10 tile dal centro |

> 💡 Esempio: Se hai 121 tile (11x11) e vuoi aggiungerne 8, il costo sara circa 106,600 gold perche ogni tile successivo costa di piu.

### Regole della forma:

- I tile devono essere **adiacenti** (4 direzioni, no diagonale)
- Il territorio deve restare **contiguo** (no isole separate)
- Deve contenere la **core area** (11x11 attorno alla stone)
- La forma non puo essere troppo **stretta** (no righe da 1 tile)
- Minimo **9 tile** totali

### Conferma definitiva:

Il bottone **"Confirm territory"** blocca la forma definitivamente. Dopo la conferma:
- La forma **non puo piu essere modificata**
- Solo un GM puo sbloccarla
- Fai questo solo quando sei sicuro della forma finale

---

## 🏪 Vendor e NPC

La pagina **Vendors** ti permette di piazzare NPC commercianti nel territorio.

### Vendor disponibili:

| Vendor | Servizio |
|--------|----------|
| Banker | Servizi bancari |
| Blacksmith | Riparazioni e vendita armi/armature |
| Provisioner | Oggetti generici |
| Mage | Reagenti e scroll |
| Armorer | Armature |
| Animal Trainer | Addestramento animali |
| Alchemist | Pozioni |
| Tailor | Stoffe e vestiti |
| Carpenter | Mobili e oggetti in legno |
| Tinker | Attrezzi |
| Bowyer | Archi e frecce |
| Butcher | Carne e cibo |
| Bard | Strumenti musicali |
| Herbalist | Erbe e ingredienti |

### Gestione vendor:

- **Add**: Piazza un nuovo vendor (costa gold dalla treasury)
- **Move**: Sposta il vendor alla tua posizione attuale
- **Delete**: Rimuove il vendor e il suo spawner
- **Max vendor**: 15 per territorio

---

## 🔮 Barriere Magiche

La pagina **BarielField** controlla le barriere magiche del territorio. Richiede una **Crystal Mana Sphere** collegata.

### Setup:

1. Piazza una [Crystal Mana Sphere](#sectionWiki/Guild%20System/Crystal%20Mana%20Sphere) nel territorio
2. Dalla pagina BarielField, clicca **"Link Crystal Mana Sphere"**
3. Seleziona la sfera — verra collegata alla stone e non sara piu spostabile

### Barriere disponibili:

| Barriera | Costo Mana/tick | Effetto |
|----------|----------------|---------|
| **Territory Mana Drain** | Variabile | Drena mana dai player nel territorio per caricare la sfera |
| **Disable Recall** | 5/tick | Blocca Recall e Mark nel territorio |
| **Disable Gate Travel** | 8/tick | Blocca Gate Travel e Sacred Journey |
| **Disable Magic Fields** | 10/tick | Blocca Fire Field, Poison Field, Paralyze Field, Wall of Stone |

### Come funziona il mana:

- Le barriere **consumano mana** dalla Crystal Mana Sphere ogni 5 secondi
- Se il mana finisce, le barriere si **disattivano automaticamente**
- Il **Territory Mana Drain** ricarica la sfera drenando mana dai player nel territorio (distribuito equamente)

### Controllo gate individuali:

Se ci sono Moongate o Teleporter nel territorio, puoi controllare ciascuno individualmente dalla pagina BarielField.

---

## 💰 Tasse Giornaliere

La pagina **Taxes** mostra lo stato delle tasse dei membri della gilda.

### Come funzionano:

1. Il leader imposta una **tassa giornaliera** (es: 100 gold/giorno)
2. Ogni giorno, il sistema addebita la tassa al bilancio di ogni membro
3. I membri **pagano** portando gold al [Guild Accountant](#sectionWiki/Guild%20System/Guild%20Accountant) o droppandolo sulla stone
4. Il gold va nella **treasury** del territorio

### Informazioni visualizzate:

| Colonna | Descrizione |
|---------|-------------|
| **Nome** | Nome del personaggio e stato (Member/Left) |
| **Bilancio** | DEBT (debito), CREDIT (credito), o BAL 0 |
| **Giorni in debito** | Da quanto tempo il membro e in negativo |
| **Ultimo pagamento** | Data dell'ultimo pagamento |

### Ordinamento:

Puoi ordinare la lista per:
- **Debt**: Chi deve di piu in cima
- **Name**: Ordine alfabetico
- **Last Pay**: Chi ha pagato piu di recente

---

## ⌨️ Comandi e Interazioni

| Azione | Come |
|--------|------|
| **Aprire il pannello** | Doppio click sulla stone (solo leader gilda o GM) |
| **Chiamare le guardie** | Dire "Guards!" nella regione del territorio |
| **Pagare le tasse** | Trascinare gold sul Guild Accountant |
| **Controllare il bilancio** | Dire "balance" o "status" vicino al Guild Accountant |
| **Ritirare credito** | Dire "withdraw" o "withdraw 1000" al Guild Accountant |

---

## ❓ FAQ

**D: Posso spostare la stone dopo averla piazzata?**
R: No. Una volta attivata, la stone e fissa. Puoi distruggerla e piazzarne una nuova.

**D: Cosa succede se distruggo la stone?**
R: Tutto viene rimosso (guardie, vendor, barriere, regione). Il gold nella treasury viene restituito al leader della gilda.

**D: Posso avere piu di un territorio?**
R: Si, ma le stone devono rispettare le distanze minime tra loro.

**D: Le guardie attaccano i miei alleati?**
R: No. Membri della gilda e alleati non sono mai bersagli delle guardie, qualunque sia la loro notorieta. Le guardie attaccano solo criminali, murderer e chi attacca per primo un membro o un alleato.

**D: Le guardie si teleportano o escono dal territorio?**
R: No. Camminano, si fermano al confine e tornano al loro posto.

**D: Cosa fanno le guardie contro mostri o gilde in guerra?**
R: Scappano in war mode e gridano avvisi in inglese. Se un mostro o un membro di una gilda in guerra colpisce una guardia, quella guardia lo combatte.

**D: Cosa succede se il mana della sfera finisce?**
R: Le barriere magiche si disattivano automaticamente. Le guardie e i vendor continuano a funzionare normalmente.

**D: Posso cambiare la forma del territorio dopo averla confermata?**
R: No. La conferma (Officialize) e permanente. Solo un GM puo sbloccarla.

---

*Ultimo aggiornamento: Marzo 2026*
*Vedi anche: [Crystal Mana Sphere](#sectionWiki/Guild%20System/Crystal%20Mana%20Sphere) | [Guild Accountant](#sectionWiki/Guild%20System/Guild%20Accountant) | [Regioni del mondo](#sectionWiki/Meccaniche/Regioni%20del%20mondo)*
